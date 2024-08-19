import createDataContext from "./CreateDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'signout':
            return { token: null, errorMessage: '' };
        default:
            return state;
    }
};

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token });
        navigate('Tabs', { screen: 'Market' });
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with email or password' });
    }
};

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('Tabs', { screen: 'Market' });
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with email or password' });
    }
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('Main');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout },
    { token: null, errorMessage: '' }
);