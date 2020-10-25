
const sha1 = require('sha1');

const severityMap = {
  error: 'major',
  warning: 'minor',
};

// eslint-disable-next-line max-params
const createItem = (path, line, column, rule, description, severity) => {
  const parts = [
    path,
    line,
    column,
    rule,
  ];

  return {
    categories: [
      'Style',
    ],
    // eslint-disable-next-line camelcase
    check_name: rule,
    description,
    fingerprint: sha1(parts.join('::')),
    location: {
      lines: {
        begin: line,
        end: line,
      },
      path,
    },
    severity,
    type: 'issue',
  };
};

module.exports = (results) => {
  const items = [];

  if (!Array.isArray(results)) {
    return '[]';
  }

  results.forEach(({source, warnings, parseErrors}) => {
    if (warnings) {
      warnings.forEach(({line, column, rule, text, severity}) => {
        items.push(createItem(source, line, column, rule, text, severityMap[severity]));
      });
    }

    if (parseErrors) {
      parseErrors.forEach(({line, column, text}) => {
        items.push(createItem(source, line, column, 'parse-error', text, 'blocker'));
      });
    }
  });

  return JSON.stringify(items);
};
