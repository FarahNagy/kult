import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  height: 90px;
  position: fixed; /* Fixed position to keep it in place */
  top:10px; /* Position it at the top of the viewport */
  left: 0; /* Position it at the left edge */
  width: 100%; /* Make it full width */
  background-color: #4aa9ea; /* Example background color */
  z-index: 1000;
  box-shadow: 4px 30px 30px rgba(0, 0, 0, 0.3);  ;
  /* Third Nav */
  /* justify-content: flex-start; */
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
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }


`;
