import {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../../firebase.config";
import {useNavigate} from "react-router-dom";

const SignUp = props => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const navigate = useNavigate();

    const addAccountFirebase = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                // chamada aqui dentro para adição de um documento com os dados do usuário no Firestore database
                console.log('Usuário criado com sucesso: ' + JSON.stringify(user));
                console.log(user.user.uid);
                navigate("/")
            })
            .catch(error => {
                console.log('Erro ao cadastrar usuário: ' + JSON.stringify(error));
            });
    };


    return (
        <>
            <h4>Cadastrar conta</h4>
            <div><label>Nome: </label><input type="text" onChange={e => setName(e.target.value)}/></div>
            <div><label>Email: </label><input type="text" onChange={e => setEmail(e.target.value)}/></div>
            <div><label>Senha: </label><input type="text" onChange={e => setPassword(e.target.value)}/></div>
            <div><label>Repita a senha: </label><input type="text" onChange={e => setRepeatPassword(e.target.value)}/>
            </div>
            <button type="button" onClick={addAccountFirebase}>Cadastrar</button>
        </>
    );
};

export default SignUp;