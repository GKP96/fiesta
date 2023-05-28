import React from 'react';
import Toast from 'react-bootstrap/Toast';
const Notify = (props) => {
    return (
        <>
            <Toast>
                <Toast.Header>
                </Toast.Header>
                <Toast.Body style={{ background: 'black', color: 'white' }}>
                    {props.value}
                </Toast.Body>
            </Toast>
        </>
    );
}
export default Notify;