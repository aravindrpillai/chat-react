import { useState, createContext } from 'react'

export const HomeScreenContextObject = createContext("")

function HomeScreenContextProvider(props) {
    const [searchStatusFilter, setSearchStatusFilter] = useState("all")
    const [pageError, setPageError] = useState(null)
    const [data, setData] = useState([])
    const [masterData, setMasterData] = useState([])
    const [searchKeyword, setSearchKeyword] = useState(null)
    const [page, setPage] = useState(0);

    const value = {
        pageError, setPageError,
        data, setData,
        masterData, setMasterData,
        searchKeyword, setSearchKeyword,
        searchStatusFilter, setSearchStatusFilter,
        page, setPage
    }


    return (
        <HomeScreenContextObject.Provider value={value}>
            {props.children}
        </HomeScreenContextObject.Provider>
    )
}

export default HomeScreenContextProvider