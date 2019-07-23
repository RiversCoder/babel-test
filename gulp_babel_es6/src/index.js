const a1 = [1, 2, 3]
const b1 = [2, 3, 4];
// 并集
const s1 = Array.from(new Set([...a1, ...b1])); // [ 1, 2, 3, 4 ]


let [a, ,b] = [1,2,3];

const people = {
    name: 'lux',
    getName () {    // 省略冒号(:) 和function关键字
        console.log(this.name)
    }
}


const s = new Set(['A', 'B', 'C']);
console.log(s); // Set { 'A', 'B', 'C' }

class SkinnedMesh {
    constructor(geometry, materials) {
        this.idMatrix = SkinnedMesh.defaultMatrix();
        this.bones = [];
        this.boneMatrices = [];
        //...
    }
    update(camera) {
        //...
        super.update();
    }
    static defaultMatrix() {
        return new THREE.Matrix4();
    }
}

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
  }
  
var hw = helloWorldGenerator();


var promise = new Promise( (resolve, reject) => {
    // ... some code

    if (true){
        resolve(value);
    } else {
        reject(error);
    }
});

promise.then(res => {
    console.log(promise)
})
