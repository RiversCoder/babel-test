const p = () => {
    return new Promise( () => {} )
}

const apps = [1, 123, 21321, 412321, 3213412, 123];
let newApps = apps.map(v => v * 2);
console.log(newApps);