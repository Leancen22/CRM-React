import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Components/Spinner'

const VerCliente = () => {

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()

    useEffect( () => {
        
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)

            } catch (error) {
                console.log(error)
            }
            setCargando(!cargando)
        }

        obtenerClienteAPI()
    }, [])

    return (
        cargando ? <Spinner /> : 
        Object.keys(cliente).length === 0 ? 
        <p>No hay resultados para ese cliente</p> : 
        (
            <div>
                    <h1 className='font-black text-4xl text-blue-900'>
                    Ver cliente: {cliente.nombre}
                    </h1>
                    <p>
                        Informacion del cliente...
                    </p>

                    <p className='text-gray-600 text-4xl mt-10'>
                        <span className='text-gray-800 uppercase font-bold'>Cliente: </span> 
                        {cliente.nombre}
                    </p>
                    <p className='text-gray-600 text-2xl mt-4'>
                        <span className='text-gray-800 uppercase font-bold'>Email: </span> 
                        {cliente.email}
                    </p>
                    <p className='text-gray-600 text-2xl mt-4'>
                        <span className='text-gray-800 uppercase font-bold'>Telefono: </span> 
                        {cliente.telefono}
                    </p>
                    <p className='text-gray-600 text-2xl mt-4'>
                        <span className='text-gray-800 uppercase font-bold'>Empresa: </span> 
                        {cliente.empresa}
                    </p>
                    {cliente.notas && (
                        <p className='text-gray-600 text-2xl mt-4'>
                            <span className='text-gray-800 uppercase font-bold'>Notas: </span> 
                            {cliente.notas}
                        </p>
                    )}
            </div>
        )
    )
}
export default VerCliente