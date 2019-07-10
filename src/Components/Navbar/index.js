import React  from 'react';
import {Link} from 'react-router-dom';
import {NavbarSection,Logo,LogoText,Ullist,Listitem,Anchor} from './style.js'

const Navbar = () => {
  
  return (
   <NavbarSection>
            
            
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                
                
                <Ullist>
                    <Listitem ><Link to="/">Home</Link></Listitem>
                    <Listitem ><Anchor href="#">Work</Anchor></Listitem>
                    <Listitem ><Anchor href="#">Portfolio</Anchor></Listitem>
                    <Listitem ><Anchor href="#">Resume</Anchor></Listitem>
                    <Listitem ><Anchor href="#">About</Anchor></Listitem>
                    <Listitem ><Link to="/contact">Contact</Link></Listitem>
                </Ullist>
                
            
            
        </NavbarSection>
  )
}

export default Navbar;