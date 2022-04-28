import { expect } from "chai";
import { shallowMount, Wrapper } from "@vue/test-utils";
import VImager from "./../../src/components/VImager";
import { Imager } from "./../../src/Imager";

describe("VImager.vue", () => {
  const baseUrl = "https://media.com";
  let component: Wrapper<any>;

  beforeEach(() => {
    component = shallowMount(VImager, {
      propsData: {
        src: "example-img.jpg",
      },
      mocks: {
        $imager: new Imager(baseUrl),
      },
    });
  });

  it("should render Spinner on mount", () => {
    expect(component.find("img").exists()).to.be.true;
  });
});
