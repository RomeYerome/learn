`GeoLocation API`

// definition: `The Geolocation API allows the user to provide their location to web applications if they so desire. It's a browser API so it's part of the window object. It's not available in all browsers though. 

// It is a high level API that uses a combination of GPS, Wifi, Cellular and IP address to determine the users location. It's accuracy depends on the device and the browser. 

// It is contained in the navigator object which is a property of the window object.

// It's syntax is as follows:`

navigator.geolocation.getCurrentPosition(success, error, options);

// Check for geolocation support
if (navigator.geolocation)
    console.log('Geolocation is supported');
else
    console.log('Geolocation is not supported');


// It has 2 main methods

getCurrentPosition(); // gets the current position of the user

watchPosition(); // watches the position of the user and updates it as it changes. It does this by registering a handler function that will be called automatically each time the position of the device changes. It returns a watchID that can be used to unregister the handler function later


// Both methods take 3 arguments

`success`; // a callback function that is called when the position is successfully retrieved

`error`; // a callback function that is called when there is an error retrieving the position

`options`; // an optional object that contains options for the request. The most common one is the timeout option which is the maximum length of time in milliseconds that is allowed to pass from the call to getCurrentPosition() or watchPosition() until the corresponding successCallback is invoked. If the successCallback is not invoked within this time, the errorCallback is passed a PositionError.TIMEOUT error code. By default, there is no timeout. This option is not supported in Internet Explorer.




// EXAMPLE: GET CURRENT POSITION

navigator.geolocation.getCurrentPosition(success, error, options);

function success(position) {
    console.log(position);

    const coords = position.coords;

    console.log(coords);
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Accuracy: ${coords.accuracy}`);
}

function error(err) {
    console.log(`Error: ${err.code}: ${err.message}`);
}

const options = {
    enableHighAccuracy: true,   // Use GPS if available
    timeout: 5000,  // Wait 5 seconds for a response before calling error function
    maximumAge: 0   // Do not use a cached position, get a fresh one
}



// EXAMPLE: WATCH POSITION

let watchID = navigator.geolocation.watchPosition(success, error, options);

const target = {
    latitude: 41.3477843,
    longitude: -72.1087736
}

function success(position) {
    const coords = position.coords;

    if (target.latitude === coords.latitude && target.longitude === coords.longitude)
        console.log('Congratulations, you reached the target');

}

function error(err) {
    console.log(`Error: ${err.code}: ${err.message}`);
}

const watchOptions = {
    enableHighAccuracy: true,   // Use GPS if available
    timeout: 5000,  // Wait 5 seconds for a response before calling error function
    maximumAge: 0   // Do not use a cached position, get a fresh one
};



`You can use the longitude, latitude and other values from the geolocation api with fantastic map API's like mapbox, leaflet, google maps, etc`;

