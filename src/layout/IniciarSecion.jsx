import { Outlet } from "react-router-dom"

const IniciarSecion = () => {
    return (
        <div>
            <h1>Desde IniciarSecion</h1>

            <Outlet/>
        </div>
    )
}

export default IniciarSecion