#!/usr/bin/env node

const inquirer = require('inquirer');

const chalk = require('chalk');

const figlet = require('figlet');

const shell = require('shelljs');

const init = () => {
  console.log(chalk.green(figlet.textSync('Koodu', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  })));
};

const askQuestions = () => {
  const questions = [{
    name: 'FILENAME',
    type: 'input',
    message: 'What is the name of the file without extension?'
  }, {
    type: 'list',
    name: 'EXTENSION',
    message: 'What is the file extension?',
    choices: ['.rb', '.js', '.php', '.css'],
    filter: function (val) {
      return val.split('.')[1];
    }
  }];
  return inquirer.prompt(questions);
};

const run = async () => {
  // show script introduction
  init(); // ask questions
  // ask questions

  const answers = await askQuestions();
  const {
    FILENAME,
    EXTENSION
  } = answers;
  console.log(FILENAME, EXTENSION, '===='); // create the file
  // show success message
};

run();
