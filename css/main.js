let person = {
    name: 'Erik',
    age: 44,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7am'
  };
  
  let day = 'Wednesday';
  let alarm;
  
  if(day === 'Saturday' || day === 'Sunday') {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person['name']);
  console.log(person['age']);
  console.log(person[alarm]);