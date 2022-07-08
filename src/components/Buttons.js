import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDisplay } from "../actions/actions";
import { clearDisplay } from "../actions/actions";
import { subtraction } from "../actions/actions";
import { multiplication } from "../actions/actions";
import { division } from "../actions/actions";
import { addition } from "../actions/actions";
import { equal } from "../actions/actions";

const Buttons = (props) => {

    const handleClick = () => {
        if (props.id === "clear") {
            props.clear();
        } else if (props.id === "subtract") {
            props.subtract(props.display);
        } else if (props.id === "multiply") {
            props.multiply(props.display);
        } else if (props.id === "divide") {
            props.divide(props.display);
        } else if (props.id === "add") {
            props.add(props.button)
        } else if (props.id === "equals") {
            props.equal(props.display);
        } else {
            props.updateDisplay(props.button);
        }
    }

    return (
        <button id={props.id} value={props.value} onClick={() => handleClick()} className={props.className}>
            {props.button}
        </button>
    );
}

const mapDispatchToProps = dispatch => ({
    updateDisplay: display => dispatch(updateDisplay(display)),
    subtract: display => dispatch(subtraction(display)),
    multiply: display => dispatch(multiplication(display)),
    divide: display => dispatch(division(display)),
    clear: display => dispatch(clearDisplay(display)),
    add: display => dispatch(addition(display)),
    equal: display => dispatch(equal(display)),
    display: display => dispatch(updateDisplay(display)),
});

export default connect(null, mapDispatchToProps)(Buttons);