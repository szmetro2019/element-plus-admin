/**
 * autor diedi
 * date 20190819 15:21:13
 */

/**
 * --------------------------------------------------
 * �ж�һ��ֵ�Ƿ���null��undefined����
 * @param {(array)} parms �����ֵ
 * @returns {(Boolean)} true||false
 * @methods
 * isNil ��� value Ϊnull �� undefined����ô���� true�����򷵻� false��
 */
import isNil from 'lodash/isNil'
export function lodashIsValue(parms: any) {
  let result = ''
  if (isNil(parms) || parms === '') {
    result = '--'
  } else {
    result = parms
  }
  return result
}

/**
 * -----------------------------------------
 * ��� cloneDeep
 * @param {(Object|string|number|array)} parms
 * @returns {(Object|string|number|array)}
 * @methods lodashCloneDeep({name:'���',desic:'cloneDeep'})
 */
import cloneDeep from 'lodash/cloneDeep'
export function lodashCloneDeep(parms: any) {
  const deep = cloneDeep(parms)
  return deep
}

/**
 * --------------------------------------------
 * �������� sort
 * @param {(array)} arr ����ԭ���飬��Ҫ�����
 * @returns {(array)} parms ��Ҫ����ʲô����ȥ����(���Զ������)�����մ��ε��Ⱥ�˳�� ���磺['name']  || ['name','age']
 * @methods
 */
import sortBy from 'lodash/sortBy'
export function lodashSortBy(arr: any, parms: any) {
  const result = sortBy(arr, parms)
  return result
}

/**
 * --------------------------------------------
 * ָ������������ sort
 * @param {(array)} arr ����ԭ���飬��Ҫ�����
 * @returns {(array)} parms ��Ҫ����ʲô����ȥ����(���Զ������)�����մ��ε��Ⱥ�˳�� ���磺['name']  || ['name','age']
 * @methods
 */
/*
����
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

// �� `user` �������� ��  `age` �Խ�������
desc" ���� "asc" ����
lodashOrderBy(users, ['user', 'age'], ['desc', 'desc']);
// => objects for [['fred', 48], ['fred', 40], ['barney', 36], ['barney', 34]]
*/

import orderBy from 'lodash/orderBy'
export function lodashOrderBy(arr: any, parms: any, order: any) {
  const result = orderBy(arr, parms, order)
  return result
}

/*
*---------------------------------����ȥ��
ֻ�е�һ�γ��ֵ�Ԫ�زŻᱻ����

*/
import uniq from 'lodash/uniq'
export function lodashUniq(arr: any) {
  const result = uniq(arr)
  return result
}

/*
*---------------------------------����ȥ��
// _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
*/

import uniqBy from 'lodash/uniqBy'
export function lodashUniqBy(arr: any, parms: any) {
  const result = uniqBy(arr, parms)
  return result
}

