import { Component } from 'react';
import propTypes from 'prop-types';
import './Searchbar.css';
import { ReactComponent as SearchIcon } from '../../icon/search.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class Searchbar extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query === '') {
      toast.error('Enter image name');
      return;
    }

    onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder=""
            onChange={this.handleChange}
            value={this.state.query}
          />
          <button type="submit" className="SearchForm-button">
            <SearchIcon />
          </button>
        </form>
      </header>
    );
  }
};

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};