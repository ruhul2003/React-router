import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';


const Root = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Sidebar></Sidebar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;