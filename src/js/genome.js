const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.jsonaccess_token=pk.eyJ1IjoidmFuaWxsYTMzIiwiYSI6ImNrM2Y0OXJ2NjAwemkzbm8zcGUzdWt0MzgifQ.tDEBK-Qa7MHLSAEWcAAQDg&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location try another search!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
    