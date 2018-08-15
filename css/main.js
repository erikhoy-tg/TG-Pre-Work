let myPlaces = ['Philadelphia', 'Mexico City', 'Puerto Rico'];
let friendPlaces = ['Philadelphia', 'The Moon', 'Denmark'];

for(let myPlacesIndex=0; myPlacesIndex<myPlaces.length; myPlacesIndex++) {
  for(let friendPlacesIndex=0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
    if(myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(myPlaces[myPlacesIndex]);
    }
  }
}