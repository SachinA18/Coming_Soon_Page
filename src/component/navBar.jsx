import { Menubar } from 'primereact/menubar';

const NavBar = () => {
    const items = [
        { label: 'Home', icon: 'pi pi-home', url: '/home' },
        { label: 'Dashboard', icon: 'pi pi-chart-bar', url: '/dashboard' },
        { label: 'About', icon: 'pi pi-user', url: '/about' },
    ];

    return (
        <div className="card">
            <Menubar model={items} className="surface-0 shadow-2 border-round p-2" />
        </div>
    );
};

export default NavBar;