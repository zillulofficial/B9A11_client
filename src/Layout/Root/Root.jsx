import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            {/* Navbar */}
            {/* <Navbar></Navbar> */}

            {/* Outlet */}
            <div className="min-h-[calc(100vh-343px)]">
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;