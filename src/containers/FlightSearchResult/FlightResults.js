import classes from './FlightResult.module.css'
import TRANSLATIONS from '../../utils/translations'
import indigo from '../../assests/indigo.png'
import spicejet from '../../assests/spicejet.png'
import airasia from '../../assests/airasia.png'
import { FlightData } from '../../utils/mockData'
import { enableSeachResults } from '../../actions/AppActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const FlightResult = (props) => {
    const dispatch = useDispatch();
    const searchFormData = useSelector(state => state.formData)
    const [updatedFlightData, setFlightData] = useState(FlightData)
    const [sortBy, setSortBy] = useState('')
    const [minFare, setMinFare] = useState('')
    const [maxFare, setMaxFare] = useState('')
    const [defaultMinFare, setDefaultMinFare] = useState('')
    const [defaultMaxFare, setDefaultMaxFare] = useState('')
    const [economyFilter, setEconomyFilter] = useState({})
    const history = useHistory()

    useEffect(() => {
        if (!searchFormData && !Object.keys(searchFormData).length) {
            history.push('/flights')
        }
    }, [])

    //Function call on back click
    function goBack() {
        dispatch(enableSeachResults(false))
    }

    //create table rows

    function getFlightTableRows(flight, i) {
        const rows = []
        const { name, departure, arrival, baseFair, mainCabin, economy } = flight
        if (name === 'indigo') {
            rows.push(<td><img src={indigo} className="icon" alt="logo" /></td>)
        } else if (name === 'airasia') {
            rows.push(<td><img src={airasia} className="icon" alt="logo" /></td>)
        } else {
            rows.push(<td><img src={spicejet} className="icon" alt="logo" /></td>)
        }
        rows.push(<td>{name}</td>)
        rows.push(<td>{departure}</td>)
        rows.push(<td>{arrival}</td>)
        rows.push(<td>{baseFair}</td>)
        rows.push(<td>{mainCabin}</td>)
        rows.push(<td>{economy}</td>)
        rows.push(<td ><button className="btn" onClick={() => { }}>
            <i className="fas fa-check-circle" style={{ marginRight: '5px' }}></i>{TRANSLATIONS.BOOK_BUTTON}</button></td>)
        return rows;
    }

    //sort table data

    function sort() {
        const array = [...updatedFlightData];
        if (!sortBy) {
            return
        }
        array.sort((flight, prevFlight) => {
            if (sortBy === 'priceSortLowToHigh' || sortBy === 'priceSortHighToLow') {
                return sortBy === 'priceSortLowToHigh' ?
                    parseFloat(flight.baseFair) - parseFloat(prevFlight.baseFair) :
                    parseFloat(prevFlight.baseFair) - parseFloat(flight.baseFair)
            } else if (sortBy === 'deparatureSortLowToHigh' || sortBy === 'deparatureSortHighToLow') {
                return sortBy === 'deparatureSortLowToHigh' ?
                    parseFloat(flight.departure) - parseFloat(prevFlight.departure) :
                    parseFloat(prevFlight.departure) - parseFloat(flight.departure)
            } else if (sortBy === 'airLineSortAtoZ' || sortBy === 'airLineSortZtoA') {
                return sortBy === 'airLineSortAtoZ' ?
                    flight.name.localeCompare(prevFlight.name) :
                    prevFlight.name.localeCompare(flight.name);
            } else if (sortBy === 'durationSortLowToHigh' || sortBy === 'durationSortHighToLow') {
                return sortBy === 'deparatureSortLowToHigh' ?
                    (parseFloat(flight.arrival) - parseFloat(flight.departure)) -
                    (parseFloat(prevFlight.arrival) - parseFloat(prevFlight.departure)) :
                    (parseFloat(prevFlight.arrival) - parseFloat(prevFlight.departure)) -
                    (parseFloat(flight.arrival) - parseFloat(flight.departure))
            }
        })
        setFlightData(array)
    }

    //get sort by value
    function changeSortby(event) {
        if (event.target.value) {
            setSortBy(event.target.value);
        }
    }

    //get Minimum value from array 

    function getMinValue() {
        if (!defaultMinFare  && !defaultMaxFare) {
            const array = [...updatedFlightData];
            array.sort((flight, prevFlight) => {
                return parseFloat(flight.baseFair) - parseFloat(prevFlight.baseFair)
            })
            setDefaultMinFare(array[0].baseFair)
            setDefaultMaxFare( array[array.length - 1].baseFair)
        }
        return { defaultMinFare, defaultMaxFare }
    }


    function updateFareRange(event, type) {
        type === 'minFareInput' ? setMinFare(event.target.value) : setMaxFare(event.target.value)
    }

    function updateBookingClass(event, type) {
        var filterValues = { ...economyFilter }
        filterValues[type] = event.target.checked
        setEconomyFilter(filterValues)
    }

    //filter function

    function applyFilter() {
        let array = []
        let condition;
        array = updatedFlightData.filter((value, index) => {
            condition = value['baseFair'] >= (minFare || getMinValue().defaultMinFare)
                && value['baseFair'] <= (maxFare || getMinValue().defaultMaxFare)
            if (economyFilter.economy) {
                condition = condition && value.economy !== 'N/A'
            }
            if (economyFilter.firstClass) {
                condition = condition && value.mainCabin !== 'N/A'
            }
            return condition
        })
        console.log(array)
        setFlightData(array)
    }

    return (
        <div style={{ display: "flex", flexDirection: 'column', marginTop: '72px' }}>
            <div className={classes.navBarBack}>
                <div className={classes.navHeading1}>
                    <button className="back-button" onClick={goBack}>
                        <i className="fas fa-chevron-left" style={{ fontSize: '25px' }}></i>
                        <label className={classes['button-label']}>{'Go Back'}</label>
                    </button>
                </div>
            </div>
            <div className={classes.resultContainer}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className={classes.filterWrapper} style={{ marginLeft: '20px' }}>
                        <div style={{ width: '250px', padding: '5px' }}>
                            <div className={classes.filterHPanel}>
                                <label className={classes.labelText}>{TRANSLATIONS.SORT_BY}</label>
                            </div>
                            <label className={classes['container-radio']}>{TRANSLATIONS.PRICE_SORT_LOW_HIGHT}
                                <input type="radio" name="radio" value="priceSortLowToHigh" onChange={changeSortby} />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>{TRANSLATIONS.PRICE_SORT_HIGH_LOW}
                                <input type="radio" name="radio" value="priceSortHighToLow" onChange={changeSortby} />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>{TRANSLATIONS.DURATION_SORT_LOW_HIGH}
                                <input type="radio" name="radio" value="durationSortLowToHigh" onChange={changeSortby} />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>{TRANSLATIONS.DURATION_SORT_HIGH_LOW}
                                <input type="radio" name="radio" value="durationSortHighToLow" onChange={changeSortby} />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>{TRANSLATIONS.DEPARTURE_SORT_LOW_HIGH}
                                <input type="radio" name="radio" value="deparatureSortLowToHigh" onChange={changeSortby} />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>{TRANSLATIONS.DEPARTURE_SORT_HIGH_LOW}
                                <input type="radio" name="radio" value="deparatureSortHighToLow" onChange={changeSortby} />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>{TRANSLATIONS.AIRLINE_A_Z}
                                <input type="radio" name="radio" value="airLineSortAtoZ" onChange={changeSortby} />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>{TRANSLATIONS.AIRLINE_Z_A}
                                <input type="radio" name="radio" value="airLineSortZtoA" onChange={changeSortby} />
                                <span className={classes.checkmark}></span>
                            </label>
                            <button className="simpleBtn" style=
                                {{ margin: '25px 80px', background: 'RoyalBlue', color: 'white', padding: '8px 20px' }}
                                onClick={() => { sort() }}>{TRANSLATIONS.APPLY}</button>
                        </div>
                    </div>
                    <div className={classes.filterWrapper} style={{ marginLeft: '20px' }}>
                        <div style={{ width: '250px', padding: '5px' }}>
                            <div className={classes.filterHPanel}>
                                <label className={classes.labelText}>{TRANSLATIONS.FILTER_BY}</label>
                            </div>
                            <p className={classes.pStyle}>{TRANSLATIONS.PRICE_RANGE}</p>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div>
                                    <label className={classes.formLabel}>{TRANSLATIONS.MINIMUM_PRICE}</label>
                                    <input type="number" id="tentacles" name="tentacles"
                                        min={getMinValue().defaultMinFare} max={getMinValue().defaultMaxFare} className={classes.inputStyle}
                                        onChange={(event) => updateFareRange(event, 'minFareInput')}
                                        style={{ marginRight: '20px', width: '90px' }} value={minFare || getMinValue().defaultMinFare} />
                                </div>
                                <div>
                                    <label className={classes.formLabel}>{TRANSLATIONS.MAXMIMUM_PRICE}</label>
                                    <input type="number" id="tentacles" name="tentacles" min={getMinValue().defaultMinFare} max={getMinValue().defaultMaxFare}
                                        className={classes.inputStyle}
                                        onChange={(event) => updateFareRange(event, 'maxFareInput')}
                                        style={{ marginRight: '20px', width: '90px' }} value={maxFare || getMinValue().defaultMaxFare} />
                                </div>
                            </div>
                            <p className={classes.pStyle}>{TRANSLATIONS.BOOKING_CLASS}</p>
                            <label className={classes['container-checkbox']}>{TRANSLATIONS.ECONOMY}
                                <input type="checkbox" name="economy"
                                    onChange={(event) => updateBookingClass(event, 'economy')}
                                    id="economy" />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-checkbox']}>{TRANSLATIONS.FIRST_CLASS}
                                <input type="checkbox"
                                    onChange={(event) => updateBookingClass(event, 'firstClass')}
                                    name="firstClass" id="firstClass" />
                                <span className={classes.checkmark}></span>
                            </label>
                            <div style={{ display: 'flex', flexDirection: 'row', margin: '25px' }}>
                                <button className="simpleBtn"
                                    onClick={() => { }}>{TRANSLATIONS.RESET_ALL}</button>
                                <button className="simpleBtn" style=
                                    {{ marginLeft: '20px', background: 'RoyalBlue', color: 'white' }}
                                    onClick={() => applyFilter()}> {TRANSLATIONS.APPLY}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: 'column' }}>
                    <div className={classes.flightResult}>
                        <div className={classes.flightResultWrapper}>
                            <div className={classes.flightResultTop}>
                                <div>
                                    <h4 className={classes.headSource}>{searchFormData['departFrom'] || 'N/A'}</h4>
                                    <p className={classes.startDate}>{searchFormData['fromDate'] || 'N/A'}</p>
                                </div>
                                <div style={{ marginLeft: '3%' }}>
                                    <i className="fas fa-arrow-right exchangeInc"></i>
                                </div>
                                <div style={{ marginLeft: '3%' }}>
                                    <h4 className={classes.headSource}>{searchFormData['goingTo'] || 'N/A'}</h4>
                                    <p className={classes.startDate}>{searchFormData['toDate'] || 'N/A'}</p>
                                </div>
                            </div>
                            <table id="table">
                                <thead>
                                    <tr>
                                        <th className="firstChildRow"></th>
                                        {['FLIGHT_NAME', 'DEPARTURE', 'ARRIVAL', 'BASE_FAIR', 'CABIN_FARE', 'ECONOMY_FARE'].map((key) => {
                                            return <th key={key}><b>{TRANSLATIONS[key]}</b></th>
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {updatedFlightData.map((data, index) => {
                                        return (
                                            <tr key={index} >
                                                {getFlightTableRows(data, index)}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={classes.flightResult}>
                        <div className={classes.flightResultWrapper}>
                            <div className={classes.flightResultTop}>
                                <div>
                                    <h4 className={classes.headSource}>{searchFormData['goingTo'] || 'N/A'}</h4>
                                    <p className={classes.startDate}>{searchFormData['toDate'] || 'N/A'}</p>
                                </div>
                                <div style={{ marginLeft: '3%' }}>
                                    <i className="fas fa-arrow-right exchangeInc"></i>
                                </div>
                                <div style={{ marginLeft: '3%' }}>
                                    <h4 className={classes.headSource}>{searchFormData['departFrom'] || 'N/A'}</h4>
                                    <p className={classes.startDate}>{searchFormData['fromDate'] || 'N/A'}</p>
                                </div>
                            </div>
                            <table id="table">
                                <thead>
                                    <tr>
                                        <th className="firstChildRow"></th>
                                        {['FLIGHT_NAME', 'DEPARTURE', 'ARRIVAL', 'BASE_FAIR', 'CABIN_FARE', 'ECONOMY_FARE'].map((key) => {
                                            return <th key={key}><b>{TRANSLATIONS[key]}</b></th>
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {updatedFlightData.map((data, index) => {
                                        return (
                                            <tr key={index} >
                                                {getFlightTableRows(data, index)}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightResult;