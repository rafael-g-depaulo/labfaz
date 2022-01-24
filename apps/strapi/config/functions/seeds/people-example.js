const peopleSeed = [
  { name: "João", age: 14 },
  { name: "Maria", age: 52 },
  { name: "Pedro", age: 73 },
]

module.exports = async strapi => {

  const peopleExample = strapi.query("people-example")
  const peopleCount = await peopleExample.count()
  const createPerson = person => peopleExample.create(person)
  
  if (peopleCount === 0) {
    console.log("##### SEEDING: PeopleExample")
    await Promise.all(peopleSeed.map(createPerson))
  }
}
