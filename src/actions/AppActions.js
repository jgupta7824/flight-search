// Redux connected action tags
const IS_SEARCH_ENABLED = 'isSearchEnabled'

//on serach clicked update store

function enableSeachResults(isSearchEnabled){
    return { type: IS_SEARCH_ENABLED, data: isSearchEnabled }
}

/**
 *  Redux connected actions
 * @type {Object}
 */
const AppActionTypes = {
    IS_SEARCH_ENABLED
}

export {
    AppActionTypes,
    enableSeachResults
}
