import React from 'react';
import Classes from './Sidebar.module.css';
import User from '../assests/img-user.png'
import Smiley from '../assests/img-smiley.png';
import Clock from '../assests/img-clock.png';
import Burger from '../assests/berger.jpg'
import Fries from '../assests/fries.jpg';
import Sauce from '../assests/sauce.jpg';
import Delivery from '../assests/delivery.jpg';

class Sidebar extends React.Component{
    constructor(props){                          //we use constructor func which is used to create object and props are parametrs passed on 
        super(props);
    
        this.state ={                               //state is used to when we make any changes in the ui
           CurrentCount: 1,
           CurrentPriceBurger:14.99,
           CurrentPriceFries: 9.99,
           CurrentPriceSauce: 0.99,
           CurrentTotal:25.97,
        }
      };

      handleDecrementt =() =>{
        const updatedCount= this.state.CurrentCount -1;
        const updatedBurger = this.state.CurrentPriceBurger /2;
        const updatedFries = this.state.CurrentPriceFries /2;
        const updatedSauce = this.state.CurrentPriceSauce /2;
        const updatedTotal = this.state.CurrentTotal /2;
        this.setState({
            CurrentCount:updatedCount,
            CurrentPriceBurger:updatedBurger,
            CurrentPriceFries:updatedFries,
            CurrentPriceSauce:updatedSauce,
            CurrentTotal:updatedTotal,
        }); 
    }
    handleIncrement =() =>{
       
       const updatedCount= this.state.CurrentCount +1;
       const updatedBurger = this.state.CurrentPriceBurger *2;
       const updatedFries = this.state.CurrentPriceFries *2;
       const updatedSauce = this.state.CurrentPriceSauce *2;
       const updatedTotal = this.state.CurrentTotal *2;
       


        this.setState({
            CurrentCount:updatedCount,
            CurrentPriceBurger:updatedBurger,
            CurrentPriceFries:updatedFries,
            CurrentPriceSauce:updatedSauce,
            CurrentTotal:updatedTotal,
        }); 
        
        
             
        

                 //we call this fuc so that it again renders the ui and here we pass obj whose keys we want to update
    }
    

      render() {
          return (
            <div className={Classes.Sidebar}>

            <div className={Classes.Content}>
 
         <div className={Classes.UserWrapper}>
             <img className={Classes.UserPng} src={User} alt="User"/>
             <div className={Classes.MiniYellow}><p className={Classes.Number}>3</p></div>
         </div>
 
         <div className={Classes.MyOrderWrapper}>
            <span className={Classes.SmileyWrapper}><h1 className={Classes.SmileyPrev}>My</h1> <img className={Classes.SmileyIcon} src={Smiley} alt="Smiley"/>
            </span> <h1 className={Classes.SmileyNext}>Order</h1>
         </div>
 
         <div className={Classes.PurpleWrapper}>
             <div className={Classes.AddressWrapper}>
                 <p className={Classes.White}>625 St Marks Ave</p>
                 <p className={Classes.Burg}>Edit</p>
             </div>
             <div className={Classes.TimeWrapper}>
                 <img className={Classes.Clock} src={Clock} alt="Clock"/>
                 <p className={Classes.White}>35 min</p>
                 <p className={Classes.Burg}>Choose time</p>
             </div>
 
         </div>
 
 
         <div className={Classes.OrderWrapper}>
 
         <div className={Classes.OrderMiniContainer}>
             <img className={Classes.OrderPictures} src={Burger} alt="Burger"/>
             <div className={Classes.QuantityWrapper}>
          <p className={Classes.AmountNumber}>{this.state.CurrentCount}</p> <p className={Classes.ProductName}>* BBQ Burger</p>
             </div>
             <p className={Classes.Price}>{this.state.CurrentPriceBurger}</p>
         </div>
 
         <div className={Classes.OrderMiniContainer}>
             <img className={Classes.OrderPictures} src={Fries} alt="Fries"/>
             <div className={Classes.QuantityWrapper}>
                 <p className={Classes.AmountNumber}>{this.state.CurrentCount}</p> <p className={Classes.ProductName}>* French Fries</p>
             </div>
          <p className={Classes.Price}>{this.state.CurrentPriceFries}</p>
         </div>
 
         <div className={Classes.OrderMiniContainer}>
             <img className={Classes.OrderPictures} src={Sauce} alt="Sauce"/>
             <div className={Classes.QuantityWrapper}>
                 <p className={Classes.AmountNumber}>{this.state.CurrentCount}</p> <p className={Classes.ProductName}>* Cheese Sauce</p>
             </div>
             <p className={Classes.Price}>{this.state.CurrentPriceSauce}</p>
         </div>
 
         <div className={Classes.OrderMiniContainer}>
             <img className={Classes.OrderPictures} src={Delivery} alt="Delivery"/>
             <div className={Classes.QuantityWrapper}>
                 <p className={Classes.AmountNumber}></p> <p className={Classes.ProductName}>Delivery</p>
             </div>
             <p className={Classes.Price}>0.00</p>
         </div>
 
         </div>
         
         <div className={Classes.TotalAmountContainer}>
             <p className={Classes.Total}>Total:</p>
             <p className={Classes.Amount}>
             {this.state.CurrentTotal}
             </p>
         </div>
            <hr className={Classes.Line}></hr>
 
             <div className={Classes.BelowWrapper}>
                <p className={Classes.Persons}>Persons</p>
                <div className={Classes.PersonsWrapper}>
                    <p onClick={this.handleDecrementt} className={Classes.DecrementButton}>-</p> <p className={Classes.Counter}>{this.state.CurrentCount}</p> <p onClick={this.handleIncrement} className={Classes.IncrementButton}>+</p>
                </div>
                <div className={Classes.Yellowlarge}>
                    <p>Checkout</p>
                </div>
             </div>
 
         </div>
         </div>
          );
      }
};







// const Sidebar = () =>{

//     const handleIncrement =() =>{
//         alert("Decrement")
//     }

//     return(
        // <div className={Classes.Sidebar}>

        //    <div className={Classes.Content}>

        // <div className={Classes.UserWrapper}>
        //     <img className={Classes.UserPng} src={User} alt="User"/>
        //     <div className={Classes.MiniYellow}><p className={Classes.Number}>3</p></div>
        // </div>

        // <div className={Classes.MyOrderWrapper}>
        //    <span className={Classes.SmileyWrapper}><h1 className={Classes.SmileyPrev}>My</h1> <img className={Classes.SmileyIcon} src={Smiley} alt="Smiley"/>
        //    </span> <h1 className={Classes.SmileyNext}>Order</h1>
        // </div>

        // <div className={Classes.PurpleWrapper}>
        //     <div className={Classes.AddressWrapper}>
        //         <p className={Classes.White}>625 St Marks Ave</p>
        //         <p className={Classes.Burg}>Edit</p>
        //     </div>
        //     <div className={Classes.TimeWrapper}>
        //         <img className={Classes.Clock} src={Clock} alt="Clock"/>
        //         <p className={Classes.White}>35 min</p>
        //         <p className={Classes.Burg}>Choose time</p>
        //     </div>

        // </div>


        // <div className={Classes.OrderWrapper}>

        // <div className={Classes.OrderMiniContainer}>
        //     <img className={Classes.OrderPictures} src={Burger} alt="Burger"/>
        //     <div className={Classes.QuantityWrapper}>
        //         <p className={Classes.AmountNumber}>1</p> <p className={Classes.ProductName}>* BBQ Burger</p>
        //     </div>
        //     <p className={Classes.Price}>$14.99</p>
        // </div>

        // <div className={Classes.OrderMiniContainer}>
        //     <img className={Classes.OrderPictures} src={Fries} alt="Fries"/>
        //     <div className={Classes.QuantityWrapper}>
        //         <p className={Classes.AmountNumber}>1</p> <p className={Classes.ProductName}>* French Fries</p>
        //     </div>
        //     <p className={Classes.Price}>$9.99</p>
        // </div>

        // <div className={Classes.OrderMiniContainer}>
        //     <img className={Classes.OrderPictures} src={Sauce} alt="Sauce"/>
        //     <div className={Classes.QuantityWrapper}>
        //         <p className={Classes.AmountNumber}>1</p> <p className={Classes.ProductName}>* Cheese Sauce</p>
        //     </div>
        //     <p className={Classes.Price}>$0.99</p>
        // </div>

        // <div className={Classes.OrderMiniContainer}>
        //     <img className={Classes.OrderPictures} src={Delivery} alt="Delivery"/>
        //     <div className={Classes.QuantityWrapper}>
        //         <p className={Classes.AmountNumber}></p> <p className={Classes.ProductName}>Delivery</p>
        //     </div>
        //     <p className={Classes.Price}>$0.00</p>
        // </div>

        // </div>
        
        // <div className={Classes.TotalAmountContainer}>
        //     <p className={Classes.Total}>Total:</p>
        //     <p className={Classes.Amount}>
        //         $25.97
        //     </p>
        // </div>
        //    <hr className={Classes.Line}></hr>

        //     <div className={Classes.BelowWrapper}>
        //        <p className={Classes.Persons}>Persons</p>
        //        <div className={Classes.PersonsWrapper}>
        //            <p onClick={handleIncrement} className={Classes.DecrementButton}>-</p> <p className={Classes.Counter}>1</p> <p className={Classes.IncrementButton}>+</p>
        //        </div>
        //        <div className={Classes.Yellowlarge}>
        //            <p>Checkout</p>
        //        </div>
        //     </div>

        // </div>
        // </div>
           
//     );
// }


export default Sidebar;











