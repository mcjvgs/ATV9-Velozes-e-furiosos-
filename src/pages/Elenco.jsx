import Header from '../Components/Header'
import elenco1 from '../assets/elenco1.jpg'
import elenco2 from '../assets/elenco2.jpg'
import elenco3 from '../assets/elenco3.jpg'

function Elenco() {
  return (
    <div>
      <Header/>

      <div>
        <h1>Elenco:</h1>
      </div>

      <div className='flex flex-col items-center'>
        <img src={elenco1} alt="toretto" />
        <p>Vin Diesel</p>
        <p>Personagem: Dominic Toretto</p>
      </div>

      <div className='flex flex-col items-center'>
        <img src={elenco2} alt="Letty" />
        <p>Michelle Rodriguez</p>
        <p>Personagem: Letty Toretto</p>
      </div>

      <div className='flex flex-col items-center'>
        <img src={elenco3} alt="Dantes" />
        <p>Jason Momoa</p>
        <p>Personagem: Dante Reyes</p>
      </div>
      
      <div className='flex flex-col items-center'>
        <p>Sung kang</p>
        <p>Brie Larson</p>
        <p>Charlize Theron</p>
        <p>Helen Mirren</p>
        <p>Scott Eastwood</p>
        <p>Daniela Melchior</p>
        <p>Alan Ritchson</p>
        <p>Rita Moreno</p>
        <p>Leo Abelo Perry</p>
        <p>Pete Davidson</p>
        <p>Joaquim de Almeida</p>
        <p>Michael Rooker</p>
        <p>Cardi B</p>
        <p>Paul Walker</p>
        <p>Dwayne Johnson</p>
      </div>


    </div>
  )
}

export default Elenco
