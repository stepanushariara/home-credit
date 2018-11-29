import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchLocations} from '../actions';

class People extends Component {
    componentDidMount() {
        this.props.fetchLocations();
    }
    setLocations() {
        return _.map(this.props.locations, location => {
            return (
                <li className="list-group-item" key={location.id}>
                    <Link to={`/location/${location.id}`}>{location.name}</Link>
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <h3>LOCATIONS</h3>
                <ul className='list-group'>
                    {this.setLocations()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {locations: state.data}
}

export default connect(mapStateToProps, {fetchLocations})(People);

