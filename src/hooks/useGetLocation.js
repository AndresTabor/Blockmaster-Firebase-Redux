import { useState } from 'react'

export const useGetLocation = () => {  
    const [location, setLocation] = useState('')

    const getCoordenadas = () => {
        navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        //https://maps.googleapis.com/maps/api/geocode/json?latlng=6.1734912,-75.6350976&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI`;
        console.log(latitude,longitude)
        getUbicacion(url);
    });
    
    }

    const getUbicacion = async( url)  => {
    const resp = await fetch( url);
    const {results} = await resp.json();
    //console.log(results);
    console.log(results[4].formatted_address)
    setLocation(results[4].formatted_address)
    }

    return [ location, getCoordenadas ]
}

