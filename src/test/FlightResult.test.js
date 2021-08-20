import React from "react";
import FlightResult from "../containers/FlightSearchResult/FlightResults";
import Enzyme, { shallow ,configure} from 'enzyme'
import toJson from 'enzyme-to-json'
import * as redux from 'react-redux'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter() })
describe("Render FlightResult Page", () => {
    jest.spyOn(redux, 'useSelector').mockReturnValue({ formData: { formData: '' } })
    jest.spyOn(React, 'useState').mockImplementation((init) => [init, jest.fn()])
    jest.spyOn(React, 'useEffect').mockImplementation(f => f())
    jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn())
    it("render FlightResult page", () => {
        const FlightResultComponent = shallow(<FlightResult />);
        expect(toJson(FlightResultComponent)).toMatchSnapshot()
    });
});