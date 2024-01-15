/* Selecionando elementos */

let heighInput = document.getElementById("height-input")
let weighInput = document.getElementById("weight-input")
let calcBtn = document.getElementById("calc-btn")
let resetBtn = document.getElementById("reset-btn")
let tableInfo = document.getElementById("table-info")
let calcContainer = document.getElementById("calc-container")
let resultContainer = document.getElementById("result-container")
let container = document.getElementById("container")
let clearBtn = document.getElementById("clear-btn")

/* funções / data */

const bmiData = [
  {
    min : "0",
    max : "18,5",
    classification : "Entre 0 e 18,5",
    info : "magreza",
    obesity : "0",
  },
  {
    min : "18,6",
    max : "24,9",
    classification : "Entre 18,6 e 24,9",
    info : "peso normal",
    obesity : "0",
  },
  {
    min : "25",
    max : "29,9",
    classification : "Entre 25 e 29,9",
    info : "sobrepeso",
    obesity : "0",
  },
  {
    min : "30",
    max : "34,9",
    classification : "Entre 30 e 34,9",
    info : "Obesidade",
    obesity : "I",
  },
  {
    min : "35",
    max : "39,9",
    classification : "Entre 35 e 39,9",
    info : "Obesidade",
    obesity : "II",
  },
  {
    min : "40",
    max : "99",
    classification : "Acima de 40",
    info : "Obesidade",
    obesity : "III",
  },
]


function createTable (bmiData) {
  bmiData.forEach((item) => {

    const div = document.createElement("div")
    div.classList.add("table-info")
    
    const classification = document.createElement("p")
    classification.innerText = item.classification
    
    const info = document.createElement("p")
    info.innerText = item.info

    const obesity = document.createElement("p")
    obesity.innerText = item.obesity
    
    div.appendChild(classification)
    div.appendChild(info)
    div.appendChild(obesity)
    
    tableInfo.appendChild(div)
  })
}

createTable(bmiData)

function clearInput () {
  heighInput.value = ""
  weighInput.value = ""
}

function validDigits (text) {
  return text.replace(/[^0-9,.]/g,"")
}

function calcularBmi (height, weight){
  let total = 0
  height *= height
  total = weight / height 
  return total
}

/* Evento */

[heighInput, weighInput].forEach((el) => {
  el.addEventListener("input", (e) => {
    const updatedValue = validDigits(e.target.value)
    
    e.target.value = updatedValue
  })})

resetBtn.addEventListener("click", (e) => {
  e.preventDefault(e)
  clearInput()
})

calcBtn.addEventListener("click", (e) => {
  e.preventDefault(e)
  
  const weight = +weighInput.value.replace("," , ".")
  const height = +heighInput.value.replace("," , ".")
  
  let bmiResult = document.getElementById("bmi-result")
  let situation = document.getElementById("situation")
  
  if(weight || height){
    calcContainer.style.display = "none";
    resultContainer.style.display = "flex";
    container.style.height = "550px";
    let bmi = calcularBmi(height,weight)
    bmiResult.innerText = bmi; 
    
  
    let currentSituation = () => {
      if(bmi > 0 && bmi < 18.5){
        situation.innerHTML = " " + "magreza"
      } 
      else if (bmi > 18,6 && bmi < 24,9){
        situation.innerHTML = " " + "peso normal"
      }
      else if (bmi > 25 && bmi < 29,9){
        situation.innerHTML = " " + "sobrepeso"
      }
      else if (bmi > 30 && bmi < 34,9){
        situation.innerHTML = " " + "Obesidade de nvl I"
      }
      else if (bmi > 35 && bmi < 39,9){
        situation.innerHTML = " " + "Obesidade de nvl II"
      }
      else if (bmi > 40 && bmi < 99){
        situation.innerHTML = " " + "Obesidade de nvl III"
      }
      else {
        situation.innerHTML = " " + "Situação não encontrada"
      }
  }
  
    currentSituation()
  }
})

clearBtn.addEventListener("click", (e) => {
  calcContainer.style.display = "flex";
  resultContainer.style.display = "none";
  container.style.height = "500px";
  
})

