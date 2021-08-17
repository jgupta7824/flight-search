import React,{Fragment} from 'react'
import classes from './FlightSearch.module.css'
import FlightResult from '../FlightSearchResult/FlightResults'
import TRANSLATIONS from '../../utils/translations'
import SelectBox from '../../components/SelectBox.component'
import Date from '../../components/Date.component'
import {DepartFormData,GoingToFormData,classData} from '../../utils/mockData'
import {enableSeachResults} from '../../actions/AppActions'
import { useDispatch, useSelector } from 'react-redux'

const FlightSearch = (props) => {
  const isSearchEnabled = useSelector(state => state.isSearchEnabled)
  const dispatch = useDispatch();

  //Search Flight
  function searchFlights(){
    dispatch(enableSeachResults(true))
  }

  return (
    <Fragment>
    {!isSearchEnabled && <div className={classes.panel} id="container">
      <div className={classes.formContainer}>
        <form>
          <div className={classes.formGroup}>
            <label className={classes.formLabel}>{TRANSLATIONS.DEPART_FORM}</label>
            <SelectBox data={DepartFormData}/>
          </div>
          <div className={classes.formGroup}>
            <label className={classes.formLabel}>{TRANSLATIONS.GOING_TO}</label>
            <SelectBox data={GoingToFormData}/>
          </div>
          <div className="rowFlex">
            <div>
              <label className={classes.formLabel}>{TRANSLATIONS.DEPART_DATE}</label>
              <Date style={{ width: '175px', marginRight: '20px' }} />
            </div>
            <div >
              <label className={classes.formLabel}>{TRANSLATIONS.RETURN_DATE}</label>
              <Date style={{ width: '175px' }} />
            </div>
          </div>
          <div className="rowFlex">
            <div>
              <label className={classes.formLabel}>{TRANSLATIONS.TRAVELLERS}</label>
              <input type="number" id="travellers" 
              name="travellers" min="1" max="100" className={classes.inputStyle}
                style={{ marginRight: '20px', width: '170px' }} />
            </div>
            <div >
              <label className={classes.formLabel}>{TRANSLATIONS.CLASS}</label>
              <SelectBox style={{ width: '190px' }}  data ={classData}/>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <button className="buttonStyle" onClick={searchFlights}>Search Flights</button>
          </div>
        </form>
      </div>
    </div>}
    {isSearchEnabled && <FlightResult />}
    </Fragment>
  )
}

export default FlightSearch;