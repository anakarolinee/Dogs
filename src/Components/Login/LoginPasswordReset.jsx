import React from "react";
import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import { PASSWORD_RESET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";

const LoginPasswordReset = () => {
    const [login, setLogin] = React.useState("");
    const [key, setKey] = React.useState("");
    const password = useForm("")
    const { error, loading, request } = useFetch("")
    const navigate = useNavigate()

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const login = params.get("login");
        const key = params.get("key");
        if (login) {
            setLogin(login);
        }
        if (key) {
            setKey(key);
        }
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value,
            });
            const { response } = await request(url, options);
            if (response.ok) navigate("/login");
        }
    }

    return (
        <div>
            <h1 className="title">Resete sua Senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nova Senha" type="password" name="password" {...password}/>
                {loading ? (
                    <Button disabled>Resetando...</Button>
                ) : (
                    <Button>Redefinir Senha</Button>
                )}
            </form>
            <Error error={error} />
        </div>
    );
}
export default LoginPasswordReset;