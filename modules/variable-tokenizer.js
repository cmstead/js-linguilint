function buildTokenUpdater(tokens) {
    return function (token) {
        if (token.trim() !== '') {
            tokens.push(token.toLowerCase());
        }
    }
}

function lastChar(token) {
    const lastIndex = token.length - 1;
    return token.charAt(lastIndex);
}

function isCaptialized(character) {
    return character !== character.toLowerCase()
}

function tokenize(variableName) {
    let tokens = [];
    let currentToken = '';

    const updateTokens = buildTokenUpdater(tokens);

    variableName.split('').forEach(function (character, index) {
        if (character === '_') {
            updateTokens(currentToken);
            currentToken = '';
        } else if (
            isCaptialized(character) 
            && (!isCaptialized(lastChar(currentToken))
            || !isCaptialized(variableName[index + 1]))
            ) {
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