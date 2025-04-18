import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  const list = [
    { to: '/item-library', name: "Item library" },
    { to: '/image-library', name: "Image library" },
    { to: '/category-library', name: "Categories" },
    { to: '/option-library', name: "Options" }
];

  return (
    <section className="h-screen w-screen flex flex-col">
      <nav className="w-screen h-fit p-5 border-b border-white/35">
        <div id="menu">NAV</div>
      </nav>

      <div id="page" className="flex-1 flex">
        <nav id="side-nav" className="h-full">
          <ul className="h-full w-fit pt-5 ">
            {list.map((obj) => (
              <li className="h-fit w-fit">
                <NavLink to={obj.to} className={({ isActive }) =>`${isActive ? 'bg-[#4B4B4B]' : ''} block w-52 py-3 px-5 hover:text-blue-500/90`}>
                  {obj.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav> 

        <div id="container" className="flex-1">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
