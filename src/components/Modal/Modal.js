import TODO_STATUS from 'constants/STATUS';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const TodoModal = ({ title, description, status, onClose }) => {

  return createPortal(
    <div className={css.modal}>
      <div className={css.modal_content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          Status:
          <input type="checkbox" checked={status === TODO_STATUS.completed} />
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot
  );
};
