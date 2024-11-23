export interface IGetQueryParams {
    city?: string;
    lat?: number;
    lon?: number;
    appid: string;
}

function getQueryParams(args: IGetQueryParams): URLSearchParams {
    const queryParams = new URLSearchParams();

    if (args.city) {
        queryParams.append('q', args.city);
    } else if (args.lat && args.lon) {
        queryParams.append('lat', args.lat.toString());
        queryParams.append('lon', args.lon.toString());
    }

    queryParams.append('appid', args.appid.toString());

    return queryParams;
}

export { getQueryParams };
