let firstName:string = "Derek"
let age:number = 36
let active:boolean = true

// let numsBad: string[] = [1,2,3,4] // gives an error in TS
let nums: string[] = ["1","2","3","4"]
let names: string[] = ["bob","rob","dick"]


enum studentTypes {
    pending,
    active,
    graduated,
    tas,
    teacher
}

const myStatus = studentTypes.graduated

// switch(Number(myStatus)){
//     case Number( studentTypes.active):
//         break;
//     default
// }


// console.log(myStatus) 

// if(myStatus == studentTypes.active){
//     console.log("student has not yet graduated")
// }



// let code: string | number = 'a111'
// //code = false will not run as code must be a string or number as declared on line 35.

// console.log(`my code is ${code}`)


// function sum(arr: number[]) {
//     return arr.reduce({total, num} => total + num)
// }

// let numbers: number[] = [31, 53, 5, 25.6 ]
// console.log(sum(numbers))

let complexItem: any = { name: "Derek"}

complexItem = {title: "professor"}
complexItem = "im a string"


// console.log("complexIten", complexItem)


enum bloodtype {
    APositive,
    ANegative,
    BPositive,
    BNegative,
    O,
}

interface human {
    name: string,
    age: number,
    height: number,
    bloodtype?: bloodtype, //this questionmark {?} means the item in the INTERFACE is OPTIONAL

}




const me: human = {
    name: "Derek",
    age: 36,
    bloodtype: bloodtype.APositive,
    height: 6 * 12
}

console.log(me)