import PropTypes from 'prop-types';

const BottomNav = ({ path }) => {

    return (
        <img src={path} alt={path} style={{ height: '1rem' }} />
    );

};

BottomNav.propTypes = {
    path: PropTypes.string.isRequired
};

export default BottomNav;