import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getLocation} from '../actions';

class detailLocation extends Component{
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getLocation(id);
    }
    render(){
        const {location} = this.props;
        if (!location) return <div>Loading...</div>;
        return(
            <div className="card mb-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal text-center">{location.name}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title text-justify">{location.surface_water}</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li><strong>Climate</strong>: {location.climate}</li>
                        <li><strong>Terrain</strong>: {location.terrain}</li>
                    </ul>
                    <Link to={'/location'}><button type="button" className="btn btn-lg btn-block btn-outline-primary">Back to Location</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({data}, ownProps) {
    return {location: data[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {getLocation})(detailLocation);
