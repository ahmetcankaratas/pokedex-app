import { useApp } from "../states/AppState";

const Header: React.FC = () => {
    const { searchQuery, setSearchQuery } = useApp();

    return (
        <header className="w-full py-4 shadow">
            <div className="container mx-auto flex items-center space-x-4">
                <div className="font-medium">Pokemon App</div>
                <div>
                    <input type="text" className="border-2 border-gray-200 rounded p-2" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                </div>

            </div>
        </header>
    )
};

export default Header;