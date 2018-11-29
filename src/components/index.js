import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchFilms} from '../actions';

class Index extends Component {
    componentDidMount() {
        this.props.fetchFilms();
    }
    setFilms() {
        return _.map(this.props.films, film => {
            return (
                <li className="list-group-item" key={film.id}>
                    <Link to={`/films/${film.id}`}>{film.title}</Link>
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <h3>FILMS</h3>
                <ul className='list-group'>
                    {this.setFilms()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {films: state.data}
}

export default connect(mapStateToProps, {fetchFilms})(Index);

