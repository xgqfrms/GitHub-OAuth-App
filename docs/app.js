"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-10-01
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

const params = new URLSearchParams(location.search);
// params.get(key);
// params.getAll(key);
for(const item of params) {
  log(`item =`, item)
  log(`key =`, item[0])
  log(`value =`, item[1])
}
for(const item of params.entries()) {
  // item === array
  const [
    key,
    value,
  ] = item;
  log(`key =`, key)
  log(`value =`, value)
}
for(const key of params.keys()) {
  log(`key =`, key)
}
for(const value of params.values()) {
  log(`value =`, value)
}
