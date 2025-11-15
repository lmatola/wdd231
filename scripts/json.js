const objs = [{
    "family_name": "Matola",
    "move_in_date": "2014-06-28",
    "number_of_people": 6,
    "visited_by_bishopric": true,
    "family_members": [
        {
            "name": "Lazaro Felizardo Matola",
            "gender": "Male",
            "birthdate": "1983-07-31"
        },
        {
            "name": "Albertina Virginia Mondlane",
            "gender": "Female",
            "birthdate": "1987-03-01"
        },
        {
            "name": "Felizardo Lazaro Matola",
            "gender": "Male",
            "birthdate": "2005-09-08"
        },
        {
            "name": "Nelo de Jesus Lazaro Matola",
            "gender": "Male",
            "birthdate": "2013-10-18"
        },
        {
            "name": "Jade Lazaro Matola",
            "gender": "Female",
            "birthdate": "2018-03-03"
        },
        {
            "name": "Agatha de Albertina Lazaro Matola",
            "gender": "Female",
            "birthdate": "2013-10-18"
        }
    ]

}

]


console.log(objs)

// CONVERT OBJECT TO JSON
const jsonData = JSON.stringify(objs)
console.log(jsonData)

// CONVERT JSON TO OBJECT

const objectData = JSON.parse(jsonData)
console.log(objectData)

objectData.map((person) => {
    console.log(person.family_members)
});

