let start = new Date(1939, 01, 01)
let now = new Date()

function DaysInMonth(date2_UTC) {
    var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
    var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return monthLength;
}

function calculateTime() { 
    //convert to UTC
    var date2_UTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    var date1_UTC = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));

    //--------------------------------------------------------------
    var days = date2_UTC.getDate() - date1_UTC.getDate();
    if (days < 0)
    {

        date2_UTC.setMonth(date2_UTC.getMonth());
        days += DaysInMonth(date2_UTC);
    }
    //--------------------------------------------------------------
    var months = date2_UTC.getMonth() - date1_UTC.getMonth();
    if (months < 0)
    {
        date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
        months += 12;
    }
    //--------------------------------------------------------------
    var years = date2_UTC.getFullYear() - date1_UTC.getFullYear();

    let result = {}
    result.years = () => { return years }
    result.months = () => { return months }
    result.days = () => { return Math.floor(days) }

    return result
}

module.exports.calculateTime = calculateTime
