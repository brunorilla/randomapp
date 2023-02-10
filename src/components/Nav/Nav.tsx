import {Link} from 'react-router-dom'
import {FC} from "react";
import styled from "styled-components";
import {Button} from 'antd'


export const Nav: FC = () => {

    return (
        <StyledNav>
            <ul>
                <li><Link to={"/"}><Button>Home</Button></Link></li>
                <li><Link to={"/game"}><Button>Game</Button></Link></li>
                {/*<li><Link to={""}></Link></li>*/}
                {/*<li><Link to={""}></Link></li>*/}
            </ul>
        </StyledNav>
    )
}


export const StyledNav = styled.nav`
          display: flex;
          justify-content: center;
          width: 90%;
          ul {
            width: 50%;
            display: flex;
            justify-content: space-between;
            list-style-type: none;
          }`