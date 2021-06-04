import "./SearchEngine.css";

export default function SearchEngine() {
    return (
        <div className="SearchEngine">
            <form className="search-input">
                <input type="search" placeholder="Enter a city..." size="48" />
                <input type="submit" value="Search" />
            </form>
            <button type="button" className="btn btn-secondary btn-sm">
            Current location
            </button>
        </div>
      );
}