import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        const url = `${apiUrl}/categories`;
        const { data: array } = await axios.get(url);
        setCategories(array);
    }

    const [tags, setTags] = useState([]);
    const fetchTags = async () => {
        const url = `${apiUrl}/tags`;
        const { data: array } = await axios.get(url);
        setTags(array);
    }

    useEffect(() => {
        fetchCategories();
        fetchTags();
    },[]);
    
    return(
        <GlobalContext.Provider value={{
            tags,
            categories
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobal = () => {
    const value = useContext(GlobalContext);

    if(value === undefined){
        throw new Error('Non sei dentro al Global Provider!');
    }
    return value;
}

export { GlobalProvider, useGlobal }