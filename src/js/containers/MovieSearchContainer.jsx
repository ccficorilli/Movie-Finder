import React from 'react';

export default class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);
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
                        // onChange={/*This is where the change handler will go*/} 
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
