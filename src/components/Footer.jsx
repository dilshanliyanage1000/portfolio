import { useState, useEffect } from 'react';

const Footer = () => {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (

        <footer>
            <p className='fs-6 mt-5' style={{ color: "#707070", marginBottom: "8px" }}>Dilshan Liyanage © Copyright {currentYear}. All rights reserved.</p>
        </footer>

    );

};

export default Footer;