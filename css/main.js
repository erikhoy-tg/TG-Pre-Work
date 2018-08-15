let person = {
    name: 'Erik',
    age: 44,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7am',
    hobbies: ['making art', 'skateboarding'],
    sayHello: function() {
      return `Hello, my name is ${this.name}`;
    },
    sayGoodbye() { 
        return 'Goodbye!';
    }
  };
  
  let friend = {
    name: 'Judy'
  }
  
  friend.sayHello = person.sayHello;
  
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
  console.log(friend.sayHello());