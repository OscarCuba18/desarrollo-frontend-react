import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const form = useSelector(state => state.form);
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
                <li className="li-user">
                    <a href='#'>
                        Bienvenido
                        <strong> {form.formData.username} </strong>
                        <strong>: {form.formData.email} </strong>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;