import React, { Component } from 'react';
import './HomeComponent.css';
import { SunDim, Mountains, Martini } from 'phosphor-react';

class HomeComponent extends Component {
    render() {
        const { totalTrips, treks, tropics, clubs } = this.props;
        const progressBarWidth = (totalTrips > 0) ? Math.floor((treks + tropics + clubs) / totalTrips * 100) : 0;
        return (
            <div className='home-component'>
                <div id='total-trips'>{totalTrips}<span className='trips'>trips</span></div>
                <br/><br/>
                <div id='trip-logs'>
                    <span>
                        <SunDim className='icons' size={40} color="#050505" weight="fill" />
                        {tropics}
                    </span>
                    <span>
                        <Mountains className='icons' size={40} color="#050505" weight="fill" />
                        {treks}
                    </span>
                    <span>
                        <Martini className='icons' size={40} color="#050505" weight="fill" />
                        {clubs}
                    </span>
                    <div id='progress-bar-container'>
                    <div id='progress-bar' style={{ width: `${progressBarWidth}%` }} />
                    <span id='progress'>{progressBarWidth}%</span>
                </div>
            </div>
                </div>
                
                
        );
    }
}

export default HomeComponent;
