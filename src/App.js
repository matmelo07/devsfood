import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';


import {Container ,Menu , PageBody} from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import MenuItem from './components/MenuItem';
import Privateroute from './components/Privateroute';
import Cart from './components/Cart';
import ReactTooltip from 'react-tooltip';





export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
           <Container>
               <Menu>
                  <MenuItem title="Loja" icon='/assets/store.png' link='/' />
                  <MenuItem title="Pedidos"  icon='/assets/order.png' link='/orders'/>
                  <MenuItem title="Usuário"  icon ='/assets/profile.png' link='/profile'/>
               </Menu>
                <PageBody>
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    < Privateroute path='/orders'>
                        Tela de pedidos
                    </ Privateroute>
                    <Privateroute path='/profile'>
                        Tela de login
                    </Privateroute>
                    <Route path="/tela2/:nome">
                        <Tela2Screen />
                    </Route>
                </Switch>
                </PageBody>
                <Cart />
                <ReactTooltip id="tip-right" place="right" effect="solid" />
                <ReactTooltip id="tip-top" place="top" effect="solid"/>
                

                
                
                
            </Container> 
        </BrowserRouter>
    );
}