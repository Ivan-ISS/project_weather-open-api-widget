export interface ICurrentWRes {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    name: string;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    visibility: number;
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        },
    ];
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    rain: {
        '1h': 2.73;
    };
}

export interface IForecastFiveWRes {
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    };
    cnt: number;
    cod: string;
    message: number;
    list: [
        {
            clouds: {
                all: number;
            };
            dt: number;
            dt_txt: string;
            main: {
                temp: number;
                feels_like: number;
                temp_min: number;
                temp_max: number;
                pressure: number;
                sea_level: number;
                grnd_level: number;
                humidity: number;
                temp_kf: number;
            };
            pop: 0.33;
            rain: {
                '3h': 0.57;
            };
            sys: {
                pod: string;
            };
            weather: [
                {
                    id: number;
                    main: string;
                    description: string;
                    icon: string;
                },
            ];
            wind: {
                speed: number;
                deg: number;
                gust: number;
            };
            visibility: number;
        },
    ];
}

export interface ICurrentW {
    dt: {
        currentDate: string;
        currentTime: string;
        dayWeek: string;
    };

    country: string;
    city: string;
    timezone: number;

    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
    clouds: number;
    visibility: number;
    sunrise: string;
    sunset: string;
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    backImg: string;
}
