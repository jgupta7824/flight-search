import React, { Fragment ,useState} from "react";
import classes from '../containers/FlightSearch/FlightSearch.module.css'

const Date = (props) => {

    const [selectedValue,setSelectedValue] = useState('');

    function onChangeSelectDate(event){
        if(event.target.value){
            setSelectedValue(event.target.value)
            props.onChange(event)
        }
    }

    return (
        <Fragment>
            <input type="date"
                name="dateofbirth" id="dateofbirth"
                className={classes.dateInput} 
                style={props.style} 
                onChange={onChangeSelectDate}
                min={props.min}
                value={selectedValue ? selectedValue : props.value}
                ></input>
        </Fragment>
    )

}

export default Date;