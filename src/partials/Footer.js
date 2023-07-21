import { useEffect } from 'react';

const Footer = () => {

  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz';
    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

};

export default Footer;
