import { ICurrentW, IForecastFiveW } from './types/entityTypes';

// Наименование цветовой темы
export const themeName = {
    dark: 'Dark',
    light: 'Light',
};

// Плейсхолдеры для инпутов
export const placeholders = {
    search: 'Search location...',
};

// Пустой объект погоды
export const initialCurrentWeather: ICurrentW = {
    dt: {
        currentDate: 'Day Month, Year',
        currentTime: '00:00',
        dayWeek: 'Day week',
    },

    country: 'Country',
    city: 'City',
    timezone: 0,

    temp: 0,
    feelsLike: 0,
    tempMin: 0,
    tempMax: 0,
    pressure: 0,
    humidity: 0,
    clouds: 0,
    visibility: 0,
    sunrise: '00:00',
    sunset: '00:00',
    weather: {
        id: 0,
        main: 'Main',
        description: 'Description',
        icon: 'clearDay',
    },
    wind: {
        speed: 0,
        deg: 0,
        gust: 0,
    },
    backImg: 'images/jpeg/skyDay.jpg',
    error: '',
};

// Пустой объект погоды на пять суток
export const initialForecastFiveWeather: IForecastFiveW[] = Array.from({ length: 5 }, () => ({
    date: '1980-01-01',
    hours: Array.from({ length: 8 }, () => ({
        time: '15:00:00',
        temp: 0,
        feelsLike: 0,
        tempMin: 0,
        tempMax: 0,
        pressure: 0,
        humidity: 0,
        clouds: 0,
        visibility: 0,
        weather: {
            id: 0,
            main: 'Main',
            description: 'Description',
            icon: 'clearDay',
        },
        wind: {
            speed: 0,
            deg: 0,
            gust: 0,
        },
        pop: 0,
        pod: 'n',
    })),
}));

// Время для дня и ночи
export const timesToCheckDay = [
    '12:00:00',
    '15:00:00',
    '18:00:00',
    '21:00:00',
    '00:00:00',
    '03:00:00',
    '06:00:00',
    '09:00:00',
    '12:00:00',
];

export const timesToCheckNight = [
    '00:00:00',
    '03:00:00',
    '06:00:00',
    '09:00:00',
    '12:00:00',
    '15:00:00',
    '18:00:00',
    '21:00:00',
    '00:00:00',
];

// Пути до фоновых картинок
export const backgroundImages: { [key: string]: string } = {
    '01d': 'images/jpeg/skyDay.jpg',
    '02d': 'images/jpeg/skyDay.jpg',
    '03d': 'images/jpeg/skyDay.jpg',
    '04d': 'images/jpeg/skyDay.jpg',
    '09d': 'images/jpeg/skyDay.jpg',
    '10d': 'images/jpeg/skyDay.jpg',
    '11d': 'images/jpeg/skyDay.jpg',
    '13d': 'images/jpeg/skyDay.jpg',
    '50d': 'images/jpeg/skyDay.jpg',
    '01n': 'images/jpeg/skyNight.jpg',
    '02n': 'images/jpeg/skyNight.jpg',
    '03n': 'images/jpeg/skyNight.jpg',
    '04n': 'images/jpeg/skyNight.jpg',
    '09n': 'images/jpeg/skyNight.jpg',
    '10n': 'images/jpeg/skyNight.jpg',
    '11n': 'images/jpeg/skyNight.jpg',
    '13n': 'images/jpeg/skyNight.jpg',
    '50n': 'images/jpeg/skyNight.jpg',
};

// Иконки
export const weatherIcons: { [key: string]: string } = {
    '01d': 'clearDay',
    '02d': 'fewCloudsDay',
    '03d': 'scatteredClouds',
    '04d': 'brokenClouds',
    '09d': 'showerRain',
    '10d': 'rain',
    '11d': 'thunderstorm',
    '13d': 'snow',
    '50d': 'mist',
    '01n': 'clearNight',
    '02n': 'fewCloudsNight',
    '03n': 'scatteredClouds',
    '04n': 'brokenClouds',
    '09n': 'showerRain',
    '10n': 'rain',
    '11n': 'thunderstorm',
    '13n': 'snow',
    '50n': 'mist',
};

// Иконки - детали текущей погоды
export const indicatorIcons = [
    { name: 'Humidity', text: '%' },
    { name: 'Visibility', text: 'km' },
    { name: 'Wind', text: 'km/h' },
    { name: 'Sunrise', text: '' },
    { name: 'Sunset', text: '' },
];

// Коэффициенты перевода величин
export const conversionFactors = {
    temp: 273,
    pressure: 0.7500637554192,
    visibility: 0.001,
    speed: 3.6,
};

// Страны
export const countries: { [key: string]: string } = {
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    AL: 'Albania',
    DZ: 'Algeria',
    VI: 'United States Virgin Islands',
    AS: 'American Samoa',
    AI: 'Anguilla',
    AO: 'Angola',
    AD: 'Andorra',
    AQ: 'Antarctica',
    AG: 'Antigua and Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AF: 'Afghanistan',
    BS: 'Bahamas',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BH: 'Bahrain',
    BZ: 'Belize',
    BY: 'Belarus',
    BE: 'Belgium',
    BJ: 'Benin',
    BM: 'Bermuda',
    BG: 'Bulgaria',
    BO: 'Bolivia',
    BQ: 'Caribbean Netherlands',
    BA: 'Bosnia and Herzegovina',
    BW: 'Botswana',
    BR: 'Brazil',
    IO: 'British Indian Ocean Territory',
    VG: 'British Virgin Islands',
    BN: 'Brunei Darussalam',
    BV: 'Bouvet Island',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    BT: 'Bhutan',
    VU: 'Vanuatu',
    VA: 'Vatican',
    GB: 'Great Britain',
    HU: 'Hungary',
    VE: 'Venezuela',
    TL: 'East Timor',
    VN: 'Vietnam',
    GA: 'Gabon',
    HT: 'Haiti',
    GY: 'Guyana',
    GM: 'Gambia',
    GH: 'Ghana',
    GP: 'Guadeloupe',
    GT: 'Guatemala',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    DE: 'Germany',
    GG: 'Guernsey',
    GI: 'Gibraltar',
    HN: 'Honduras',
    HK: 'Hong Kong',
    GD: 'Grenada',
    GL: 'Greenland',
    GR: 'Greece',
    GE: 'Georgia',
    GU: 'Guam',
    DK: 'Denmark',
    CD: 'Democratic Republic of the Congo',
    JE: 'Jersey',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Republic',
    EG: 'Egypt',
    ZM: 'Zambia',
    EH: 'Western Sahara',
    ZW: 'Zimbabwe',
    IL: 'Israel',
    IN: 'India',
    ID: 'Indonesia',
    JO: 'Jordan',
    IQ: 'Iraq',
    IR: 'Iran',
    IE: 'Ireland',
    IS: 'Iceland',
    ES: 'Spain',
    IT: 'Italy',
    YE: 'Yemen',
    CV: 'Cape Verde',
    KZ: 'Kazakhstan',
    KY: 'Cayman Islands',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    QA: 'Quatar',
    KE: 'Kenya',
    CY: 'Cyprus',
    KG: 'Kyrgyzstan',
    KI: 'Kiribati',
    CN: 'China',
    KP: 'North Korea',
    CC: 'Cocos (Keeling) Islands',
    CO: 'Colombia',
    KM: 'Comoros',
    KR: 'Korea',
    CR: 'Costa Rica',
    CI: 'Cote d`Ivoire (Ivory Coast)',
    CU: 'Cuba',
    KW: 'Kuwait',
    CW: 'Curacao',
    LA: 'Laos',
    LV: 'Latvia',
    LS: 'Lesotho',
    LR: 'Liberia',
    LB: 'Lebanon',
    LY: 'Libya',
    LT: 'Lithuania',
    LI: 'Liechtenstein',
    LU: 'Luxembourg',
    MU: 'Mauritius',
    MR: 'Mauritania',
    MG: 'Madagascar',
    YT: 'Mayotte',
    MO: 'Macau',
    MK: 'Macedonia',
    MW: 'Malawi',
    MY: 'Malaysia',
    ML: 'Mali',
    MV: 'Maldives',
    MT: 'Malta',
    MA: 'Morocco',
    MQ: 'Martinique',
    MH: 'Marshall Islands',
    MX: 'Mexico',
    MZ: 'Mozambique',
    MD: 'Moldova',
    MC: 'Monaco',
    MN: 'Mongolia',
    MS: 'Montserrat',
    MM: 'Myanmar (Burma)',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NE: 'Niger',
    NG: 'Nigeria',
    AN: 'Netherlands Antilles',
    NL: 'Netherlands',
    NI: 'Nicaragua',
    NU: 'Niue',
    NZ: 'New Zealand',
    NC: 'New Caledonia',
    NO: 'Norway',
    AE: 'United Arab Emirates',
    OM: 'Oman',
    NF: 'Norfolk Island',
    CX: 'Christmas Island',
    SH: 'Saint Helena',
    HM: 'Heard Island and McDonald Islands',
    CK: 'Cook Islands',
    PN: 'Pitcairn Islands',
    TC: 'The Turks and Caicos Islands',
    WF: 'Wallis and Futuna',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestinian Territories',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    CG: 'Republic of the Congo',
    RE: 'Reunion',
    RU: 'Russia',
    RW: 'Rwanda',
    RO: 'Romania',
    SV: 'El Salvador',
    WS: 'Samoa',
    SM: 'San Marino',
    ST: 'Sao Tome and Principe',
    SA: 'Saudi Arabia',
    MP: 'Northern Mariana Islands',
    SC: 'Seychelles',
    PM: 'Saint-Pierre and Miquelon',
    SN: 'Senegal',
    VC: 'Saint Vincent and the Grenadines',
    KN: 'Saint Kitts and Nevis',
    LC: 'Saint Lucia',
    RS: 'Serbia',
    SG: 'Singapore',
    SY: 'Syria',
    SK: 'Slovakia',
    SI: 'Slovenia',
    SB: 'Solomon Islands',
    SO: 'Somalia',
    SD: 'Sudan',
    SR: 'Suriname',
    US: 'USA',
    SL: 'Sierra Leone',
    TJ: 'Tajikistan',
    TH: 'Thailand',
    TW: 'Taiwan (Taipei)',
    TZ: 'Tanzania',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad and Tobago',
    TV: 'Tuvalu',
    TN: 'Tunisia',
    TM: 'Turkmenistan',
    TR: 'Turkey',
    UG: 'Uganda',
    UZ: 'Uzbekistan',
    UA: 'Ukraine',
    UY: 'Uruguay',
    FO: 'Faroe Islands',
    FM: 'Federated States of Micronesia',
    FJ: 'Fiji',
    PH: 'Philippines',
    FI: 'Finland',
    FK: 'Falkland Islands (Malvinas)',
    FR: 'France',
    GF: 'French Guiana',
    PF: 'French Polynesia',
    TF: 'French Southern Territories',
    HR: 'Croatia',
    CF: 'Central African Republic',
    TD: 'Chad',
    ME: 'Montenegro',
    CZ: 'Czechia',
    CL: 'Chile',
    CH: 'Switzerland',
    SE: 'Sweden',
    SJ: 'Svalbard and Jan Mayen',
    LK: 'Sri Lanka',
    EC: 'Ecuador',
    GQ: 'Equatorial Guinea',
    ER: 'Eritrea',
    SZ: 'Eswatini',
    EE: 'Estonia',
    ET: 'Ethiopia',
    ZA: 'Republic of South Africa',
    GS: 'South Georgia and the South Sandwich Islands',
    JM: 'Jamaica',
    JP: 'Japan',
};
