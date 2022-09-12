function myEach(collection, callback) {
    if(Array.isArray(collection) === true) {
        collection.map(callback)
        return collection
    } else {
        let objVal = [Object.values]
        console.log(objVal)
        console.log(objVal.forEach(callback))
        return collection
    }
}

function myMap(collection, callback) {
    
}

