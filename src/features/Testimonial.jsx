const Testimonial = () => {
  return (
    <>
      {/* <!-- Testimonial section --> */}
      <section className="bg-gray-600 pt-12 pb-8">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-4xl font-bold text-center text-white md:text-4xl">
            O que nossos alunos estão falando do curso
          </h2>
          <p className="max-w-xs mx-auto text-lg text-center text-white md:max-w-md">
            Veja alguns depoimentos
            <strong className="uppercase"> inspiradores</strong> do curso de
            Depilação Profissional.
          </p>
        </div>
      </section>

      {/* <!-- Download Boxes --> */}
      <section className="bg-gray-600 pt-12 pb-12">
        {/* <!-- Boxes Container --> */}
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/* <!-- Box 1 --> */}
          <div className="w-full md:w-1/3 bg-gray-600 rounded-lg">
            <div className="flex flex-col w-full space-y-1 text-center rounded-lg shadow-lg">
              {/* <!-- Image --> */}
              <div className="flex mx-auto justify-center rounded">
                <img
                  src="images/testimonial_1.png"
                  alt=""
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* <!-- Box 2 --> */}
          <div className="w-full md:w-1/3 bg-gray-600 rounded-lg">
            <div className="flex flex-col w-full space-y-1 text-center rounded-lg shadow-lg">
              {/* <!-- Image --> */}
              <div className="flex mx-auto justify-center rounded">
                <img
                  src="images/testimonial_2.png"
                  alt=""
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* <!-- Box 3 --> */}
          <div className="w-full md:w-1/3 bg-gray-600 rounded-lg">
            <div className="flex flex-col w-full space-y-1 text-center rounded-lg shadow-lg">
              {/* <!-- Image --> */}
              <div className="flex mx-auto justify-center rounded">
                <img
                  src="images/testimonial_3.png"
                  alt=""
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Boxes Container --> */}
        <div className="relative flex flex-col py-12 items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/* <!-- Box 4 --> */}
          <div className="w-full md:w-1/3 bg-gray-600 rounded-lg">
            <div className="flex flex-col w-full space-y-1 text-center rounded-lg shadow-lg">
              {/* <!-- Image --> */}
              <div className="flex mx-auto justify-center rounded">
                <img
                  src="images/testimonial_4.png"
                  alt=""
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* <!-- Box 5 --> */}
          <div className="w-full md:w-1/3 bg-gray-600 rounded-lg">
            <div className="flex flex-col w-full space-y-1 text-center rounded-lg shadow-lg">
              {/* <!-- Image --> */}
              <div className="flex mx-auto justify-center rounded">
                <img
                  src="images/testimonial_5.png"
                  alt=""
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* <!-- Box 6 --> */}
          <div className="w-full md:w-1/3 bg-gray-600 rounded-lg">
            <div className="flex flex-col w-full space-y-1 text-center rounded-lg shadow-lg">
              {/* <!-- Image --> */}
              <div className="flex mx-auto justify-center rounded">
                <img
                  src="images/testimonial_6.png"
                  alt=""
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
