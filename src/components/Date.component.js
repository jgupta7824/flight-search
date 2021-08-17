import React, { Fragment } from "react";
import classes from '../containers/FlightSearch/FlightSearch.module.css'

const Date = (props) => {

    function getTodaysDate(){
        //setting from date greater then todays date
        var today = new window.Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        
        today =  yyyy + '-' + mm+ '-' + dd;
        return today
    }

    return (
        <Fragment>
            <input type="date"
                name="dateofbirth" id="dateofbirth"
                className={classes.dateInput} style={props.style} min={props.min || getTodaysDate()}></input>
        </Fragment>
    )

}

export default Date;