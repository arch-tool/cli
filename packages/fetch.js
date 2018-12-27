const fs = require('fs-extra');
const gitd = require('download-git-repo');

const log = console.log;
module.exports = async function fetchGit(name, clone) {
  const os = require('os');
  const path = require('path');

  const tempdir = path.join(os.tmpdir(), 'create-cli');

  log('tempdir: ', tempdir);
  if (clone) {
    await fs.remove(tempdir);
  }

  /**
   * gitd('direct:[git地址]', '本地分支名(文件夹名称)', { clone: true }, callback);
   */
  await new Promise((resolve, reject) => {
    gitd('direct:https://github.com/umijs/create-umi.git', 'master', { clone }, err => {
      if (err)
        return reject(err);
      resolve()
    })
  })

}