'use strict';

var argv = require('yargs').argv
var _ = require('underscore');
var fs = require('fs');
var crypto = require('crypto');
var path = require('path');

var pathToDir = argv.path;

function readLessFile(path, cb) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            return null;
        } else {
            return parseLessFile(path, data, null, cb);
        }
    });
};

function parseLessFile(path, hunk, parts, cb) {
    var match, parts;
    parts = parts || [];

    match = hunk.match(/\{\n|\}\n/);
    if (match && match.index > 0) {
        parts.push(hunk.slice(0, match.index));
        return parseLessFile(path, hunk.slice(match.index + 1), parts, cb)
    } else {
        processParts(path, parts, cb);
    }
}

var partsMap = {};
var partValueMap = {};
function processParts(path, parts, cb) {
    var parts = _.map(parts, function(part) {
        part = part && part.split('\n');
        return _.compact(_.map(part, function(val) {
            return val.trim();
        })).sort();
    });

    parts.forEach(function(part) {
        var hash = md5(part.join(''));
        partValueMap[hash] = part;

        partsMap[hash] = partsMap[hash] || [];
        partsMap[hash].push(path);

    });

    cb(parts);
}

// @see https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
function md5(str) {
    // We transform the string into an arraybuffer.
    return crypto.createHash('md5').update(str).digest("hex");
}

//@see http://stackoverflow.com/a/25462405/1357678
var fromDirWaitingToRespond = -1;
function fromDir(startPath,filter){
    var files, i, filepath, stat;


    if (!fs.existsSync(startPath)){
        return;
    }

    files = fs.readdirSync(startPath);
    for (i = 0; i < files.length; i++){
        filepath = path.join(startPath, files[i]);
        stat = fs.lstatSync(filepath);

        if (stat.isDirectory()){
            fromDir(filepath, filter); //recurse
        } else if (filepath.indexOf(filter)>=0) {
            ++fromDirWaitingToRespond;
            _.defer(function() {
                readLessFile(filepath, function(parts) {
                    if (--fromDirWaitingToRespond < 0) {
                        displayDuplicationSeverityScores();
                    }
                });
            });
        };
    };
};

function displayDuplicationSeverityScores() {
    console.log('Thank you for using less duplication detection tool');
    console.log('Blocks that could be combined are scored by the number of properties * the number of occurrences');
    console.log('Reading duplications severity scores:');

    var duplicationSeverityScoresMap = {};
    var duplicationSeverityScores;
    _.each(partValueMap, function(value, hash) {
        var severityScore = (partsMap[hash].length - 1) * value.length;
        duplicationSeverityScoresMap[severityScore] = duplicationSeverityScoresMap[severityScore] || [];
        duplicationSeverityScoresMap[severityScore].push(hash);
    });

    duplicationSeverityScores = Object.keys(duplicationSeverityScoresMap).sort(function(a, b) {
        return b - a;
    });
    duplicationSeverityScores.forEach(function(score) {
        if (score > 0) {
            console.log('score: ', score, '# files: ', duplicationSeverityScoresMap[score].length);
        }
    });

    console.log('Complete.');
}

fromDir(pathToDir, '.less');

