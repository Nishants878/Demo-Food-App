import React from 'react';

import Classes from './FoodCategory.module.css';
import All from '../assests/img-all-food.png';
import SideIcon from '../assests/img-arr-right.png';
import Pizza from '../assests/img-pizza.png';
import Asian from '../assests/img-asians.png';
import Burgers from '../assests/img-burgers.png';
import Barbecue from '../assests/img-barbeque.png';
import  Dessert from '../assests/img-dessert.png';
import Thai from '../assests/img-thai.png';
import Sushi from '../assests/img-sushi.png';








const Category = () =>{
    return(
       <div className={Classes.CategoryWrapper}>
           <div className={Classes.FoodTypeWrapper}>

               <div className={Classes.ItemConatiner}>
                 <img className={Classes.FoodTypeImage} src={All} alt="All food Icon"/>
               </div>

               <p className={Classes.FoodTypeName}>All</p>
               
           </div>

           <div className={Classes.FoodTypeWrapper}>

               <div className={Classes.ItemConatiner}>
                 <img className={Classes.FoodTypeImage} src={Pizza} alt="All food Icon"/>
               </div>

               <p className={Classes.FoodTypeName}>Pizza</p>
               
           </div>

           <div className={Classes.FoodTypeWrapper}>

               <div className={Classes.ItemConatiner}>
                 <img className={Classes.FoodTypeImage} src={Asian} alt="All food Icon"/>
               </div>

               <p className={Classes.FoodTypeName}>Asian</p>
               
           </div>

           <div className={Classes.FoodTypeWrapper}>

               <div className={Classes.ItemConatiner}>
                 <img className={Classes.FoodTypeImage} src={Burgers} alt="All food Icon"/>
               </div>

               <p className={Classes.FoodTypeName}>Burgers</p>
               
           </div>

           <div className={Classes.FoodTypeWrapper}>

               <div className={Classes.ItemConatiner}>
                 <img className={Classes.FoodTypeImage} src={Barbecue} alt="All food Icon"/>
               </div>

               <p className={Classes.FoodTypeName}>Barbecue</p>
               
           </div>

           <div className={Classes.FoodTypeWrapper}>

               <div className={Classes.ItemConatiner}>
                 <img className={Classes.FoodTypeImage} src={Dessert} alt="All food Icon"/>
               </div>

               <p className={Classes.FoodTypeName}>Dessert</p>
               
           </div>

           <div className={Classes.FoodTypeWrapper}>

               <div className={Classes.ItemConatiner}>
                 <img className={Classes.FoodTypeImage} src={Thai} alt="All food Icon"/>
               </div>

               <p className={Classes.FoodTypeName}>Thai</p>
               
           </div>

           <div className={Classes.FoodTypeWrapper}>

               <div className={Classes.ItemConatiner}>
                 <img className={Classes.FoodTypeImage} src={Sushi} alt="All food Icon"/>
               </div>

               <p className={Classes.FoodTypeName}>Sushi</p>
               
           </div>

           <div className={Classes.SideScroolIconContainer}>
               <img className={Classes.SideScroolIcon} src={SideIcon} alt="Side Icon"/>
           </div>
       </div>
    );
}

export default Category;