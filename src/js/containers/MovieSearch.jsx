import React from 'react';
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
    render() {
        return (
            <div>
                <h1>Movie Search Container</h1>
                <div className='searchContainer'>
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
                            // onClick={/*This is where the api call will go*/}
                        > Search </button>
                    </div>
                </div>
                <div className='searchResults'>
{/*This is where the results will get mapped to */}
                    <div className='imageContainer'>
                        <div className='moviePoster'>
                            {/* <img src=????? /> */}
                        </div>
                        <div className='moviePoster'>
                            {/* <img src=????? /> */}
                        </div>
                        <div className='moviePoster'>
                            {/* <img src=????? /> */}
                        </div>
                        <div className='moviePoster'>
                            {/* <img src=????? /> */}
                        </div>
                        <div className='moviePoster'>
                            {/* <img src=????? /> */}
                        </div>
                        <div className='moviePoster'>
                            {/* <img src=????? /> */}
                        </div>
                        <div className='moviePoster'>
                            {/* <img src=????? /> */}
                        </div>
                        <div className='moviePoster'>
                            {/* <img src=????? /> */}
                        </div>
                        <div className='moviePoster'>
                            {/* <img src=????? /> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStoreToProps = (store) => {
    return {
      searchTerm: store.search.searchTerm,
      movieInfo: store.search.movieInfo,
      prevSearch: store.search.prevSearch
    }
  }
  export default connect(mapStoreToProps)(MovieSearch)
