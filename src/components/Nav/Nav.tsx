import {Link} from 'react-router-dom'
import {FC} from "react";
import styled from "styled-components";


export const Nav: FC = () => {

    return (
        <StyledNav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/game"}>Game</Link></li>
                {/*<li><Link to={""}></Link></li>*/}
                {/*<li><Link to={""}></Link></li>*/}
            </ul>
        </StyledNav>
    )
}


export const StyledNav = styled.nav`
          display: flex;
          justify-content: center;
          ul {
            display: flex;
            justify-content: center;
            list-style-type: none;
          }`