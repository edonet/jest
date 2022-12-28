/**
 *****************************************
 * Created by lifx
 * Created on 2017-11-27 15:23:17
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import { extname } from 'path';
import { transformSync, Loader } from 'esbuild';


/**
 *****************************************
 * 处理代码
 *****************************************
 */
function processCode(code: string) {
  return 'import React from "react";' + code;
}


/**
 *****************************************
 * 自定义代码转换器
 *****************************************
 */
export function process(code: string, source: string) {
  return transformSync(processCode(code), {
    target: 'es2020',
    format: 'cjs',
    loader: extname(source).slice(1) as Loader,
    sourcemap: 'inline',
    sourcefile: source,
  });
}


/**
 *****************************************
 * 抛出接口
 *****************************************
 */
export default { process };



