import {
    START_DATA_HOME_LOADING,
    DATA_HOME_SUCCESS,
    DATA_HOME_FAIL
} from './home.actions';

const initalState = {
    points: [],
    regions: {},
    area: {},
    locality: {},
    inhabitedLocality: {},
    displayBranch: {},
    loading: false,
    err: null
};

export default function (state = initalState, action) {
    switch (action.type) {

        case START_DATA_HOME_LOADING:
            return Object.assign({}, state, {
                loading: true
            });

        case DATA_HOME_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                err: null,
                points: action.dataSheet.points,
                regions: action.dataSheet.regions,
                area: action.dataSheet.area,
                locality: action.dataSheet.locality,
                inhabitedLocality: action.dataSheet.inhabitedLocality,
                displayBranch: action.dataSheet.displayBranch
            });

        case DATA_HOME_FAIL:
            return Object.assign({}, state, {
                loading: false,
                err: action.err
            });

        default:
            return state;
    }
}