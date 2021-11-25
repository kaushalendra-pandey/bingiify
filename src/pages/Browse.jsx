import React from 'react'
import { useContent } from '../utils/hooks/hooks'
import selectionFilter from "../utils/selectionMap"
import BrowseContainer from "../components/Browse/BrowseContainer"

const Browse = () => {
    const {series} = useContent("series")
    const {films} = useContent("films")
    const slides = selectionFilter({series,films})
    // console.log(films)
    console.log(slides)
    return (
       
       <BrowseContainer slides={slides}/>
    )
}

export default Browse
