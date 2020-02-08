const poems = (state = {}, action: { poems: {}[]; type: string }) => {
	switch (action.type) {
		case 'SET_POEMS':
            return action.poems;
        case 'SET_POEM':
            return action.poems.reduce((currentState, poems: any) => ({
                ...currentState,
                [poems.title]: poems
            }), state);
		default:
			return state;
	}
};

export default poems;
