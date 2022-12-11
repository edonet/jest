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
import { statSync } from 'fs';
import { resolve } from 'path';


/**
 *****************************************
 * 当前目录
 *****************************************
 */
export function dir(path: string) {
  return resolve(__dirname, path);
}


/**
 *****************************************
 * 获取文件状态
 *****************************************
 */
export function stat(path: string) {
  return statSync(path, { throwIfNoEntry: false });
}


/**
 *****************************************
 * 查找根目录
 *****************************************
 */
export function root(...args: string[]) {
  const roots: string[] = [];

  // 解析目录
  args.forEach(name => stat(name) && roots.push(`<rootDir>/${name}/`));

  // 返回结果
  return roots;
}
