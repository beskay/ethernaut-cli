const assert = require('assert');

describe('oz', function () {
  it('has an "oz" scope', async function () {
    assert.notEqual(hre.scopes['oz'], undefined);
  });
});