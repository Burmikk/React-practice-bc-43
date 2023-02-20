import { Component } from 'react';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { nanoid } from 'nanoid';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import css from './faq.module.scss';

class Faq extends Component {
  state = {
    title: [],
  };

  onBtnClick = status => {
    const newTitles = this.props.data.map(({ title }) => title);
    this.setState({
      title: status ? newTitles : [],
    });
  };

  onItemClick = element => {
    this.setState(prevState => {
      if (prevState.title.includes(element)) {
        return { title: prevState.title.filter(item => item !== element) };
      }

      return { title: [...prevState.title, element] };
    });
  };

  render() {
    const { data } = this.props;

    const elements = data.map(({ title, text }) => (
      <li key={nanoid()}>
        <AccordionItem
          onItemClick={this.onItemClick}
          isOpen={this.state.title.includes(title)}
          title={title}
          text={text}
        />
      </li>
    ));

    return (
      <div>
        <ul>{elements}</ul>
        <Button onBtnClick={() => this.onBtnClick(true)}>Expand All</Button>
        <Button onBtnClick={() => this.onBtnClick(false)}>Collapse All</Button>
      </div>
    );
  }
}

export default Faq;

Faq.propTypes = {
  dataFaq: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
