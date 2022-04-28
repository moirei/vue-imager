import { expect } from "chai";
import { convertToValue } from "../src/utils";

describe.only("#convertToValue", () => {
  it("should not convert underfined", () => {
    expect(convertToValue(undefined)).to.be.undefined;
  });

  it("should not convert vh values [server mode]", () => {
    expect(convertToValue("10vh")).to.be.undefined;
  });

  it("should not convert vw values [server mode]", () => {
    expect(convertToValue("10vw")).to.be.undefined;
  });

  it("should convert px values", () => {
    expect(convertToValue("10px")).to.equal(10);
  });

  it("should convert string values", () => {
    expect(convertToValue("10")).to.equal(10);
  });

  it("should return number values", () => {
    expect(convertToValue(10)).to.equal(10);
  });
});
