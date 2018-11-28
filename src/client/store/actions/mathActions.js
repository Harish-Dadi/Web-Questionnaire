export function addNumbers(number) {
    return {
        type: "ADD",
        payload: number
    }
}

export function subtractNumbers(number) {
    return {
        type: "SUBTRACT",
        payload: number
    }
}

export function multiplyNumbers(number) {
    return {
        type: "MULTIPLY",
        payload: number
    }
}

export function divideNumbers(number) {
    return {
        type: "DIVIDE",
        payload: number
    }
}

export function remainderNumbers(number) {
    return {
        type: "REMAINDER",
        payload: number
    }
}