{
    "use strict";

    const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

    const customers = [
        {
            name: "Fred",
            age: 58,
            occupation: "Police Officer",
            noOfPurchases: 4
        },
        {
            name: "Samantha",
            age: 54,
            occupation: "Teacher",
            noOfPurchases: 18
        },
        {
            name: "Charles",
            age: 38,
            occupation: "Librarian",
            noOfPurchases: 9
        }
    ];

    const pets = [
        {
            name: 'Bud',
            age: 2,
            breed: 'Pug'
        },
        {
            name: 'Gabby',
            age: 10,
            breed: 'Retriever'
        },
        {
            name: 'Fred',
            age: 1,
            breed: 'Lab'
        },
        {
            name: 'Bowser',
            age: 2,
            breed: 'Pug'
        }
    ];

    const family = [
        {
            name: "Pam",
            gender: "female",
            age: 29,
        },
        {
            name: "Amelie",
            gender: "female",
            age: 10,
        },
        {
            name: "Justin",
            gender: "male",
            age: 32,
        },
    ];

    // PROBLEM 1 - create an array of the first letters of each fruit
    let firstLetterFruit = fruits.reduce((letters, fruit) => {
        letters.push(fruit.substr(0, 1));
        return letters;
    }, []);

    console.log(firstLetterFruit);
    // PROBLEM 2 - create array of user objects based on the customers array
    // of objects (each user object should just have name and age properties)
    let userList = customers.reduce((userArray, user) => {
        userArray.push({name: user.name, age: user.age});
        return userArray;
    }, []);
    console.log(userList);
    // PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
    // containing the same properties as the objects on the customers objects
    let civilServants = customers.filter(n => {
        if (n.occupation === "Teacher" || n.occupation === "Police Officer") {
            return n;
        }
    });
    console.log(civilServants);
    // PROBLEM 4 - determine the average age of customers
    let totalAge = customers.reduce((total, user) => {
        return total + user.age;
    }, 0);
    console.log(totalAge / customers.length);
    // PROBLEM 5 - create a function makeSuperPet() that takes in the pets array as input and returns a single pet object
    // with the following shape...
    /*

        {
            name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
            age: THE_TOTAL_OF_ALL_PET_AGES,
            breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
        }

     */
    function makeSuperPet(petsArray) {
        let superPet = {};

        superPet.name = petsArray.reduce((longname, pet) => {
            return longname + pet.name;
        }, "");

        superPet.age = petsArray.reduce((totalPetAge, pet) => {
            return totalPetAge + pet.age;
        }, 0);

        superPet.breed = petsArray.reduce((letters, pet) => {
            return letters + pet.breed[0];
        }, "");
        return superPet;
    }

    console.log(makeSuperPet(pets));
    // PROBLEM 6 - take in an array of pets and return an array of the length of first names for pugs only
    // your output for the given input should be [3, 6] for 'Bud' and 'Bowser'
    function pugLength(petsArray) {
        return petsArray.filter((pet) => pet.breed === 'Pug').map((pet) => pet.name.length);
    }

    console.log(pugLength(pets));
    // PROBLEM 7 - create a function getFemaleFamilyMembers() that when given the family variable as an argument,
    // returns an array of female family member names
    function getFemaleFamilyMembers(array) {
        return array.filter((member) => member.gender === 'female');
    }

    console.log(getFemaleFamilyMembers(family));
    // PROBLEM 8 - create a function makeLongPetString() that when given the variable of pets,
    // returns a string of all property values with dashes separating each property value
    function makeLongPetString(array) {
        return array.reduce((str, pet) => {
            return `${str}${pet.name}-${pet.age}-${pet.breed}-`;
        }, '')
    }

    console.log(makeLongPetString(pets));

    // PROBLEM 9 - create a function that when given an array of first names, returns an array of the same names with a last name of Smith
    function smith(array) {
        return array.map((person) => person + " Smith");
    }

    console.log(smith(['Sally', 'Fred', 'Steve']));
    // output = ['Sally Smith', 'Fred Smith', 'Steve']


    // PROBLEM 10 - create a function that when given an array of numbers, returns the sum of even numbers
    function sumOfEven(array) {
        return array.filter((n) => n % 2 === 0).reduce((sum, num) => sum + num);
    }


    console.log(sumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

    // PROBLEM 11 - create a function that when given an array of numbers, returns the sum of all numbers evenly divisible by 10
    function sumOfDivisibleByTen(array) {
        return array.filter((n) => n % 10 === 0).reduce((sum, num) => sum + num);

    }

    console.log(sumOfDivisibleByTen([10, 25, 30, 45, 50, 60, 65]));

    // PROBLEM 12 - create a function that when given an array of names, returns a string of all the first letters of each name
    function firstLetters(array) {
        return array.reduce((str, name) => str + name[0], '');

    }

    console.log(firstLetters(['Kevin', 'Brendan', 'Kristin']));

    // PROBLEM 13 - create a function that when given an array of values, returns an array of only the truthy values
    function truthyValues(array) {
        return array.filter((v) => !!v);
    }

    console.log(truthyValues(['Kevin', '', '1', 1, 0, null]));

    // PROBLEM 14 - create a function that when given an object, returns the property values as an array of elements
    function propertiesAsArray(obj) {
        return Object.values(obj);
    }

    console.log(propertiesAsArray({name: "Pam", gender: "female", age: 29}));
    // PROBLEM 15 - create a function that when given an object, returns the property values as an array of elements

    // PROBLEM 16 - create a function that when given three arguments: a min num, a max num, an array
    // of nums will return the array of nums that are only between the min and max values, inclusive
    function between(min, max, array) {
        return array.filter((n) => n >= min && n <= max)
    }

    console.log(between(4, 9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
    // PROBLEM 17 - create a function that when given an array of strings, returns an array of objects
    // with properties for the given string value and the length of the string and the string without vowels (not including y)
    function stringsToObjects(array) {
        return array.map((str) => {
            return {value: str, length: str.length, withoutVowels: str.split('').filter((letter) => 'aeiou'.indexOf(letter) === -1).join('')};
        })
    }

    console.log(stringsToObjects(["Kevin", "Brendan", "Kristin"]));
}