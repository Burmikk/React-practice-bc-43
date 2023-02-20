import PropTypes from 'prop-types';
import { Component } from 'react';

class Basket extends Component {
  static propTypes = {
    data: PropTypes.shape({
      fish: PropTypes.number.isRequired,
      meat: PropTypes.number.isRequired,
      beer: PropTypes.number.isRequired,
    }),
  };

  state = {
    fish: this.props.data.fish,
    meat: this.props.data.meat,
    beer: this.props.data.beer,
  };

  addToCart = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  };

  getTotal() {
    const arrValue = Object.values(this.state);
    return arrValue.reduce((total, item) => (total += item), 0);
  }

  //   addToCart = e => {
  //     const { name } = e.target;
  //     this.setState(prevState => ({
  //       [name]: prevState[name] + 1,
  //     }));
  //   };

  render() {
    const arr = Object.keys(this.state);
    // const { fish, meat, beer } = this.state;
    return (
      <div>
        <ul>
          {arr.map(item => (
            <li key={item}>
              <p>
                {item}: {this.state[item]}
              </p>
              <button onClick={() => this.addToCart(item)}>Add</button>
            </li>
          ))}
        </ul>
        <p>Total:{this.getTotal()}</p>
      </div>
    );
  }
}

export default Basket;

{
  /* <li>
            <p>Fish:{fish}</p>
            <button name="fish" onClick={this.addToCart}>
              Add
            </button>
          </li>
          <li>
            <p>Meat:{meat}</p>
            <button name="meat" onClick={this.addToCart}>
              Add
            </button>
          </li>
          <li>
            <p>Beer:{beer}</p>
            <button name="beer" onClick={this.addToCart}>
              Add
            </button>
          </li> */
}
