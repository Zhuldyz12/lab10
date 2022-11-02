let lab1 = [5, 5, 0, 0, 5, 0, 10]
let lab2 = [5, 5, 5, 5, 5, 5, 10]
let lab3 = [5, 10, 10, 15]
let lab4 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 5]
let lab6 = [5, 5, 10, 0, 5, 10]
let lab8 = [5, 10, 10, 10, 5]
let quiz1 = 26

function getSum(array) {
    let sum = 0
    for (let i = 0; i < array.length; ++i) {
        sum += array[i]
    }
    return sum
}

function main(lab1, lab2, lab3, lab4, lab6, lab8, quiz1) {
    let sums = [getSum(lab1), getSum(lab2),
     getSum(lab3), getSum(lab4), getSum(lab6), getSum(lab8)]
    let total_lab = getSum(sums)
    let total_score = (total_lab/280)*0.6*100 + (quiz1/40)*0.4*100  
    result = {
        lab1: lab1,
        lab2: lab2,
        lab3: lab3,
        lab4: lab4,
        lab6: lab6,
        lab8: lab8,
        quiz1: quiz1,
        sums: sums,
        total: total_score,
    }
    
    console.log(result);
}

main(lab1, lab2, lab3, lab4, lab6, lab8, quiz1)