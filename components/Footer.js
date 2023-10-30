import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <footer className="text-white py-8 w-full bg-primary">
    <div className="container flex w-[80%] mx-auto">
      <div className="min-w-[70%] max-w-[80%]  flex flex-col md:flex-row space-y-4 md:space-x-4">
        {/* Column 1 */}
        <div className="md:w-1/3">
          <h2 className="text-lg font-semibold">Column 1</h2>
          <ul className="list-none p-0">
            <li><a href="#">Link 4</a></li>
            <li><a href="#">Link 5</a></li>
            <li><a href="#">Link 6</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="md:w-1/3">
          <h2 className="text-lg font-semibold">Column 2</h2>
          <ul className="list-none p-0">
            <li><a href="#">Link 4</a></li>
            <li><a href="#">Link 5</a></li>
            <li><a href="#">Link 6</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="md:w-1/3">
          <h2 className="text-lg font-semibold">Column 3</h2>
          <ul className="list-none p-0">
            <li><a href="#">Link 4</a></li>
            <li><a href="#">Link 5</a></li>
            <li><a href="#">Link 6</a></li>
          </ul>
        </div>
      </div>
      {/* Company Mission */}
      <div className="container mt-4 text-center md:text-right">
        <p className="text-sm">
          Company Mission: Your mission statement here.
        </p>
      </div>
      </div>
      <hr className='w-[95%] mx-auto bg-white text-2xl m my-4'/>
      <p className='text-right mr-8'>Made with {/* <FontAwesomeIcon icon={['fas', 'heart']} /> */} by Akash Markile</p>
    </footer>
  );
};

export default Footer;
