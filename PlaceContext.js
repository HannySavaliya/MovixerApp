import { createContext, useState } from "react";

const PlaceContext = createContext();

const PlaceProvider = ({ children }) => { 
    const [selectedCity, setSelectedCity] = useState("");

    return (
        <PlaceContext.Provider value={{ selectedCity, setSelectedCity }}> 
            {children}
        </PlaceContext.Provider>
    );
}

export { PlaceContext, PlaceProvider };