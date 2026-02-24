import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/Homelaout/LeftAside';
import RightAsid from '../Component/Homelaout/RightAsid';

const HomeLaout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-6  grid grid-cols-12 gap-5'>


                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside >

                <section className='Main col-span-6'>
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAsid></RightAsid>
                </aside>


            </main>
        </div>
    );
};

export default HomeLaout;