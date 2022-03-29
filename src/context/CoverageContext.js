import { useState, createContext } from 'react'

export const FullQuoteCoverageObject = createContext("")

function FullQuoteCoverageProvider(props) {

    const [updateCoverage, setUpdateCoverage] = useState(false)
    const [coverageEditable, setCoverageEditable] = useState(false)
    const [coverageUpdatedCount, setCoverageUpdatedCount] = useState(0)

    const value = {
        coverageEditable, setCoverageEditable,
        coverageUpdatedCount, setCoverageUpdatedCount,
        updateCoverage, setUpdateCoverage
    }


    return (
        <FullQuoteCoverageObject.Provider value={value}>
            {props.children}
        </FullQuoteCoverageObject.Provider>
    )
}

export default FullQuoteCoverageProvider