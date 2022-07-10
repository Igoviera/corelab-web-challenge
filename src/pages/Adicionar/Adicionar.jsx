import styles from './Adicionar.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


function Adicionar(){


    const { onSubmit } = useContext(CartContext)

    return(

        <div className={styles.container}>
            <Link to={'/'}>
                <img src="https://img.icons8.com/sf-regular-filled/48/000000/circled-chevron-left.png"/>
            </Link>
            
            <div className={styles.Subcontainer}>
                
                <h2 className={styles.titulo}>Adicionar veiculo</h2>

                <form onSubmit={onSubmit} action="/some-endpoint" method='POST' encType='multipart/form-data'>
                    <div className={styles.composAdicionar}>
                        <h3>Nome:</h3>
                        <input className={styles.input} type='text' nome='nome' id="nome" placeholder='nome do veiculo'></input>
                    </div>
                    <div>
                        <h3>Marca:</h3>
                        <input className={styles.input} type='text' nome='marca' id="marca" placeholder='Marca do veiculo'></input>
                    </div>
                    <div>
                        <h3>Cor:</h3>
                        <input className={styles.input} type='text' nome='cor' id="cor" placeholder='Cor do veiculo'></input> 
                    </div>
                    <div>
                        <h3>Ano:</h3>
                        <input className={styles.input} type='number' nome='ano' id="ano" placeholder='Ano do veiculo'></input>
                    </div>
                    <div>
                        <h3>Placa:</h3>
                        <input className={styles.input} type='text' nome='placa' id="placa" placeholder='Placa do veiculo'></input>
                    </div>
                    <div>
                        <h3>Valor:</h3>
                        <input className={styles.input} type='number' nome='valor' id="valor" placeholder='Valor do veiculo'></input>
                    </div>
                    <h3 className="tituloCapa" for="avatar">Foto do veiculo:</h3>
                    <input className="imgFile" type="file"id="image" name="image"></input>
               
                    <div>
                        <h3>Descrição:</h3>
                        <input className={styles.input} type='text' nome='desc' id="desc" placeholder='Descrição do veiculo'></input>
                    </div>
                    <div className={styles.btnsalvarr}>
                        <button className={styles.btnSalvar}>Salvar</button>
                    </div> 
                </form>
    
            </div>
  
        </div>
    )
}

export default Adicionar;