import React from 'react';
import Topbar from '../Topbar/Topbar';
import PromotionBanner from '../PromotionBanner/PromotionBanner';
import classes from './MainContainer.module.css';
import Category from '../FoodCategory/FoodCategory';
import FoodDispalyContainer from '../FoodDisplayContainer/FoodDisplay';

import MiniBurger from '../assests/img-burger.png';
import MiniTimer from '../assests/img-clock.png'
import DropDownIcon from '../assests/img-arr-down.png'


const MainContainer = () => {
    return(
       
       <div className={classes.MainContainer}>
       <Topbar />
       <div className={classes.SectionWrapper}>
         <PromotionBanner/>
            

        <div className={classes.CategoriesTop}>
             <h2>Restaurants </h2> <img className={classes.MiniBurgerPng} src={MiniBurger} alt="Mini Burger" />
             <div className={classes.OrangeDeliveryContainer}>
                 <img className={classes.MiniClock} src={MiniTimer} alt="Clock"/><p className={classes.DeliveryHeader}>Delivery Now</p>
                 <img className={classes.DropDown} src={DropDownIcon} alt="DropDown"/>
                 
             </div>
               
            </div>        
              
            <Category/>
            <FoodDispalyContainer/>

           </div>
          
   </div>
    )
}
export default MainContainer;







