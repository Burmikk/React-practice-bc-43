import { Component } from 'react';
import PropTypes from 'prop-types';
import pt from 'date-fns/esm/locale/pt/index.js';

export class AccordionItem extends Component {
  //   state = {
  //     isOpen: false,
  //   };

  //   onClick = () => {
  //     this.setState(prevState => {
  //       return {
  //         isOpen: !prevState.isOpen,
  //       };
  //     });
  //   };

  render() {
    const { onItemClick, isOpen, title, text } = this.props;
    return (
      <div className="container">
        <div className="accordion">
          <div className="accordion-item">
            <p className="title" onClick={() => onItemClick(title)}>
              {title}
            </p>
            {isOpen && (
              <div className="content">
                <p>{text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

AccordionItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
