import Logo from "./_components/Logo";
import Description from "./_components/Description";
import OpenLink from "../components/OpenLink";
import Lesoninfo from "./_components/Lesoninfo"
import Contador from "./_components/Contador";
//import Github from "./_components/Github";
const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador />
                <Logo />
                <Description/>
                <OpenLink
                    title="Learn React"
                    url="https://reactjs.org"
                />
                <OpenLink
                    title="Mi repositorio de React"
                    url="https://github.com/OscarCuba18/desarrollo-frontend-react"
                />
                <Lesoninfo
                    number="1"
                    title="Introducción a react y estructura de proyecto"
                />
                <Lesoninfo
                    number="2"
                    title="Context API para la gestión del estado global en aplicaciones react"
                />
            </header>
        </>
    );
};

export default Default;