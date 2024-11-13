export interface IGetQueryParams {
    lat: number;
    lon: number;
    appid: string;
}

function getQueryParams(args: IGetQueryParams): URLSearchParams {
    const queryParams = new URLSearchParams();

    queryParams.append('lat', args.lat.toString());
    queryParams.append('lon', args.lon.toString());
    queryParams.append('appid', args.appid.toString());

    return queryParams;
}

export { getQueryParams };
