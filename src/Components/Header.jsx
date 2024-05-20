import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-gray-800 p-3">
      <div>
        <h1 className="text-5xl text-center font-bold text-gray-200">Velozes & Furiosos 10</h1>
      </div>

      <nav className="text-center text-gray-200">
        <ul className="flex justify-center gap-8 ">
          <li>
            <Link to={"/"} className="font-bold">Home</Link>
          </li>

          <li>
            <Link to={"/Elenco"} className="font-bold">Elenco</Link>
          </li>

          <li>
            <Link to={"/Sobre"} className="font-bold">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

