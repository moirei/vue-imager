import { expect } from "chai";
import { Sizes } from "../src/constants";
import { Imager } from "../src/Imager";

describe("#UrlImage Options", () => {
  const baseUrl = "https://media.com";

  let imager: Imager;

  beforeEach(() => {
    imager = new Imager(baseUrl, {
      width: 100,
      height: 50,
    });
  });

  it("should create instance", () => {
    expect(imager).to.be.instanceOf(Imager);
  });

  it("should get option", () => {
    const option = imager.getOption("sm");
    expect(option).to.have.keys(["w", "h"]);
    expect(option.w).to.equal(100);
    expect(option.h).to.equal(50);
  });

  it("should get option with default", () => {
    const option = imager.getOption("sm", {
      h: 30,
    });
    expect(option).to.have.keys(["w", "h"]);
    expect(option.w).to.equal(100);
    expect(option.h).to.equal(30);
  });

  it("should get option with sizes default", () => {
    const option = imager.getOption("sm", {
      w: 30,
      sm: {
        h: 60,
      },
      md: {
        h: 70,
      },
    });
    expect(option).to.have.keys(["w", "h"]);
    expect(option.w).to.equal(30);
    expect(option.h).to.equal(60);
  });

  it("should get option with sizes default", () => {
    imager = new Imager(baseUrl, {
      width: 100,
      height: 50,
      sm: {
        w: 50,
        h: 60,
      },
    });

    const smOption = imager.getOption("sm", {
      sm: {
        h: 70,
      },
    });
    const mdOption = imager.getOption("md");

    expect(smOption.w).to.equal(50);
    expect(smOption.h).to.equal(70);
    expect(mdOption.w).to.equal(100);
    expect(mdOption.h).to.equal(50);
  });
});

describe("#UrlImage urls", () => {
  const baseUrl = "https://media.com";

  let imager: Imager;

  beforeEach(() => {
    imager = new Imager(baseUrl, {
      width: 100,
      height: 25,
      sm: {
        w: 50,
      },
      md: {
        w: 80,
      },
    });
  });

  it("should get url", () => {
    const url = imager.url("1", { w: 3 });
    expect(url).to.contain(baseUrl);
    expect(url).to.contain("1");
    expect(url).to.contain("w=3");
  });

  it("should get url", () => {
    const urls = imager.urls("1");

    expect(urls).to.have.keys(Sizes);

    expect(urls.xs).to.contain("h=25");
    expect(urls.xs).to.contain("w=100");

    expect(urls.sm).to.contain("h=25");
    expect(urls.sm).to.contain("w=50");

    expect(urls.md).to.contain("h=25");
    expect(urls.md).to.contain("w=80");

    expect(urls.lg).to.contain("h=25");
    expect(urls.lg).to.contain("w=100");
  });
});
