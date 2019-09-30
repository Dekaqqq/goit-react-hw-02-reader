import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication.jsx';
import Counter from './Counter/Counter.jsx';
import Controls from './Controls/Controls.jsx';
import styles from './Reader.module.css';

class Reader extends Component {
    state = {
        activeIndex: 0,
    };

    changeIndex = ({ target }) => {
        const { activeIndex } = this.state;
        const { items } = this.props;
        const { name } = target;
        const itemsLength = items.length;
        const lastItem = itemsLength - 1;

        if (name === 'prev') {
            if (activeIndex) {
                this.setState(prev => ({
                    activeIndex: prev.activeIndex - 1,
                }));
            }
        } else if (name === 'next') {
            if (activeIndex < lastItem) {
                this.setState(prev => ({
                    activeIndex: prev.activeIndex + 1,
                }));
            }
        }
    };

    render() {
        const { activeIndex } = this.state;
        const { items } = this.props;
        const itemsLength = items.length;
        const publicationNumber = activeIndex + 1;

        return (
            <div className={styles.reader}>
                <Publication item={items[activeIndex]} />
                <Counter
                    activeIndex={publicationNumber}
                    itemsLength={itemsLength}
                />
                <Controls
                    changeIndex={this.changeIndex}
                    activeIndex={activeIndex}
                    itemsLength={itemsLength}
                />
            </div>
        );
    }
}

Reader.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Reader;
