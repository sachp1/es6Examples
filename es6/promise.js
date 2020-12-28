const getFlights = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            try {
                throw new Error('error')
                const flights = [
                    {
                        carrierCode: "NH",
                        flightNo: 1111,
                        departed: false
                    },
                    {
                        carrierCode: "NH",
                        flightNo: 2222,
                        departed: false
                    }
                ];
                resolve(flights);
            } catch (e) {
                reject(e)
            }
        }, 5000);
    });
};


getFlights()
    .then(flights => console.log(flights)).catch(error => console.log(error))



