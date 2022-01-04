const { type } = require("express/lib/response")

const database = {
  users: [
    {
      id: 0,
      firstName: 'Alice',
      favPet: 'cat',
      state: 'NY',
      collegeId: 2,
    },
    {
      id: 1,
      firstName: 'Bob',
      favPet: 'cat',
      state: 'MA',
      collegeId: 0,
    },
    {
      id: 2,
      firstName: 'Charles',
      favPet: 'dog',
      state: 'NY',
      collegeId: 0,
    },
    {
      id: 3,
      firstName: 'Daniela',
      favPet: 'dog',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 4,
      firstName: 'Edward',
      favPet: 'cat',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 5,
      firstName: 'Fatima',
      favPet: 'dog',
      state: 'NJ',
      collegeId: 0,
    },
  ],
  friends: [
    {
      id1: 0,
      id2: 2,
    },
    {
      id1: 1,
      id2: 0,
    },
    {
      id1: 2,
      id2: 3,
    },
    {
      id1: 2,
      id2: 1,
    },
    {
      id1: 3,
      id2: 4,
    },
    {
      id1: 2,
      id2: 4,
    },
    {
      id1: 0,
      id2: 5,
    },
  ],
  college: [
    {
      id: 0,
      name: 'Harvard',
      state: 'MA',
      color: 'crimson',
    },
    {
      id: 1,
      name: 'Yale',
      state: 'CT',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Columbia',
      state: 'NY',
      color: 'light blue',
    },
  ],
}

/* using the js object and array methods, query the database defined above.
Assume that the data in the database is dynamic and changes every day so
dont hard code solutions. */

// Implement the function usersByPet to return a list of user objects filtered by cat or dog.
const usersByPet = pet => {
  let petPeople = new Array()
  database.users.forEach(u => {
    if (u.favPet === pet)
      petPeople.push(u)
  })
  return petPeople
}

// Implement the function collegeLookup to return the name and color of a user's college.
const collegeLookup = user => {
  let result = {}
  database.users.forEach(u => {
    if (u.firstName === user) {
      // get college id
      database.college.forEach(c => {
        // find college where database.college.id == u.collegeId
        if (c.id === u.collegeId) {
          const { name, color } = c
          // console.log("printing result")
          // console.log(name, color)
          // return as an object or as an array?
          result = {
            name: name,
            color: color,
          }
        }
      })
    }
  })
  return result
}

console.log(`type: ${typeof collegeLookup('Charles')}`)
console.log(collegeLookup('Daniela'))

// define oppositesAttract as a list of friend objects whose favorite pets are different.
const oppositesAttract = () => {
  let oppositesList = new Array()
  database.friends.forEach(pair => {
    //find pair.id1's fav
    let firstFriend = {}
    let secondFriend = {}
    database.users.forEach(u => {
      if (u.id === pair.id1) {
        firstFriend = u
      }
    })
    //find pair.id2's fav
    database.users.forEach(u => {
      if (u.id === pair.id2) {
        secondFriend = u
      }
    })
    if (firstFriend.favPet !== secondFriend.favPet)
      oppositesList.push([firstFriend, secondFriend])
  })
  // console.log(oppositesList)
  return oppositesList
}
console.log(oppositesAttract())

const stateLookup = user => {
  let result = ""
  database.users.forEach(u => {
    if (u.firstName === user) {
      // get college id
      database.college.forEach(c => {
        // find college where database.college.id == u.collegeId
        if (c.id === u.collegeId) {
          const { c.state } = c
          // console.log("printing result")
          // console.log(name, color)
          // return as an object or as an array?
          result = state
        }
      })
    }
  })
  return result
}

const collegeByID = id => {
  let result = NaN
  database.users.forEach(u => {
    if (u.id === id) {
      // get college id
      database.college.forEach(c => {
        // find college where database.college.id == u.collegeId
        if (c.id === u.collegeId) {
          result = c.id
        }
      })
    }
  })
  return result
}


// define local as a list of users who live in the same state as they go to school.
const local = () => {
  let sameState = new Array()
  database.users.forEach(u => {
    //get state user lives in
    if (user.state = stateLookup(u.firstName)) {
      sameState.push(u)
    }
  })
  return sameState
}
console.log(local())

// define collegeFriends as a list of friend objects that go to the same college
const collegeFriends = () => {
  let sameColleges = new Array()
  database.friends.forEach(f => {
    if (collegeByID(f.id1) === collegeByID(f.id2))
      sameColleges.push(f)
  }
  )
  return sameColleges
}
console.log(collegeFriends)
