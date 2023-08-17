import React, { useState } from 'react';
import './HerracDateTime.css';
import { GiInjustice } from "react-icons/gi";
import  HerracTime  from './HerracTime.json';


function HerracDateTime() {
    const [isButton1Active, setIsButton1Active] = useState(true);

    const handleButton1Click = () => {
        setIsButton1Active(true);
    };

    const handleButton2Click = () => {
        setIsButton1Active(false);
    };

    return (
        <div className="herrac-list mt-3">
            <div className="herrac-header-area">
                <button
                    className={`button ${isButton1Active ? 'active' : ''}`}
                    onClick={handleButton1Click}
                >
                    İlkin Hərrac
                </button>
                <button
                    className={`button ${!isButton1Active ? 'active' : ''}`}
                    onClick={handleButton2Click}
                >
                    Təkrar Hərrac
                </button>
            </div>
            {HerracTime.dateTimes.map(dateTime => (
                <div className="date-time-button mt-4" key={dateTime.id}>
                    <GiInjustice size="28px" color='#6b7280' />
                    <div className="date-location">
                        <span className="date">{dateTime.date}</span>
                        <button className='btn btn-primary'>{dateTime.time}</button>
                    </div>
                </div>
            ))}


        </div>

    );
}

export default HerracDateTime;

