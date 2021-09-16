function buildTokenUpdater(tokens) {
    return function (token) {
        tokens.push(token.toLowerCase());
    }
}

function tokenize(variableName) {
    let tokens = [];
    let currentToken = '';

    const updateTokens = buildTokenUpdater(tokens);

    variableName.split('').forEach(function (character){
        if(character !== character.toLowerCase()) {
            updateTokens(currentToken);
            currentToken = character;
        } else {
            currentToken += character;
        }
    });

    updateTokens(currentToken);

    return tokens;
}

module.exports = {
    tokenize
};