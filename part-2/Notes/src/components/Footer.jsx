import React from "react";

const Footer = () => {
    const footerStyle = {
        color: "green",
        fontStyle: "italic",
        fontSize: 16,
    };

    return (
        <div style={footerStyle}>
            <br />
            <em>Note app. c. 2021 :3</em>
        </div>
    );
};

export default Footer;
