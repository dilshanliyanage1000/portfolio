import { useState, useEffect } from 'react';

const BottomNav = () => {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (

        <footer>
            <nav className="navbar">
                <div className="container">
                    <p className="text-center mx-auto my-0 mb-4" style={{ color: 'rgb(209, 209, 209)' }}>
                        Dilshan Liyanage &copy; Copyright {currentYear}. All rights reserved.
                    </p>
                </div>
            </nav>
        </footer>

    );

};

export default BottomNav;