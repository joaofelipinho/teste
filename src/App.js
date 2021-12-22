import React from "react";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import { PlusCircleOutlined } from "@ant-design/icons";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div>
        <h1>Produtos</h1>

        <button> <PlusCircleOutlined style={{fontSize:20,color:'white'}}/> Adicionar Produto</button>

        <div class="grid">
          <div class="coluna1">
            <img src="./oi.png" />
          </div>
          <div class="coluna">
            <p className="titulo">Câmera interna inteligente Wi-Fi Full HD iM3</p>
            <p className="marca">Intelbras</p>
            <h1 className="valor">R$300,00</h1>
            <p className="cor">Cor:Branca</p>
          </div>
        </div>

        <div class="grid">
          <div class="coluna2">
            <img src="./camera.png" />
          </div>
          <div class="coluna">
            <p className="titulo2">Câmera DS-2CD 2583G2-I</p>
            <p className="marca2">Hikvision</p>
            <h1 className="valor2">R$645,00</h1>
            <p className="cor2">Cor:Branca</p>
          </div>
        </div>

        <div class="grid">
          <div class="coluna">
            <img src="./wayfair.png" />
          </div>
          <div class="coluna">
            <p className="titulo3">Câmera interna inteligente Wi-Fi Full HD iM4</p>
            <p className="marca3">Intelbras</p>
            <h1 className="valor3">R$349,00</h1>
            <p className="cor3">Cor:Branca</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
