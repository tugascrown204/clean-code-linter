#!/usr/bin/env node
const CleanCodeLinter = require('./index');
const path = require('path');
const fs = require('fs');

function main() {
  const filePath = process.argv[2];
  let codeToLint;

  if (!filePath) {
    console.error('Please provide a path to the code or pipe input.');
    process.exit(1);
  }

  // Check if path is a file
  if (fs.existsSync(filePath)) {
    codeToLint = fs.readFileSync(path.resolve(filePath), 'utf-8');
  } else {
    codeToLint = fs.readFileSync(0, 'utf-8'); // read from stdin
  }

  const linter = new CleanCodeLinter();
  const issues = linter.lint(codeToLint);
  if (issues.length > 0) {
    console.log('Linting issues found:');
    issues.forEach(issue => console.log('- ' + issue));
  } else {
    console.log('No issues found.');
  }
}

main();