// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber
test('Valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('Invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail
test('Valid email: test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('Valid email: john123@domain.co', () => {
  expect(isEmail('john123@domain.co')).toBe(true);
});

test('Invalid email: notanemail.com', () => {
  expect(isEmail('notanemail.com')).toBe(false);
});

test('Invalid email: user@.com', () => {
  expect(isEmail('user@.com')).toBe(false);
});

// isStrongPassword
test('Valid strong password: Abcd123', () => {
  expect(isStrongPassword('Abcd123')).toBe(true);
});

test('Valid strong password: a_bc1234', () => {
  expect(isStrongPassword('a_bc1234')).toBe(true);
});

test('Invalid strong password: 123abc', () => {
  expect(isStrongPassword('123abc')).toBe(false);
});

test('Invalid strong password: a!', () => {
  expect(isStrongPassword('a!')).toBe(false); 
});

// isDate
test('Valid date: 12/25/2023', () => {
  expect(isDate('12/25/2023')).toBe(true);
});

test('Valid date: 1/1/1999', () => {
  expect(isDate('1/1/1999')).toBe(true);
});

test('Invalid date: 2023/12/25', () => {
  expect(isDate('2023/12/25')).toBe(false);
});

test('Invalid date: 13/1/23', () => {
  expect(isDate('13/1/23')).toBe(false);
});

// isHexColor
test('Valid hex color: #FFF', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('Valid hex color: 123ABC', () => {
  expect(isHexColor('123ABC')).toBe(true);
});

test('Invalid hex color: #1234', () => {
  expect(isHexColor('#1234')).toBe(false); 
});

test('Invalid hex color: GHI789', () => {
  expect(isHexColor('GHI789')).toBe(false);
});