
const test = require('ava');
const formatter = require('..');

test('empty results', (t) => t.is(formatter([]), '[]'));
test('invalid data', (t) => t.is(formatter('foo'), '[]'));

[
  'basic-data',
  'parse-error',
].forEach((name) => {
  test('fixture run: ' + name, (t) => {
    const data = require('./fixtures/' + name + '/data.json');
    const expected = require('./fixtures/' + name + '/expected.json');
    const results = formatter(data);

    t.is(typeof results, 'string');
    t.deepEqual(JSON.parse(results), expected);
  });
});
