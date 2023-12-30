const Search = () =>
{
    return(
        <>
            <form className="search">
                <div>
                    <input type='text' placeholder="Enter Keyword.."/>
                </div>
                <div className="radio">
                    <button type="submit">Search</button>
                </div>
            </form>
        </>
    )

}

export default Search