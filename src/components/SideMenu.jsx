import '../styles/SideMenu.css';

function SideMenu() {
    return (
      <div id="side-menu">
        <h1>Ghibligram</h1>
        <div className="menu-buttons">
            <button><span className="material-symbols-outlined">home</span> Home</button>
            <button><span className="material-symbols-outlined">search</span> Search</button>
            <button><span className="material-symbols-outlined">explore</span> Explore</button>
            <button><span className="material-symbols-outlined">chat_bubble</span> Messages</button>
            <button><span className="material-symbols-outlined">notifications</span> Notifications</button>
        </div>
      </div>
    )
}

export default SideMenu;