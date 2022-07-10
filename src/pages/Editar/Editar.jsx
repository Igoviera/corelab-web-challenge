
import styles from '../Adicionar/Adicionar.module.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';



function Editar(){

const {editarVeiculo,} = useContext(CartContext)    

const {id} = useParams()

const navigate = useNavigate()

const onSubmit = (e) => {
    e.preventDefault()
    
    const data = {
        nome: e.target.elements.nome.value,
        marca: e.target.elements.marca.value,
        cor: e.target.elements.cor.value,
        ano: e.target.elements.ano.value,
        placa: e.target.elements.placa.value,
        valor: e.target.elements.valor.value,
        desc: e.target.elements.desc.value,
        /*image: e.target.elements.image.files[0]*/
    };


    /*const formData = new FormData();
    formData.append('image', data.image);*/

    axios.put(`http://localhost:4000/${id}`,data)
    .then(response => {
        if(response.status === 200){
           return navigate("/")
        }
    })
    .catch(error => {
        console.log("ops! teve um error"+error)
    })
}

    return (

        <div className={styles.container}>
            <Link to={'/'}>
                <img src="https://img.icons8.com/sf-regular-filled/48/000000/circled-chevron-left.png"/>
            </Link>
            
            <div className={styles.Subcontainer}>
                <h2 className={styles.titulo}>Editar veiculo</h2>
                <form onSubmit={onSubmit} method='POST' >
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

export default Editar;