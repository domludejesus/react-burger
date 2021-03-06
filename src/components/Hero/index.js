import React, {useState} from 'react'; 
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';  
import { 
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1, 
    HeroP,
    HeroBtn 
} from './HeroElements'; 

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false) /* If toggled and not open  */ 

    const toggle = () => {
        setIsOpen(!isOpen)  /* Then open  */ 
    }
    return (
        <HeroContainer> 
            <Navbar toggle={toggle}/> 
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems> 
                    <HeroH1> Best Burgers in Philadelphia   </HeroH1>
                    <HeroP>  Hot and Fresh    </HeroP>
                    <HeroBtn>   Place Order  </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
