// Modun quản header

function Header() {
    return (
        <nav>
            <ul className="flex items-center my-2 font-bold justify-around">
                <li>
                    <a href="/">🏠 Home</a>
                </li>
                <li>
                    <a href="About">📋 Tours</a>
                </li>
                <li>
                    <a href="/">🗺️ Destinations</a>
                </li>
                <li>
                    <a href="/">🎫 Bookings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header;