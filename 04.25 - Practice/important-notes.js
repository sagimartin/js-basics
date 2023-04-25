// JS-ben nem kell a ; de ha tovabbi nyelveket akarsz tanulni akk hasznos lehet mar most kiirni

// let-nek kesobb is megadhatom
let a
a = 10;

// const-nak mindig kell érték
const b = 10;


let arr = ['string', 10, true]

let stringArr = ['string', 'szo', 'true']

// Így összeadás - 20
console.log(10 + 10);

// Így 1010 mivel string
console.log('10' + '10');

// Ezt ugy kezeli h 1010 szinten
console.log('10' + 10);

// Mindig ki kell tenni a zárójelet
function addAtoB() {
    let c = a + b
    console.log('addAtoB :' c);
}
addAtoB() // utána le kell futtatni a kodot - ezek utan alulra is eleg az addAtoB()

let c = a + b // 5 + 5 = 15
console.log('első logolás: ', c);

a = 20
// c = a + b
// console.log('második logolás: ', c); // 30
addAtoB()

a = 1500
// c = a + b
// console.log('harmadik logolás: ', c); // 1510
addAtoB()




//////

let a;
a = 5;

const b = 10;

let stringArr = ['string', 'szo', 'true']

// x es y nem kell h letezzen kivul 
function addAtoB(x, y) { // függvény létrehozásakor PARAMETER
    // ez a ház - kilátunk
    console.log('x: ', x, 'y: ', y); // ez kurva jo!
    let c = x + y
    console.log('addAtoB: ', c)
}
// ez az utca - nem látunk be
// mindent at kell adnunk a fuggvenynek - még elötte létre kell hozni
// console.log(c);

addAtoB(a, b) // függvény meghívásákor ARGUMENT

// a = 20
addAtoB(a, b) // addAtoB(20, 10)

a = 1500
addAtoB() // Ha nem irom be az ertekeket, o akkor is atad  - NaN

// let c = undifined + undifined = NaN

addAtoB(101, 'kiskutya')



/////


// constanst nyugodtan hozzuk letre kint 
const y = 10;

let stringArr = ['string', 'szo', 'true']

function addAtoB(a, b) { // függvény létrehozásakor PARAMETER
    console.log('x: ', a, 'y: ', b); // ez kurva jo!
    let c = a + b
    console.log('addAtoB: ', c)
}

addAtoB(5, y) // függvény meghívásákor ARGUMENT

a = 20
addAtoB(20, y) // addAtoB(20, 10)

a = 1500
addAtoB(1500, y) // Ha nem irom be az ertekeket, o akkor is atad  - NaN


addAtoB(101, 'kiskutya')




//////

// CIKLUS

// Teljesen mindegy milyen (név) - csak mi tudjuk majd 
// function rD(v) - rövidítés
function returnDouble(value) {
    let result = value *2
    console.log('result: ', result);
    return result;
}

returnDouble(2)


/////

// CIKLUS
// de en olyat akarok hogy stringkent is mukodjon

function returnDouble(value) {
    // let value = 'ketto' <-- képzeletbeli sor
    let result = value + value;  // 'ketto' + 'ketto' === !'kettoketto' - ez van a memoriaban
    return result; // return 'kettoketto' 
}

let result2 = returnDouble('ketto')
console.log('result: ', result2);


/////

// Csinaljunk tömböt

function returnDouble(value) {
    let result = value + value;  
    return result; 
}

const arr = [21, 5, 'macska', false, 11, true, 'Virág', 'pizza', 34, 66, undefined]

let result1 = returnDouble(arr[0])
console.log(result1);

let result2 = returnDouble(arr[1])
console.log(result2);

let result3 = returnDouble(arr[2])
console.log(result3);

let result4 = returnDouble(arr[3])
console.log(result4);

let result5 = returnDouble(arr[4])
console.log(result5);

let result6 = returnDouble(arr[5])
console.log(result6);

// paratlan szam = 5/2 maradek 1 = igaz

// leirhajuk ezt 11x -de miert tennenk ilyet?


/////



function returnDouble(value) {
    let result = value + value;  
    return result; 
}
// elem      1   2     3       4      5   6      7        8      9   10     11
const array = [21, 5, 'macska', false, 11, true, 'Virág', 'pizza', 34, 66, 'undefined']
// index     0   1     2       3      4   5      6        7      8    9     10  

// let result1 = returnDouble(arr[0])
// console.log(result1);


// Mi van ha kapunk egy tömböt több ezer értékkel?
// ITERÁLNI KELL

// végigmegy a tömb összes elemén - nem kell tudnunk hany elem van, csak menjen vegig az egeszen

// FOR CIKLUS
// hogyan erem el a 21-est? 0-tol indul addig tart amig az array tart

for (let i = 0; i < array.length; i++) { // <-- loop start
    let result = returnDouble(array[i]);
    console.log('result ', i, ' ', result);
    // console.log(`result ${i} ${result}`);
} // <-- loop end 

console.log(result); // ezt nem latja mar - CSAK A FOR CIKLUSON BELÜL

// a return megallitja a futo dolgot, es visszaad vmit 
