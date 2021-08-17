import React, { Fragment } from "react";
import classes from '../containers/FlightSearch/FlightSearch.module.css'

const SelectBox = (props) => {
    return (
        <Fragment>
            <select className={classes.inputStyle} style={props.style}>
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