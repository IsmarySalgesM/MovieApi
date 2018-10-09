import React from "react";
import { mount, configure } from "enzyme";
import Form from "../src/componentes/Form";
import Titulo from "../src/componentes/Titulo"
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter : new Adapter()
});
 
describe("Form", () => {
  let props;
  let mountedFormComponent;
  const formComponent = () => {
    if (!mountedFormComponent) {
      mountedFormComponent = mount(
        <Form {...props} />
      );
    }
    return mountedFormComponent;
  }
 
  beforeEach(() => {
    props = {
      movies: []
    };
    mountedFormComponent = undefined;
  });
 
  it("Always renders a div", () => {
    const divs = formComponent().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });
 
  it("Has children, an form", () => {
    const children = formComponent().find("form").first().children();
    expect(children.find("div").length).toBe(1);
  });

})

describe("Titulo", () => {
  let props;
  let mountedTituloComponent;
  const tituloComponent = () => {
    if (!mountedTituloComponent) {
      mountedTituloComponent = mount(
        <Titulo {...props} />
      );
    }
    return mountedTituloComponent;
  }
 
  beforeEach(() => {
    props = {
      movies: []
    };
    mountedTituloComponent = undefined;
  });
 
  it("Always renders a div", () => {
    const divs = tituloComponent().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });
 
 it ("Has an h1 with text 'MovieApp'", () => {
    expect(tituloComponent().find("h3").first().text()).toBe("MovieApp");
  });

})



