const { parseArgs } = require('node:util');
// Define the options and their configurations
const options = {
 foo: { type: 'boolean', short: 'f' }, // Boolean option with a short alias '-f'
 bar: { type: 'string' }, // String option
};
// Parse the arguments
const { values, positionals } = parseArgs({
 args: process.argv.slice(2), // Exclude 'node' and script name
 options,
 allowPositionals: true, // Allow positional arguments
});
// Output the parsed values and positionals
console.log('Options:', values);
console.log('Positionals:', positionals);