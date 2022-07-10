import styles from './Filtro.module.css'
import {Link} from 'react-router-dom'

function Filtro(){
    return(
        <div className={styles.container}>
            <Link to={'/'}>
                <img src="https://img.icons8.com/sf-regular-filled/48/000000/circled-chevron-left.png"/>
            </Link>
            
            <div className={styles.Subcontainer}>
                <form>
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
                        <input className={styles.input} type='number' nome='ano' maxlength="4" id="ano" placeholder='Ano do veiculo'></input>
                    </div>
                    <div className={styles.containerPreco}>
                        <div>
                            <h3>Preço min.</h3>
                            <input className={styles.input} type='number' nome='valor' id="valor" placeholder='Valor min'></input> 
                        </div>
                        <div>
                           <h3>Preço max.</h3>
                            <input className={styles.input} type='number' nome='valor' id="valor" placeholder='Valor max'></input> 
                        </div>
                        
                        
                    </div>
                    <div className={styles.btnsalvarr}>
                        <button className={styles.btnSalvar}>Buscar</button>
                    </div> 
                </form>

            </div> 
        </div>

    )
}

export default Filtro;