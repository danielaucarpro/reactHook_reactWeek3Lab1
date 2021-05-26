import React from 'react';
import './ClassComponent.css';

export default class ClassComponent extends React.Component {
    state = {
        namePhp: 'Php',
        countPhp: 0,
        namePython: 'Python',
        countPython: 0,
        nameGO: 'Go',
        countGO: 0,
        nameJava: 'Java',
        countJava: 0
    }

    render() {
        return (
            <>
                <h3 className='h4'>CLASS</h3>
                <div className='container'>
                    <span>{this.state.countPhp}</span>
                    <span className='name'>{this.state.namePhp}</span>
                    <button
                        className='btn'
                        onClick={() => this.setState({countPhp: this.state.countPhp +1})}>
                        Click Here
                    </button>
                </div>
                <div className='container'>
                    <span>{this.state.countPython}</span>
                    <span className='name'>{this.state.namePython}</span>
                    <button
                        className='btn'
                        onClick={() => this.setState({countPython: this.state.countPython +1})}>
                        Click Here
                    </button>
                </div>
                <div className='container'>
                    <span>{this.state.countGO}</span>
                    <span className='name'>{this.state.nameGO}</span>
                    <button
                        className='btn'
                        onClick={() => this.setState({countGO: this.state.countGO +1})}>
                        Click Here
                    </button>
                </div>
                <div className='container'>
                    <span>{this.state.countJava}</span>
                    <span className='name'>{this.state.nameJava}</span>
                    <button
                        className='btn'
                        onClick={() => this.setState({countJava: this.state.countJava +1})}>
                        Click Here
                    </button>
                </div>
            </>
        );
    }
}