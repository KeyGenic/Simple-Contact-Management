import React from 'react'
import './search-form.styles.scss'

function SearchForm () {
    return(
        <div className = 'search-form'>
            <input
            type = "search"
            className = "search"
            placeholder ="search"
            />
        </div>
    )
}

export default SearchForm