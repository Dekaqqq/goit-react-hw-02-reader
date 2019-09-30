import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ activeIndex, itemsLength }) => {
    return (
        <p className={styles.counter}>
            {activeIndex}/{itemsLength}
        </p>
    );
};

Counter.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    itemsLength: PropTypes.number.isRequired,
};

export default Counter;
