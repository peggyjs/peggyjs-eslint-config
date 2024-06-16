"use strict";
const { builtinRules } = require("eslint/use-at-your-own-risk");
const mochaPlugin = require("eslint-plugin-mocha");
const stylisticPlugin = require("@stylistic/eslint-plugin");
const tsPlugin = require("typescript-eslint").plugin;

function rename(rules, prefix) {
  return Object.fromEntries(
    Object.entries(rules).map(([k, v]) => [`${prefix}/${k}`, v])
  );
}

const rulesByLib = {
  "@": Object.fromEntries(builtinRules.entries()),
  "mocha": rename(mochaPlugin.rules, "mocha"),
  "@stylistic": rename(stylisticPlugin.rules, "@stylistic"),
  "@typescript-eslint": rename(tsPlugin.rules, "@typescript-eslint"),
};
const rules = Object.assign({}, ...Object.values(rulesByLib));

const meta = {
  type: "layout",
  fixable: "code",
  docs: {
    description: "Sort eslint rules",
    category: "Stylistic Issues",
    recommended: false,
    url: "https://github.com/hildjj/ctoaf-eslint-config/tree/main/rules",
  },
};

module.exports = {
  rules: {
    "sort-rules": {
      meta,
      create(context) {
        const src = context.getSourceCode();
        return {
          'ObjectExpression[parent.key.name="rules"]': node => {
            const comments = src.getCommentsInside(node);
            const check = [];
            const lines = comments.reduce((t, c) => {
              let match = c.value.match(/.*\[(?<title>[^\]]+)\].*/);
              if (match) {
                t.push({
                  name: match.groups.title,
                  line: c.loc.start.line,
                  range: c.range,
                  rules: [],
                });
              }
              match = c.value.match(/Check:\s+(?<libs>[^ ,\r\n]+(?:\s*,\s*[^ ,\r\n]+)*)/);
              if (match) {
                check.push(...match.groups.libs.split(/\s*,\s*/));
              }
              return t;
            }, []);

            const possibleRules = new Set();
            for (const lib of check) {
              for (const [name, value] of Object.entries(rulesByLib[lib])) {
                if (!value.meta || !value.meta.deprecated) {
                  possibleRules.add(name);
                }
              }
            }

            for (const p of node.properties) {
              const key = p.key.name || p.key.value;
              const kr = rules[key];
              if (!kr) {
                context.report({
                  message: 'Unknown rule "{{ key }}"',
                  node: p.key,
                  data: {
                    key,
                  },
                });
                continue;
              }
              possibleRules.delete(key);
              if (kr.meta && kr.meta.deprecated) {
                context.report({
                  message: 'Rule "{{ key }}" is deprecated',
                  node: p.key,
                  data: {
                    key,
                  },
                });
              }
              const keyLine = p.key.loc.start.line;
              const last = lines.reduce(
                (t, { line }, ci) => ((keyLine >= line) ? ci : t),
                -1
              );
              if (last === -1) {
                context.report({
                  message: "{{ key }} before any section",
                  node: p.key,
                  data: {
                    key,
                  },
                });
              }
              lines[last].rules.push(p);
            }

            for (const key of possibleRules) {
              context.report({
                message: "{{ key }} unused",
                node,
                data: {
                  key,
                },
              });
            }

            for (const comment of lines) {
              let prev = "";
              for (const p of comment.rules) {
                const key = p.key.name || p.key.value;
                if (key.localeCompare(prev) !== 1) {
                  context.report({
                    message: "{{ key }} out of order",
                    node: p.key,
                    data: {
                      key,
                    },
                  });
                }
                prev = key;
              }
            }
          },
        };
      },
    },
  },
};
