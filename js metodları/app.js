//!Filter

// const points = [45,55,89,74,56,54,32,24,59]

// const passedStudent = points.filter(point =>{
//     return point > 50;
// })
// console.log(passedStudent);

// const students =[
//     {name:"can",passed: true},
//     {name:"tuba",passed: false},
//     {name:"elis",passed: false},
//     {name:"osman",passed: true}
// ]

// const passingStudent = students.filter(student =>{
//     return student.passed
// })

// console.log(passingStudent);

//!MAp

// const points = [45,55,89,74,56,54,32,24,59]

// const newPoint =points.map(point =>{
//     return point +10;
// })

// console.log(newPoint);

// puanı 50 den küçük olanlara 15 puan ekle
// const students =[
//     {name:"can",point: 40},
//     {name:"tuba",point: 60},
//     {name:"elis",point: 30},
//     {name:"osman",point: 90}
// ]

// const newStudentPoint = students.map(student =>{
//     if(student.point < 50)
//     {
//         // return {name : student.name ,point: student.point +15}
//         student.point +=15
//         return student
//     }
//     else 
//     {
//         return student
//     }
// })
// console.log(newStudentPoint);

//! Reduce

// const points = [45,55,89,74,56,54,32,24,59]

// const result = points.reduce((value,point)=>{
//     if(point > 50)
//     {
//         value ++
//     }
//     return value
// },0)
//  console.log(result);


//! reduce de value değeri başlangıçta sıfır alınır.Dikkat et
// const students =[
//     {name:"can",point: 40},
//     {name:"tuba",point: 60},
//     {name:"elis",point: 30},
//     {name:"osman",point: 90},
//     {name:"osman",point: 50},
//     {name:"osman",point: 25},
//     {name:"osman",point: 90},
//     {name:"osman",point: 65},
// ]

// const osmanTotal = students.reduce((value,student)=>{
//     if(student.name == "osman")
//     {
//         value += student.point
//     }
//     return value
// },0)
// console.log(osmanTotal);


