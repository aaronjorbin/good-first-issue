#!/usr/bin/env node

var cli = require('commander')

cli
  .version('0.0.1', '-v, --version')
  .usage('[options]')
  .description('CLI tool to find good first issues.')
  .command('node', 'Good First Issues for Node.js')
  .command('electron', 'Good First Issues for Electron')
  .parse(process.argv)