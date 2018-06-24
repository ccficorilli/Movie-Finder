    
    const defaultState = {
        searchTerm: '',
        moviesMatched: [],
        Title: '',
        Year: '',
        Rated: '',
        Runtime: '',
        Genre: '',
        Writer: '',
        Plot: '',
        Awards: '',
        Poster: '',
        prevSearches: [],
    };

 export default function searchReducer(state = defaultState, action){
        const { type, payload } = action;
    
        switch(type) {
            case 'UPDATE_SEARCH_TERM':{
                return {
                    ...state,
                    searchTerm: payload.value
                };
            }

            case 'INITIAL_MOVIE_SEARCH_FULFILLED':{
                // console.log(payload.Search)
                return {
                    ...state,
                    searchTerm: '',
                    moviesMatched: payload.Search,
                    prevSearches: [
                        ...state.prevSearches,
                        payload.searchTerm
                    ]
                };
            }

            case 'INITIAL_MOVIE_SEARCH_PENDING':{
                return {
                    ...state
                };
            }

            case 'INITIAL_MOVIE_SEARCH_REJECTED':{
                alert('Sorry, no movies by that name...');
            }

            case 'RETRIEVE_MOVIE_DATA_FULFILLED':{
                return {
                    ...state,
                    Title: payload.Title,
                    Year: payload.Year,
                    Rated: payload.Rated,
                    Runtime: payload.Runtime,
                    Genre: payload.Genre,
                    Writer: payload.Writer,
                    Plot: payload.Plot,
                    Awards: payload.Awards,
                }
            }

            case 'RETRIEVE_MOVIE_DATA_PENDING':{
                return {
                ...state
                }
            }

            case 'RETRIEVE_MOVIE_DATA_REJECTED':{
                alert('Sorry, something did not work quite right...');
            }

            case 'SET_IMAGE_LINK':{
                // console.log(state.movieInfo);
                return {
                    ...state,
                    Poster: state.moviesMatched[payload.ndx].Poster
                }
            }

            default: {
                return defaultState;
            }
        }
    }


