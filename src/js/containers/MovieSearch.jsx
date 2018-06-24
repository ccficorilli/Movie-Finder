import React from 'react';
<<<<<<< HEAD:src/js/containers/MovieSearchContainer.jsx
import { connect } from 'react-redux';
import { 
    updateSearchTerm, 
    initialMovieSearch, 
    setImageLink, 
    movieInfoSearch 
} from '../actions/movieSearchActions';
import { Link } from 'react-router-dom'

function mapStoreToProps(store){
    console.log({store:store.search})
    return {
        searchTerm: store.search.searchTerm,
        moviesMatched: store.search.moviesMatched,
        prevSearch: store.search.prevSearch
    }
}

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.initialMovieList = this.initialMovieList.bind(this);
    this.specificMovieData = this.specificMovieData.bind(this);
    this.mapMovieResults = this.mapMovieResults.bind(this);    
    }

    inputChangeHandler(e){
        const { value } = e.target;
        const { dispatch } = this.props;
        dispatch(updateSearchTerm(value));
    
    }
    initialMovieList(e){
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(initialMovieSearch(value));
    }
    specificMovieData(e, ndx){
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(setImageLink(ndx));
        dispatch(movieInfoSearch(value));
    }
    mapMovieResults(list){
        if(list === undefined){
            return (<div className='imageCell'> 
            <div className='movieTitle'><h2>Sorry, that search returned nothing...</h2></div>
            <div className='images' >
                <input 
                    className='moviePoster'
                    type='image'
                    src='../img/noposter.jpg'
                    alt='Sorry, no poster available'
                />
            </div>
        </div>)
        } else return (
            list.map((movies, ndx) => (
                <Link 
                    to={`/movie/${movies.Title}`}
                    key={ndx}>
                    <div className='imageCell'> 
                        <div className='movieTitle'>{movies.Title}</div>
                        <div className='images' >
                            <input 
                                className='moviePoster'
                                type='image'
                                src={movies.Poster}
                                alt='Sorry, no poster available'
                                value={movies.imdbID}
                                onClick={(e) => this.specificMovieData(e, ndx)}
                                title={movies.Title}
                            />
                        </div>
                    </div>
                </Link>
            ))
        )}
    
=======
import updateSearchTerm from '../actions/searchActions';
import { connect } from 'react-redux';

class MovieSearch extends React.Component {
    constructor(props) {
        super(props);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }
    inputChangeHandler(e){
        const { value } = e.target;
        const { dispatch } = this.props;
        console.log(this.props.searchTerm)
        dispatch(updateSearchTerm(value));
    }
>>>>>>> 901abb179e9c671b299343b17ee980b35430a2fb:src/js/containers/MovieSearch.jsx
    render() {
        return (
            <div className='searchContainer'>
                <h1>Lamest Movie Search Ever!</h1>
                <div >
                    <input 
                        type='text' 
                        className='searchBar' 
                        placeholder='Enter your movie here'
                        value={this.props.searchTerm}
                        onChange={this.inputChangeHandler} 
                    />
                    <div className='searchButtonCell'>
                        <button 
                            className='submit'
                            type='submit'
                            value={this.props.searchTerm}
                            onClick={this.initialMovieList}
                        > Search </button>
                    </div>
                </div>
                <div className='searchResults'>
                    <div className='imageContainer'>
                        {this.mapMovieResults(this.props.moviesMatched)}
                    </div>
                </div>
            </div>
        )
    }
}
<<<<<<< HEAD:src/js/containers/MovieSearchContainer.jsx
export default connect(mapStoreToProps)(MovieSearchContainer);

=======
const mapStoreToProps = (store) => {
    return {
      searchTerm: store.search.searchTerm,
      movieInfo: store.search.movieInfo,
      prevSearch: store.search.prevSearch
    }
  }
  export default connect(mapStoreToProps)(MovieSearch)
>>>>>>> 901abb179e9c671b299343b17ee980b35430a2fb:src/js/containers/MovieSearch.jsx
