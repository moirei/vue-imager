import { expect } from "chai";
import { getUrl } from "../src/utils";

describe("#getUrl", () => {
  let baseUrl = "https://media.com";

  it("should get url", () => {
    const url = getUrl(baseUrl, {});
    expect(url).to.equal(baseUrl);
  });

  it("should get url with params", () => {
    const url = getUrl(baseUrl, {
      paramA: 2,
      paramB: "10",
    } as any);
    expect(url).to.contain("paramA=2");
    expect(url).to.contain("paramB=10");
  });

  it("should get url with params", () => {
    const url = getUrl(baseUrl, {
      paramA: 2,
      paramB: "10",
    } as any);
    expect(url).to.contain("paramA=2");
    expect(url).to.contain("paramB=10");
  });

  it("should rewrite boolean [true]", () => {
    const url = getUrl(baseUrl, {
      paramA: true,
    } as any);
    expect(url).to.contain("paramA=1");
  });

  it("should omit boolean [false]", () => {
    const url = getUrl(baseUrl, {
      paramA: false,
    } as any);
    expect(url).not.to.contain("paramA");
  });

  it.only("should consider url with existing param", () => {
    const url = getUrl(baseUrl + "?paramA=1&paramB=2", {
      paramC: 3,
    } as any);

    // how many "?" in string
    const count = url.split("?").length - 1;

    expect(url).to.contain("paramA=1");
    expect(url).to.contain("paramB=2");
    expect(url).to.contain("paramC=3");
    expect(count).to.equal(1);
  });

  it("should replace existing param", () => {
    const url = getUrl(baseUrl + "?paramA=1&paramB=2", {
      paramB: 3,
      paramC: 3,
    } as any);
    expect(url).to.contain("paramB=3");
    expect(url).to.contain("paramC=3");
  });
});
