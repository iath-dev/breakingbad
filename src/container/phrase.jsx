import React from 'react';
import PropTypes from 'prop-types';

const Phrase = ({ phrase }) => {
    return (
        <>
            <div>
                <h1>{ phrase.quote }</h1>
                <p>- { phrase.author }</p>
            </div>
        </>
    )
}

Phrase.proTypes = {
    phrase: PropTypes.shape({
        quote: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    })
}

Phrase.defaultProps = {
    phrase: {
        quote: '',
        author: '',
    }
}

export default Phrase;
