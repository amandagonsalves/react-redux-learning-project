import './interval.css';
import React from 'react';
import Card from './Card';

export default props => {
    return (
        <Card title="Intervalo de números" red>
            <div className="interval">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={0} readOnly></input>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={20} readOnly></input>
                </span>
            </div>
        </Card>
    )
}