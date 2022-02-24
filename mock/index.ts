import { MockMethod } from 'vite-plugin-mock';
const Mock = require('mockjs')

const List = []
const count = 10

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@first',
    'type|1': ['0', '1', '2', '3', '4', '5'],
    date: '@first',
    payment: '@float(0, 100, 2, 2)',
    remarks: '@title(1, 2)',
    money: '@integer(1, 3)',
  }))
}
export default [
  // 登录
  {
    url: '/login',
    method: 'post',
    response: ({ query }) => {
      return {
        code: 20000,
        data: {
          token: 'abcdefghirjklmnjhj123456677878',
        },
      };
    },
  },
  // 消费
  {
    url: '/consumption/table',
    method: 'get',
    timeout: 1200,
    response: {
      code: 20000,
      data: {
        list: List
      },
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = '';
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
] as MockMethod[]; 