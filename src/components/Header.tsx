
import React from "react";
import logo from "../assets/stackline_logo.svg";

const Header = () => {
    return React.createElement(
        "header",
        { className: "bg-white shadow p-4 flex items-center justify-center" },
        React.createElement("img", { src: logo, alt: "Stackline Logo", className: "h-12" })
    );
};

export default Header;