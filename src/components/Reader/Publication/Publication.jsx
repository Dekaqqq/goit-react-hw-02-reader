import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ title, text }) => (
    <article className={styles.publication}>
        <h2 className={styles.publicationTitle}>{title}</h2>
        <p className={styles.publicationText}>{text}</p>
    </article>
);

Publication.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default withRouter(Publication);
