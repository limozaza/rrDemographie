import {GET_MORATALITY} from '../actions/index';

export default (state=[], action) => {
    switch(action.type){
        case GET_MORATALITY:
            return [
                ...state, 
                {
                    country : action.payload.country,
                    male : action.payload.male,
                    female : action.payload.female
                }  
            ]
        default:
            return state;
    }

}