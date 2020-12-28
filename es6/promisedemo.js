const getFlights = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
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
        }, 5000);
    });
};

const modifyFlight = (flights) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const modifiedFlights = flights.map((flight) => {
                return flight.flightNo === 2222 ? { ...flight, departed: true } : flight
            })
            resolve(modifiedFlights);
        }, 5000);
    });
};
   


const onList = () => {
    getFlights()
        .then(flights => modifyFlight(flights))
        .then(modifiedFlights=>console.log(modifiedFlights))
        .catch(error => console.log(error));
};

onList();
