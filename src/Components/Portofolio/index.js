import React,{useState,useEffect}  from 'react';

import {Portfolio,Portfoliotitle,Span,Portfoliolist,Portfolioitem,Box,Image,Overlay,Overlayspan}from'./style.js';
import axios from 'axios';
const Portofolio = () => {
  

    const [ images ,setImages ]= useState([])

useEffect(
    ()=>{
        axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
    },[]
)

const PortofolioImages = images.map( (imageItem)=>{
        return(
            <Box key={imageItem.id}>
            <Image src={imageItem.image} alt=""/>
            <Overlay>
                <Overlayspan>
                    Show Image
                </Overlayspan>
            </Overlay>
        </Box>

    )}
)
  return (
    <Portfolio>
    <Portfoliotitle><Span>My</Span> Portfolio</Portfoliotitle>
    <Portfoliolist>
        <Portfolioitem active>All</Portfolioitem>
        <Portfolioitem>HTML</Portfolioitem>
        <Portfolioitem>Photoshop</Portfolioitem>
        <Portfolioitem>Wordpress</Portfolioitem>
        <Portfolioitem>Mobile</Portfolioitem>
    </Portfoliolist>
    
    <div >
        
       
    {PortofolioImages}
        
        
    </div>
    
</Portfolio>
  )
}

export default Portofolio;