import { SET_VESTING_HISTORY, NO_ACTION } from "../actions/types";

const initialState = {
    vestData:null
};

const vesting = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
        case SET_VESTING_HISTORY:
            return{
                ...state,
                vestData: payload
            }
		case NO_ACTION:
		default:
			return state;
	}
};

export default vesting;
