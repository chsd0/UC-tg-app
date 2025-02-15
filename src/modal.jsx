import React, { useEffect, useState } from 'react';

const Modal = ({visibility, setVisibility, fit, children}) => {
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
    const wrapperClass = fit ?  'modal__wrapper fit' : 'modal__wrapper';

    return (
        <div className={modalClass} onClick={closeModal}>
            <article className={wrapperClass} onClick={(e) => e.stopPropagation()}>
                <section className="modal">
                    {children}
                </section>
            </article>
        </div>
    )
};

export default Modal;