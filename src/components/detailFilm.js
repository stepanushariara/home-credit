import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getFilm} from '../actions';

class detailFilm extends Component{
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getFilm(id);
    }
    render(){
        const {film} = this.props;
        if (!film) return <div>Loading...</div>;
        return(
            <div className="card mb-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal text-center">{film.title}</h4>
                </div>
                <div className="card-body">
                    <p className="card-title pricing-card-title text-justify">{film.description}</p>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li><strong>Director</strong>: {film.director}</li>
                        <li><strong>Producer</strong>: {film.producer}</li>
                        <li><strong>Year</strong>: {film.release_date}</li>
                    </ul>
                    <Link to={'/'}><button type="button" className="btn btn-lg btn-block btn-outline-primary">Back to Films</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({data}, ownProps) {
    return {film: data[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {getFilm})(detailFilm);
