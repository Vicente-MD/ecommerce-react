import {useState} from 'react';
import {auth} from "../../firebase.config";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Link} from "react-router-dom";

const Login = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authenticate = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userLogged => {
                console.log('Logado com sucesso: ' + JSON.stringify(userLogged));
            })
            .catch(error => {
                console.log('Error on login: ' + JSON.stringify(error));
            })
    };

    return (
        <>
            <div><label>Email: </label><input type="text" onChange={e => setEmail(e.target.value)}/></div>
            <div><label>Senha: </label><input type="text" onChange={e => setPassword(e.target.value)}/></div>
            <button type="button" onClick={authenticate}>Entrar</button>
            <Link to="/cadastrar">Cadastrar nova conta</Link>
        </>
    );
};

export default Login;