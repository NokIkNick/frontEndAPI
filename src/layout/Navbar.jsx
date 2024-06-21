import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;

const NavigationBar = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    @media (min-width: 768px){
        flex-wrap: nowrap;
    
    }
`;

const Logo = styled.div`
    display: none;
    justify-content: center;
    padding: 1vh;
    width: 100%;
    font-size: 1.3rem;

    @media (min-width: 768px){
      display: flex;
      color: var(--grey);
      width: auto;
      margin: 1vh;
    }
`;

const MenuIcon = styled.div`
    display: block;
    cursor: pointer;
    font-size: 1.8rem;
    padding: 1vh;
    color: var(--grey);

    @media (min-width: 768px){
        display: none;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    width:100%;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    flex-direction: column;
    
    @media (min-width: 768px){
        flex-direction: row;
        justify-content: flex-end;
    }
`;

const StyledLi = styled.li`
    display: ${({isOpen}) => isOpen ? 'flex' : 'none'};  
    flex:1;
    justify-content: center;
    padding: 1%;

    @media (min-width: 768px){
        display: flex;
        flex: 0;
    }
`;

const StyledNavlink = styled(NavLink)`
    text-decoration: none;
    padding: 1vh;
    font-size: 100%;
    display: ${({isOpen}) => isOpen ? 'block' : 'none'};  
    width: 100%;
    
    @media (min-width: 768px){
        display: flex;
        font-size: 120%;

        &.active{
        text-decoration: underline;
        text-underline-offset: 2vh;
    }
    }

    &:visited{
        color: var(--grey);
    }

    &:hover{
        color: var(--teal);
    }

    &:active{
        color: var(--light-blue);
    }

    &.active{
      text-decoration: underline;
      text-underline-offset: 1vh;
    }


`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
        <NavigationBar>
            <Logo id='logo'>Nicklas Winther</Logo>
            <MenuIcon onClick={() => setIsOpen(!isOpen)}>☰</MenuIcon>
            <StyledUl>
                <StyledLi isOpen={isOpen}>
                  <StyledNavlink isOpen={isOpen} to="/">Home</StyledNavlink>
                </StyledLi>
                <StyledLi isOpen={isOpen}>  
                  <StyledNavlink isOpen={isOpen} to="/about">About</StyledNavlink>
                </StyledLi>
                <StyledLi isOpen={isOpen}>
                  <StyledNavlink isOpen={isOpen} to="/skills">Skills</StyledNavlink>
                </StyledLi>
                <StyledLi isOpen={isOpen}>
                  <StyledNavlink isOpen={isOpen} to="/education">Education</StyledNavlink>
                </StyledLi>
                <StyledLi isOpen={isOpen}>
                  <StyledNavlink isOpen={isOpen} to="/projects">Projects</StyledNavlink>
                </StyledLi>
                <StyledLi isOpen={isOpen}>
                  <StyledNavlink isOpen={isOpen} to="/experience">Experience</StyledNavlink>
                </StyledLi>
                <StyledLi isOpen={isOpen}>  
                  <StyledNavlink isOpen={isOpen} to="/contact">Contact</StyledNavlink>
                </StyledLi>
            </StyledUl>
        </NavigationBar>
    </Container>
  )
}
