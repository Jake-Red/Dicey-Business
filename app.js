document.addEventListener("DOMContentLoaded", function () {
let genDieBtn = document.getElementById('genDie')
let rollDieBtn = document.getElementById('rollDie')
let sumDieBtn = document.getElementById('sumDie')
let sumArr = []
let dieContainer = document.getElementById('dieContainer')
class Die {
    constructor(){
        this.div = document.createElement('div')
        this.div.classList.add('rolledDice')
        dieContainer.appendChild(this.div)
        this.roll()
        document.body.appendChild(this.div)
        sumArr.push(this)
            this.div.addEventListener('dblclick', function(){
                sumArr.splice(sumArr.indexOf(this, sumArr),1)
            })
            
        }
        roll(){
            this.value = Math.floor(Math.random()* 6 + 1 )
            let valueNum = document.createTextNode(this.value)
            this.div.appendChild(valueNum)
        }
    }
    
    

genDieBtn.addEventListener('click', function(){ //Makes a new Die
    let die = new Die()
})
rollDieBtn.addEventListener('click', function(){    //Rerolls all current Die
    for(let i = 0; i < sumArr.length; i++){
        sumArr[i].roll()
    }
})
sumDieBtn.addEventListener('click', function(){     //Adds the sum of all displayed Die and presents an Alert containing the Sum
    let sum = 0
    for(let i = 0; i < sumArr.length; i++){
        sum += sumArr[i].value
        }
        alert(`The sum of all Die is ${sum}`)
    })
})