import { shallow } from 'enzyme';
import * as React from 'react';
import * as cs from '../clientStorage';
const testKey = 'testkey';

/**
 * Mock the localstorage
 */
interface LS {
  [key: string]: string;
}
const localStorageMock = (function () {
  let store: LS = {};
  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key: string) {
      delete store[key];
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('clientStorage test', () => {
  it('Sets and get a storage value', () => {
    cs.set(testKey, 'value value');
    const val = cs.get(testKey);
    expect(val).toEqual('value value');
  });

  it('remove value from key', () => {
    cs.set(testKey, 'value value');
    cs.remove(testKey);
    const val = cs.get(testKey);
    expect(val).toEqual(null);
  });

  it('remove value from key', () => {
    const testValue = 'value value';

    // add a few values to the storage and verify they are set
    cs.set(testKey, testValue);
    let val = cs.get(testKey);
    expect(val).toEqual(testValue);

    cs.set(`${testKey}-1`, `${testValue}-1`);
    val = cs.get(`${testKey}-1`);
    expect(val).toEqual(`${testValue}-1`);

    // clear all
    cs.clear();

    // validate none of the keys are available
    val = cs.get(testKey);
    expect(val).toEqual(null);
    val = cs.get(`${testKey}-1`);
    expect(val).toEqual(null);
  });
});
