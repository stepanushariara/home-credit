import axios from 'axios';

const URL = 'https://ghibliapi.herokuapp.com';
export const FETCH_FILMS = 'FETCH_FILMS';
export const FETCH_PEOPLES = 'FETCH_PEOPLES';
export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const FETCH_SPECIES = 'FETCH_SPECIES';
export const FETCH_VEHICLES = 'FETCH_VEHICLE';

export const GET_FILM = 'GET_FILMS';
export const GET_PEOPLE = 'GET_PEOPLES';
export const GET_LOCATION = 'GET_LOCATIONS';
export const GET_SPECIES = 'GET_SPECIES';
export const GET_VEHICLE = 'GET_VEHICLE';


export function fetchFilms() {
    const req = axios.get(`${URL}/films?fields=id,title`);
    return {
        type: FETCH_FILMS,
        payload: req
    }
}
export function fetchPeoples() {
    const req = axios.get(`${URL}/people?fields=id,name`);
    return {
        type: FETCH_PEOPLES,
        payload: req
    }
}
export function fetchLocations() {
    const req = axios.get(`${URL}/locations?fields=id,name`);
    return {
        type: FETCH_LOCATIONS,
        payload: req
    }
}
export function fetchSpecies() {
    const req = axios.get(`${URL}/species?fields=id,name`);
    return {
        type: FETCH_SPECIES,
        payload: req
    }
}
export function fetchVehicle() {
    const req = axios.get(`${URL}/vehicles?fields=id,name`);
    return {
        type: FETCH_VEHICLES,
        payload: req
    }
}
export function getFilm(id) {
    const req = axios.get(`${URL}/films/${id}`);
    return {
        type: GET_FILM,
        payload: req
    }
}
export function getPeople(id) {
    const req = axios.get(`${URL}/people/${id}`);
    return {
        type: GET_PEOPLE,
        payload: req
    }
}
export function getLocation(id) {
    const req = axios.get(`${URL}/locations/${id}`);
    return {
        type: GET_LOCATION,
        payload: req
    }
}
export function getSpecies(id) {
    const req = axios.get(`${URL}/species/${id}`);
    return {
        type: GET_SPECIES,
        payload: req
    }
}
export function getVehicle(id) {
    const req = axios.get(`${URL}/vehicles/${id}`);
    return {
        type: GET_VEHICLE,
        payload: req
    }
}
