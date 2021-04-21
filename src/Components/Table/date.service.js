import moment from 'moment';

const allDaysOfWeek = (date) => {
    const firstDay = moment(date).startOf('week').isoWeekday();
    let count = firstDay;
  
   const daysOfWeek = [];

   for (let i = 1; i <= 7; i++) {
    switch (count) {
      case 1:
        daysOfWeek.push({dayOfWeek: 'Mon', dayCount: i});
        break;
      case 2:
        daysOfWeek.push({dayOfWeek: 'Tue', dayCount: i});
        break;
      case 3:
        daysOfWeek.push({dayOfWeek: 'Wed', dayCount: i});
        break;
      case 4:
        daysOfWeek.push({dayOfWeek: 'Thu', dayCount: i});
        break;
      case 5:
        daysOfWeek.push({dayOfWeek: 'Fri', dayCount: i});
        break;
      case 6:
        daysOfWeek.push({dayOfWeek: 'Sat', dayCount: i});
        break;
      case 7:
        daysOfWeek.push({dayOfWeek: 'Sun', dayCount: i});
        break;
      default:
        break;
    }

    count++;

    if (count > 7) {
      count = 1;
    }
  }
  return daysOfWeek; 
}


const daysOfMonth = (date) => {
    const daysOfWeek = [];
    const firstDay = moment(date).startOf('month').isoWeekday();
    const daysInMonth = moment(date).daysInMonth();
    let count = firstDay;

    for (let i = 1; i <= daysInMonth; i++) {
      switch (count) {
        case 1:
          daysOfWeek.push({dayOfWeek: 'Mon', dayCount: i});
          break;
        case 2:
          daysOfWeek.push({dayOfWeek: 'Tue', dayCount: i});
          break;
        case 3:
          daysOfWeek.push({dayOfWeek: 'Wed', dayCount: i});
          break;
        case 4:
          daysOfWeek.push({dayOfWeek: 'Thu', dayCount: i});
          break;
        case 5:
          daysOfWeek.push({dayOfWeek: 'Fri', dayCount: i});
          break;
        case 6:
          daysOfWeek.push({dayOfWeek: 'Sat', dayCount: i});
          break;
        case 7:
          daysOfWeek.push({dayOfWeek: 'Sun', dayCount: i});
          break;
        default:
          break;
      }

      count++;

      if (count > 7) {
        count = 1;
      }
    }
    return daysOfWeek; 
}

const quartalOfYear = (date) => {
    let daysOfQuartal = [];
    const startDay = moment(date).subtract(1, 'month');
    const prevMonth = daysOfMonth(startDay);
    console.log("prevMonth", prevMonth);
    
    const currentMonth = daysOfMonth(date);

    const startDayNext = moment(date).add(1, 'months')
    const futureMonth = daysOfMonth(startDayNext);
    daysOfQuartal = prevMonth.concat(currentMonth).concat(futureMonth)
    return daysOfQuartal
}

export {allDaysOfWeek, daysOfMonth, quartalOfYear};