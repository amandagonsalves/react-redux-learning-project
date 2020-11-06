import './interval.css';
import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { changeMinValue, changeMaxValue } from '../store/actions/numbers';

const Interval = props => {
    const { min, max } = props;

    return (
        <Card title="Intervalo de números" red>
            <div className="interval">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => props.changeMin(+e.target.value)}></input>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => props.changeMax(+e.target.value)}></input>
                </span>
            </div>
        </Card>
    );
};

const mapStateToProps = state => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeMin(newNumber) {
            const action = changeMinValue(newNumber);
            dispatch(action);
        },
        changeMax(newNumber) {
            const action = changeMaxValue(newNumber);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval);