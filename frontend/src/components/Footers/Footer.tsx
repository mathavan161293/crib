import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] py-4">
      <hr className="mb-4 border-b-1 border-slate-200" />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4">
            <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
              Copyright © {new Date().getFullYear()}{" "}
              <Link
                to=""
                className="text-slate-500 hover:text-slate-700 text-sm font-semibold py-1"
              >
                Crib Hound
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
