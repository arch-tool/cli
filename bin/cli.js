#!usr/bin/env
const chalk = require('chalk')
const semver = require('semver')
const check = require('./../packages/check');
const QA = require('./../packages/qa');
const fetchGit = require('./../packages/fetch');

const cmd = require('commander')

const log = console.log;

check.checkNodeVersion();



cmd
  .version('0.1.0')
  .arguments('<cmd> [env]')
  .action((cmd, env) => {
    cmdValue = cmd;
    envValue = env;
  })

// 创建命令.
cmd
  .command('init <template> <app-name> [options]')
  .description('根据模板创建一个工程')
  .option('-c, --clone', 'git clone 个远程模板')
  .option('-of, --offline', '用远程模板')
  .action((template, appName) => {
    log('create...........', template, appName);
    QA.init();
    log('git clone, https://github.com/umijs/create-umi.git');
    fetchGit('https://github.com/umijs/create-umi.git', true);
  })
cmd.on('--help', () => {
  log(`-------------------------------------`);
  log(`Run ${chalk.cyan(`create <command> --help`)} for detailed usage of given command`);
  log();
})



cmd.parse(process.argv)

if (!process.argv.slice(2).length) {
  cmd.outputHelp()
}