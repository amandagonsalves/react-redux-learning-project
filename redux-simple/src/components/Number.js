import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Number = props => {
    const { min, max } = props;
    const number = parseInt(Math.random() *( max - min)) + min;

    return (
        <Card title="Sorteio de números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{number}</strong>
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

export default connect(mapStateToProps)(Number);