import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { userService } from '../../services/userService';
import { updateUser } from '../../store/user/userActions';
import './Login.css';

const Login = props => {

    const [user, setUser] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const onValueChange = e => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    }

    const sendUser = async e => {

        e.preventDefault();
        setLoading(true);

        const result = await userService.login(user);

        setLoading(false);

        if (result.isOk) {

            const { username, role } = result;

            dispatch(updateUser({ username, role }));            

            props.history.push({ pathname: '/app' });

        } else{
            setError('Usuario o contraseña incorrectos');
        }

    }

    useEffect(() => {
        userService.logout();
    }, [0]);

    return (
        <div>
              <div className="container" style={{ width: '400px', marginTop:'50px'}}>
                <form className="form-signin" onSubmit={sendUser}>                   
                    <div style={{ paddingTop: 5 }}>
                        <h4 className="h4-secundary">Iniciar sesión</h4>

                        <input value={user.username} onChange={onValueChange} type="text" className="form-control login-control" name="username" placeholder="Usuario" required autoFocus={true} />
                        <input value={user.password} onChange={onValueChange} type="password" className="form-control login-control" name="password" placeholder="Contraseña" required />
                        <span className="text-danger">{error}</span>
                    </div>
                        <input
                            className="btn btn-lg btn-primary btn-block btn-login" 
                            type="submit" 
                            value={loading ? "Iniciando..." : "Login"}                         
                            disabled={loading}/>

                    <br/>
                    <br/>
                   
                </form>
            </div>
        </div>
    );
}

export default Login;
