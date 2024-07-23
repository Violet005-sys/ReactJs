import React,{ useEffect, useState } from 'react'
import Card from './Card/Card'
import { players } from './data/players';

const PlayersList = () => {
    const [cards, setCards ] = useState([]);
    
    const page = `${players.nationality}`;
    const buttonText = 'View More';

    const newPlayers = players.map((player) => {
        player.description = player.team;
        player.extraDetail = player.age;
        player.image = `https://i2-prod.liverpool.com/incoming/article28213291.ece/ALTERNATES/s1200c/0_Bellingham.jpg`
        return player;
    })
    
    useEffect(() => {
        setCards(newPlayers);
    }, []);
  

  return (
    <div className="container">
        { <Card cards={cards} page={page} buttonText={buttonText}/> }
    </div>
   
  )
}

export default PlayersList