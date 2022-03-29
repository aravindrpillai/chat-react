import {useState, createContext} from 'react'

export const ContextObject = createContext()

function ContextProvider(props){

    const [policyHolderLocator, setPolicyHolderLocator] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [snackBarData, setSnackBarData] = useState({ open:false, severity:"", message:""})

    const value = {
        policyHolderLocator, 
        setPolicyHolderLocator, 
        isAuthenticated, 
        setIsAuthenticated,
        snackBarData,
        setSnackBarData
    }


    return (
    <ContextObject.Provider value={value}>
        { props.children }
    </ContextObject.Provider>
    )
}

export default ContextProvider