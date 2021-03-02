import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';


const { Types, Creators } = createActions({
   changeTheme: ['color'],

   openThemeModal: null,
   closeThemeModal: null
});


export const ThemesTypes = Types;
export default Creators; // ThemeActions


const INITIAL_STATE = Immutable({
   theme: localStorage.getItem('@app:theme') || 'default',
   isThemeModalVisible: false
});

const changeTheme = (state, { color }) => {
   localStorage.setItem('@app:theme', color);
   return state.merge({ theme: color });
};

const openThemeModal = state => state.merge({ isThemeModalVisible: true });
const closeThemeModal = state => state.merge({ isThemeModalVisible: false });


export const reducer = createReducer(INITIAL_STATE, {
   [Types.CHANGE_THEME]: changeTheme,

   [Types.OPEN_THEME_MODAL]: openThemeModal,
   [Types.CLOSE_THEME_MODAL]: closeThemeModal
});
