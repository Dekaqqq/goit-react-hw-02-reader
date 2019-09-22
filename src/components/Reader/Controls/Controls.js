import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement, activeIndex, itemsLength }) => {
    return (
        <section className={styles.controls}>
            <button
                type="button"
                className={styles.button}
                onClick={onDecrement}
                disabled={!activeIndex && true}
            >
                Назад
            </button>
            <button
                type="button"
                className={styles.button}
                onClick={onIncrement}
                disabled={!(activeIndex < itemsLength - 1) && true}
            >
                Вперед
            </button>
        </section>
    );
};

Controls.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    activeIndex: PropTypes.number.isRequired,
    itemsLength: PropTypes.number.isRequired,
};

export default Controls;
