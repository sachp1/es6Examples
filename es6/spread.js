//Array spread

const numarr1 = [10, 20, 20, 40];


const numarr2 = [50, 60, 70, 80, ...numarr1]














console.log(numarr2)


//Array destructuring
const [x, y] = numarr2
console.log(x, y)

const [m, ...rest] = numarr2
console.log(m, rest)









const flightsAV = new Array(10).fill(null).map((val, index) => ({
    carrierCode: 'AV',
    flightNo: `${index}${index}${index}${index}`

}))

const flightsNH = new Array(10).fill(null).map((val, index) => ({
        carrierCode: 'NH',
        flightNo: `${index + 10}${index}${index}${index}`
    });


const combinedFlights = [...flightsAV, ...flightsNH]

console.log(combinedFlights)








