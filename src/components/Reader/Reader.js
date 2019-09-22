import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import styles from './Reader.module.css';

class Reader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            publicationNumber: 1,
            itemsLength: props.items.length,
        };
    }

    incrementIndex = () => {
        const { activeIndex, itemsLength } = this.state;
        const lastItem = itemsLength - 1;

        if (activeIndex < lastItem) {
            this.setState(prev => ({
                activeIndex: prev.activeIndex + 1,
                publicationNumber: prev.publicationNumber + 1,
            }));
        }
    };

    decrementIndex = () => {
        const { activeIndex } = this.state;

        if (activeIndex) {
            this.setState(prev => ({
                activeIndex: prev.activeIndex - 1,
                publicationNumber: prev.publicationNumber - 1,
            }));
        }
    };

    render() {
        const { activeIndex, publicationNumber, itemsLength } = this.state;
        const { items } = this.props;

        return (
            <div className={styles.reader}>
                <Publication item={items[activeIndex]} />
                <Counter
                    activeIndex={publicationNumber}
                    itemsLength={itemsLength}
                />
                <Controls
                    onIncrement={this.incrementIndex}
                    onDecrement={this.decrementIndex}
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
