const Search=({values,handleInputChange,reset, cities, setCities})=> {
    const handleSearch = () => {
        setCities(values.searchcities)
        reset()
    }
    return(
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="searchcities">cities</label>
            <input 
            className="form-control" 
            type="text" 
            name="searchcities" 
            id="searchcities"
            onChange={handleInputChange}
            value={values.searchcities}>
            </input>
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search