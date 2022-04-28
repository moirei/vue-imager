import { expect } from "chai";
import { normaliseImagerParams } from "../src/utils";
import { ImagerOption } from "./../types/imager";

describe("#normaliseImagerParams", () => {
  it("should alias width", () => {
    const original: ImagerOption = {
      width: 10,
    };
    const normalised = normaliseImagerParams(original);
    expect(normalised).to.have.key("w");
    expect(normalised.w).to.equal(10);
  });

  it("should alias height", () => {
    const original: ImagerOption = {
      height: 10,
    };
    const normalised = normaliseImagerParams(original);
    expect(normalised).to.have.key("h");
    expect(normalised.h).to.equal(10);
  });

  it("should alias function", () => {
    const original: ImagerOption = {
      func: ["crop"],
    };
    const normalised = normaliseImagerParams(original);
    expect(normalised).to.have.key("f");
    expect(normalised.f).to.eql(["crop"]);
  });

  it("should alias bg_colour", () => {
    const aliases = {
      bg: "red",
      background: "blue",
    };

    for (const bg in aliases) {
      // @ts-ignore
      const value = aliases[bg];
      const normalised = normaliseImagerParams({ [bg]: value });
      expect(normalised).to.have.key("bg_colour");
      expect(normalised.bg_colour).to.equal(value);
    }
  });

  it("should alias brightness", () => {
    const original: ImagerOption = {
      brightness: 20,
    };
    const normalised = normaliseImagerParams(original);
    expect(normalised).to.have.key("bright");
    expect(normalised.bright).to.equal(20);
  });

  it("should alias pixellate", () => {
    const original: ImagerOption = {
      pixellate: 5,
    };
    const normalised = normaliseImagerParams(original);
    expect(normalised).to.have.key("pixelate");
    expect(normalised.pixelate).to.equal(5);
  });

  it("should alias quality", () => {
    const original: ImagerOption = {
      quality: 75,
    };
    const normalised = normaliseImagerParams(original);
    expect(normalised).to.have.key("q");
    expect(normalised.q).to.equal(75);
  });

  it("should alias quality", () => {
    const original: ImagerOption = {
      convert: "png",
    };
    const normalised = normaliseImagerParams(original);
    expect(normalised).to.have.key("force_format");
    expect(normalised.force_format).to.equal("png");
  });
});
