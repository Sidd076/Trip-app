import React, { Component } from 'react';
import './AddTripComponent.css';
let trips = {}
class AddTripComponent extends Component {
    constructor(props) {
        super(props);
        trips = props.data;
    }
    render() {
        return (
            <div className='add-trip'>
                <div className='head-text'>Add a trip</div>
                <div>
                    <label htmlFor="trip-date">Date:</label><br/>
                    <input id='trip-date' type="date" name='trip-date'/><br/>
                    <label htmlFor='trip-place'>Place</label><br/>
                    <input id='trip-place' type="text" name='trip-place'/><br/>
                    <label>Type</label><br/>
                    <select id='trip-type'>
                        <option>Trek</option>
                        <option>Club</option>
                        <option>Tropic</option>
                    </select><br/>
                    <button
                        onClick={() => {
                            let tripDate = document.getElementById('trip-date').value;
                            let tripPlace = document.getElementById('trip-place').value;
                            let tripType = document.getElementById('trip-type').value;
                            if(tripDate && tripPlace && tripType){
                                trips[tripDate] = {
                                    place: tripPlace,
                                    type: tripType
                                }
                                this.props.clickHandler(trips)
                                document.getElementById('trip-date').value = ""
                                document.getElementById('trip-place').value = ""
                                this.showToast("Added trip successfully")
                            }
                        }}
                    >Submit</button>
                </div>
                <div id='toast'></div>
            </div>
        );
    }

    showToast(text) {
        let toast = document.getElementById('toast');
        toast.innerHTML = text;
        let opc = 1;
        toast.style.opacity = 1;
        let id = setInterval(() => {
            if(opc <= 0){
                clearInterval(id);
            }else{
                toast.style.opacity = opc;
                opc -= 0.01;
            }
        }, 20);
    }
        
}

export default AddTripComponent;