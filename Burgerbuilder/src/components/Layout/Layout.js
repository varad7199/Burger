import React from 'react';

import Ux from '../../hoc/Ux'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder' 
const layout=(props)=>(
    <Ux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <BurgerBuilder/>
        <main>
            {props.children}
        </main>
    </Ux>
);
export default layout;