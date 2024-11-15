import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import css from './Modal.module.css';

const ImageModal = ({ image, isOpen, closeModal }) => {
  if (!image) return null;

  const { urls } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeBtn} onClick={closeModal}>
        <FaTimes />
      </button>
      <img src={urls.full} alt="" className={css.modalImage} />
    </Modal>
  );
};

export default ImageModal;




