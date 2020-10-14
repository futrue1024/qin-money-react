import styled from "styled-components";
import { NavLink} from "react-router-dom";
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
     >a{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       >.icon{
         width: 24px;
         height: 24px;
       }
       &.selected{
         color: #1DA161;
         .icon{
            fill: #1DA161;
         }
        }
     }  
    }
  }`;

const Nav = () => {
  return(
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName='selected'>
            <Icon name='tags'/>标签</NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName='selected'>
            <Icon name='money'/>记账</NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName='selected'>
            <Icon name='statistics'/>统计</NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav