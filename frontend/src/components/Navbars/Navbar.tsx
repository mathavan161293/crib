import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
      <div className="container mx-auto w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        <Link
          className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
          to="/"
        >
          Crib Hound
        </Link>
        <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
          <h4 className="text-white">Hi Buddy,</h4>
        </ul>
      </div>
    </nav>
  );
}
