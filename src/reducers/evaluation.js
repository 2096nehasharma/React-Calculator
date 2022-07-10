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
    history: '0',
    icon:""
}

export default function (state = initialState, action) {
    const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4) : state.history;

    switch (action.type) {
        case UPDATE: {
            console.log(action,state,history(),"OUTPUT")
            const updateDisplay = action.payload;
            // preventing update if decimal is already present in display value and return state
            if ((state.display.includes('.') && updateDisplay.input === ".") || state.display.length > 8) {
                return { ...state }
            } 
            else {
                (console.log("ELSE BLOCK",state))
                return {
                    ...state,
                    // overriding with 0 or value
                    display: state.display === '0' || state.prevOp === "operator"||state.prevOp === "equal" || state.prevOp === "clear" ?
                        updateDisplay.input
                        : state.display + updateDisplay.input,
                        accumulated: state.prevOp === "equal" || state.prevOp === "clear"?updateDisplay.input:state.display + updateDisplay.input,
                    prevOp: updateDisplay.operation,
                }
            }
        }

        //removing last entry if double operator is used. 
        case ADD: {

            return {
                ...state,
                icon:" + ",
                display: state.display,
                history: state.history === '0' && state.accumulated === "0" ? state.display + " + "
                    : state.accumulated !== "0" ? state.accumulated + " + "
                        : history() + state.display + " + ",
                prevOp: "operator"
            }
        }

        case SUBTRACT: {
            return {
                ...state,
                icon:" - ",
                display: state.display,
                history: state.history === '0' && state.accumulated === "0" ? state.display + " - "
                    : state.accumulated !== "0" ? state.accumulated + " - "
                        : history() + state.display + " - ",
                prevOp: "operator"
            }
        }

        case MULTIPLY: {
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
            return {
                ...state,
                icon:" / ",
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
            console.log("HISTORY:",history(),"state",state,"STATESSSSS",states)
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