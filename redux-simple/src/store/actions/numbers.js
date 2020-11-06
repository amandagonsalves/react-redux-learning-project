//action creator
import { NUM_MIN_CHANGED, NUM_MAX_CHANGED } from './actionTypes';

export function changeMinValue(newNumber) {
    return {
        type: NUM_MIN_CHANGED,
        payload: newNumber
    }
};

export function changeMaxValue(newNumber) {
    return {
        type: NUM_MAX_CHANGED,
        payload: newNumber
    }
};