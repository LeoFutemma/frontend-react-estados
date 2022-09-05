import './style.css';
import CubosLogo from '../../assets/cubos-puzzle.png'

export default function Sidebar({ setStateCards, cards }) {

  function handleReset() {
    cards.forEach((card) => {
      card.turned = false;
    });

    setStateCards(cards);
  }

  return (
    <div className='menu'>
      <img src={CubosLogo} alt='cubos logo' />
      <button onClick={() => handleReset()}>RESET</button>
    </div>
  )
}