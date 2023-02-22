import { Component } from 'react';
import Button from '../../Button/Button';
class Form extends Component {
  state = {
    search: '',
  };

  handleSubmit = e => {
    const { search } = this.state;
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(search);
    this.reset();
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ search: value });
  };
  reset = () => {
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Button type="submit" disabled={!search.trim()}>
          Search
        </Button>
        <input
          type="text"
          value={search}
          placeholder="search"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
export default Form;
