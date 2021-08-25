function convertMinutesToSeconds(minutes) {
  var convertion = minutes * 60;
  return convertion;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('value of converMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = greet('Greta');

console.log('value of greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(17, 42);

console.log('value of areaResult:', areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var firstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('value of firstNameResult:', firstNameResult);

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}

var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('value of lastElementResult:', lastElementResult);
