import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData, clearFormData } from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";

import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({ username: '', email: '', password: ''});
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (values.password === "mod7ReactUSIP") {
            dispatch(saveFormData(values));
            setShowLogout(true);
        } else {
            setShowModalInfo(true);
        }
    };
    const hideModalInfo = () => {
        setShowModalInfo(false);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };
    const handleLogout = () => {
        setShowModalInfo(true);
    };
    
    const confirmLogout = () => {
        dispatch(clearFormData());  // Limpia los datos en Redux
        resetForm();  // Limpia los campos del formulario
        setShowLogout(false);  // Oculta el enlace de logout
        hideModalInfo();  // Cierra el modal
    };
    
    return (
        <motion.div
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {showLogout ?
            <ModalInfo
                visible={showModalInfo}
                message="¿Estás seguro de cerrar sesión?"
                onClose={hideModalInfo}
                onConfirm={confirmLogout}
            /> :
            <ModalInfo
                visible={showModalInfo}
                message="Contraseña incorrecta"
                onClose={hideModalInfo}
            />
            }
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button type="button" onClick={togglePasswordVisibility}>
                            {showPassword ? "Ocultar" : "Mostrar"}
                        </button>
                    </div>
                    <div className="button-container">
                        {!showLogout ? <button type="submit">Submit</button> : <a href="#" onClick={handleLogout}>Logout</a>}
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;