interface DateFormatResult {
    currentDate: string;
    currentTime: string;
    dayWeek: string;
}

const days: { [key: number]: string } = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday',
};

const months: { [key: number]: string } = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
};

const getDay = (date: Date): string => days[date.getUTCDay()];
const getMonth = (date: Date): string => months[date.getUTCMonth() + 1];

function formatDate(time: number): DateFormatResult {
    const date = new Date(time * 1000); // умножаем на 1000, так как в JavaScript время измеряется в миллисекундах, а time передается в Unix, UTC
    // date.setHours(date.getHours() + 3);  // включить если нужно время по мск

    const year = date.getUTCFullYear();
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    const dayWeek = getDay(date);
    const monthYear = getMonth(date);

    const currentDate = `${day} ${monthYear}, ${year}`;
    const currentTime = `${hours}:${minutes}`;

    return {
        currentDate: currentDate,
        currentTime: currentTime,
        dayWeek: dayWeek,
    };
}

function rewriteDate(dateString: string) {
    const date = new Date(dateString);

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];

    return {
        dayOfWeek,
        dayOfMonth,
        month,
    };
}

export { formatDate, rewriteDate };
