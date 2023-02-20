import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Title, List, Total, Text, Item } from './Statistics.styled';
import { BiLike } from 'react-icons/bi';
import { MdPeople, MdAddShoppingCart } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { Like, Icon } from './Statistics.styled';

const iconArr = [
  <BiLike />,
  <MdPeople />,
  <MdAddShoppingCart />,
  <GiTreeDoor />,
];

export class Statistics extends Component {
  state = {
    isActive: null,
  };

  changeColor = index => {
    this.setState({
      isActive: index,
    });
  };

  render() {
    const { title, data } = this.props;
    const { changeColor } = this;

    const elements = data.map(({ id, title, total }, index) => (
      <Item
        key={id}
        onClick={() => changeColor(index)}
        active={this.state.isActive === index}
      >
        <Total>
          <Icon>{iconArr[index]}</Icon>
          {total}
        </Total>
        <Text>{title}</Text>
      </Item>
    ));

    return (
      <Container>
        {title && <Title>{title}</Title>}
        <List>{elements}</List>
      </Container>
    );
  }
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    })
  ),
};
