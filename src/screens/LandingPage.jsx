import OpenLink from "../components/OpenLink";
const LandingPage = () => {
    return (
        <div className="container-landing">
            <div>
                <h1 className="landing-h1">
                    Módulo 7: DESARROLLO FRONTEND CON REACTJS
                </h1>
            </div>
                <h2 className="d-h2">
                    <strong>
                        Bienvenido
                    </strong>
                </h2>
                <p>
                    Este módulo se centra en el uso de <strong>React</strong>, incluyedo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
                </p>
            <div>
                <h2 className="d-h2">
                    <strong>
                        Temas Cubiertos
                    </strong>
                </h2>
                <div className="d-p">
                    <p>
                        Componentes funcionales y de clase
                    </p>
                    <p>
                        Uso de <strong>React hooks</strong> como useState y use Effect
                    </p>
                    <p>
                        Creación de <strong>custom hooks</strong> como useForm
                    </p>
                    <p>
                        Gestión de variables de estado con <strong>useState</strong>
                    </p>
                    <p>
                        Gestión de estado global con <strong>Redux</strong>
                    </p>
                    <p>
                        Integración de <strong>Redux</strong> con <strong>React</strong>
                    </p>
                    <p>
                        Manejo de <strong>Formularios</strong> en <strong>React</strong>
                    </p>
                    <p>
                        Publicando nuestra <strong>Página</strong> con <strong>Github Pages</strong>
                    </p>
                </div>
            </div>
            <div className="d-recursos">
                <h2 className="d-h2">
                    <strong>
                        Recursos Adicionales
                    </strong>
                </h2>
                <p>
                    Para profundizar en los temas cubiertos, consulta el siguiente recurso:
                    <OpenLink
                        title=" Mi repositorio de React"
                        url="https://github.com/OscarCuba18/desarrollo-frontend-react"
                    />
                </p>
            </div>
            <footer>
                <div className="d-copyright">
                    <p>&copy; 2024 Modulo 7. USIP.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;