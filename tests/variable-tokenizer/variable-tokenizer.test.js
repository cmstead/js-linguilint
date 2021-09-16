const { assert } = require('chai');
const { tokenize } = require('../../modules/variable-tokenizer');

describe('Variable tokenizer', function () {
    it('returns an array of a single string with an all-lower-case variable name', function () {
        const variableName = 'testing';
        const variableTokens = [variableName];

        const resultTokens = tokenize(variableName);

        assert.deepEqual(resultTokens, variableTokens);
    });

    it('returns an array of tokens for a camel-cased variable', function () {
        const variableName = 'thisIsATest';
        const variableTokens = ['this', 'is', 'a', 'test'];

        const resultTokens = tokenize(variableName);

        assert.deepEqual(variableTokens, resultTokens);
    });

    it('returns an array containing an acronym', function () {
        const variableName = 'SCUBAIsAnAcronym';
        const variableTokens = ['scuba', 'is', 'an', 'acronym'];

        const resultTokens = tokenize(variableName);

        assert.deepEqual(variableTokens, resultTokens);
    });
});