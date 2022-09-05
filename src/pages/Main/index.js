import './style.css';
import { useState } from 'react';
import SideBar from '../../components/Sidebard';
import Card from '../../components/Card';
import cards from '../../cards';
import CongratsImg from '../../assets/congrats.png';

function Main() {
  const [stateCards, setStateCards] = useState([...cards]);

  return (
    <div className='container'>
      <SideBar
        cards={cards}
        setStateCards={setStateCards}
      />

      <div className='container-main'>
        <div
          className='puzzle'
          style={{ 'justifyContent': `${stateCards.length ? 'flex-start' : 'center'}` }}
        >
          {stateCards.length ? stateCards.map((card) => (
            <Card
              key={card.id}
              card={card}
              stateCards={stateCards}
              setStateCards={setStateCards}
            />
          ))
            :
            <img src={CongratsImg} alt='parabéns' />
          }
        </div>
      </div>

    </div>
  );
}

export default Main;
