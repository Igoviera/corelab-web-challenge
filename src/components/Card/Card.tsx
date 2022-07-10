import styles from "./Card.module.css";
import { Link } from "react-router-dom"
import { useContext} from "react";
import { CartContext } from "../../contexts/CartContext";
import { useState } from 'react'

function Card({nome,_id,marca,cor,ano,placa,valor,desc,image,}:any){

let coracaoPreto = 'coracao1'
let coracaoVermelho = 'coracao2'

const [done, setDone] = useState(false)

const {deletarVeiculo}:any = useContext(CartContext);


  function likee(){
    setDone(prevState => !prevState)
  
  }

  return (
    <div className={styles.Card}>
      <div> 
        <div className={styles.icons}>
          <Link to={{pathname:`/editar/${_id}`}}>
            <img className={styles.icon} src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"/>
          </Link>
          
          <img className={styles.icon} onClick={() => deletarVeiculo(_id)} src="https://img.icons8.com/ios-glyphs/60/000000/delete.png"/>
          
          <div onClick={likee} className={styles.icon}>{done === true ? 
          <img className={styles.icon} src="https://img.icons8.com/fluency/48/000000/pixel-heart.png"/>: 
          <img className={styles.icon} src="https://img.icons8.com/ios-filled/50/000000/pixel-heart.png"></img>
            }</div>
          </div>

        <div>
          <img className={styles.imgCarro} alt={nome} src={`//localhost:4000/${image}`}/>
          <p>{marca} {nome}</p>
          <p>Preço: {valor} </p>
          <p>Descrição: {desc}</p>
          <p>Ano: {ano}</p>
          <p>Cor: {cor}</p>
          <p>Placa: {placa}</p>
        </div>
      </div>
    </div>

  );
};

export default Card;
