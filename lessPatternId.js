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

var regex = /\n.*\s{/;
function parseLessFile(path, hunk, parts, cb) {
    var match, parts, part;
    parts = parts || [];
    match = hunk.match(regex);

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
    var parts = _.compact(_.map(parts, function(part) {
        part = part && part.split(';');
        return _.compact(_.map(part, function(val) {
            if (val.match(/\.|\&|\#|\}/)) {
                return null;
            } else {
                return val.trim();
            }
        })).sort();
    }));

    parts.forEach(function(part) {
        var hash;
        hash = md5(part.join(''));
        if (partValueMap[hash]) {
            // doop
            partsMap[hash].push(path);
        } else {
            partValueMap[hash] = part;
            partsMap[hash] = [path];
        }
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

    var scoreDescriptions = [];
    _.each(partValueMap, function(value, hash) {
        var severityScore = value.length && (partsMap[hash].length - 1) * (value.length - 1);
        if (severityScore) {
            scoreDescriptions.push({
                hash: hash,
                score: severityScore,
                occurances: partsMap[hash].length,
                value: value,
            });
        }
    });
    _.each(_.sortBy(scoreDescriptions, 'score'), function(scoreDescroption) {
        console.log(scoreDescroption.hash, scoreDescroption.score, scoreDescroption.occurances, scoreDescroption.value);
        console.log(partValueMap[scoreDescroption.hash]);
        console.log(partsMap[scoreDescroption.hash]);
    });
}

fromDir(pathToDir, '.less');

