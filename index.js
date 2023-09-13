/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  let result = {}
  for (let i in obj) {
    result[i] = obj[i].trim()
  }
  return result
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  for (let i in obj) {
    obj[i] = obj[i].trim()
  }
  return obj
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  let arr=[]
  for (let item of integers) {
    for (let i in item){
      arr.push(item[i])
    }
  }
  const result = Math.max(...arr)
 
  return result
  
}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    this.count = initialNumber
  }
  countDown(){
    //this.count-- ：means return this.count(3),then minus 1 to this.count
    //--this.count :means minus 1 to this.count,then  return this.count(2)
   return this.count>0?this.count--:0
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    this.seasons = ["summer", "fall", "winter", "spring"]
    this.currentIndex=0

  }
  next() {
   
    const result=this.seasons[this.currentIndex]
    if (this.currentIndex===3){
      this.currentIndex=0
    }else{
      this.currentIndex++
    }
    return result
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  //('focus',         20,      30)
  constructor(name, tankSize, mpg) {
    this.name = name
    this.tank = tankSize // car initiazes full of gas   --20
    this.tankSize=tankSize
    this.mpg = mpg
    this.odometer = 0 // car initilizes with zero miles
  }
  drive(distance) {
    //maxDistance will be change when every call 
    const maxDistance = this.tank * this.mpg
    if (distance <= maxDistance){
      this.odometer += distance
      const gasNeed = distance / this.mpg
      this.tank -= gasNeed
      return this.odometer
    }else{
      this.tank=0
      this.odometer += maxDistance
      return this.odometer
    }
    
   
  }
  refuel(gallons) {
    const gasNeed=this.tankSize-this.tank
    if (gallons <= gasNeed){
      this.tank+=gallons
    }else{
      this.tank= this.tankSize 
    }
    return this.tank*this.mpg
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
async function isEvenNumberAsync(number) {
  if(typeof number !=='number'||isNaN(number)){
    throw new Error('number must be a number')
  }
  // if (number%2===0){
  //   return true
  // }else{
  //   return false
  // }
  return number % 2 === 0||false

}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
