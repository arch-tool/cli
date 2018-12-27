#!/usr/bin/env node

/**
 * Copyright (c) 2015-present, Jeff.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const chalk = require('chalk');

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];

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

require('./create');

