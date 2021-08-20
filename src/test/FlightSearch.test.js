import React from "react";
import FlightSearch from "../containers/FlightSearch/FlightSearch";
import { configure, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() })
jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => jest.fn(),
    connect: () => jest.fn()
}))

describe("Render FlightSearch Component", () => {
    it("render FlightSearch  page", () => {
        const FlightSearchComponent = shallow(<FlightSearch />);
        expect(toJson(FlightSearchComponent)).toMatchSnapshot()
    });

});