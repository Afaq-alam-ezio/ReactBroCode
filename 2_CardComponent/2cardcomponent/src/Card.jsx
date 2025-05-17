import Pic from './Images/Profile.jpg'

function Card() {

  return (

    <div className='Card'>
        
        <img src={Pic} alt="Error" className='Logo'/>
        <h3>Afaq Alam</h3>
        <p>I like to learn Programming, i'll nail ReactJs</p>

    </div>
  );
}

export default Card