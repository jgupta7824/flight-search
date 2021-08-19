// Redux connected action tags
const IS_SEARCH_ENABLED = 'isSearchEnabled'
const UPDATE_FORM_DATE= 'updateFormDate'

//on serach clicked update store

function enableSeachResults(isSearchEnabled){
    return { type: IS_SEARCH_ENABLED, data: isSearchEnabled }
}

//update store with form values
function updateSearchFormData(formData){
    return { type: UPDATE_FORM_DATE, data: formData }
}

/**
 *  Redux connected actions
 * @type {Object}
 */
const AppActionTypes = {
    IS_SEARCH_ENABLED,
    UPDATE_FORM_DATE
}

export {
    AppActionTypes,
    enableSeachResults,
    updateSearchFormData
}
