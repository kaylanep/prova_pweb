import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //CRIAR UM ESTADO
  const [personagens, setPersonagens] = useState([]);
  //FUNÇÃO DE INICIALIZAÇÃO
  useEffect(() => {
    const listaDePersonagens = async () => {
      try {
        //função assicrona
        //resposta esta aguardando o axio retornar um json da api
        const resposta = await axios.get("https://api.disneyapi.dev/character");
        setPersonagens(resposta.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    listaDePersonagens();
  }, []);
  return (
    <>
      <h1>API DA DISNEY</h1>
<main>
{personagens.map((objeto) => (
        
        <div>
          <li key={objeto.name}>
            <img src={objeto.imageUrl}></img>
            <h3>{objeto.name}</h3>
          </li>
        </div>
      
    ))}
</main>
      
    </>
  );
}
export default App;
