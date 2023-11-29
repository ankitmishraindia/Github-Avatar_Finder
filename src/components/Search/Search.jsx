
import useDebounce from '../../hook/useDebounce';
import './Search.css'
function Search({updateTerm}){
    const latestText=useDebounce(e=>updateTerm(e.target.value))
 
    return(
        <div className="search">
            <input 
            placeholder="Enter Avatar Name here..."
            type="text"
            onChange={latestText}
             />
        </div>
    )
}

export default Search;