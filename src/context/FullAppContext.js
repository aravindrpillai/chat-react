import { useState, createContext } from 'react'

export const FullAppContextObject = createContext("")

function FullAppContextProvider(props) {

    //Below 3 set methods are not exposed, instead prop is introduced below
    const [showPageMessage, setShowPageMessage] = useState(false)
    const [pageMessageType, setPageMessageType] = useState("error")
    const [pageMessage, setPageMessage] = useState(null)
    const [logoutRequested, setLogoutRequested] = useState(false)
    const [showLoading, setShowLoading] = useState(false)

    function setFlashMessage(type, message) {
        setShowPageMessage(true)
        setPageMessageType(type)
        setPageMessage(message)
    }
    function clearFlashMessage() {
        setShowPageMessage(false)
        setPageMessageType(null)
        setPageMessage(null)
    }


    const value = {
        showPageMessage, pageMessageType, pageMessage,
        setFlashMessage, clearFlashMessage,
        showLoading, setShowLoading,
        logoutRequested, setLogoutRequested
    }

    return (
        <FullAppContextObject.Provider value={value}>
            {props.children}
        </FullAppContextObject.Provider>
    )
}

export default FullAppContextProvider