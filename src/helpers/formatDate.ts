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

const getDay = (date: Date): string => {
    const dayIndex = date.getDay();
    return days[dayIndex] || '';
};

const getMonth = (date: Date): string => {
    const monthIndex = date.getMonth() + 1;
    return months[monthIndex] || '';
};

function formatDate(time: number): DateFormatResult {
    const date = new Date(time * 1000); // умножаем на 1000, так как в JavaScript время измеряется в миллисекундах, а time передается в Unix, UTC
    // date.setHours(date.getHours() + 3); // включить если нужно время по мск

    const year = date.getUTCFullYear();
    // const month = date.getUTCMonth() + 1; // добавляем 1, так как месяцы в JavaScript нумеруются с 0
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    // const seconds = date.getUTCSeconds();

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

export { formatDate };
