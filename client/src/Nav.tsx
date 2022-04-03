import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateElement } from "./components/Private";
import { RootState } from "./data/store";
import { DEFAULT_USER } from "./interfaces/user";
import Custom404 from "./pages/Custom404";
import Home from "./pages/Home";
import Login from "./pages/Login";


interface NavProps {

}

const Nav: React.FunctionComponent<NavProps> = ({}) => {
    return <Routes>
            <Route path='/' element={<PrivateElement RouteComponent={Home} />}/>
            <Route path='/login' element={<Login />}/>     
            <Route path="*" element={<Custom404/>}/>
          </Routes>;
};

export default Nav 

