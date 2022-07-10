import { ADD } from "../actions/types";
import { SUBTRACT } from "../actions/types";
import { MULTIPLY } from "../actions/types";
import { DIVIDE } from "../actions/types";
import { UPDATE } from "../actions/types";
import { CLEAR } from "../actions/types";
import { EQUAL } from "../actions/types";

var math = require('mathjs');

const initialState = {
    display: '0',
    prevOp: "",
    accumulated: "0",
    history: '0'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE: {
            // console.log(action,state,"OUTPUT")

            const updateDisplay = action.payload;
            // preventing update if decimal is already present in display value and return state
            if ((state.display.includes('.') && updateDisplay.input === ".") || state.display.length > 8) {
                return { ...state }
            } else if (state.prevOp === "equal" || state.prevOp === "clear") {
                console.log("checking displayed values", updateDisplay, state, updateDisplay.input)
                return {
                    ...state,
                    // overridibg input and updating history
                    display: updateDisplay.input,
                    accumulated: updateDisplay.input,
                    history: updateDisplay.input,
                    prevOp: updateDisplay.operation,
                }
            }
            else {
                (console.log(state, "state"))
                return {
                    ...state,
                    // overriding with 0 or value
                    display: state.display === '0' || state.prevOp === "operator" ?
                        updateDisplay.input
                        : state.display + updateDisplay.input,
                    prevOp: updateDisplay.operation,
                }
            }
        }

        //removing last entry if double operator is used. 
        case ADD: {
            const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4) : state.history;

            return {
                ...state,
                display: state.display,
                history: state.history === '0' && state.accumulated === "0" ? state.display + " + "
                    : state.accumulated !== "0" ? state.accumulated + " + "
                        : history() + state.display + " + ",
                prevOp: "operator"
            }
        }

        case SUBTRACT: {
            const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4) : state.history;
            return {
                ...state,
                display: state.display,
                history: state.history === '0' && state.accumulated === "0" ? state.display + " - "
                    : state.accumulated !== "0" ? state.accumulated + " - "
                        : history() + state.display + " - ",
                prevOp: "operator"
            }
        }

        case MULTIPLY: {
            const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4) : state.history;

            return {
                ...state,
                display: state.display,
                history: state.history === '0' && state.accumulated === "0" ? state.display + " * "
                    : state.accumulated !== "0" ? state.accumulated + " * "
                        : history() + state.display + " * ",
                prevOp: "operator"
            }
        }

        case DIVIDE: {
            const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4) : state.history;
            return {
                ...state,
                display: state.display,
                history: state.history === '0' && state.accumulated === "0" ? state.display + " / "
                    : state.accumulated !== "0" ? state.accumulated + " / "
                        : history() + state.display + " / ",
                prevOp: "operator"
            }
        }
        // clearing data
        case CLEAR: {
            return {
                ...state,
                display: '0',
                prevOp: "clear",
                accumulated: 0,
                history: "0"
            }
        }
        case EQUAL: {
            let states = state.history + state.display; //concatenating values to history
            //using math js library for operations
            let maths = math.evaluate(states);
            console.log(states, state.history, state.display, state, "STATE")
            if (state.prevOp === "equal") {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    history: math.round(maths, 4).toString(),
                    display: math.round(maths, 4).toString(),
                    accumulated: maths.toString(),
                    prevOp: "equal",
                }
            }
        }
        default: return state;
    }

}