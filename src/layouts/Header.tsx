import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hook';

const Header = () => {
	const { accessToken, isLoggedIn } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	const naviaget = useNavigate();
	const handelLogout = () => {
		dispatch(logout());
		naviaget('/login');
	};
	return (
		<header className="text-gray-100 bg-indigo-500 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
					<h2 className="text-xl font-bold">Book Catalog</h2>
				</Link>
				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					<Link to="#" className="mr-5 font-semibold cursor-pointer hover:text-indigo-200">
						All Books
					</Link>
					{!accessToken && !isLoggedIn ? (
						<>
							<Link to="/login" className="mr-5 font-semibold cursor-pointer hover:text-indigo-200">
								Sign In
							</Link>
							<Link
								to="/register"
								className="mr-5 font-semibold cursor-pointer hover:text-indigo-200"
							>
								Sign Up
							</Link>
						</>
					) : (
						<button
							onClick={handelLogout}
							type="button"
							className="mr-5 font-semibold cursor-pointer hover:text-indigo-200"
						>
							Sign Out
						</button>
					)}
				</nav>
				{/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button> */}
			</div>
		</header>
	);
};

export default Header;
