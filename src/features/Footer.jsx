const Footer = () => {
  // <!-- Footer Section -->
  return (
    <footer className="bg-black">
      {/* <!-- Container --> */}
      <div className="container max-w-6xl py-10 mx-auto mb-12">
        {/* <!-- Footer Flex Container --> */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* <!-- Menu & Logo Container --> */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* <!-- Logo --> */}
            <div className="h-8">
              {/* <img src="images/logo.svg" alt="" className="w-44 md:ml-3" /> */}
            </div>
            {/* <!-- Menu Container --> */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* <!-- Item 1 --> */}
              <div className="h-10 group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* <!-- Item 2 --> */}
              <div className="h-10 group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* <!-- Item 3 --> */}
              <div className="h-10 group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* <!-- Item 4 --> */}
              <div className="h-10 group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* <!-- Item 5 --> */}
              <div className="h-10 group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>

          {/* <!-- Social & Copy Container --> */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* <!-- icons Container --> */}
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              {/* <!-- Icon 1 --> */}
              <div className="h-8 group">
                <a href="#">
                  <img src="images/icon-facebook.svg" alt="" className="h-6" />
                </a>
              </div>
              {/* <!-- Icon 2 --> */}
              <div className="h-8 group">
                <a href="#">
                  <img src="images/icon-twitter.svg" alt="" className="h-6" />
                </a>
              </div>
              {/* <!-- Icon 3 --> */}
              <div className="h-8 group">
                <a href="#">
                  <img src="images/icon-pinterest.svg" alt="" className="h-6" />
                </a>
              </div>
              {/* <!-- Icon 4 --> */}
              <div className="h-8 group">
                <a href="#">
                  <img src="images/icon-instagram.svg" alt="" className="h-6" />
                </a>
              </div>
            </div>

            {/* <!-- Copy --> */}
            <div className="font-bold">
              &copy;{new Date().getFullYear()} Marshal. Todos os direitos
              reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
