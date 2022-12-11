/**
 *****************************************
 * Created by lifx
 * Created on 2017-11-27 15:22:35
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 自定义样式转换器
 *****************************************
 */
export function process(): string {
  return 'module.exports = { __esModule: true, default: new Proxy({}, { get: (target, name) => name }) };';
}


/**
 *****************************************
 * 获取缓存Key
 *****************************************
 */
export function getCacheKey(): string {
  return 'cssTransform';
}


/**
 *****************************************
 * 抛出接口
 *****************************************
 */
export default { process };
