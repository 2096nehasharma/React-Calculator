import React, { useState } from 'react';
import { connect } from "react-redux";
import Buttons from './Buttons';
export const getDisplay = store => store.display;

// var math = require('mathjs');

const Calculator = (props) => {

    const keypad = [
        {
            button: "7",
            id: "seven",
            value: '7',
            type: 'operand',
        },
        {
            button: "8",
            id: "eight",
            value: '8',
            type: 'operand',
        },
        {
            button: "9",
            id: "nine",
            value: '9',
            type: 'operand',
        },
        {
            button: "+",
            id: "add",
            type: 'operator',
            display: props.display,
            class: "operatorBtn"
        },
        {
            button: "4",
            id: "four",
            value: '4',
            type: 'operand',
        },
        {
            button: "5",
            id: "five",
            value: '5',
            type: 'operand',
        },
        {
            button: "6",
            id: "six",
            value: '6',
            type: 'operand',
        },
        {
            button: "*",
            id: "multiply",
            type: 'operator',
            display: props.display,
            class: "operatorBtn"
        },
        {
            button: "1",
            id: "one",
            value: '1',
            type: 'operand',
        },
        {
            button: "2",
            id: "two",
            value: '2',
            type: 'operand',
        },
        {
            button: "3",
            id: "three",
            value: '3',
            type: 'operand',
        },
        {
            button: "/",
            id: "divide",
            type: 'operator',
            display: props.display,
            class: "operatorBtn"
        },
        {
            button: ".",
            id: "decimal",
            value: '.',
            type: 'decimal',
            display: props.display
        },
        {
            button: "0",
            id: "zero",
            value: "0",
            type: 'operand',
        },
        {
            button: "=",
            id: "equals",
            type: 'equals',
            display: props.display,
            class: "operatorBtn"
        },
        {
            button: "-",
            id: "subtract",
            type: 'operator',
            display: props.display,
            class: "operatorBtn"
        },
        {
            button: "Clear",
            id: "clear",
            type: 'clear',
            class: "operatorBtn"
        },
    ]

    return (
        <>
            <div className="calculator">
                <h1 className='header'>Calculator</h1>
                <div className="display" id="display">{props.display}</div>
                <div className='keypad'>
                    {keypad.map((v, key) => {
                        return (
                            <Buttons
                                button={v.button}
                                id={v.id}
                                value={v.value ? v.value : ""}
                                key={key}
                                type={v.type}
                                display={v.display ? v.display : null}
                                className={v.class ? v.class : ""}
                            />
                        )
                    })}
                </div>
                {/* <div className='keypad'>
                    <Buttons button={"7"} id={"seven"} value={'7'} type={'operand'} />
                    <Buttons button={"8"} id={"eight"} value={'8'} type={'operand'} />
                    <Buttons button={"9"} id={"nine"} value={'9'} type={'operand'} />
                    <Buttons button={"+"} id={"add"} display={props.display} type={'operator'} />

                    <Buttons button={"4"} id={"four"} value={'4'} type={'operand'} />
                    <Buttons button={"5"} id={"five"} value={'5'} type={'operand'} />
                    <Buttons button={"6"} id={"six"} value={'6'} type={'operand'} />
                    <Buttons button={"*"} id={"multiply"} type={'operator'} display={props.display} />

                    <Buttons button={"1"} id={"one"} value={'1'} type={'operand'} />
                    <Buttons button={"2"} id={"two"} value={'2'} type={'operand'} />
                    <Buttons button={"3"} id={"three"} value={'3'} type={'operand'} />
                    <Buttons button={"/"} id={"divide"} type={'operator'} display={props.display} />

                    <Buttons button={"."} id={"decimal"} value={'.'} display={props.display} type={'decimal'} />
                    <Buttons button={"0"} id={"zero"} value={'0'} type={'operand'} />
                    <Buttons button={"="} id={"equals"} display={props.display} type={'equals'} />
                    <Buttons button={"-"} id={"subtract"} display={props.display} type={'operator'} />

                    <Buttons button={"C"} id={"clear"} type={'clear'} />
                </div> */}
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    const output = getDisplay(state);
    return ({ display: output, });
};

export default connect(mapStateToProps, null)(Calculator);