import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      {/* <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen'> */}
      {/* Above line not working as expected */}
      <div className={`min-h-screen ${theme === 'dark' ? 'text-gray-200 bg-[rgb(16,23,42)]' : 'text-gray-700 bg-white'}`}>
        {children}
      </div>
    </div>
  );
}

// ThemeProvider.propTypes = {
//     children : PropTypes.node.isRequired,
// }

export default ThemeProvider;