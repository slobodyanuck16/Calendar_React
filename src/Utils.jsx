// вернет дату понедельника той недели, в которую входит переданный день
export const getStartOfWeek = (date) => {
    const dateCopy = new Date(date);
    const dayOfWeek = dateCopy.getDay();
    const difference =
        dayOfWeek === 0
            ? -6 // for Sunday
            : 1 - dayOfWeek;
    const monday = new Date(dateCopy.setDate(date.getDate() + difference));
    return new Date(
        monday.getFullYear(),
        monday.getMonth(),
        monday.getDate()
    );
};

// вернет массив из 7 дней, начиная с переданной даты
export const generateWeekRange = (startDate) => {
    const result = [];
    for (let i = 0; i < 7; i += 1) {
        const base = new Date(startDate);
        result.push(new Date(base.setDate(base.getDate() + i)).getDate());
    }
    return result;
};

const monthsNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

// вернет месяц и год для недели, в которой находится переданный день
export const getDisplayedMonth = date => {
    const weekStart = getStartOfWeek(date);
    const weekEnd = shmoment(date).add('days', 6).result();
    const startMonth = weekStart.getMonth();
    const startYear = weekStart.getFullYear();
    const endMonth = weekEnd.getMonth();
    const endYear = weekEnd.getFullYear();
    const isSameMonth = startMonth === endMonth;
    if (isSameMonth) {
        return `${monthsNames[startMonth]} ${startYear}`;
    }
    const isSameYear = startYear === endYear;
    return isSameYear
        ? `${monthsNames[startMonth]} - ${monthsNames[endMonth]} ${startYear}`
        : `${monthsNames[startMonth]} ${startYear} - ${monthsNames[endMonth]} ${endYear}`;
};

const getMethodsNames = {
    years: 'getFullYear',
    months: 'getMonth',
    days: 'getDate',
    hours: 'getHours',
    minutes: 'getMinutes',
    seconds: 'getSeconds',
    milliseconds: 'getMilliseconds',
  }
  
  const setMethodsNames = {
    years: 'setFullYear',
    months: 'setMonth',
    days: 'setDate',
    hours: 'setHours',
    minutes: 'setMinutes',
    seconds: 'setSeconds',
    milliseconds: 'setMilliseconds',
  }
  
  // ф-ция помогает добавить или отнять определенное количество времени от заданного
  // урпощенный аналог популярной библиотеки moment
  const shmoment = (date) => {
    let result = new Date(date);
  
    const calculator = {
        add(units, value) {
            const currentUnitValue = result[getMethodsNames[units]]();
            result = new Date(result[setMethodsNames[units]](currentUnitValue + value));
            return this;
        },
        subtract(units, value) {
            return this.add(units, -value);
        },
        result() {
            return result;
        }
    };
  
    return calculator;
  }
  
  export default shmoment;