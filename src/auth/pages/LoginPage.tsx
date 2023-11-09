import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '..';

export const LoginPage = (): JSX.Element => {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const [inputState, setInputState] = useState<string>('');

    const onInputHandler = (eventInput: React.FormEvent<HTMLInputElement>): void => {
        setInputState(eventInput.currentTarget.value);
    }


    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        const username = inputState === '' ? 'Guest' : inputState;
        login(username);

        navigate(lastPath, {
            replace: true
        });
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <div className='form-group'>
                <input className='form-control mb-3' autoComplete='off' placeholder='username' type="text" value={inputState} onChange={onInputHandler} />

                <button className="form-control btn btn-primary" onClick={onLogin}>Login</button>
            </div>
        </div>
    )
}
