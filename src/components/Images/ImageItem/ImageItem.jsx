import { useState } from 'react';
import Modal from '../../../shared/Modal/Modal';
const ImageItem = ({ thumbnailUrl, title, url }) => {
  const [showModal, setShowModal] = useState(false);

  const onItemClick = () => {
    setShowModal(prevState => {
      return !prevState;
    });
  };

  return (
    <>
      <li>
        <img src={thumbnailUrl} alt={title} onClick={onItemClick} />
        <p>{title}</p>
      </li>
      {showModal && (
        <Modal onClose={onItemClick}>
          <img src={url} alt={title} />
        </Modal>
      )}
    </>
  );
};
// class ImageItem extends Component {
//   state = {
//     showModal: false,
//   };

// onItemClick = () => {
//   this.setState(prevState => ({
//     showModal: !prevState.showModal,
//   }));
// };

//   render() {
//     const { thumbnailUrl, title, url } = this.props;
//     const { showModal } = this.state;
//     const { onItemClick } = this;
// return (
//   <>
//     <li>
//       <img src={thumbnailUrl} alt={title} onClick={onItemClick} />
//       <p>{title}</p>
//     </li>
//     {showModal && (
//       <Modal onClose={onItemClick}>
//         <img src={url} alt={title} />
//       </Modal>
//     )}
//   </>
// );
//   }
// }

export default ImageItem;
