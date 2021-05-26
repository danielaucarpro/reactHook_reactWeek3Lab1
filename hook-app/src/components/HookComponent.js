import React, { useState } from 'react';
import './ClassComponent.css';

export default function HookComponent() {
    const [countPhp, setCountPhp] = useState(0);
    const [countPython, setCountPython] = useState(0);
    const [countGO, setCountGo] = useState(0);
    const [countJava, setCountJava] = useState(0);

    return (
        <>
            <h3 className='h4'>HOOK</h3>
            <div className='container'>
                <span>{countPhp}</span>
                <span className='name'>Php</span>
                <button
                    className='btn'
                    onClick={() => setCountPhp(countPhp + 1)}>
                    Click Here
            </button>
            </div>
            <div className='container'>
                <span>{countPython}</span>
                <span className='name'>Python</span>
                <button
                    className='btn'
                    onClick={() => setCountPython(countPython + 1)}>
                    Click Here
            </button>
            </div>
            <div className='container'>
                <span>{countGO}</span>
                <span className='name'>GO</span>
                <button
                    className='btn'
                    onClick={() => setCountGo(countGO + 1)}>
                    Click Here
            </button>
            </div>
            <div className='container'>
                <span>{countJava}</span>
                <span className='name'>Java</span>
                <button
                    className='btn'
                    onClick={() => setCountJava(countJava + 1)}>
                    Click Here
            </button>
            </div>
        </>
    );
}