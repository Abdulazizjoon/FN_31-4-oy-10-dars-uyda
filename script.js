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


//18-masala
let arr=[]











//3-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let sum = arr[0];

// function toqElement(a) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i]<=sum) {
//         sum=a[i]
//     }
//     }
//     console.log(sum);
// }
// let res = toqElement(arr);

//4-masala
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

//5-masala
// let arr = [1, 2, -3, 4, 5, -6, 7, 8, -9];
// function maxMinus(a) {
//     let sum=0
//     for (let i = 0; i < a.length; i++) {
//         if (a[i]>0) {
//             sum+=a[i]
//         }
//     }
//     console.log(sum);
// }
// maxMinus(arr)

//6-masala
// let arr = [1, 2, -3, 4, 5, -6, 7, 8, -9];
// function allmanfiy(a) {
//     let sum=0
//     a.forEach(value => {
//         if (value<0) {
//             sum+=1
//         }
//     });
//     console.log(sum);

// }
// allmanfiy(arr)

//7-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function number(a) {
//     let sum=0
//     a.forEach(element => {
//         if (element%2==0) {
//             sum+=1
//         }
//     });
//     console.log(sum);
// }
// number(arr)

//8-masala
// let arr = [1, 2, 3, 4, 5]
// function num(a) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i]%2==1) {
//             a[i]+=1
//         }
//     }
// console.log(arr);

// }
// num(arr)

//9-masala
// let arr = [1, 2, 3, 4, 5, 6]
// let newarr = [] ;
// function rever(a) {

//     for (let i = a.length; i >= 0; i--) {
//         newarr += a[i]
//     }
// }
// rever(arr)
// console.log(newarr);

//10-masala
// let arr1 = [1, 2, 3]
// let arr2 = [3, 4, 5]
// function dublikat() {
//     let sum = 0
//     arr1.forEach(element => {
//         arr1
//     });
// }
