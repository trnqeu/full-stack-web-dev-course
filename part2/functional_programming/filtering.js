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