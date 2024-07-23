import React, { createContext, useState } from 'react';
import { useUpdateCards } from '../../Components/Card/UpdateCard';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState({
      title: '',
      description: '',
      extraDetail: '',
      buttonText: '',
      image: '',
      page: ''
  });

  const addCard = (newCard) => {
      setCards(prevCards => [...prevCards, newCard]);
  };

  const updateCard = (newValues) => {
      setCard(prevCard => ({ ...prevCard, ...newValues }));
  };

  const { updateCards } = useUpdateCards(); // Integrate the updateCards utility

  return (
      <CardContext.Provider value={{ card, cards, addCard, updateCard, updateCards }}>
          {children}
      </CardContext.Provider>
  );
};
