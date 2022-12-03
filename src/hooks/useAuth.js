import {useSelector} from 'react-redux';

export function useAuth() {
    const {isAuth, token, id} = useSelector(state => state.user);

    return {
        isAuth,
        token,
        id,
    };
}