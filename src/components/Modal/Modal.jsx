import { createPortal } from 'react-dom'

function Modal({ children }) {
    return (
        <div className={`modal`}>
            {createPortal(children)}
        </div>
    )
}

export default Modal