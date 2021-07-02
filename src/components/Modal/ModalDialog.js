import {Modal} from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './modal-fix-style.css'

export const ModalDialog = ({ content, openState, close}) => {
    return (
        <Modal
            open={openState}
            onClose={close}
            center={true}
        >
            {content}
        </Modal>
    )
}

