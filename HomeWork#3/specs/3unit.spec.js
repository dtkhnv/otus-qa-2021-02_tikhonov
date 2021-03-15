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
  test('Проверяем тримминг для таба в начале и конце строки', () => {
    expect(fullTrim('  Это домашка  ')).toEqual('Это домашка');
  });
  test('Проверяем тримминг для таба/пробела в начале и конце строки', () => {
    expect(fullTrim('   Это домашка   ')).toEqual('Это домашка');
  });
});

describe('#2. Функциональное тестирование кличек', () => {
  test.each`
    name        | expected 
    ${'Кот'}    | ${true}
    ${'Котик'}  | ${true}
    ${'Котэо'}  | ${true}
    ${'Ко'}     | ${true}
    ${'К'}      | ${false}
    ${'К отик'} | ${false}
    ${1}        $ ${false}
  `(`Проверяем валидность кличек`, ({name, expected}) => {
      expect(nameIsValid(name)).toEqual(expected);
  });
});