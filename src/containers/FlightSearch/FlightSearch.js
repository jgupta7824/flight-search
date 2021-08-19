import React, { Fragment, useReducer, useState } from 'react'
import classes from './FlightSearch.module.css'
import FlightResult from '../FlightSearchResult/FlightResults'
import TRANSLATIONS from '../../utils/translations'
import SelectBox from '../../components/SelectBox.component'
import Date from '../../components/Date.component'
import { DepartFormData, GoingToFormData, classData } from '../../utils/mockData'
import { enableSeachResults, updateSearchFormData } from '../../actions/AppActions'
import { useDispatch, useSelector } from 'react-redux'
import { getTodaysDate } from '../../utils/CommonFile'

let intialState = {
  departFrom: 'Chandigarh (IXC)',
  goingTo: 'Mumbai (BOM)',
  class: 'Economy',
  travellers: 1,
  fromDate: getTodaysDate(),
  toDate: getTodaysDate()
}

function reducer(state, action) {
  switch (action.type) {
    case 'updateDepartFrom':
      return { ...state, departFrom: action.value };
    case 'updateGoingTo':
      return { ...state, goingTo: action.value };
    case 'updateClass':
      return { ...state, class: action.value };
    case 'updateTravellers':
      return { ...state, travellers: action.value };
    case 'updateFromDate':
      return { ...state, fromDate: action.value };
    case 'updateToDate':
      return { ...state, toDate: action.value };
    default:
      throw new Error();
  }
}

const FlightSearch = (props) => {

  const isSearchEnabled = useSelector(state => state.isSearchEnabled)
  const formData = useSelector(state => state.formData)
  const [state, updateState] = useReducer(reducer, intialState);
  const [dateError, setDateError] = useState('')
  const dispatch = useDispatch();

  //Search Flight
  function searchFlights(event) {
    event.preventDefault()
    if (!state.fromDate && !state.toDate) {
      setDateError(TRANSLATIONS.PROVIDE_FROMDATE_TODATE)
      return
    } else if (!state.fromDate && state.toDate) {
      setDateError(TRANSLATIONS.FROMDATE_CAN_NOT_BE_EMPTY)
      return
    } else if (window.Date.parse(state.fromDate) > window.Date.parse(state.toDate)) {
      setDateError(TRANSLATIONS.FROMDATE_CAN_NOT_BE_GREATER)
      return
    }
    setDateError('')
    console.log(state)
    dispatch(updateSearchFormData(state))
    dispatch(enableSeachResults(true))
  }

  //update state on Change departTo dropdown 
  //can be used refs but not using since management of refs is not good

  function onChangeSelect(event, type) {
    if (event.target.value) {
      updateState({ type, value: event.target.value || '' })
    }
  }

  return (
    <Fragment>
      {!isSearchEnabled && <div className={classes.panel} id="container">
        <div className={classes.formContainer}>
          <form>
            <div className={classes.formGroup}>
              <label className={classes.formLabel}>{TRANSLATIONS.DEPART_FORM}</label>
              <SelectBox data={DepartFormData}
                defaultValue={formData && formData['departFrom'] ? formData['departFrom'] : state.departFrom}
                onChange={(event) => onChangeSelect(event, 'updateDepartFrom')} />
            </div>
            <div className={classes.formGroup}>
              <label className={classes.formLabel}>{TRANSLATIONS.GOING_TO}</label>
              <SelectBox data={GoingToFormData}
                defaultValue={formData && formData['goingTo'] ? formData['goingTo'] : state.goingTo}
                onChange={(event) => onChangeSelect(event, 'updateGoingTo')} />
            </div>
            <div className="rowFlex">
              <div>
                <label className={classes.formLabel}>{TRANSLATIONS.DEPART_DATE}</label>
                <Date style={{ width: '175px', marginRight: '20px' }}
                  min={getTodaysDate()}
                  value={formData && formData['fromDate'] ? formData['fromDate'] : getTodaysDate()}
                  onChange={(event) => onChangeSelect(event, 'updateFromDate')} />
              </div>
              <div >
                <label className={classes.formLabel}>{TRANSLATIONS.RETURN_DATE}</label>
                <Date style={{ width: '175px' }} onChange=
                  {(event) => onChangeSelect(event, 'updateToDate')}
                  value={formData && formData['toDate'] ? formData['toDate'] : getTodaysDate()}
                  min={getTodaysDate()}
                />
              </div>
            </div>
            <div className="rowFlex">
              <div>
                <label className={classes.formLabel}>{TRANSLATIONS.TRAVELLERS}</label>
                <input type="number" id="travellers"
                  value={formData && formData['travellers'] ? formData['travellers'] : state.travellers}
                  name="travellers" min="1" max="100" className={classes.inputStyle}
                  onChange={(event) => onChangeSelect(event, 'updateTravellers')}
                  style={{ marginRight: '20px', width: '170px' }} />
              </div>
              <div >
                <label className={classes.formLabel}>{TRANSLATIONS.CLASS}</label>
                <SelectBox style={{ width: '190px' }} data={classData}
                  defaultValue={formData && formData['class'] ? formData['class'] : state.class}
                  onChange={(event) => onChangeSelect(event, 'updateClass')} />
              </div>
            </div>
            {dateError && <p style={{ color: 'red' }}>{dateError}</p>}
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