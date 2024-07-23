// src/utils/updateCards.js
import { useContext } from 'react';
import { CardContext } from '../../Failure/context/Cards';

/**
 * Custom hook to use card update functionality.
 */
export const useUpdateCards = () => {
    const { setCards } = useContext(CardContext);

    /**
     * Updates the cards state with a new array of cards.
     * @param {Array} newCards - An array of new card objects.
     */
    const updateCards = (newCards) => {
        setCards(newCards);
    };

    return { updateCards };
};
