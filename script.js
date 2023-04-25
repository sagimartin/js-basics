
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
