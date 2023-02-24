import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', hideModal);
    return () => {
      document.removeEventListener('keydown', hideModal);
    };
  }, []);

  const hideModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      return onClose();
    }
  };

  return createPortal(
    <div onClick={hideModal} className={styles.Overlay}>
      <div className={styles.Modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;

// export class Modal extends Component {
//   componentDidMount() {
//     document.addEventListener('keydown', this.hideModal);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.hideModal);
//   }

//   hideModal = ({ target, currentTarget, code }) => {
//     if (target === currentTarget || code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     return createPortal(
//       <div onClick={this.hideModal} className={styles.Overlay}>
//         <div className={styles.Modal}>{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }
