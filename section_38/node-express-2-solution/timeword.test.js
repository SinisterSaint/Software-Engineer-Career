const timeWord = require("./timeword")

describe("#timeword", () => {
  test("it handles noon and midnight specially", () => {
    expect(timeWord("00:00")).toBe('midnight')
    expect(timeWord("12:00")).toBe('noon')
  })
  test("it converts times to text", () => {
    expect(timeWord("01:00")).toBe("one o'clock am")
    expect(timeWord("06:01")).toBe('six oh one am')
    expect(timeWord("06:10")).toBe('six ten am')
    expect(timeWord("06:18")).toBe('six eighteen am')
    expect(timeWord("10:34")).toBe('ten thirty four am')
  })
  test("Don't forget to handle early morning properly:", () => {
    expect(timeWord("00:12")).toBe('twelve twelve am')
  })
  test("For times after noon, add 'pm'", () => {
    expect(timeWord("12:09")).toBe("twelve oh nine pm");
    expect(timeWord("23:23")).toBe("eleven twenty three pm");
  });
})