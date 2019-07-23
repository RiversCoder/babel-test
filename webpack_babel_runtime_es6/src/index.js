const app = () => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}

console.log('hahahha')

const arr = [1,23,34,134,1235,23423,12321,12412]
let newArr = arr.map(v => v*2)
console.log(newArr)