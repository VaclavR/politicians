export class LogService {

  constructor() { }

  createChangeLog(change) {
    console.log('The politician ' + change.name + ' changed orientation to ' + change.orientation + '!');
  }

  createInputLog(newPolitician) {
    console.log('Added new politician. His name is ' + newPolitician.name
    + ' and his orientation is ' + newPolitician.orientation + '.');
  }

}
