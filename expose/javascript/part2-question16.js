let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (cars in statistics) {
    if ('r' == cars[0] || statistics[cars] % 2 == 1) {
        console.log(statistics[cars]);
    }
}