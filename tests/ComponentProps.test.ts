import { expect } from "chai";
import { Sizes } from "../src/constants";
import {
  componentProps,
  getComponentProps,
  parseComponentProps,
  upperFirst,
} from "../src/utils";

describe("#getComponentProps", () => {
  const props = Object.keys(componentProps);

  it("should auto gen all props", () => {
    const generatedProps = Object.keys(getComponentProps());

    for (const prop of props) {
      expect(generatedProps).to.include(prop);
      for (const size of Sizes) {
        expect(generatedProps).to.include(prop + upperFirst(size));
      }
    }
  });
});

describe("#parseComponentProps", () => {
  it("should auto gen all props", () => {
    const props = parseComponentProps({
      width: 1000,
      widthSm: 50,
    }) as any;

    expect(props.width).to.equal(1000);
    expect(props.sm).to.not.be.undefined;
    expect(props.sm.width).to.not.be.undefined;
    expect(props.sm.width).to.equal(50);
  });
});
