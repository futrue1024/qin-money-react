import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";


const NavWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.3);
  >ul{
    display: flex;
    flex-direction: row;
   
  >li{
     width: 33.333%;
     text-align: center;
     padding: 4px 0;
     line-height: 24px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     >.icon{
     width: 24px;
     height: 24px;
     }
    }
  }`;

const Nav = () => {
  return(
    <NavWrapper>
      <ul>
        <li>
          <Icon name='tags'/>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name='money'/>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Icon name='statistics'/>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav