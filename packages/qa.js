

const qa = require('inquirer');
const chalk = require('chalk');
const log = console.log;

const QA = {
  init: () => qa.prompt([
      {
        type: 'list',
        name: 'types',
        message: 'what do you want to do? 你想做什么, 骚年?',
        choices: [
          `创建一个React H5工程`,
          `创建一个Vue 工程`,
          `创建一个React Native工程`,
          `创建一个后台管理系统- react + ant-design`
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: '请起个牛逼的名字',
      },
      {
        type: 'confirm',
        name: 'isConfirm',
        message: '确定创建吗? 骚年?',
        default: true,
      }
    ]).then(a => {
      log(a);
    })
}

module.exports = QA;