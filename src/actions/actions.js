import { UPDATE } from "./types";
import { ADD } from "./types";
import { SUBTRACT } from "./types";
import { MULTIPLY } from "./types";
import { DIVIDE } from "./types";
import { CLEAR } from "./types";
import { EQUAL } from "./types";

export const addition = content => ({
    type: ADD,
    payload: {
        operation: "operator"
    }
});

export const subtraction = content => ({
    type: SUBTRACT,
    payload: {
        operation: "operator"
    }
});

export const multiplication = content => ({
    type: MULTIPLY,
    payload: {
        operation: "operator"
    }
});

export const division = content => ({
    type: DIVIDE,
    payload: {
        operation: "operator"
    }
});

export const clearDisplay = content => ({
    type: CLEAR,
    payload: {
        operation: "clear"
    }
});

export const equal = content => ({
    type: EQUAL,
    payload: {
        operation: "equal"
    }
});

export const updateDisplay = content => ({
    type: UPDATE,
    payload: {
        input: content,
        operation: "operand"
    }
})