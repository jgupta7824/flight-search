function getTodaysDate() {
    //setting from date greater then todays date
    var today = new window.Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today
}

export {
    getTodaysDate
}