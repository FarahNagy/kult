import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  height: 90px;
  justify-content: space-evenly;
  position: fixed; /* Fixed position to keep it in place */
  top:0; /* Position it at the top of the viewport */
  left: 0; /* Position it at the left edge */
  width: 100%; /* Make it full width */
  background-color: #4aa9ea; /* Example background color */
  z-index: 1000;
  box-shadow: 4px 30px 30px rgba(0, 0, 0, 0.3);  ;
  /* Third Nav */
  /* justify-content: flex-start; */

  @media screen and (max-width:960px){
    transition: 0.8s all ease;
  }
  @media screen and (max-width:768px){
    flex-direction:row-reverse;
    justify-content: right;


  }
`;

 
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    color: #4aa9ea;
  }
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    margin-bottom:20px;
    left: 0;
    width:35px;
    height: 35px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    // position: absolute;
    margin-top:35px;
    // right: 10px;
    width:80px;
    height: 35px;
    // transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  width:55%;
  align-items: center;
  justify-content: space-between;

  
  @media screen and (max-width: 768px) {
    display: none;
  }


`;
