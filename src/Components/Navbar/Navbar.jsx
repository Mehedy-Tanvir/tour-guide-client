import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#FA7436] normal-case font-poppins font-normal text-[16px]"
              : "text-[#222] normal-case font-normal text-[16px]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#FA7436] normal-case font-poppins font-normal text-[16px]"
              : "text-[#222] normal-case font-normal text-[16px]"
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " lg:bg-[#FA7436] hover:bg-opacity-80 lg:text-white lg:py-1 lg:px-4 rounded-md  normal-case font-normal text-[16px]"
              : " lg:bg-[#FA7436] hover:bg-opacity-80 lg:text-white lg:py-1 lg:px-4 rounded-md  normal-case font-normal text-[16px]"
          }
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-[1400px] flex items-center justify-between px-2 py-4 mx-auto">
      <div className="flex items-center justify-center">
        <img className="h-[24px]" src="/logo.svg" alt="logo" />
        <p className="text-[24px] text-[#222] font-bold">Travello</p>
      </div>
      <ul className="lg:flex hidden items-center uppercase justify-between gap-[60px]">
        {links}
      </ul>
      <div className="dropdown dropdown-left lg:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <AiOutlineMenu className="text-[36px] text-[var(--body_color)]" />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
