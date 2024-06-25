import { createContext, useContext, useEffect, useState } from "react";
import axios from "../utils/axiosClient";


const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        const { data: array } = await axios.get(`/categories`);
        setCategories(array);
    }

    const [tags, setTags] = useState([]);
    const fetchTags = async () => {
        const { data: array } = await axios.get(`/tags`);
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