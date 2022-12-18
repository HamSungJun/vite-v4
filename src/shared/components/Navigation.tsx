import { Link } from "react-router-dom";
import { ROUTE_MAP } from "@app/shared/constants";

export default function Navigation() {
  return (
    <nav className="w-[250px] flex-shrink-0 border-r border-r-[#ccc] py-[20px]">
      <ul>
        {Object.entries(ROUTE_MAP).map(([name, path]) => (
          <li key={name} className="text-center h-[40px] hover:bg-slate-300">
            <Link to={path} className="flex items-center justify-center h-full">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
