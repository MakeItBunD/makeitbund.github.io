import React from "react";
import { useWindowResize } from "../../hooks/useWindowResize";
import HeaderMenu from "./HeaderMenu";
import HeaderNavbar from "./HeaderNavbar";
import HeaderMenuMobile from "./HeaderMenuMobile";

function Header() {
    const windowWidth = useWindowResize()

    return (
        <div className="header">
            <HeaderNavbar/>
            {windowWidth > 1150 ? <HeaderMenu/> : <HeaderMenuMobile />}
        </div>
    )
}

export default Header