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
import { dir, root } from './fs';


/**
 *****************************************
 * 配置
 *****************************************
 */
export const config: Config = {
  rootDir: process.cwd(),
  roots: root('test', 'packages'),
  testMatch: ['**/?(*.)(spec|test).(ts|tsx|js|jsx)'],
  transform: {
    '\\.(ts|js)$': dir('./transform/tsTransform.js'),
    '\\.(tsx|jsx)$': dir('./transform/tsxTransform.js'),
    '\\.(scss|css|less|sass)$': dir('./transform/cssTransform.js'),
    '\\.(html|tpl)$': dir('./transform/rawTransform.js'),
    '^(?!.*\\.(ts|tsx|js|jsx|css|json)$)': dir('./transform/fileTransform.js'),
  },
  passWithNoTests: true,
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
