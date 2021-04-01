#!/usr/bin/env node
import meow from 'meow';

const cli = meow(`

  Usage
    $ imgtxt [path to an image]

  Examples
    $ imgtxt /home/user/screenshot/hello image.png
    Passed with 81% confidence
    ------------
    hello world

  Notes
    path can be a local path to an image or a url to an image
	  local path can be encoded or not, for example 'my img.png' or 'my%20img.png' works

`);

const input = cli.input.join(' ');

const path = decodeURIComponent( input );

// common.js workaround; 'recognize' not found. The requested module 'tesseract.js' is a CommonJS module, which may not support all module.exports as named exports.
import pkg from 'tesseract.js';
const { recognize } = pkg;

const response = result => `
	Passed with ${result.confidence}% confidence
-------------------image-text-----------------------
${result.text}
`;

recognize(path)
    .then(result => process.stdout.write( response( result.data ) ))
    .catch(error => process.stderr.write( error ));