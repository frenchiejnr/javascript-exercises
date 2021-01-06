let findTheOldest = function(peopleArray) {
peopleArray.sort((a,b)=> {
        if (!("yearOfDeath" in a)) {
            a.yearOfDeath = new Date().getFullYear();
        }
        if (!("yearOfDeath" in b)) {
            b.yearOfDeath = new Date().getFullYear();
        }
        aAge = a.yearOfDeath - a.yearOfBirth;
        bAge = b.yearOfDeath - b.yearOfBirth;
        return aAge < bAge ? 1 : -1;
    })

return peopleArray[0];
}

const people = [
    {
      name: 'Carly',
      yearOfBirth: 1066,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941
    },
  ]

  findTheOldest(people);

module.exports = findTheOldest
