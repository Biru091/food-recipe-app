
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (query.trim()) {
            navigate(`/results?search=${query}`);
        }
    };

    return (
        <nav>
            <div className="navtexts">
                <h2>Food Recipe</h2>
                <p>Get your taste</p>

            </div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search food..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button>Search</button>
            </form>
        </nav>
    );
};

export default Navbar;