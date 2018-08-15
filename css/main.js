let person = {
    name: 'Erik',
    age: 44,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7am',
    hobbies: ['making art', 'skateboarding'],
    sayHello: function() {
      return 'Hello, there!';
    }
  };
  
  let day = 'Wednesday';
  let alarm;
  
  if(day === 'Saturday' || day === 'Sunday') {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  person.hobbies = ['making stuff'];
  console.log(person['name']);
  console.log(person['age']);
  console.log(person[alarm]);
  console.log(person['hobbies']);
  console.log(person.sayHello());