import React from 'react';
import classes from '../Modal/Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Ux from '../../../hoc/Ux';
const modal=(props)=>(
    <Ux>
     <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div className={classes.Modal}
    style={{
        transform: props.show ? 'transformY(0)' : 'transformY(-100vh)',
        opacity: props.show ? '1' : '0'
    }}>
        {props.children}
    </div>
    </Ux>
);
export default modal;