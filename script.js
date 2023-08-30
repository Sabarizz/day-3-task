//compare two JSON have the same properties without order

function compareJSONObjects(obj1, obj2) {
    const sortedJSON1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    const sortedJSON2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    return sortedJSON1 === sortedJSON2;
}

const obj1 = { name: "person 1", age: 5 };
const obj2 = { age: 5, name: "person 1" };

const result = compareJSONObjects(obj1, obj2);
console.log(result);


// Display all the country flags in the console

let abc = new XMLHttpRequest();
console.log(abc);
abc.open("GET","https://restcountries.com/v3.1/all");
abc.send()
abc.onload = function(){
    let data = JSON.parse(abc.response);
    console.log(data);
    console.log(abc.status);

    for(i=0; i<data.length; i++){
        console.log(`
        name : ${data[i].name.common}
        flag : ${data[i].flags.png}
        `)
    }
}

// names region subregion and populations

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send()
xhr.onload = function(){
    let data = JSON.parse(xhr.response);
    console.log(data);
    console.log(xhr.status);

    for(i=0; i<data.length; i++){
        console.log(`
        name : ${data[i].name.common}
        region : ${data[i].region}
        subregion : ${data[i].subregion}
        populations : ${data[i].population}
        `)
    }
}
