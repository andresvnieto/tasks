import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { TodoContext } from '../../context/TodoContext'
import './styles.css';
import TodoIcon from '../UI/TodoIcon';

function Modal({ children }) {
    const { modalState, handleModal } = useContext(TodoContext);
    return createPortal(
        <div className={`modal ${modalState ? 'open' : ''}`}>
            <div className="button" onClick={handleModal}>
                <TodoIcon iconType="delete" />
            </div>
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export default Modal