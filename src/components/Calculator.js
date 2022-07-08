import React, { useState } from 'react'
var math = require('mathjs');

const Calculator = () => {
    console.log("NEHA")
    const operands=[
        {
            id:"seven",
            value:7,
        },{
            id:"eight",
            value:8,
        },{
            id:"nine",
            value:9,
        },{
            id:"add",
            value:"+",
        },{
            id:"four",
            value:4,
        },{
            id:"five",
            value:5,
        },{
            id:"six",
            value:6,
        },{
            id:"multiply",
            value:"x",
        },
        {
            id:"one",
            value:1,
        },
        {
            id:"two",
            value:2,
        },
        {
            id:"three",
            value:3,
        },{
            id:"subtract",
            value:"-",
        },
       {
            id:"decimal",
            value:".",
        }, {
            id:"clear",
            value:"0",
        },
        {
            id:"equals",
            value:"=",
        },
        {
            id:"divide",
            value:"/",
        },
    ]
    // const operators=[
    //     {
    //         id:"multiply",
    //         value:"x",
    //     },
    //     {
    //         id:"add",
    //         value:"+",
    //     },
    //     {
    //         id:"subtract",
    //         value:"-",
    //     },{
    //         id:"divide",
    //         value:"/",
    //     },{
    //         id:"clear",
    //         value:"0",
    //     },
    // ]
    const [display, setDisplay] = useState("");
    const [expression, setExpression] = useState([]);

    const handleClick = (e) => {

        console.log("nnnn")
        console.log(e);
        setDisplay(e);
        setExpression([...expression, e]);
    };

    const handleResult = () => {
        console.log(expression,"EXP")
        const result = expression
            .join("")
            .split(/(\D)/g)
            .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
            .reduce((acc, value, index, array) => {
                switch (value) {
                    case "+":
                        return (acc =acc+array[index+1]);
                    case "-":
                        return (acc = acc - array[index + 1]);
                    case "x":
                        return (acc = acc * array[index + 1]);
                    case "/":
                        return (acc = acc / array[index + 1]);
                    default:
                        return acc;
                }
            });
        console.log(result,"result")

        setDisplay(result);
        setExpression("");
    };

    return (
        <>
            <h1>Calculator</h1>

            <div className="calculator">
                <div className="display">{display}</div>
                <div className='keypad'>
                    {
                        operands.map((v,key)=>{
                            if(v.id==="equals"){
                           return  (<button id={v.id} key={key} value={v.value} onClick={()=>handleResult()}>{v.value}</button>)
                            }
                           return  (
                           <div >
                            <button id={v.id} key={key} value={v.value} onClick={()=>handleClick(v.value)}>{v.value}</button> 
                            </div>)
                        })                       
                        }

                    {/* <button id="seven" onClick={() => handleClick(7)}>7</button>
                    <button id="eight" onClick={() => handleClick(8)}>8</button>
                    <button id="nine" onClick={() => handleClick(9)}>9</button>

                    <button id="add" className='evalBtn' onClick={() => handleClick("+")}>+</button>

                    <button id="four" onClick={() => handleClick(4)}>4</button>
                    <button id="five" onClick={() => handleClick(5)}>5</button>
                    <button id="six" onClick={() => handleClick(6)}>6</button>

                    <button id="multiply" className='evalBtn' onClick={() => handleClick("x")}>*</button>

                    <button id="one" onClick={() => handleClick(1)}>1</button>
                    <button id="two" onClick={() => handleClick(2)}>2</button>
                    <button id="three" onClick={() => handleClick(3)}>3</button>

                    <button id="divide" className='evalBtn' onClick={() => handleClick("/")}>/</button>

                    <button id="decimal" onClick={() => handleClick(".")}>.</button>
                    <button id="zero" onClick={() => handleClick(0)}>0</button>
                    <button id="equals" onClick={() => handleResult()}>=</button>

                    <button id="subtract" className='evalBtn' onClick={() => handleClick("-")}>-</button> */}
                    {/* <button id="clear" className='evalBtn clear' onClick={() => handleClick("c")}>Clear</button> */}

                </div>

            </div>
        </>
    )
}

export default Calculator;