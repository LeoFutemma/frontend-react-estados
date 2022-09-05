import './style.css';
import CardBack from '../../assets/card-back.png';

export default function Card({ card, stateCards, setStateCards }) {

  function handleSelectedCard() {
    const localCards = [...stateCards];

    const currentCard = localCards.find((item) => item.id === card.id);

    const onlyTurnedCards = localCards.filter((item) => item.turned);

    if (onlyTurnedCards.length > 1) {
      return;
    }
    if (onlyTurnedCards.length && card.slug === onlyTurnedCards[0].slug) {
      currentCard.turned = !currentCard.turned;
      setStateCards(localCards);

      setTimeout(() => {
        handleClearCards(currentCard, onlyTurnedCards[0], localCards)
      }, 600);

      return;
    }

    currentCard.turned = !currentCard.turned;
    setStateCards(localCards);


    if (onlyTurnedCards.length) {
      setTimeout(() => {
        localCards.forEach((item) => {
          item.turned = false
        });
        setStateCards([...localCards]);
      }, 600);
    }

    function handleClearCards(card1, card2, localCards) {
      if (card1.id === card2.id) {
        return;
      }

      const filteredCards = localCards.filter((item) => item.id !== card1.id && item.id !== card2.id);

      setStateCards(filteredCards);
    }
  }

  return (
    <div>
      <img
        className='card'
        src={card.turned ? card.image : CardBack}
        onClick={() => handleSelectedCard()}
        alt='card' />
    </div>
  )
}