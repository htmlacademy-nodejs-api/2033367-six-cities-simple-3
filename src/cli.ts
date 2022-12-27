#!/usr/bin/env node

import VersionCommand from './cli-command/version-command.js';
import HelpCommand from './cli-command/help-command.js';
import ImportCommand from './cli-command/import-command.js';
import CLIAplication from './app/cli-application.js';

const cliManager = new CLIAplication();
cliManager.registerCommands([new HelpCommand, new VersionCommand, new ImportCommand]);
cliManager.processCommand(process.argv);
