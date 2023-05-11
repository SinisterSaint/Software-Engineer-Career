const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('#timeword', () => {
  test('it returns midnight for "00:00"', () => {
    expect(timeToWords("00:00")).toBe("midnight");
  });

  test('it returns noon for "12:00"', () => {
    expect(timeToWords("12:00")).toBe("noon");
  });

  test('it returns "one o clock am" for "01:00"', () => {
    expect(timeToWords("01:00")).toBe("one o clock am");
  });

  test('it returns "six oh one am" for "06:01"', () => {
    expect(timeToWords("06:01")).toBe("six oh one am");
  });

  test('it returns "six ten am" for "06:10"', () => {
    expect(timeToWords("06:10")).toBe("six ten am");
  });

  test('it returns "six eighteen am" for "06:18"', () => {
    expect(timeToWords("06:18")).toBe("six eighteen am");
  });

  test('it returns "six thirty am" for "06:30"', () => {
    expect(timeToWords("06:30")).toBe("six thirty am");
  });

  test('it returns "ten thirty four am" for "10:34"', () => {
    expect(timeToWords("10:34")).toBe("ten thirty four am");
  });

  test('it returns "twelve oh nine pm" for "12:09"', () => {
    expect(timeToWords("12:09")).toBe("twelve oh nine pm");
  });

  test('it returns "eleven twenty three pm" for "23:23"', () => {
    expect(timeToWords("23:23")).toBe("eleven twenty three pm");
  });
});