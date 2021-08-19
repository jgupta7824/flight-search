import React, { Fragment, useEffect, useState } from "react";
import classes from '../containers/FlightSearch/FlightSearch.module.css'

const SelectBox = (props) => {
    const [selectedValue,setSelectedValue] = useState('');

    function onChangeSelect(event){
        if(event && event.target.value){
            setSelectedValue(event.target.value)
            props.onChange(event)
        }
    }

    return (
        <Fragment>
            <select className={classes.inputStyle} value={props.defaultValue}
            style={props.style}  onChange={onChangeSelect}>
                {
                    props.data.map((data, i) => {
                        return (<option key={data.id | i}>{data.name}</option>)
                    })
                }
            </select>
        </Fragment>
    )

}

export default SelectBox;