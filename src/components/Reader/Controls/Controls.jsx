import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ changeIndex, activeIndex, itemsLength }) => {
    return (
        <section className={styles.controls}>
            <button
                type="button"
                className={styles.button}
                onClick={changeIndex}
                disabled={!activeIndex}
                name="prev"
            >
                Назад
            </button>
            <button
                type="button"
                className={styles.button}
                onClick={changeIndex}
                disabled={!(activeIndex < itemsLength - 1)}
                name="next"
            >
                Вперед
            </button>
        </section>
    );
};

Controls.propTypes = {
    changeIndex: PropTypes.func.isRequired,
    activeIndex: PropTypes.number.isRequired,
    itemsLength: PropTypes.number.isRequired,
};

export default Controls;
