import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";
import Like from "./common/Like";
import Pagination from "./common/Pagination"

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4
  };

  handleDelete = (movie) => {
    // console.log(movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    //console.log("clicked", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log(page);
  }

  render() {
    const { length: moviesCount } = this.state.movies;

    if (moviesCount === 0) {
      return <p>There are no movies in the database</p>;
    } else {
      return (
        <>
          <p>Showing {moviesCount} movies in the database</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      type="button"
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
                <Pagination itemsCount={moviesCount} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} />
        </>
      );
    }
  }
}

export default Movies;
