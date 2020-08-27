import React from 'react';
import Classes from './FoodDisplay.module.css';
import Bagel from '../assests/bagel.jpg';
import Pizza from '../assests/pizza.jpg'
import Sandwich from '../assests/Sandwich.jpg'
import Star from '../assests/img-star.png';









const FoodDispalyContainer =() =>{
    return(
          <div className={Classes.MegaWrapper}>
              <div className={Classes.ContentWrapper}>

                  <div className={Classes.CardWarapper}>
                      <div className={Classes.ImageWrapper}> <img className={Classes.FoosPics} src={Bagel} alt="Bagel"/></div>
                       
                        <div className={Classes.TimeWrapper}>
                            <p className={Classes.Time}>25-30 min</p>
                        </div>
                        <h4 className={Classes.DishName}>Bagel Story</h4>
                         <span className={Classes.RatingWrapper}><img className={Classes.StarIcon} src={Star} alt="Star"/> <p className={Classes.Gray}>4.7 Deli Bagels $$</p></span>

                  </div>

                  <div className={Classes.CardWarapper}>
                      <div className={Classes.ImageWrapper}> <img className={Classes.FoosPics} src={Pizza} alt="Pizza"/></div>
                       
                        <div className={Classes.TimeWrapper}>
                            <p className={Classes.Time}>30-35 min</p>
                        </div>
                        <h4 className={Classes.DishName}>The Estaminent</h4>
                         <span className={Classes.RatingWrapper}><img className={Classes.StarIcon} src={Star} alt="Star"/> <p className={Classes.Gray}>4.5 Cafes Creperies $</p></span>

                  </div>

                  <div className={Classes.CardWarapper}>
                      <div className={Classes.ImageWrapper}> <img className={Classes.FoosPics} src={Sandwich} alt="Sandwich"/></div>
                       
                        <div className={Classes.TimeWrapper}>
                            <p className={Classes.Time}>40-60 min</p>
                        </div>
                        <h4 className={Classes.DishName}>Le Paris Dakar</h4>
                         <span className={Classes.RatingWrapper}><img className={Classes.StarIcon} src={Star} alt="Star"/> <p className={Classes.Gray}>4.6 Creperies Sandwich $$</p></span>

                  </div>

              </div>
          </div>     
    );
}


export default FoodDispalyContainer;