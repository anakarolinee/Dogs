import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectRouter = ({children}) => {
    const {login} = useContext(UserContext);
    return login ? children : <Navigate to="/login"/>;
}

export default ProtectRouter;
