import React from 'react'

const Calculator = () => {

    return (
        <>
            <h1>Calculator</h1>

            <div className="calculator">
                <div className="output">output</div>
                <div className='keypad'>

                    <button id="seven">7</button>
                    <button id="eight">8</button>
                    <button id="nine">9</button>

                    <button id="add" className='evalBtn'>+</button>

                    <button id="four">4</button>
                    <button id="five">5</button>
                    <button id="six">6</button>

                    <button id="multiply" className='evalBtn'>*</button>

                    <button id="one">1</button>
                    <button id="two">2</button>
                    <button id="three">3</button>

                    <button id="divide" className='evalBtn'>/</button>

                    <button id="decimal">.</button>
                    <button id="zero">0</button>
                    <button id="equals">=</button>

                    <button id="subtract" className='evalBtn'>-</button>
                    <button id="clear" className='evalBtn clear'>Clear</button>

                </div>

            </div>
        </>
    )
}

export default Calculator;