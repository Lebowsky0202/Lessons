'use strict'

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];


const getPositiveIncomeAmount = (data) => {
    let newArr = data.filter(item => item.amount >= 0);
    return newArr.reduce((sum, item) => sum + item.amount, 0);
};

const getTotalIncomeAmount = (data) => {
    if (data.some(item => item.amount < 0)) {
        return data.reduce((sum, item) => sum + item.amount, 0);
    }else{
        return getPositiveIncomeAmount(data);
    }
};

console.log(getPositiveIncomeAmount(funds));
console.log(getTotalIncomeAmount(funds));