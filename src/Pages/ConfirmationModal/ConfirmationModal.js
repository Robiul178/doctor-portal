import React from 'react';

const ConfirmationModal = ({ title, message, closeModal }) => {
    return (
        <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  max-w-xl">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label htmlFor="confirm-modal" className="btn">Yay!</label>
                        <button onClick={closeModal} className='btn btn-outline'>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;