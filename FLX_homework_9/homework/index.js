const inputData = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];

/*Task 1*/
function findTypes() {
    let arr = [];
    for (let i = 0; i < arguments.length; i += 1) {
        arr[i] = typeof arguments[i];
    }
    return arr;
}
console.log(findTypes("number")) ;
console.log(findTypes(null, 5, "hello")) ;

/*Task 2*/
function executeforEach(arr, fn) {
   let results = [];
    for (let i = 0; i < arr.length; i += 1) {
        results[i] = fn(arr[i]);
    }
    return results;
}
console.log( executeforEach([1,2,3], function(el) {
    console.log(el)
}) ) ;

/*Task 3*/
function mapArray(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        newArr[i] = executeforEach([arr[i]], fn)[0];
    }
    return newArr;
}
console.log( mapArray([2, 5, 8], function(el) {
    return el + 3
})) ;

/*Task 4*/
function filterArray(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        let check = executeforEach([arr[i]], fn)[0];
        if (check) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log( filterArray([2, 5, 8], function(el) {
    return el > 3
}) ) ;

/*Task 5*/
function getAmountOfAdultPeople(data) {
    return filterArray(data, function(el) {
        return el['age'] > 18
    }).length;
}
console.log(getAmountOfAdultPeople(inputData)) ;

/*Task 6*/
function getGreenAdultBananaLovers(data) {
    let request = filterArray(data, function(el) {
        return (el['favoriteFruit'] === 'banana')&&(el['eyeColor'] === 'green')&&(el['age'] > 18)
    });
    return mapArray(request, function(el) {
        return el['name']
    });
}
console.log(getGreenAdultBananaLovers(inputData)) ;

/*Task 7*/
function keys(obj) {
    let result = [];
    for (let k in obj) {
        result.push(k);
    }
    return result;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}) ) ;

/*Task 8*/
function values(obj) {
    let result = [];
    for (let v in obj) {
        result.push(obj[v]);
    }
    return result;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3})) ;

/*Task 9*/
function showFormattedDate(date) {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    return `Date: ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()} `;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00'))) ;

/*Task 10*/
function isEvenYear(date) {
    return date.getFullYear()%2 === 0;
}
console.log(isEvenYear(new Date('2019-01-27T01:10:00'))) ;

/*Task 11*/
function isEvenMonth(date) {
    return (date.getMonth() + 1)%2 === 0;
}
console.log(isEvenMonth(new Date('2019-02-27T01:10:00'))) ;