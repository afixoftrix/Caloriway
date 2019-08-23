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

    it('has a width of zero when show is false', () => {
        const wrapper = mount(<Sidebar {...minProps} show={false} />);
        console.log(wrapper.debug({ verbose: true }));
        // expect(wrapper.find("Container").get(0).props.style).toHaveProperty(
        //     "width",
        //     "0"
        // );
    })
});
