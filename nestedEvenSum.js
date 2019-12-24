//Recursion: sum all even number in object including childrens

var total = 0;

function nestedEvenSum(obj) {
  var keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] == 'object') {
      //recursive call again
      nestedEvenSum(obj[keys[i]]);
    } else {
      if (typeof obj[keys[i]] == 'number' && obj[keys[i]] % 2 == 0) {
        console.log(obj[keys[i]]);
        total = total + obj[keys[i]];
      }
    }
  }

  return total;
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 6 } } },
  c: { c: { c: 4 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 8 }, ee: 'car' }
};

nestedEvenSum(obj2);
