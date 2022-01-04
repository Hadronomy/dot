#!/bin/node
import enquirer from './enquirer';

/**
 * `dot` main program
 */
async function MainProgram() {
  const response = await enquirer.prompt({
    type: 'confirm',
    name: 'username',
    message: 'What is your username?',
  });
  console.log(response);
}

MainProgram();
