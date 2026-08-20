import { useState } from 'react'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const[operator, setOperator] = useState(null)
  const[firstNumber, setFirstNumber] = useState(null)
  const[result, setResult] = useState(null)
  const [justCalculated, setJustCalculated] = useState(false)
  const [expression, setExpression] = useState('')

 function handleNumber(number) {
   if (justCalculated) {
     setExpression('')
     setDisplay(number)
     setResult(null)
     setOperator(null)
     setFirstNumber(null)
     setJustCalculated(false)
     return
    }

    if (display === '0') {
      setDisplay(number)
      } else {
      setDisplay(display + number)
   }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-gray-800 p-4 rounded-2xl shadow-2xl">
       <div className="bg-gray-900 p-4 text-white h-24 rounded-xl flex flex-col items-end justify-center">
          <div className="bg-gray-900 p-4 text-white h-24 rounded-xl flex flex-col items-end justify-center">
           {expression}
           {!justCalculated && operator !== null ? display : ''}
           {!justCalculated && operator === null ? display : ''}
          </div> 

         <div className="text-3xl">
           {justCalculated ? result : ''}
         </div>
       </div>



       <div className="grid grid-cols-4 gap-2 mt-4">
         <button className="h-14 bg-gray-600 text-white text-xl rounded-xl hover:bg-gray-500 active:scale-95 transition duration-150" onClick={handleDelete}>⌫</button>
         <button className="h-14 bg-red-500 text-white text-xl rounded-xl hover:bg-red-400 active:scale-95 transition duration-150" onClick={handleClear}>AC</button>
         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150" onClick={() => handleOperator('%')}>%</button>
         <button className="h-14 bg-orange-500 text-white text-xl rounded-xl hover:bg-orange-400 active:scale-95 transition duration-150" onClick={() => handleOperator('/')}>÷</button>

         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150" onClick={() => handleNumber('7')}>7</button>
         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150" onClick={() => handleNumber('8')}>8</button>
         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150" onClick={() => handleNumber('9')}>9</button>
         <button className="h-14 bg-orange-500 text-white text-xl rounded-xl hover:bg-orange-400 active:scale-95 transition duration-150" onClick={() => handleOperator('*')}>×</button>
      
         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150" onClick={() => handleNumber('4')}>4</button>
         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150 " onClick={() => handleNumber('5')}>5</button>
         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150" onClick={() => handleNumber('6')}>6</button>
         <button className="h-14 bg-orange-500 text-white text-xl rounded-xl hover:bg-orange-400 active:scale-95 transition duration-150" onClick={() => handleOperator('-')}>-</button>
      
         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150" onClick={() => handleNumber('1')}>1</button>
         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150" onClick={() => handleNumber('2')}>2</button>
         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150" onClick={() => handleNumber('3')}>3</button>
         <button className="h-14 bg-orange-500 text-white text-xl rounded-xl hover:bg-orange-400 active:scale-95 transition duration-150" onClick={() => handleOperator('+')}>+</button>
      
         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150" onClick={handleToggleSign}>+/-</button>
         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150" onClick={() => handleNumber('0')}>0</button>
         <button className="h-14 bg-gray-700 text-white text-xl rounded-xl hover:bg-gray-600 active:scale-95 transition duration-150" onClick={handleDecimal}>.</button>
         <button className="h-14 bg-blue-500 text-white text-xl rounded-xl hover:bg-blue-400 active:scale-95 transition duration-150" onClick = {handleCalculate}>=</button>
        </div>
      </div>
    </div>
 
  )

  function handleOperator(op) {
    const symbol = op === '*' ? '×' : op === '/' ? '÷' : op

     if (operator !== null) {
    return
   }

    setFirstNumber(Number(display))
    setOperator(op)
    setExpression(display + ' ' + symbol + ' ')
    setDisplay('')
  }

  function handleCalculate() {
    const secondNumber = Number(display)
    let answer
    setExpression(expression + secondNumber)
    setResult(answer)
    setDisplay(String(answer))
    setJustCalculated(true)
    

   if (operator === '+') {
       answer = firstNumber + secondNumber
    } else if (operator === '-') {
    answer = firstNumber - secondNumber
    } else if (operator === '*') {
    answer = firstNumber * secondNumber
    }
    else if (operator === '/') {
      if (secondNumber === 0) {
       answer = 'Cannot divide by zero'
      } else {
        answer = firstNumber / secondNumber
      }
    } 
    else if (operator === '%') {
     if (secondNumber === 0) {
       answer = 'Cannot divide by 0'
      } 
      else if (secondNumber === 1) {
        answer = firstNumber
      } else {
      answer = firstNumber % secondNumber
     }
    }
  
   setExpression(expression + secondNumber)
   setDisplay(String(answer))
   setResult(answer)
   setJustCalculated(true)
  } 



 function handleClear() {
   setDisplay('0')
   setResult(null)
   setOperator(null)
   setFirstNumber(null)
   setExpression('')
   setJustCalculated(false)
  }

  function handleDecimal() {
    if(justCalculated){
      setDisplay('0.')
      setJustCalculated(false)}
    else if (!display.includes('.')){
            setDisplay(display + '.')}   
  }

  function handleDelete() {
    if (justCalculated) {
      setDisplay('0')
      setExpression('')
      setResult(null)
      setOperator(null)
      setFirstNumber(null)
      setJustCalculated(false)
      return
    }

    if (operator !== null && display !== '') {
      if (display.length > 1) {
      setDisplay(display.slice(0, -1))
      } else {
      setDisplay('')
    }
    return
    }
  
    if (operator !== null && display === '') {
      setOperator(null)
      setExpression('')
      setDisplay(String(firstNumber))
      return
    }

    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else if (display.length === 1) {
      setDisplay('0')
    }
  }

 function handleToggleSign() {
  if (display === '0') {
    return
  }

  if (display.startsWith('-')) {
    setDisplay(display.slice(1))
  } else {
    setDisplay('-' + display)
  }
}}
