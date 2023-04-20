import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { useState } from 'react';
import { baseColaboradores } from '../baseColaboradores';


const Formulario = () => {
      
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [lista, setLista] = useState(baseColaboradores);
    const [nuevaLista, setNuevaLista] = useState(baseColaboradores);
    const [resultado, setResultado] = useState({isShown: true, msg:'',variant:''});

    //Función al enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault()
        setLista([...lista, {
            id: Date.now(), nombre: name, correo: email
        }])
        setNuevaLista([...nuevaLista, {
            id: Date.now(), nombre: name, correo: email
        }])
    }

    // Funcion al escribir sobre el input nombre del formulario

    const inputNombre = (e) => {
        setName(e.target.value)
    }

    // Funcion al escribir sobre el input nombre del formulario

    const inputEmail = (e) => {
        setEmail(e.target.value)
    }

    const inputFiltro = (e) => {
        e.preventDefault()
        if (e.target.value === "") {
            setLista(nuevaLista);
        } else {
            let listaFiltrada = nuevaLista.filter(c => c.nombre.includes(e.target.value));
            setLista(listaFiltrada)
        }
    }

    return (
        <div className='container'>
            <div className='filtrado'>
                <h4>Buscar colaboradores</h4>
                <input class="buscador" type="search"  placeholder='Busca un colaborador' onChange={(e) => { inputFiltro(e) }} />
            </div>
            <Form onSubmit={enviarFormulario}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de colaborador</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el nombre del colaborador" onChange={inputNombre} value={name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Correo de colaborador</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa el correo de colaborador" onChange={inputEmail} value={email} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Agregar Colaborador
                </Button>
                
            </Form>

            <h3>Lista de colaboradores</h3>
            <ul>
            {lista.map(colaborador => 
            <li key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</li> )}
            </ul>
        </div>



    )

}
export default Formulario;