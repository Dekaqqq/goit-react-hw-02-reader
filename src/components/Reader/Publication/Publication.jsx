import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ item }) => {
    const { title, text } = item;

    return (
        <article className={styles.publication}>
            <h2 className={styles.publicationTitle}>{title}</h2>
            <p className={styles.publicationText}>{text}</p>
        </article>
    );
};

Publication.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};

export default Publication;
