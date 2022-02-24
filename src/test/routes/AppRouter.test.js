import '@testing-library/jest-dom/extend-expect';
import React from "react";
import AppRouter from '../../routes/AppRouter';
import {shallow} from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PrivateRoutes from '../../routes/PrivateRoutes';
import PublicRoutes from '../../routes/PublicRoutes';
import { BrowserRouter } from 'react-router-dom';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore();

describe('pruebas <AppRouter />', () => {
    beforeEach(() =>{
        store = mockStore();
    })

    test('validar render de rutas privadas', () => {
        const isLoggin = true;
        const component = shallow(
            <Provider store={store}>
                <AppRouter>                
                    <BrowserRouter>
                    {
                    isLoggin === true?
                    <PrivateRoutes/> 
                    : isLoggin === undefined ?
                    console.log("cat")
                    :<PublicRoutes/>
                    }                                                                                     
                    </BrowserRouter>
                
                </AppRouter>
            </Provider>
        )   
        expect(component).toMatchSnapshot()
        expect(component.find('PrivateRoutes').length).toBe(1)
    })
    test('validar render de rutas publicas', () => {
        const isLoggin = false;
        const component = shallow(
            <Provider store={store}>
                <AppRouter>
                
                    <BrowserRouter>
                    {
                    isLoggin === true?
                    <PrivateRoutes/> 
                    : isLoggin === undefined ?
                    console.log("cat")
                    :<PublicRoutes/>
                    }                                                                                     
                    </BrowserRouter>
                
                </AppRouter>
            </Provider>
        )           
        expect(component).toMatchSnapshot();
        expect(component.find('PublicRoutes').length).toBe(1)        
    })
})