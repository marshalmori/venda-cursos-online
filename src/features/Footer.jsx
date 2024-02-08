import { Link } from "react-router-dom";

const Footer = () => {
  // <!-- Footer Section -->
  return (
    <footer className="bg-[#512D5D] py-4 pb-24 md:pb-8">
      {/* <!-- Container --> */}
      <div className="container max-w-6xl mx-auto">
        {/* <!-- Footer Flex Container --> */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between ">
          {/* <!-- Menu & Logo Container --> */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* <!-- Menu Container --> */}
            <div className="flex flex-col items-center space-y-4 mt-12 font-bold text-gray-400 md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* <!-- Item 3 --> */}
              <div className="h-10 group">
                <Link to="/termos-de-uso">Termos de uso</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-gray-400"></div>
              </div>

              {/* <!-- Item 5 --> */}
              <div className="h-10 group">
                <Link to="/politica-de-privacidade">
                  Política de privacidade
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-gray-400"></div>
              </div>
            </div>
          </div>

          {/* <!-- Social & Copy Container --> */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-400">
            {/* <!-- icons Container --> */}
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              {/* <!-- Icon 1 --> */}
              <div className="h-8 group">
                <a href="#">
                  <img src="images/icon-facebook.svg" alt="" className="h-6 " />
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
