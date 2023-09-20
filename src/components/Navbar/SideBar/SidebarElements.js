import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';


export const SidebarContainer = styled.aside`
position: fixed;
padding-top:50px;
z-index: 9999;
width: 100%;
height: 100%;
background: #4aa9ea;
display: grid;
align-items: center;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

@media screen and (min-width: 769px){
    display: none;
 }

`

export const CloseIcon = styled(FaTimes)`
color: #fff;
margin-top:20px;
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right:1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;

`
export const SidebarMenu =  styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(6, 70px);
 text-align: center;
 

 @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
 }
`




export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;


    &:hover {
        color: #29658c;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    
    justify-content: center;
`
