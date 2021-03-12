import {test} from '@jest/globals';
import {fullTrim, nameIsValid} from '../src/homework/homework3';

describe('#1. Функциональное тестирование табуляции', () => {
  test('Проверяем тримминг для пробела в начале слова', () => {
    expect(fullTrim(' Это домашка')).toEqual('Это домашка');
  });
  test('Проверяем тримминг для пробела в конце слова', () => {
    expect(fullTrim('Это домашка ')).toEqual('Это домашка');
  });
  test('Проверяем тримминг для таба в конце строки', () => {
    expect(fullTrim('Это домашка  ')).toEqual('Это домашка');
  });
  test('Проверяем тримминг для таба в начале строки', () => {
    expect(fullTrim('  Это домашка')).toEqual('Это домашка');
  });
});

describe('#2. Функциональное тестирование кличек', () => {
  test.each`
    name
    ${'Кот'}
  `('Проверяем валидность кличек', ({name}) => {
      expect(nameIsValid(name)).toEqual(true);
  });
});