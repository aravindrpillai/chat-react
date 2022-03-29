import { useState, createContext } from 'react'

export const FullQuoteContextObject = createContext()

function FullQuoteContextProvider(props) {

    const [policyHolderLocator, setPolicyHolderLocator] = useState(null)
    const [policyLocator, setPolicyLocator] = useState(null)
    const [withdrawTransaction,setWithdrawTransaction] = useState(false)

    const [personalInfoContextData, setPersonalInfoContextData] = useState({
        validated: null,
        firstName: null,
        lastName: null,
        ssn: null,
        dob: null,
        gender: null,
        email: null,
        phoneNumber: null,
        errors:{
            firstName: null,
            lastName: null,
            ssn: null,
            dob: null,
            gender: null,
            email: null,
            phoneNumber: null
        }
    })

    const [residenceAddressContextData, setResidenceAddressContextData] = useState({
        validated: null,
        addressLine1: null,
        addressLine2: null,
        city: null,
        state: "None",
        zipcode: null,
        endorsementAddedOrUpdated:null,
        errors:{
            addressLine1: null,
            addressLine2: null,
            city: null,
            state: null,
            zipcode: null
        }
    })

    const [communicationAddressContextData, setCommunicationAddressContextData] = useState({
        validated: null,
        confirm: true,
        addressLine1: null,
        addressLine2: null,
        city: null,
        state: null,
        zipcode: null,
        locator:null,
        errors:{
            addressLine1: null,
            addressLine2: null,
            city: null,
            state: null,
            zipcode: null
        }
    })

    const [qualificationQuestionsContextData, setQualificationQuestionsContextData] = useState({
        validated: null,
        felonyConvicted: false,
        insuranceFraudConvicted: false,
        claimsCount: "None"
    })

    const [driversContextData, setDriversContextData] = useState({
        validated: false,
        drivers: [],
        availableDriverLocators : []
    })

    const [vehiclesContextData, setVehiclesContextData] = useState({
        validated: false,
        vehicles: [],
        availableVehicleLocators : []
    })

    const [coverageContextData, setCoverageContextData] = useState({
        validated: false,
        coverages: [
            {
                coverage:null,
                indeminityPerItem:null,
                indeminityInAggregate:null,
                deductable:null
            }
        ]
    })

    const [paymentContextData, setPaymentContextData] = useState({
        validated: false,
        paymentMethod: null,
        amount:0.00,
        bankName:null,
        chequeNumber:null,
        routingNumber:null,
        accountNumber:null,
        cardType:null,
        nameOnCard:null,
        cardNumber:null,
        secretCode:null,
    })


    function createCoverage(_coverage, _indeminityPerItem, _indeminityInAggregate, _deductable){
        return {
            coverage:_coverage,
            indeminityPerItem:_indeminityPerItem??null,
            indeminityInAggregate:_indeminityInAggregate??null,
            deductable:_deductable??null
        }
    }

    function createVehicle(_vehicleType, _vin, _make, _model, _year, _licenseNumber, _state, _cost, _locator){
        return {
            validated:false,
            vehicleType: _vehicleType??null,
            vin: _vin??null,
            make: _make??null,
            model: _model??null,
            year: _year??null,
            licenseNumber: _licenseNumber??null,
            state: _state??null,
            cost: _cost??null,
            locator: _locator??null
        }
    }

    function createDriver(_isPolicyHolder, _driverName, _dob, _gender, _licenseState, _licenseNumber, _designation, _validated, _driverLocator){
        return {
            validated:_validated??false,
            isPolicyHolder : _isPolicyHolder ?? false,
            name: _driverName ?? '',
            dob: _dob ?? null,
            gender: _gender ?? 'None',
            licenseState: _licenseState ?? 'None',
            licenseNumber: _licenseNumber ?? '',
            designation: _designation ?? 'None',
            locator:_driverLocator
        }
    }


    
    const value = {
        personalInfoContextData, setPersonalInfoContextData,
        residenceAddressContextData, setResidenceAddressContextData,
        communicationAddressContextData, setCommunicationAddressContextData,
        qualificationQuestionsContextData, setQualificationQuestionsContextData,
        driversContextData, setDriversContextData,
        vehiclesContextData, setVehiclesContextData,
        coverageContextData, setCoverageContextData,
        paymentContextData, setPaymentContextData,
        createCoverage, 
        createVehicle,
        createDriver,
        policyHolderLocator, setPolicyHolderLocator,
        policyLocator, setPolicyLocator,
        withdrawTransaction,setWithdrawTransaction
    }


    return (
        <FullQuoteContextObject.Provider value={value}>
            {props.children}
        </FullQuoteContextObject.Provider>
    )
}

export default FullQuoteContextProvider