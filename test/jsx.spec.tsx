/**
 *****************************************
 * Created by edonet@163.com
 * Created on 2022-12-11 22:13:50
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import { describe, test, expect } from '@jest/globals';
import { create } from 'react-test-renderer';


/**
 *****************************************
 * 组件
 *****************************************
 */
function Link(props: { page: string, children: string }) {
  return (
    <a href={props.page || '#'}>
      {props.children}
    </a>
  );
}


/**
 *****************************************
 * 测试
 *****************************************
 */
describe('jsx', () => {
  test('Link', () => {
    const link = create(<Link page="http://www.facebook.com">Facebook</Link>);
    const json = link.toJSON();

    // 校验快照
    expect(json).toMatchSnapshot();
  });
});
