import styles from './veiculo.module.css'
import Card from "../Card/Card";
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function Veiculo(){

    const { veiculos} = useContext(CartContext)   

    return(
        
         <div className={styles.veiculo}>
            {veiculos.length === 0 && <h1>Não há nenhum ítem</h1>}
            
            {veiculos.map((veiculo,index) =>
            
                <div className={styles.containerCard} key={index}> 
                
                    <Card
                        _id={veiculo._id}
                        nome={veiculo.nome}
                        marca={veiculo.marca}
                        cor={veiculo.cor}
                        ano={veiculo.ano}
                        placa={veiculo.placa}
                        valor={veiculo.valor}
                        desc={veiculo.desc}
                        image={veiculo.image}
                    />
                </div>  
              
            )}
          
        </div>
    
    )
}
export default Veiculo;