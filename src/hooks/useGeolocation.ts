export interface IUseGeolocation {
    setLatitude: (latitude: number) => void;
    setLongitude: (longitude: number) => void;
    setGeoStatus: (status: string) => void;
}

const useGeolocation = ({ setLatitude, setLongitude, setGeoStatus }: IUseGeolocation) => {
    const success = (position: GeolocationPosition) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setGeoStatus('Местоположение определено');
    };

    const error = () => {
        setGeoStatus('Определение местоположения невозможно');
    };

    const getGeolocation = () => {
        if (!navigator.geolocation) {
            setGeoStatus('Geolocation не поддерживается вашим браузером');
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };

    return [getGeolocation];
};

export { useGeolocation };
