#!/usr/bin/env node
const CleanCodeLinter = require('./index');
const path = require('path');
const fs = require('fs');

function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Please provide a path to the code.');
    process.exit(1);
  }
  const linter = new CleanCodeLinter();
  const issues = linter.lint(path.resolve(filePath));
  if (issues.length > 0) {
    console.log('Linting issues found:');
    issues.forEach(issue => console.log('- ' + issue));
  } else {
    console.log('No issues found.');
  }
}

main();
