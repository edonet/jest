/**
 *****************************************
 * Created by edonet@163.com
 * Created on 2022-12-11 20:00:02
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import { describe, test, expect } from '@jest/globals';


/**
 *****************************************
 * 添加
 *****************************************
 */
function sum(a: number, b: number): number {
  return a + b;
}


/**
 *****************************************
 * 测试
 *****************************************
 */
describe('sum', () => {
  test('sum(1, 2)', () => expect(sum(1, 2)).toBe(3));
});
