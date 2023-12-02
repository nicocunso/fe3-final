import axios from "axios";
import { createContext, useContext, useReducer, useEffect} from "react";
import { reducer } from "../../reducer/reducer";

const ContextGlobal = createContext();

export const initialState = { theme:"", data: [], favs: JSON.parse(localStorage.getItem('favs')) || [],}

  const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
      axios(url)
      .then(res => dispatch({type: 'GET_CHARACTERS', payload: res.data}))
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
}, [state.favs])

const toggleTheme = () => {
  if (state.theme === "") {
  dispatch({ type: 'CHANGE_THEME', payload:"dark" });
} else {
  dispatch({ type: 'CHANGE_THEME', payload:"" })
  };
}
  return (
    <ContextGlobal.Provider value={{state, toggleTheme, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)