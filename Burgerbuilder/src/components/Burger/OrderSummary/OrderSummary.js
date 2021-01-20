import React from 'react';
import Ux from '../../../hoc/Ux';
import Button from '../../UI/Button/Button'
const orderSummary=(props)=>{
   const ingredientSummary=Object.keys(props.ingredients)
   .map(igkey=>{
       return (<li key={igkey}><span style={{textTransform: 'capitalize'}}>{igkey}</span>:{props.ingredients[igkey]}</li>);
   });
    return(
       <Ux>
           <h3>Your Order</h3>
           <p>A delicious burger with following ingredients</p>
           <ul>
            {ingredientSummary}
           </ul>
           <p>Continue to checkout?</p>
           <Button btnType="Danger" clicked={props.purchaseCancelled}>
          CANCEL
        </Button>
           <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE?</Button>
       </Ux>
   )
}
export default orderSummary;