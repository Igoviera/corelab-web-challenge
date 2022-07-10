import { createContext } from "react";
import { useState, } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CartContext = createContext({})

export const CartProvider = ({children}) => {


//const navigate = useNavigate()

// Cadastrando veiculo
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
        image: e.target.elements.image.files[0]
    };


    const formData = new FormData();
    formData.append('image', data);

    axios.post(`http://localhost:4000/veiculo`,data, {headers: {"Content-Type":"multipart/form-data"}})
    .then(response => {
        if(response.status === 200){
            //return navigate("/")//
            window.location.reload()
        }
    })
    .catch(error => {
        console.log("ops! teve um error"+error)
    })
}


//Listando todos os veiculos
const [veiculos, setVeiculos] = useState([])

useEffect(() => {
    axios.get(`http://localhost:4000/`)
    .then(response => {
        setVeiculos(response.data.veiculos)
    })
    .catch(error => {
        console.log("ops! deu error"+error)
    })
},[])

//Deletar um veiculo
function deletarVeiculo(id){
    axios.delete(`http://localhost:4000/${id}`)
    window.location.reload()
};


//Editar veiculo
function editarVeiculo(id){
    axios.put(`http://localhost:4000/${id}`)
    window.location.reload()
}


    return (
        <CartContext.Provider value={{veiculos,onSubmit,deletarVeiculo,editarVeiculo}}>
            {children}
        </CartContext.Provider>
    )
}