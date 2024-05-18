
const SearchBar = (props) => {

 const handleSearch = (event)=>{
  props.filterProducts(event.target.value)
 }

/*  const handleCheckBox = (event) =>{
  props.checkBox(event.target.onChange)
 }
   */
  return (
    <div>
      <form>
        <label>Search</label>
        <input type="text" name="searchValue" value={props.searchValue} onChange={handleSearch}/>
        <input type="checkbox" checked={props.checkStock} onChange={props.boxFilter} />
      
      </form>
      
    </div>
  )
}

export default SearchBar

