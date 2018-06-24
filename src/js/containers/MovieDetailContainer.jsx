import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

function mapStoreToProps(store){
    console.log({store:store.search})
    return {
        Title: store.search.Title,
        Year: store.search.Year,
        Rated: store.search.Rated,
        Runtime: store.search.Runtime,
        Genre: store.search.Genre,
        Writer: store.search.Writer,
        Plot: store.search.Plot,
        Awards: store.search.Awards,
        Poster: store.search.Poster,

    }
}

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <Link to='/'>
                    <div className='backBtn'>
                        <button>Back to search</button>
                    </div>
                </Link>
                <h1>{this.props.Title}</h1>
                <div className='infoContainer'>
                    <div className='posterHolder'>
                        <img 
                            className='posterLrg' 
                            src={this.props.Poster}
                            title={this.props.Title}
                            alt='Sorry, no poster for this movie'
                        />
                    </div>
                    <div className='infoHolder'>
                        <div className='info Title'>Title: {this.props.Title}</div>
                        <div className='info Year'>Year: {this.props.Year}</div>
                        <div className='info Rating'>Rating: {this.props.Rated}</div>
                        <div className='info Lenth'>Length: {this.props.Runtime}</div>
                        <div className='info Genre'>Genre: {this.props.Genre}</div>
                        <div className='info Writer'>Writer: {this.props.Writer}</div>
                        <div className='info Awards'>Awards: {this.props.Awards}</div>
                        <div className='info Plot'>Plot: {this.props.Plot}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStoreToProps)(MovieDetailContainer);