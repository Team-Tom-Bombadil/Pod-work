{
    "use strict";

    $.ajax("data/mapfilterreduce1.json").done(function (data) {
        $.ajax("data/mapfilterreduce2.json").done(function (data2) {
            //1
            let users = data.concat(data2);
            console.log(users);
            //2
            let totalPrices = users.reduce((total, user) => total + parseFloat(user.price.substring(1)), 0);
            console.log(totalPrices);
            console.log(totalPrices / 2000);
            //3
            let shirts = users.reduce((shirts, user) => {
                if (typeof shirts[user.shirt_size] === 'undefined') {
                    shirts[user.shirt_size] = 1;
                } else {
                    shirts[user.shirt_size] += 1;
                }
                return shirts;
            }, {});
            console.log(shirts);

            //4
            let cars = users.reduce((cars, user) => {
                cars.push({
                    make: user.car_make,
                    model: user.car_model,
                    color: user.car_color,
                    price: user.price,
                    used: user.is_used_car
                });
                return cars;
            }, []);
            console.log(cars);

            //5
            // Produce a single object called car_data w/ the following properties
            // avg_price, avg_new_price, avg_used_price, top_make, top_model, total_number, number_used, number_new, highest_price, lowest_price
            let total_price = 0;
            let used_total = 0;
            let new_total = 0;
            let car_data = users.reduce((car_data, user) => {
                if (total_price === 0) {
                    car_data['total_number'] = 1;
                    total_price += parseFloat(user.price.substring(1));
                    car_data['avg_price'] = total_price / car_data['total_number'];

                    car_data['highest_price'] = parseFloat(user.price.substring(1));
                    car_data['lowest_price'] = parseFloat(user.price.substring(1));

                    car_data['top_make'] = user.car_make;
                    car_data['top_model'] = user.car_model;

                    car_data['makes'] = {};
                    car_data['models'] = {};

                    car_data['makes'][user.car_make] = 1;
                    car_data['models'][user.car_model] = 1;

                    if (user.is_used_car) {
                        car_data['number_used'] = 1;
                        car_data['number_new'] = 0;
                        used_total += parseFloat(user.price.substring(1));
                        car_data['avg_used_price'] = used_total / car_data['number_used'];
                    } else {
                        car_data['number_used'] = 0;
                        car_data['number_new'] = 1;
                        new_total += parseFloat(user.price.substring(1));
                        car_data['avg_new_price'] = new_total / car_data['number_new'];
                    }
                } else {
                    car_data['total_number'] += 1;
                    total_price += parseFloat(user.price.substring(1));
                    car_data['avg_price'] = total_price / car_data['total_number'];

                    if (typeof car_data['makes'][user.car_make] === 'undefined') {
                        car_data['makes'][user.car_make] = 1;
                    } else {
                        car_data['makes'][user.car_make]++;
                    }
                    let highestMake = 0;
                    for (let make in car_data['makes']) {
                        if (car_data['makes'][make] > highestMake) {
                            car_data['top_make'] = make;
                            highestMake = car_data['makes'][make];
                        }
                    }
                    if (typeof car_data['models'][user.car_model] === 'undefined') {
                        car_data['models'][user.car_model] = 1;
                    } else {
                        car_data['models'][user.car_model]++;
                    }
                    let highestModel = 0;
                    for (let model in car_data['models']) {
                        if (car_data['models'][model] > highestModel) {
                            car_data['top_model'] = model;
                            highestModel = car_data['models'][model];
                        }
                    }

                    if (parseFloat(user.price.substring(1)) > car_data['highest_price']) {
                        car_data['highest_price'] = user.price;
                    }
                    if (parseFloat(user.price.substring(1)) < car_data['lowest_price']) {
                        car_data['lowest_price'] = user.price;
                    }
                    if (user.is_used_car) {
                        car_data['number_used']++;
                        used_total += parseFloat(user.price.substring(1));
                        car_data['avg_used_price'] = used_total / car_data['number_used'];
                    } else {
                        car_data['number_new']++;
                        new_total += parseFloat(user.price.substring(1));
                        car_data['avg_new_price'] = new_total / car_data['number_new'];
                    }
                }

                return car_data;
            }, {});
            console.log(car_data);

            //6
            //Make an array called admins that contains only users who are admins​
            let admins = users.filter((user) => user.is_admin);
            console.log(admins);

            //7
            // Make an array called authors that contains only users who are authors​​
            let authors = users.filter((user) => user.is_author);
            console.log(authors);

            //8
            //Make an object called departments. That departments object should have a property for each department name. The value for each department name should be an array of user objects containing firstName, lastName, department, email, and buzzword
        });
    });
}