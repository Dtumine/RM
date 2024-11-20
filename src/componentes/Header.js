import StoreImg from '../svg/StoreImg.svg';
import FotosImg from '../svg/FotosImg.svg';
import TourImg from '../svg/TourImg.svg';



const Header = () => {

    return(

        <header className='HeaderContenedor'>
  
            <nav>
               <li>
                <a href="#">
                  <img src={StoreImg} className='Store'/>  
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={FotosImg} className='Fotos'/>  
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={TourImg} className='Tour'/>  
                </a>
              </li>
            </nav>
            
            
        
    
      </header>
       
   
    )
} 


export default Header;