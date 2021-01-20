import React, {Component  } from "react";

import Ux from '../../hoc/Ux'
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    bacon:0.7,
    meat:1.3
}
class BurgerBuilder extends Component {
   state={
       ingredients:{
           salad:0,
           cheese:0,
           bacon:0,
           meat:0
       },
       totalPrice:4,
       purchasable:false,
       purchasing: false
   };
   updatePurchaseState(ingredients){
         const sum=Object.keys(ingredients)
         .map(igkey=>{
             return ingredients[igkey];
         }).reduce((sum,el)=>{
             return sum+el;
         },0);
         this.setState({ purchasable: sum>0 });
         console.log(this.state.purchasable);
   };
   purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };
  purchaseCancelhandler=()=>{
      this.setState({purchasing:false});
  }
  purchaseContinuehandler=()=>{
       alert('Yo');
  }
   addIngredientHandler=(type)=>{
       const oldCount=this.state.ingredients[type];
       const updatedCount=oldCount+1;
       const updatedIngredients={
           ...this.state.ingredients
       }
       updatedIngredients[type]=updatedCount;
       const priceAddition=INGREDIENT_PRICES[type];
       const oldPrice=this.state.totalPrice;
       const newPrice=oldPrice+priceAddition;
       this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
       this.updatePurchaseState(updatedIngredients);
   };
   removeIngredientHandler=(type)=>{
    const oldCount=this.state.ingredients[type];
    const updatedCount=oldCount-1;
    const updatedIngredients={
        ...this.state.ingredients
    }
    updatedIngredients[type]=updatedCount;
    const pricededuction=INGREDIENT_PRICES[type];
    const oldPrice=this.state.totalPrice;
    const newPrice=oldPrice-pricededuction;
    this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
    console.log(updatedIngredients);
};

    render(){
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key]<=0
        }
        return(
          <Ux>
               <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelhandler}>
                   <OrderSummary ingredients={this.state.ingredients}
                       purchaseCancelled={this.purchaseCancelhandler}
                       purchaseContinued={this.purchaseContinuehandler}
                   />
               </Modal>
              <Burger ingredients={this.state.ingredients}/>
              <BuildControls
                  ingredientAdded={this.addIngredientHandler}
                  disabled={disabledInfo}
                  ingredientRemoved={this.removeIngredientHandler}
                  price={this.state.totalPrice}
                  purchasable={this.state.purchasable}
                  ordered={this.purchaseHandler}
              />
          </Ux>
        );
    }
}
export default BurgerBuilder;