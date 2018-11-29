import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getSpecies} from '../actions';

class detailSpecies extends Component{
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getSpecies(id);
    }
    render(){
        const {species} = this.props;
        if (!species) return <div>Loading...</div>;
        return(
            <div className="card mb-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal text-center">{species.name}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title text-justify">{species.classification}</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li><strong>Eye</strong>: {species.eye_colors}</li>
                        <li><strong>Hair</strong>: {species.hair_colors}</li>
                    </ul>
                    <Link to={'/people'}><button type="button" className="btn btn-lg btn-block btn-outline-primary">Back to Species</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({data}, ownProps) {
    return {species: data[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {getSpecies})(detailSpecies);
