import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/apiFacade.js";
import styled from "styled-components";


const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    width: 100vw;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 300px;
    border: 0.2rem solid var(--color-sky-400);
    padding: 4rem;
    border-radius: 1rem;
    box-shadow: 0 0 5px 0 var(--color-sky-400);
    background-color: var(--color-sky-200);
    label {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-size: 1.5rem;
        color: var(--color-sky-800);
    }
    input {
        font-size: 1.3rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-family: inherit;
    }
    button {
        font-size: 1.5rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: var(--color-sky-800);
        color: white;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: var(--color-sky-600);
        }
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`

const ErrorText = styled.p`
    color: red;`


export const Login = ({setCurrentUser, currentUser, isAuthenticated, setIsAuthenticated}) => {
    const [user, setUser] = useState({username: "", password: ""});
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleOnChange = (e) => {
        console.log(e.target.name, e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("attempting to login");
        try{
            await attemptLogin();
        }catch(err){
            setError(err.message);
            console.log(err);
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("attempting to register");
        try{
            await attemptRegister();
        }catch(err){
            setError(err.message);
            console.log(err);
        }
    }

    const attemptLogin = async () => {
        try {
            if(user.username === "" || user.password === "") throw new Error("Username and password cannot be empty");
            await login(user.username, user.password, (data) => {setCurrentUser(data); localStorage.setItem("currentUser", JSON.stringify(data));});
            setUser({username: "", password: ""})
            setIsAuthenticated(true);
            navigate("/home");
        }catch(err){
            setError(err.message);
            console.log(err);
        }
    }

    const attemptRegister = async () => {
        try{
            if(user.username === "" || user.password === "") throw new Error("Username and password cannot be empty");
            await register(user.username, user.password, (data) => console.log(data));
            setError("User registered successfully, please login");
            navigate("/login");
        }catch(err){
            setError(err.message);
            console.log(err);
        }
    }
    


    return (
    <>
        <Container>
        <StyledForm>
            <label>
                Username:
                <input type="text" name="username" value={user.username} onChange={handleOnChange}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" value={user.password} onChange={handleOnChange} />
            </label>
            {error && <ErrorText>{error}</ErrorText>}
            <ButtonContainer>
            <button id="register" onClick={handleRegister} type="button">Register</button>
            <button id="login" onClick={handleLogin} type="button">Login</button>
            </ButtonContainer>
        </StyledForm>
        </Container>
    </>
    )
}
