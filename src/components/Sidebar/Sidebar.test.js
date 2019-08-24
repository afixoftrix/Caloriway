import React from "react";
import { shallow, mount } from "enzyme";
import Sidebar, { Container } from "./index";
import { Drawer } from "@rmwc/drawer";


describe("Sidebar Props", () => {

    it("renders without crashing", () => {
        shallow(<Sidebar />);
    });

    const minProps = { show: false };
    const wrapper = shallow(<Sidebar {...minProps} show={false} />);

    it('passes props to Container component ', () => {
        expect(wrapper.find(Drawer).prop("open")).toBe(false);
    });
});
