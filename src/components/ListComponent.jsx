import React, { Component } from 'react';
import './ListComponent.css'
class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredTrips: props.data
        };
    }

    handleFilter = (type) => {
        const filteredTrips = Object.keys(this.props.data)
            .filter(key => this.props.data[key].type === type)
            .reduce((obj, key) => {
                obj[key] = this.props.data[key];
                return obj;
            }, {});
        this.setState({ filteredTrips });
    };

    render() {
        return (
            <div className="list-component">
                <div className='head-text'>All Trips</div>
                <table>
                    <tbody>
                        <tr><th>Date</th><th>Place</th><th>Type</th></tr>
                        {
                            Object.keys(this.state.filteredTrips).map(key => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{this.state.filteredTrips[key].place}</td>
                                    <td>{this.state.filteredTrips[key].type}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <span className='filter'>Filter by: 
                    <span className='filter-buttons' onClick={() => this.setState({ filteredTrips: this.props.data })}>All</span> • 
                    <span className='filter-buttons' onClick={() => this.handleFilter('Trek')}>Treks</span> • 
                    <span className='filter-buttons' onClick={() => this.handleFilter('Club')}>Clubs</span> • 
                    <span className='filter-buttons' onClick={() => this.handleFilter('Tropic')}>Tropics</span>
                </span>
            </div>
        );
    }
}

export default ListComponent;
