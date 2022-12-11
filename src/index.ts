/**
 *****************************************
 * Created by edonet@163.com
 * Created on 2022-12-11 19:33:02
 *****************************************
 */
'use strict';

/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import { Config } from 'jest';
import { resolve } from 'path';


/**
 *****************************************
 * 当前目录
 *****************************************
 */
function dir(path: string) {
  return resolve(__dirname, path);
}


/**
 *****************************************
 * 配置
 *****************************************
 */
export const config: Config = {
  rootDir: process.cwd(),
  roots: ['<rootDir>/test/'],
  testMatch: ['**/?(*.)(spec|test).(ts|tsx|js|jsx)'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  transform: {
    '\\.(ts|tsx|js|jsx)$': dir('./transform/tsTransform.js'),
    '\\.(scss|css|less|sass)$': dir('./transform/cssTransform.js'),
    '\\.(html|tpl)$': dir('./transform/rawTransform.js'),
    '^(?!.*\\.(ts|tsx|js|jsx|css|json)$)': dir('./transform/fileTransform.js'),
  },
  watchPathIgnorePatterns: ['\\.temp(\\..*)?'],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.prod.js',
    '^@\\/(.*)$': '<rootDir>/src/$1',
  },
};


/**
 *****************************************
 * 导出配置
 *****************************************
 */
export default config;
