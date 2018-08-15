let person = {
    _name: 'Lu Xun',
    _age: 137,
      set age(age) {
      if(typeof age === 'number') {
        this._age = age;
      } else {
        return 'Invalid input';
      }
      }
  };
  
  person.age = 'Thirty-nine';
  person.age = 39;