import { expect } from "chai";
import { UrlImage } from "./../src/UrlImage";

describe("#UrlImage", () => {
  const baseUrl = "https://media.com";

  let urlImage: UrlImage;

  beforeEach(() => {
    urlImage = new UrlImage(baseUrl);
  });

  it("should get url", () => {
    expect(urlImage.get()).to.equal(baseUrl);
  });

  it("should convert to string", () => {
    expect(String(urlImage)).to.equal(baseUrl);
  });

  it("should have defaults", () => {
    urlImage = new UrlImage(baseUrl, { w: 35, height: 10 });
    const url = urlImage.get();
    expect(url).to.contain(baseUrl);
    expect(url).to.contain("w=35");
    expect(url).to.contain("h=10");
  });

  it("should apply options via method", () => {
    const url = urlImage.size(40, 30).get();
    expect(url).to.contain(baseUrl);
    expect(url).to.contain("w=40");
    expect(url).to.contain("h=30");
  });

  it("should append paths to url", () => {
    const url = urlImage.append("2", 3).get();
    expect(url).to.contain(baseUrl);
    expect(url).to.contain("2/3");
  });

  it("should add extra params to url", () => {
    const url = urlImage.param("testParam", 100).get();
    expect(url).to.contain(baseUrl);
    expect(url).to.contain("testParam=100");
  });

  it("should add extra params to url using object", () => {
    const url = urlImage
      .param({
        testParam1: 100,
        testParam2: 200,
      })
      .get();
    expect(url).to.contain(baseUrl);
    expect(url).to.contain("testParam1=100");
    expect(url).to.contain("testParam2=200");
  });

  it("expects boolean", () => {
    expect(urlImage.param("boolParam", true).get()).to.contain("boolParam=1");
    expect(urlImage.param("boolParam", false).get()).not.to.contain(
      "boolParam"
    );
  });
});
