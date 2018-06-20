const defaultState = {
    movie: 'Pulp Fiction'
}

export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch(type) {
        case 'PULP_FICTION':
            return {
                ...state,
                defaultState
            }
        default: {
            return defaultState
        }
    }
}