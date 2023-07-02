import React, { useState, useEffect } from 'react';

const BottomNav = () => {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return(

    <footer>
        <nav className="navbar navbar-dark bg-dark fixed-bottom">
        <div className="container">
            <p className="text-center mx-auto my-0" style={{ color: 'rgb(209, 209, 209)' }}>
            Dilshan Liyanage &copy; {currentYear}. All rights reserved
            </p>
        </div>
        </nav>
    </footer>

    );

};

export default BottomNav;