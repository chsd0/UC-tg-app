import React, { useEffect, useState } from 'react';

const Modal = ({visibility, setVisibility, children}) => {
    const closeModal = () => {
        if(isOpen) {
            setVisibility(false);
        }
    }

    useEffect(() => {
        setOpen(visibility);
    }, [visibility])

    const [isOpen, setOpen] = useState(false);

    const modalClass = isOpen ? 'modal-overlay' : 'modal-overlay invisible';

    return (
        <div className={modalClass} onClick={closeModal}>
            <article className='modal__wrapper' onClick={(e) => e.stopPropagation()}>
                <section className="modal">
                    {children}
                </section>
            </article>
        </div>
    )
};

export default Modal;