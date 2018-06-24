import axios from 'axios';


export function updateSearchTerm(value){
    return {
        type: 'UPDATE_SEARCH_TERM',
        payload: { value }
    }
}
export function initialMovieSearch(searchTerm){
    return{    
        type: 'INITIAL_MOVIE_SEARCH',
        payload: axios.get(`http://www.omdbapi.com/?s=${searchTerm}&type=movie&plot=full&apikey=8730e0e`)
            .then( res => {
                if(res.status === 200){
                    return {
                        Search: res.data.Search,
                        searchTerm
                    }
                }else return {
                    Search: [],
                    searchTerm
                    }
                }
            )
            .catch(err => console.log(err))
    }
}
export function setImageLink(ndx){
    return{
        type: 'SET_IMAGE_LINK',
        payload: { ndx }
    }
}
export function movieInfoSearch(omdbID){
    return{
        type: 'RETRIEVE_MOVIE_DATA',
        payload: axios.get(`http://www.omdbapi.com/?i=${omdbID}&apikey=8730e0e`)
            .then(res => res.data)
            .catch(err => console.log(err))
        }
}