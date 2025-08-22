import { dataFromRequest, isSignificant } from "./earthquakes.js"

/**
 * 
 * @param {objectdata} param0 
 * @returns 
 */

const mapearDatos = ({ mag, place, tsunami, time, type, geometry }) => {
    //
    let {type, typeGeometry, coordinates } = geometry;
    let [lat, ln] = coordinates;
    return {
        mag: mag,
        place: place,
        tsunami: tsunami,
        time: time,
        type: _type,
        geometry: {
            type: typeGeometry,
            coordinates: {
                lat: lat,
                ln: ln,
            }
        }
    }
}

let earthquakes = []

let dataParse = JSON.parse(dataFromRequest)

dataParse.features.forEach(element => {
    let data = {
        mag: element.properties.mag,
        place: element.properties.place,
        tsunami: element.properties.tsunami,
        time: element.properties.time,
        type: element.properties.type,
        geometry: element.properties.geometry
    }
    let converData = mapearDatos (data)

    earthquakes.push(converData);
});
console.log(earthquakes[0]);

console.log(isSignificant(earthquakes[0], 1));


let earthquakeFilter = earthquakes.filter(item => {
    isSignificant[item, 5.0]
}
).map (item => ({
    mag: item.mag,
}))
console.log(earthquakeFilter);

// let terromoto = {
//     mag: 1.63,
//     place: "10km ENE of Blackhawk, CA",
//     tsunami: 0,
//     time: 1577922964240,
//     type: "earthquake",
//     geometry: {
//         type: "Point",
//         coordinates: [
//             -121.7943333,
//             37.8455,
//             12.65
//         ]
//     }
//     //id
// }

// //ejemplo coordenadas
// let templateCoordinate = {
//     lat: 2345678,
//     lg: -121517
// }

// //Operaciones con objetos en JS
// //Agregar una propiedad
// terremoto.id = "nc123456"

// //Actuaizar un valor
// terremoto.tsunami = 1

// //Acceder o tomar un valor
// console.log(terremoto.place);


// let coordinatesInArray = terremoto.geometry.coordinates
// let[lat, ln] = coordinatesInArray
// let coordinatesInObject = terromoto.geometry
// let {cordinates: newCoordinates} = coordinatesInObject

// console.log(coordinatesInArray);
// console.log(`Latitud: ${lat} \nLongitud: ${ln}`);
// console.log(`Latitud: ${newCoordinates[0]} \nLongitud: ${newCoordinates[1]}`);





