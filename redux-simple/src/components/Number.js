import React from 'react';
import Card from './Card';

export default props => {
    const { min, max } = props;
    const number = parseInt(Math.random() * (max - min)) + min;
    return (
        <Card title="Sorteio de números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{number}</strong>
                </span>
            </div>
        </Card>
    )
}