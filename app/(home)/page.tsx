import { format } from "date-fns";
import Header from "../_components/Header";
import { ptBR } from "date-fns/locale"
import Search from "./_components/Search";

export default function Home() {
  return (
   <div>
    <Header />

    <h2>
      Olá, Miguel!
    </h2>
    <p className="capitalize text-sm">{format(new Date(), "EEEE',' dd 'de' MMMM", {
      locale: ptBR
    })}</p>

    <div className="px-5 mt-6">
    <Search />
    </div>
   </div>
  );
}
