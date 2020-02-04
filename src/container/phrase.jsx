import React from 'react';
import PropTypes from 'prop-types';
import { PhraseContainer } from '../components';

const Phrase = ({ phrase }) => {

    if (Object.keys(phrase).length === 0) return null;

    return (
        <>
            <PhraseContainer>
                <h1>{ phrase.quote }</h1>
                <p>- { phrase.author }</p>
            </PhraseContainer>
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
    phrase: null,
}

export default Phrase;
