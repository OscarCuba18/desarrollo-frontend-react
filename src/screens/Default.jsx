import Logo from "./_components/Logo";
import Description from "./_components/Description";
import OpenLink from "../components/OpenLink";
//import Github from "./_components/Github";
const Default = () => {
    return (
        <>
            <header className="App-header">
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

            </header>
        </>
    );
};

export default Default;