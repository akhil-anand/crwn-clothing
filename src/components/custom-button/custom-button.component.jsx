import React from "react";

//component imports
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, isinverted,...otherProps }) => (
    <button className={`
    ${isinverted ? 'inverted' : ''}
    ${isGoogleSignIn ? 'google-sign-in' : ''}    custom-button`} {...otherProps} >
        {children}
    </button>
);

export default CustomButton;