const { assert } = require('chai');

const { readFileSource } = require('../utils/source-reader');
const { parse } = require('../../modules/parser/parser');

const { analyze } = require('../../modules/analyzers/name-length-analyzer');


describe('Name length analyzer', function () {
    it('returns null if name is 4 or fewer "words"', function () {
        const fixtureText = readFileSource(__dirname, 'fixtures/test-fixture.js');
        const parsedSource = parse(fixtureText);

        const declarator = parsedSource.body[0].declarations[0];
        const analyzedResult = analyze(declarator.id, declarator);

        assert.equal(analyzedResult, null);
    });
});