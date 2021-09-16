const { readFileSync } = require('fs');
const path = require('path');

function readFileSource(basePath, filePath) {
    return readFileSync(path.join(basePath, filePath), { encoding: 'utf8' });
}

module.exports = {
    readFileSource
};