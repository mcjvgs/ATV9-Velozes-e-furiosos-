import Furiosos10 from '../assets/velozes.jpg'

import Header from '../Components/Header';

export default function VelozeseFuriosos() {
  return (
      <div>
        <Header />
  
        <main className="flex flex-col items-center mt-20">
          <img src={Furiosos10} alt="imagem da capa do filme" />
        </main>
        
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold my-5 text-gray-400">Sinopse</h2>
        </div>

        <div>
           <p className="my-3 text-center">No décimo filme da série Velozes & Furiosos e último da nova trilogia (Velozes 8, 9 e 10), ao longo de muitas missões e contra probabilidades que pareciam impossíveis, Dom Toretto (Vin Diesel) e sua família foram mais espertos e superaram todos os inimigos em seu caminho. Agora, eles devem desafiar o adversário mais letal que já enfrentaram. Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado na forma de Dante (Jason Momoa), para destruir o mundo de Toretto e destruir tudo - e todos - que ele ama. Ele então, comandando novamente a equipe de corredores mais conhecida do mundo, encara mais uma difícil missão sobre quatro rodas. O fim da estrada começa e Velozes & Furiosos 10 lança os capítulos finais de uma das franquias globais mais famosas e populares do cinema, agora em sua terceira década e ainda forte com o mesmo elenco e personagens centrais de quando começou.</p>
        </div>

        <div className="flex flex-col items-center"> 
          <a href="https://www.adorocinema.com/filmes/filme-242871/" className=" font-bold text-red-400">Saiba Mais</a>
        </div>
      </div>
  )
}

