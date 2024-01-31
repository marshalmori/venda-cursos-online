import Button from "../ui/Button";

const SuccessStories = ({
  linkToButton,
  textButton,
  textColorButton,
  bgColorButton,
}) => {
  return (
    <>
      {/* <!-- Testimonial section --> */}
      <section id="download" className=" pt-12">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-4xl font-bold text-center  md:text-4xl">
            Conheça alguns relatos
          </h2>
          <p className="max-w-xs mx-auto text-lg text-center text-gray-600 md:max-w-md">
            Assista o nossas alunas falam sobre o cursode Depilação
            Profissional.
          </p>
        </div>
      </section>

      {/* <!-- Creations Section --> */}
      <section id="creations">
        {/* <!-- Creations Container --> */}
        <div className="container max-w-6xl mx-auto my-8 px-6 text-gray-600 md:px-0">
          {/* <!-- Items Container --> */}
          <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
            {/* <!-- Item 1 --> */}
            <div className="group relative overflow-hidden mx-4 md:w-1/4">
              <iframe
                className="w-full h-96"
                src="https://player.vimeo.com/video/907556640"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* <!-- Item 2 --> */}
            <div className="group relative overflow-hidden mx-4 md:w-1/4">
              <iframe
                className="w-full h-96"
                src="https://player.vimeo.com/video/907556690"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* <!-- Item 3 --> */}
            <div className="group relative overflow-hidden mx-4 md:w-1/4">
              <iframe
                className="w-full h-96"
                src="https://player.vimeo.com/video/907556727"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* <!-- Item 4 --> */}
            <div className="group relative overflow-hidden mx-4 md:w-1/4">
              <iframe
                className="w-full h-96"
                src="https://player.vimeo.com/video/907549663"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="mx-auto md:mx-0">
            {/* Box botão e preço parcelado */}
            <div className="flex flex-col pt-10 mx-auto justify-center space-x-2 items-center">
              <Button
                linkToButton={linkToButton}
                text={textButton}
                textColor={textColorButton}
                bgColor={bgColorButton}
              />

              {/* Price */}
              <div className="flex flex-col w-full md:w-auto mb-4 space-y-3 text-center border-2 p-3 md:p-4 rounded-lg border-green-400">
                <p className="uppercase text-2xl text-gray-600">
                  12x de <span className="font-bold">R$14,67</span> ou à vista
                  por <span className="font-bold">R$147,00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
