var student = {
  firstName: 'Julie',
  lastName: 'Dumbrique',
  age: 31
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Quality Associate';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2018
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Moca',
  type: 'Maltipoo'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
