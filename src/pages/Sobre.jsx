import sobre from '../assets/sobre.jpg';
import Header from "../Components/Header"

function Sobre() {
  return (
    <div>
      <Header/>
      <main className='flex flex-col items-center mt-20'>
        <img src={sobre} alt="Como é o filme" />
      </main>

      <div className='flex flex-col items-center'>
        <h2 className='text-4xl font-bold my-5 text-gray-400'>Sobre</h2>
      </div>

      <div className="my-3 text-center">
        <p>Dom Toretto e sua família precisam lidar com o adversário mais letal que já enfrentaram. Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado para destruir o mundo de Dom e todos que ele ama.</p>
      </div>

      <div className="flex flex-col items-center">
        <a href="https://www.google.com/search?client=opera&q=sobre+velozes+e+furiosos+10&sourceid=opera&ie=UTF-8&oe=UTF-8" className=" font-bold text-red-400">Saiba mais</a>
      </div>
    </div>
  )
}

export default Sobre
