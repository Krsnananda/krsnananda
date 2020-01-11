import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
        <nav>
            <ul class="menu">
                <li><a href="/" onClick={props.handleNavbar}><Link to="/">Home</Link></a></li>
                <li><Link to="/about" onClick={props.handleNavbar}>About</Link></li>
                <li><Link to="/skills" onClick={props.handleNavbar}>Skills</Link></li>
                <li><Link to="/projects" onClick={props.handleNavbar}>Projects</Link></li>
                <li><Link to="/contact" onClick={props.handleNavbar}>Contact</Link></li>
            </ul>
        </nav>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  @media (max-width:768px) {
    top: 5.5rem;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;