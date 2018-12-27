

const chalk = require('chalk');

const log = console.log;

const checkNodeVersion = () => {
  const currentNodeVersion = process.versions.node;
  const semver = currentNodeVersion.split('.');
  const major = semver[0];
  log(chalk`{blue.bold 当前node版本:${major} }` + 
      chalk`{green.bold 需要node版本: > ${8} }`
  )
  if (major < 8) {
    console.error(
      chalk.red(
        '当前运行的Node版本' +
        currentNodeVersion +
        '.\n' +
        '运行create命令需要Node 8 或者以上的.\n' +
        '请升级您的Node版本'
      )
    );
    process.exit(1);
  }
}


const check = {
  checkNodeVersion,
}

module.exports = check;