import { expect } from "chai";
import { defaultBreakpoints } from "../src/constants";
import { getBreakpoint } from "../src/utils";

describe("#getBreakpoint", () => {
  it("should be xs size", () => {
    const size = getBreakpoint(500, defaultBreakpoints);
    expect(size).to.equal("xs");
  });

  it("should be sm size", () => {
    const size = getBreakpoint(700, defaultBreakpoints);
    expect(size).to.equal("sm");
  });

  it("should be md size", () => {
    const size = getBreakpoint(1000, defaultBreakpoints);
    expect(size).to.equal("md");
  });

  it("should be lg size", () => {
    const size = getBreakpoint(1500, defaultBreakpoints);
    expect(size).to.equal("lg");
  });

  it("should be xl size", () => {
    const size = getBreakpoint(1905, defaultBreakpoints);
    expect(size).to.equal("xl");
  });
});
