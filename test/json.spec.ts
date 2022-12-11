/**
 *****************************************
 * Created by edonet@163.com
 * Created on 2022-12-11 21:00:13
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import { describe, test, expect } from '@jest/globals';
import { main } from '../package.json';


/**
 *****************************************
 * 测试
 *****************************************
 */
describe('json', () => {
  test('json width comments', () => expect(main).toEqual('dist/index.js'));
});
