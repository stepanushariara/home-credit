import _ from 'lodash';
import {FETCH_FILMS, FETCH_LOCATIONS, FETCH_PEOPLES, FETCH_SPECIES, FETCH_VEHICLES, GET_FILM, GET_LOCATION, GET_PEOPLE, GET_SPECIES, GET_VEHICLE} from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_FILMS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_PEOPLES:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_LOCATIONS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_SPECIES:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_VEHICLES:
            return _.mapKeys(action.payload.data, 'id');
        case GET_FILM:
            return {...state, [action.payload.data.id]: action.payload.data};
        case GET_LOCATION:
            return {...state, [action.payload.data.id]: action.payload.data};
        case GET_PEOPLE:
            return {...state, [action.payload.data.id]: action.payload.data};
        case GET_SPECIES:
            return {...state, [action.payload.data.id]: action.payload.data};
        case GET_VEHICLE:
            return {...state, [action.payload.data.id]: action.payload.data};
        default:
            return state;
    }
}
