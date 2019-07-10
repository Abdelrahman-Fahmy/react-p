import React  from 'react';
import {HomeSection , HomeInformation,HomeTi,HomeInfo,HomeDesc,Hi,HomeBtn} from './style.js'
const Home = () => {
  
  return (
    <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTi>Hamza Nabil</HomeTi>
                    <HomeInfo >Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Hi>UX Designer</Hi> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                
            </HomeInformation>
            </div>
        </HomeSection>
  )
}

export default Home;