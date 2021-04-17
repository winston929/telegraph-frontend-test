const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const padding = (value) => ('0' + value).slice(-2);
const get12HourTime = (value) => value % 12;
const getAMPM = (value) => value >= 12 ? 'pm' : 'am';

const getArticleDateFormat = (date) => {
    return `${weekdayArr[date.getDay()]} ${padding(date.getDate())} ${monthArr[date.getMonth()]} ${date.getFullYear()}, ${get12HourTime(date.getHours())}:${padding(date.getMinutes())}${getAMPM(date.getHours())}`;
};

const getCommentsDateFormat = (date) => {
    return `${padding(date.getDate())} ${monthArr[date.getMonth()].slice(0, 3)} ${date.getFullYear()} ${get12HourTime(date.getHours())}:${padding(date.getMinutes())}${getAMPM(date.getHours()).toUpperCase()}`;
};

const dateFormatter = (isoFormat, isArticle) => {
    const date = new Date(isoFormat);
    return isArticle ? getArticleDateFormat(date) : getCommentsDateFormat(date);
};

module.exports = dateFormatter;