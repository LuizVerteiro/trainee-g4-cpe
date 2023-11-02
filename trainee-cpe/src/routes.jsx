import{
    Routerprovider,
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";
import Home  from "./Pages/Home/Home";
import  Cadastro  from "./Pages/Cadastro/Cadastro";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
        <Route path="./" element = {<Home/>}/>
  <Route path="./" element = {<Cadastro/>}/>
        </Route>

    )
)
export default function Routes(){
    return <Routerprovider router = {router}/>
}