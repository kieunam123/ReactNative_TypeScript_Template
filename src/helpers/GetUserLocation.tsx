import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';


export interface ICoords {
    longitude: number;
    latitude: number;
};

export interface ILocation {
    coords: ICoords,
    mocked: boolean,
    timestamp: number,
};

 export const GetUserLocation = () => {
    const [position, setPosition] = useState<any>({});
    const checkUserLocation = async(): Promise<ILocation> => {
        let successful = true;
        try {
                const location = await Location.getCurrentPositionAsync({});
                setPosition(location);
        } catch(error) {
            successful = false; 
        };
        return successful ? position : {coords:{latitude:0,longitude:0},mocked:true};
    };
    return {checkUserLocation};
};

export default GetUserLocation;



