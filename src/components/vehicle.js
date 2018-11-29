import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchVehicle} from '../actions';

class Vehicle extends Component {
    componentDidMount() {
        this.props.fetchVehicle();
    }
    setVehilce() {
        return _.map(this.props.vehicles, vehicle => {
            return (
                <li className="list-group-item" key={vehicle.id}>
                    <Link to={`/vehicle/${vehicle.id}`}>{vehicle.name}</Link>
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <h3>VEHICLES</h3>
                <ul className='list-group'>
                    {this.setVehilce()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {vehicles: state.data}
}

export default connect(mapStateToProps, {fetchVehicle})(Vehicle);

