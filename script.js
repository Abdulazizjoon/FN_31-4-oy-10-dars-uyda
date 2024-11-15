//1-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function kvElemrnt(a) {
//   for (let i = 0; i < a.length; i++) {
//     let sum = a[i] * a[i];
//     console.log(sum);
//   }
// }
// kvElemrnt(arr);

//2-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function num(a) {
//   let newarr = a.map(function (value) {
//     return (value = value * 2);
//   });
//   console.log(newarr);
// }
// num(arr);

//3-masala
// let arr = [1, 5, 8, 7, 9, 10, 11, 15]
// function bigElement(a) {
//     a.forEach(element => {
//         if (element>10) {
//             console.log(element);
//         }
//     });
// }
// bigElement(arr)

//4-masala
// let arr = [1, 2, 3, 4, 5, 6, 7]
// function verificat(a) {
//     let sum;
//     a.some(function(value) {
//         return sum= value>5
//     })
//     console.log(sum);
// }
// verificat(arr)

//5-masala
// let arr = [1, -2, 3, -4, 5, 6, -7, 8, 9];
// function number(a) {
//   let sum;
//   a.some(function (value) {
//     return (sum = value < 0);
//   });
//   console.log(sum);
// }
// number(arr);

//6-masala
// let arr = [1, -2, 3, -4, 5, 6, -7, 8, 9];
// function number(a) {
//     res=a.find(function(value) {
//         return value>0
//     })
// }
// number(arr);
// console.log(res);

//7-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function toqElement(a) {
//   a.forEach(value => {
//     if (value%2==0) {
//         console.log(value);
//     }
//   });
// }
// toqElement(arr);

//8-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function toqElement(a) {
//   let sum = 0;
//   let res = a.filter((value) => value % 2 == 1);
//   console.log("Toq sonlar: ", res);
// }

// toqElement(arr);

//9-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function num(a) {
//     let res=a.some(function(value) {
//         return value=value%3==0
//     })
//     console.log(res);
    
// }
// num(arr)


//10-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function number(a) {
//     let res=a.some(function(value) {
//         return value=value>0
//     })
//     console.log(res);
    
// }
// number(arr)



//11-masala
// let arr = [1, 2, 3, 4, 5, 6]
// function element(a) {
//     let res=a.some(function(value) {
//         return value=value>15
//     })
//     console.log(res);
// }
// element(arr)


//12-masala
// let arr = [1, 2, -3, 4, 5, -6, 7, 8, -9];
//     function maxMinus(a) {
//         let sum=Math.min(...a)
//         console.log(sum);
//     }
//     maxMinus(arr)


//13-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function element(a) {
//     let res=a.map(function(value) {
//         return value=value+5
//     })
//     console.log(res);
// }
// element(arr)


//14-masala
// let arr = [1, 2, 3, 4, 5, 6, 7]
// function num(a) {
//     let res=a.filter(function(value) {
//        return value > 5;
        
//     })
//     console.log(res);
    
// }
// num(arr)


//15-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function index(a) {
//     let sum = 0
//     let ind=0
//     a.forEach((value, index, a) => {
//         if (value>sum) {
//             sum = value
//             ind=index
//         }
//     });
//     console.log(ind);
// }
// index(arr)


//16-masala
// let arr = [1, 2, 3, 4, 5]
// function teng(a) {
//     let res = a.some(function (value) {
//         return value==10
//     })
//     console.log(res);
    
// }
// teng(arr)


//17-masala
// let arr = [1, 2, 3, 4, 5]
// function teng(a) {
//     let res = a.some(function (value) {
//         return value<0
//     })
//     console.log(res);
    
// }
// teng(arr)


//19-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function num(a) {
//   let newarr = a.map(function (value) {
//     return (value = value * 2);
//   });
//   console.log(newarr);
// }
// num(arr);


//20-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function num(a) {
//   let newarr = a.some(function (value) {
//     return a<0
//   });
//   console.log(newarr);
// }
// num(arr);


//Obyektlarga oid
//1-masala
// let ob = { a: 10, b: 20, c: 5 };
// function obyekt(a) {
//     let sum=0
//     for (const key of a) {
//         sum+=key
//     }
// }
// obyekt(ob)

//2-masala
// let obj = {
//     a: 1,
//     b:2,
//     c:3,
//     d:4
// };
// function reverce(arr) {
//     let res = {}
//     for (const key in arr) {
//        res[arr[key]]=key
//     }
//     return res
// }
// console.log(reverce(obj));
