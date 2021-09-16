const { tokenize } = require('../variable-tokenizer')

function analyze(identifier) {
    const identifierTokens = tokenize(identifier.name);

    return identifierTokens.length < 5
        ? null
        : {
            message: `Name ${identifier.name} is ${identifierTokens.length} words long, perhaps a rename or context change would help`,
            node: identifier,
            location: identifier.loc
        };
}

module.exports = {
    analyze
};