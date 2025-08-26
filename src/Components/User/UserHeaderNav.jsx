import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./UserHeaderNav.module.css";
import useMedua from "../../Hooks/useMedia";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');
    console.log(mobile);
    const [mobileMenu, setMobileMenu] = React.useState(false);

    return (
        <>
            {mobile &&
                <button
                    aria-label="Menu"
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                >

                </button>
            }
            <nav className={`${mobile ? styles.navMobile : styles.nav } ${mobileMenu && styles.navMobileActive}`}
            >
                <NavLink to="/conta" end>
                    <img src="/src/Assets/feed.svg"
                        alt="Feed" />
                    {mobile && 'Minhas Fotos'}
                </NavLink>
                <NavLink
                    to="/conta/estatisticas">
                    <img src="/src/Assets/estatisticas.svg"
                        alt="Estatisticas" />
                    {mobile && 'Estatísticas'}
                </NavLink>
                <NavLink
                    to="/conta/postar">
                    <img src="/src/Assets/adicionar.svg"
                        alt="Adicionar Foto" />
                    {mobile && 'Adicionar Foto'}
                </NavLink>
                <button
                    onClick={userLogout}>
                    <img src="/src/Assets/sair.svg"
                        alt="Sair" />
                    {mobile && 'Sair'}
                </button>
            </nav>
        </>
    )
}
export default UserHeaderNav;
