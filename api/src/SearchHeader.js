

function SearchHeader({search}){
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        search("sefa")

    }
    return(
<div className="searchDiv">
    <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsun</label>
        <input type="search"/>
    </form>
</div>
    )
}
export default SearchHeader