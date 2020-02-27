//
//  Object Destructuring
//

const person = {
  name: "azeem",
  age: 10,
  location: {
    city: "kharian",
    temp: 90
  }
};

const { name = "Anonymous", age } = person;

console.log(`${name} is ${age}`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

// Challenge

const book = {
  title: "Math",
  author: "Azeem",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "SelfPublished" } = book.publisher;

console.log(publisherName);

//
//  Array Destruturing
//

const address = ["1299 Juniper Street", "Texas", "USA", "zip"];

const [street, mycity, state = "Newyork", zip] = address;

console.log(`Your are in ${mycity} ${state}`);
