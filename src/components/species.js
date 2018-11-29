import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchSpecies} from '../actions';

class Species extends Component {
    componentDidMount() {
        this.props.fetchSpecies();
    }
    setSpecies() {
        return _.map(this.props.species, species => {
            return (
                <li className="list-group-item" key={species.id}>
                    <Link to={`/species/${species.id}`}>{species.name}</Link>
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <h3>SPECIES</h3>
                <ul className='list-group'>
                    {this.setSpecies()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {species: state.data}
}

export default connect(mapStateToProps, {fetchSpecies})(Species);

