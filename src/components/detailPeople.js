import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getPeople} from '../actions';

class detailPeople extends Component{
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getPeople(id);
    }
    render(){
        const {people} = this.props;
        if (!people) return <div>Loading...</div>;
        return(
            <div className="card mb-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal text-center">{people.name}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title text-justify">{people.age}</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li><strong>Gender</strong>: {people.gender}</li>
                        <li><strong>Eye</strong>: {people.eye_color}</li>
                        <li><strong>Hair</strong>: {people.hair_color}</li>
                    </ul>
                    <Link to={'/people'}><button type="button" className="btn btn-lg btn-block btn-outline-primary">Back to Peoples</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({data}, ownProps) {
    return {people: data[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {getPeople})(detailPeople);
