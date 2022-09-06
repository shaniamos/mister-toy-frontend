// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
export const toyService = {
    query,
    save,
    remove,
    getById,
    getLabels,
}

const STORAGE_KEY = 'toys'
const BASE_URL = `toy/`
const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]
const gDefaultToys = [
    { _id: "t101", name: "Talking Doll", price: 123, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: true },
    { _id: "t102", name: "Matryoshka Doll", price: 99, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: true },
    { _id: "t103", name: "China Doll", price: 15, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: true },
    { _id: "t104", name: "Paper Doll", price: 20, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: true },
]

function query(filterBy) {
    console.log(filterBy)
    return httpService.get(BASE_URL, {params: {...filterBy}}).then(res => res)
    // return storageService.query(STORAGE_KEY).then(toys => {

    //     if (!toys || !toys.length) {
    //         storageService.postMany(STORAGE_KEY, gDefaultToys)
    //         toys = gDefaultToys
    //     }
    //     if (filterBy) {
    //         var { lables, name, price, inStock } = filterBy
    //         if (name) {
    //             const regex = new RegExp(name, 'i')
    //             toys = toys.filter(toys => regex.test(toys.name))
    //         }
    //         if (inStock === true || inStock === false) {
    //             if (inStock) toys = toys.filter(toys => toys.inStock)
    //             if (!inStock) toys = toys.filter(toys => !toys.inStock)
    //         }
            
    //         if (lables && lables.length) {
    //             toys = toys.filter(toy => lables.every(filterLable => toy.lables.includes(filterLable)))
    //         }
    //     }
    //     console.log(toys)
    //     return toys
    // })

}

function getLabels(){
    return  ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId).then(res => res)
    // return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return httpService.delete(BASE_URL + toyId).then(res => res)
    // return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL + toy._id, toy).then(res => res)
    } else {
        return httpService.post(BASE_URL, toy)
            .then(res => res)
    }

    // if (toy._id) {
    //     return storageService.put(STORAGE_KEY, toy)
    // } else {
    //     robot.batteryStatus = 100
    //     return storageService.post(STORAGE_KEY, toy)
    // }
}


