import { Button, Grommet} from "grommet";
import PageWrapper from "./library/PageWrapper";
import { FormClose, Layer, Deploy, Paint, PauseFill, Book, Lock, Key } from 'grommet-icons';
import { matchRoutes, useLocation, Routes, Route, useNavigate } from "react-router-dom"
import { theme } from "./theme";
import Home from "./pages/Home";
import Password from "./pages/Password";


export default function () {
    
    const icons = [
        {
            icon: Key,
            path: "/password"
        }
    ]

    const pageWrapper = <PageWrapper
        title={"Create For Me"}
        icons={icons}
    />  

    return <Grommet theme={theme} full>
        <Routes>
            <Route path="" element={pageWrapper}>
                <Route path="/" element={<Home/>} />
                <Route path="/password" element={<Password />} />
            </Route>
        </Routes>
    </Grommet>
}