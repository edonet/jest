/**
 *****************************************
 * Created by edonet@163.com
 * Created on 2022-12-28 15:33:12
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载模块
 *****************************************
 */
import { describe, test, expect } from '@jest/globals';


/**
 *****************************************
 * 测试模块
 *****************************************
 */
describe('async', () => {
  test('异步流程', async () => {
    const now = Date.now();

    // 等待延时
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 校验数据
    expect(Date.now() - now).toBeGreaterThanOrEqual(1000);
  });
});
