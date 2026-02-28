animals = [
    { name: 'Fluffy', species: 'cat' },
    { name: 'Fido', species: 'dog' },
    { name: 'Mittens', species: 'cat' },
    { name: 'Rover', species: 'dog' }
]

const isCat = function(animals) {
    return animals.species === 'cat'
}

var cats = animals.filter(isCat)

const filterAnimals = function(animals, species) {
    return animals.species === species
}

var dogs = filterAnimals(animals, 'dog')

console.log(dogs)