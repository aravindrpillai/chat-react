import { useState, createContext } from 'react'

export const ClaimContextObject = createContext("")

function ClaimContextProvider(props) {

    const [incidentDate, setIncidentDate] = useState(null)
    const [notificationDate, setNotificationDate] = useState(null)
    const [incidentType, setIncidentType] = useState('None')
    const [summary, setSummary] = useState(null)
    const [reporterName, setReporterName] = useState(null)
    const [relationToInsured, setRelationToInsured] = useState(null)
    const [contactNumber, setContactNumber] = useState(null)
    const [email, setEmail] = useState(null)
    const [vehicle, setVehicle] = useState(null)


    const value = {
        incidentDate, setIncidentDate,
        notificationDate, setNotificationDate,
        incidentType, setIncidentType,
        summary, setSummary,
        reporterName, setReporterName, 
        relationToInsured, setRelationToInsured,
        contactNumber, setContactNumber,
        email, setEmail,
        vehicle, setVehicle
    }

    return (
        <ClaimContextObject.Provider value={value}>
            {props.children}
        </ClaimContextObject.Provider>
    )
}

export default ClaimContextProvider