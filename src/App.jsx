import B2online from "./assets/B2online.png";
import {
  ChevronDown,
  CircleUserRound,
  Heart,
  Menu,
  Search,
  ShoppingCart,
} from "lucide-react";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <header>
        <div className="w-full bg-black h-12 flex items-center justify-center">
          <h2 className="text-white font-medium">
            TODO O SITE EM ATÉ{" "}
            <span className="bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">
              4X SEM JUROS
            </span>
          </h2>
        </div>

        <div className="p-4 flex items-center justify-between md:p-2 md:border-b md:border-zinc-600 md:justify-around">
          <img src={B2online} alt="Logo B2 Online" />

          <div className="w-1/3 h-11 rounded-xl bg-black border border-zinc-600 hidden items-center gap-6 md:flex">
            <Search color="#52525b" size={30} className="ml-6" />
            <div className="h-7 w-px bg-zinc-600"></div>
            <input
              type="text"
              placeholder="Buscar"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full border border-zinc-600 p-2 cursor-pointer transition duration-300 hover:border-zinc-300">
              <Heart color="white" />
            </div>
            <div className="rounded-full border border-zinc-600 p-2 cursor-pointer transition duration-300 hover:border-zinc-300">
              <CircleUserRound color="white" />
            </div>
            <div className="rounded-full border border-zinc-600 p-2 cursor-pointer transition duration-300 hover:border-zinc-300">
              <ShoppingCart color="white" />
            </div>
          </div>
        </div>

        <div className="p-3 md:hidden">
          <div className="w-full h-11 rounded-xl bg-black border border-zinc-600 flex items-center gap-6 md:hidden">
            <Search color="#52525b" size={30} className="ml-6" />
            <div className="h-7 w-px bg-zinc-600"></div>
            <input
              type="text"
              placeholder="Buscar"
              className="bg-transparent  text-white w-full "
            />
          </div>
        </div>

        <nav className="flex items-center gap-6 p-3 overflow-x-auto border-t border-zinc-600 md:border-0 md:overflow-x-hidden md:justify-center ">
          <div className="flex items-center gap-3 ">
            <Menu
              size={30}
              className="cursor-pointer text-zinc-600 transition duration-300 hover:text-zinc-300"
            />
            <span className="text-zinc-300 cursor-pointer transition duration-300 hover:font-medium md:font-lg ">
              Categorias
            </span>
            <div className="w-px bg-zinc-600 h-7 flex md:hidden"></div>
          </div>
          <div className="w-px bg-zinc-600 h-7 hidden md:flex"></div>

          <ul className="flex items-center gap-4 md:gap-16">
            <li className="flex gap-2 cursor-pointer">
              <span className="text-zinc-300 hover:font-medium">Marcas</span>
              <ChevronDown color="#d4d4d8" strokeWidth={1} />
            </li>
            <li className="flex gap-2 cursor-pointer">
              <span className="text-zinc-300 hover:font-medium">Calçados</span>
              <ChevronDown color="#d4d4d8" strokeWidth={1} />
            </li>
            <li className="flex gap-2 cursor-pointer">
              <span className="text-zinc-300 hover:font-medium">Futebol</span>
              <ChevronDown color="#d4d4d8" strokeWidth={1} />
            </li>
            <li className="flex gap-2 cursor-pointer">
              <span className="text-zinc-300 hover:font-medium">Esportes</span>
              <ChevronDown color="#d4d4d8" strokeWidth={1} />
            </li>
            <li className="flex gap-2 cursor-pointer">
              <span className="text-zinc-300 hover:font-medium">Roupas</span>
              <ChevronDown color="#d4d4d8" strokeWidth={1} />
            </li>
            <li className="flex gap-2 cursor-pointer">
              <span className="text-zinc-300 hover:font-medium">
                Acessórios
              </span>
              <ChevronDown color="#d4d4d8" strokeWidth={1} />
            </li>
            <li className="hidden gap-4 md:flex md:gap-16 ">
              <span className="text-zinc-300 cursor-pointer hover:font-medium">
                Moda
              </span>
              <span className="text-zinc-300 cursor-pointer hover:font-medium">
                Novidades
              </span>
              <span className="text-zinc-300 cursor-pointer hover:font-medium">
                Outlet
              </span>
              <span className="text-zinc-300 cursor-pointer hover:font-medium">
                Seja um Afiliado
              </span>
            </li>
          </ul>
        </nav>
        <div className="w-full bg-gradient-to-r from-teal-400 to-lime-400 h-16 flex items-center justify-center overflow-x-auto whitespace-nowrap md:overflow-x-hidden">
          <div className="flex p-2 gap-10 md:gap-20">
            <p className="text-zinc-900 font-medium text-sm md:text-lg">
              10% OFF NO PIX
            </p>
            <p className="text-zinc-900 font-medium text-sm md:text-lg">
              ENVIO ULTRA RÁPIDO
            </p>
            <p className="text-zinc-900 font-medium text-sm md:text-lg">
              PRODUTOS ORIGINAIS
            </p>
            <p className="text-zinc-900 font-medium text-sm md:text-lg">
              +1 MILHÃO DE PEDIDOS
            </p>
            <p className="text-zinc-900 font-medium text-sm md:text-lg">
              TROCA FÁCIL
            </p>
            <p className="text-zinc-900 font-medium text-sm md:text-lg">
              DESCONTOS IMPERDÍVEIS
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
