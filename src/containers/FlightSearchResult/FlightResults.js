import classes from './FlightResult.module.css'
import TRANSLATIONS from '../../utils/translations'
import indigo from '../../assests/indigo.png'
import {enableSeachResults} from '../../actions/AppActions'
import { useDispatch } from 'react-redux'

const FlightResult = (props) => {
    const dispatch = useDispatch();

    //Function call on back click
    function goBack(){
        dispatch(enableSeachResults(false))
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
                                <label className={classes.labelText}>Sort By</label>
                            </div>
                            <label className={classes['container-radio']}>Price (Lowest to Highest)
                            <input type="radio" name="radio" value="1" />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>Price (Highest to Lowest)
                            <input type="radio" name="radio" value="2" />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>Duration (Shortest to Longest)
                            <input type="radio" name="radio" value="3" />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>Duration (Longest to Shortest)
                            <input type="radio" name="radio" value="4" />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>Departure (Earliest to Latest)
                            <input type="radio" name="radio" value="5" />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>Departure (Latest to Earliest)
                            <input type="radio" name="radio" value="6" />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>Airline (A to Z)
                            <input type="radio" name="radio" value="7" />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-radio']}>Airline (Z to A)
                            <input type="radio" name="radio" value="8" />
                                <span className={classes.checkmark}></span>
                            </label>
                            <button className="simpleBtn" style=
                                {{ margin: '25px 80px', background: 'RoyalBlue', color: 'white', padding: '8px 20px' }}
                                onClick={() => { }}> Apply</button>
                        </div>
                    </div>
                    <div className={classes.filterWrapper} style={{ marginLeft: '20px' }}>
                        <div style={{ width: '250px', padding: '5px' }}>
                            <div className={classes.filterHPanel}>
                                <label className={classes.labelText}>Filter By</label>
                            </div>
                            <p className={classes.pStyle}>Price Range</p>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div>
                                    <label className={classes.formLabel}>{TRANSLATIONS.MINIMUM_PRICE}</label>
                                    <input type="number" id="tentacles" name="tentacles" min="1" max="100" className={classes.inputStyle}
                                        style={{ marginRight: '20px', width: '90px' }} />
                                </div>
                                <div>
                                    <label className={classes.formLabel}>{TRANSLATIONS.MAXMIMUM_PRICE}</label>
                                    <input type="number" id="tentacles" name="tentacles" min="1" max="100" className={classes.inputStyle}
                                        style={{ marginRight: '20px', width: '90px' }} />
                                </div>
                            </div>
                            <p className={classes.pStyle}>Booking Class</p>
                            <label className={classes['container-checkbox']}>Economy <b
                                style={{ marginLeft: '100px' }}>$150</b>
                                <input type="checkbox" name="scales" id="scales" />
                                <span className={classes.checkmark}></span>
                            </label>
                            <label className={classes['container-checkbox']}>First Class <b
                                style={{ marginLeft: '90px' }}>$150</b>
                                <input type="checkbox" name="horns" id="scales" />
                                <span className={classes.checkmark}></span>
                            </label>
                            <div style={{ display: 'flex', flexDirection: 'row', margin: '25px' }}>
                                <button className="simpleBtn"
                                    onClick={() => { }}>Reset All</button>
                                <button className="simpleBtn" style=
                                    {{ marginLeft: '20px', background: 'RoyalBlue', color: 'white' }}
                                    onClick={() => { }}> Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: 'column' }}>
                    <div className={classes.flightResult}>
                        <div className={classes.flightResultWrapper}>
                            <div className={classes.flightResultTop}>
                                <div>
                                    <h4 className={classes.headSource}>Delhi (DEL)</h4>
                                    <p className={classes.startDate}>2021-08-27</p>
                                </div>
                                <div style={{ marginLeft: '3%' }}>
                                    <i className="fas fa-arrow-right exchangeInc"></i>
                                </div>
                                <div style={{ marginLeft: '3%' }}>
                                    <h4 className={classes.headSource}>Coimbatore (CJB)</h4>
                                    <p className={classes.startDate}>2021-08-27</p>
                                </div>
                            </div>
                            <table id="table">
                                <thead>
                                    <tr>
                                        <th className="firstChildRow"></th>
                                        <th><b>Flight Name</b> </th>
                                        <th><b>Departure</b> </th>
                                        <th><b>Arrival</b></th>
                                        <th><b>Fare</b> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={indigo} className="icon" alt="logo" />
                                        </td>
                                        <td>Indigo</td>
                                        <td>24:45</td>
                                        <td>14:00</td>
                                        <td>1192</td>
                                        <td ><button className="btn" onClick={() => { }}>
                                            <i className="fas fa-check-circle"></i> Book</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={indigo} className="icon" alt="logo" />
                                        </td>
                                        <td>Indigo</td>
                                        <td>24:45</td>
                                        <td>14:00</td>
                                        <td>1192</td>
                                        <td ><button className="btn" onClick={() => { }}>
                                            <i className="fas fa-check-circle"></i> Book</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={indigo} className="icon" alt="logo" />
                                        </td>
                                        <td>Indigo</td>
                                        <td>24:45</td>
                                        <td>14:00</td>
                                        <td>1192</td>
                                        <td ><button className="btn" onClick={() => { }}>
                                            <i className="fas fa-check-circle"></i> Book</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={indigo} className="icon" alt="logo" />
                                        </td>
                                        <td>Indigo</td>
                                        <td>24:45</td>
                                        <td>14:00</td>
                                        <td>1192</td>
                                        <td ><button className="btn" onClick={() => { }}>
                                            <i className="fas fa-check-circle"></i> Book</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={indigo} className="icon" alt="logo" />
                                        </td>
                                        <td>Indigo</td>
                                        <td>24:45</td>
                                        <td>14:00</td>
                                        <td>1192</td>
                                        <td ><button className="btn" onClick={() => { }}>
                                            <i className="fas fa-check-circle"></i> Book</button></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={classes.flightResult}>
                        <div className={classes.flightResultWrapper}>
                            <div className={classes.flightResultTop}>
                                <div>
                                    <h4 className={classes.headSource}>Delhi (DEL)</h4>
                                    <p className={classes.startDate}>2021-08-27</p>
                                </div>
                                <div style={{ marginLeft: '3%' }}>
                                    <i className="fas fa-arrow-right exchangeInc"></i>
                                </div>
                                <div style={{ marginLeft: '3%' }}>
                                    <h4 className={classes.headSource}>Coimbatore (CJB)</h4>
                                    <p className={classes.startDate}>2021-08-27</p>
                                </div>
                            </div>
                            <table id="table">
                                <thead>
                                    <tr>
                                        <th className="firstChildRow"></th>
                                        <th><b>Flight Name</b> </th>
                                        <th><b>Departure</b> </th>
                                        <th><b>Arrival</b></th>
                                        <th><b>Fare</b> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={indigo} className="icon" alt="logo" />
                                        </td>
                                        <td>Indigo</td>
                                        <td>24:45</td>
                                        <td>14:00</td>
                                        <td>1192</td>
                                        <td ><button className="btn" onClick={() => { }}>
                                            <i className="fas fa-check-circle"></i> Book</button></td>
                                    </tr>
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