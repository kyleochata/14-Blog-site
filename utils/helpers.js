module.exports = {

  // adds five years to the date, and formats it as M/D/YYYY
  format_date: (date) => {
    //month is index 0-11. must add 1 to get correct month
    let month = new Date(date).getMonth() + 1;
    let day = new Date(date).getDate();
    let year = new Date(date).getFullYear();
    return `${month}/${day}/${year}`

  }
};