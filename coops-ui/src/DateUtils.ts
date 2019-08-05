const DateUtils = {
  methods: {
    dateToUsableString: function (dateObj) {
      const year = dateObj.getFullYear().toString()
      const month = (dateObj.getMonth() + 1).toString().padStart(2, '0')
      const date = dateObj.getDate().toString().padStart(2, '0')
      return `${year}-${month}-${date}`
    },

    // util function to compare simple date strings YYYY-MM-DD
    compareDates (date1, date2, operator) {
      if (!date1 || !date2 || !operator) return true

      // convert dates to numbers YYYYMMDD
      date1 = date1.split('-').join('')
      date2 = date2.split('-').join('')

      console.log(date1 + operator + date2)

      return eval(date1 + operator + date2) // eslint-disable-line no-eval
    }
  }
}

export default DateUtils
