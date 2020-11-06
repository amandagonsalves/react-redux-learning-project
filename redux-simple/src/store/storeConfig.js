import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numbers: function(state, action) {
        console.log(state, '  ', action);
        return {
            min: 7,
            max: 31
        }
    },
    names: function(state, action) {
        console.log(state, '  ', action);
        return [
            'ana',
            'bia',
            'joao'
        ]
    }
});

function storeConfig() {
    return createStore(reducers);
};

export default storeConfig;