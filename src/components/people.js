import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPeoples} from '../actions';

class People extends Component {
    componentDidMount() {
        this.props.fetchPeoples();
    }
    setPeoples() {
        return _.map(this.props.peoples, people => {
            return (
                <li className="list-group-item" key={people.id}>
                    <Link to={`/people/${people.id}`}>{people.name}</Link>
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <h3>PEOPLES</h3>
                <ul className='list-group'>
                    {this.setPeoples()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {peoples: state.data}
}

export default connect(mapStateToProps, {fetchPeoples})(People);

