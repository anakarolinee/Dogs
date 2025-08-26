import React, { use } from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../api";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {

    const nome = useForm();
    const peso = useForm("number");
    const idade = useForm("number");
    const [img, setImg] = React.useState({});
    const [preview, setPreview] = React.useState(null);
    const { data, error, loading, request } = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (data) {
            navigate("/conta");
        }
    }, [data, navigate]);

    function handleImgChange(event) {
        const file = event.target.files[0];
        setImg({ raw: file });
        setPreview(URL.createObjectURL(file));
        console.log("Imagem selecionada:", file);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("img", img.raw);
        formData.append("nome", nome.value);
        formData.append("peso", peso.value);
        formData.append("idade", idade.value);

        const token = window.localStorage.getItem("token");
        const { url, options } = PHOTO_POST(formData, token);
        const response = await request(url, options);
        console.log("Resposta da API:", response);
    }

    React.useEffect(() => {
        if (data) console.log("Data recebida:", data);
        if (error) console.log("Erro:", error);
    }, [data, error]);

    return (
        <div className={`${styles.photoPost} animateLeft`}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="nome" {...nome} />
                <Input label="Peso" type="number" name="peso" {...peso} />
                <Input label="Idade" type="number" name="idade" {...idade} />
                <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} />
                <Error error={error} />
                <Button disabled={loading}>{loading ? "Enviando..." : "Enviar"}</Button>
            </form>
            {preview && (
                <div className={styles.preview}>
                    <img src={preview} alt="Preview" />
                </div>
            )}
        </div>
    );
};

export default UserPhotoPost;
