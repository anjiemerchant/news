const toDate = inputStr => `${inputStr.slice(5,7)}/${inputStr.slice(8,10)}/${inputStr.slice(0,4)}`

module.exports = {toDate}
