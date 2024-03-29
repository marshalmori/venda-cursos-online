const Bonus = () => {
  return (
    <>
      {/* <!-- Download Heading --> */}
      <section id="download" className="bg-[#E3F3ED] py-12">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-4xl font-bold text-center md:text-4xl">
            Muitos BÔNUS
          </h2>
          <p className="max-w-xs mx-auto text-lg text-center text-gray-600 md:max-w-md">
            Adiquirindo o curso de{" "}
            <strong className="uppercase">Depilação profissional</strong> ainda
            hoje, você ganhará <strong className="uppercase">6 bônus</strong>{" "}
            exclusivos!
          </p>
        </div>
      </section>

      {/* <!-- Download Boxes --> */}
      <section id="download-boxes" className="bg-[#E3F3ED] pb-12">
        {/* <!-- Boxes Container --> */}
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/* <!-- Box 1 --> */}
          <div className="w-full md:w-1/3 bg-[#512D5D] rounded-lg">
            <div className="flex flex-col w-full mt-5 space-y-1 text-center rounded-lg shadow-lg">
              {/* <!-- Image --> */}
              <div className="flex w-20 h-20 mx-auto justify-center">
                <img src="images/teacher.svg" alt="" />
              </div>
              {/* <!-- Text --> */}
              <h5 className="pt-6 text-xl font-bold text-gray-300">Bônus 1</h5>
              <p className="text-white text-2xl font-bold uppercase">
                Mentoria Online
              </p>

              <div className="bg-dots bg-repeat-x px-6 pt-6 pb-6 ">
                <p className="max-w-xs mx-auto text-lg text-center text-gray-300 md:max-w-md">
                  Suporte com a professora para tirar dúvidas.
                </p>
              </div>
              <hr className="mx-6" />
              {/* <!-- Texto Explicativo --> */}
              <div className="bg-dots bg-repeat-x px-4 pt-6 pb-6">
                <p className="max-w-xs mx-auto text-lg text-center text-gray-300 md:max-w-md">
                  Se você fosse comprar separado o curso deste BÔNUS custaria
                  <span className="font-bold"> R$997</span>, mas você leva
                  <span className="font-bold uppercase"> grátis</span> comprando
                  o curso de Depilação Profissional.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Box 2 --> */}
          <div className="w-full md:w-1/3 bg-white rounded-lg">
            <div className="flex flex-col w-full mt-5 space-y-1 text-center rounded-lg shadow-lg">
              {/* <!-- Image --> */}
              <div className="flex w-20 h-20 mx-auto justify-center">
                <img src="images/protocol.svg" alt="" />
              </div>
              {/* <!-- Text --> */}
              <h5 className="pt-6 text-xl font-bold text-gray-600">Bônus 2</h5>
              <p className="text-2xl font-bold uppercase">
                Protocolo de clareamento facial e corporal
              </p>

              <div className="bg-dots bg-repeat-x px-6 pt-6 pb-6 ">
                {/* <p className="max-w-xs mx-auto text-lg text-center text-gray-600 md:max-w-md">
                  Suporte com a professora para tirar dúvidas.
                </p> */}
              </div>
              <hr className="mx-6 bg-gray-600" />
              {/* <!-- Texto Explicativo --> */}
              <div className="bg-dots bg-repeat-x px-4 pt-6 pb-6">
                <p className="max-w-xs mx-auto text-lg text-center text-gray-600 md:max-w-md">
                  Se você fosse comprar separado o curso deste BÔNUS custaria
                  <span className="font-bold"> R$197</span>, mas você leva
                  <span className="font-bold uppercase"> grátis</span> comprando
                  o curso de Depilação Profissional.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Box 3 --> */}
          <div className="w-full md:w-1/3 bg-[#512D5D] rounded-lg">
            <div className="flex flex-col w-full mt-5 space-y-1 text-center rounded-lg shadow-lg">
              {/* <!-- Image --> */}
              <div className="flex w-20 h-20 mx-auto justify-center">
                <img src="images/egito.svg" alt="" />
              </div>
              {/* <!-- Text --> */}
              <h5 className="pt-6 text-xl font-bold text-gray-300">Bônus 3</h5>
              <p className="text-white text-2xl font-bold uppercase">
                Depilação egípcia
              </p>

              <div className="bg-dots bg-repeat-x px-6 pt-6 pb-6 ">
                <p className="max-w-xs mx-auto text-lg text-center text-gray-300 md:max-w-md">
                  Aprenda a usar a linha de forma profissional
                </p>
              </div>
              <hr className="mx-6" />
              {/* <!-- Texto Explicativo --> */}
              <div className="bg-dots bg-repeat-x px-4 pt-6 pb-6">
                <p className="max-w-xs mx-auto text-lg text-center text-gray-300 md:max-w-md">
                  Se você fosse comprar separado o curso deste BÔNUS custaria
                  <span className="font-bold"> R$997</span>, mas você leva
                  <span className="font-bold uppercase"> grátis</span> comprando
                  o curso de Depilação Profissional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Boxes Container --> */}
        <div className="relative flex flex-col py-12 items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/* <!-- Box 4 --> */}
          <div className="w-full md:w-1/3 bg-white  rounded-lg">
            <div className="flex flex-col w-full mt-5 space-y-1 text-center rounded-lg shadow-lg">
              {/* <!-- Image --> */}
              <div className="flex w-20 h-20 mx-auto justify-center">
                <img src="images/tabela.svg" alt="" />
              </div>
              {/* <!-- Text --> */}
              <h5 className="pt-6 text-xl font-bold text-gray-600">Bônus 4</h5>
              <p className="text-2xl font-bold uppercase">Tabela</p>

              <div className="bg-dots bg-repeat-x px-6 pt-6 pb-6 ">
                <p className="max-w-xs mx-auto text-lg text-center text-gray-600 md:max-w-md">
                  Tabela com sugestão dos preços que pode aplicar
                </p>
                <br />
              </div>
              <hr className="mx-6 bg-gray-600" />
              {/* <!-- Texto Explicativo --> */}
              <div className="bg-dots bg-repeat-x px-4 pt-6 pb-6">
                <p className="max-w-xs mx-auto text-lg text-center text-gray-600 md:max-w-md">
                  Se você fosse comprar separado a tabela deste BÔNUS custaria
                  <span className="font-bold"> R$59</span>, mas você leva
                  <span className="font-bold uppercase"> grátis</span> comprando
                  o curso de Depilação Profissional.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Box 5 --> */}
          <div className="w-full md:w-1/3 bg-[#512D5D] rounded-lg">
            <div className="flex flex-col w-full mt-5 space-y-1 text-center rounded-lg shadow-lg">
              {/* <!-- Image --> */}
              <div className="flex w-20 h-20 mx-auto justify-center">
                <img src="images/ebook.svg" alt="" />
              </div>
              {/* <!-- Text --> */}
              <h5 className="pt-6 text-xl font-bold text-gray-300">Bônus 5</h5>
              <p className="text-white text-2xl font-bold uppercase">Ebook</p>

              <div className="bg-dots bg-repeat-x px-6 pt-6 pb-6 ">
                <p className="max-w-xs mx-auto text-lg text-center text-gray-300 md:max-w-md">
                  Ebook de argiloterapia
                </p>
                <br />
                <br />
              </div>
              <hr className="mx-6" />
              {/* <!-- Texto Explicativo --> */}
              <div className="bg-dots bg-repeat-x px-4 pt-6 pb-6">
                <p className="max-w-xs mx-auto text-lg text-center text-gray-300 md:max-w-md">
                  Se você fosse comprar separado o ebook deste BÔNUS custaria
                  <span className="font-bold"> R$59</span>, mas você leva
                  <span className="font-bold uppercase"> grátis</span> comprando
                  o curso de Depilação Profissional.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Box 6 --> */}
          <div className="w-full md:w-1/3 bg-white rounded-lg">
            <div className="flex flex-col w-full mt-5 space-y-1 text-center rounded-lg shadow-lg">
              {/* <!-- Image --> */}
              <div className="flex w-20 h-20 mx-auto justify-center">
                <img src="images/fornecedores.svg" alt="" />
              </div>
              {/* <!-- Text --> */}
              <h5 className="pt-6 text-xl font-bold text-gray-600">Bônus 6</h5>
              <p className="text-2xl font-bold uppercase">Fornecedores</p>

              <div className="bg-dots bg-repeat-x px-6 pt-6 pb-6 ">
                <p className="max-w-xs mx-auto text-lg text-center text-gray-600 md:max-w-md">
                  Contato para compra de produtos em lojas parceiras com cupom
                  de desconto
                </p>
              </div>
              <hr className="mx-6 bg-gray-600" />
              {/* <!-- Texto Explicativo --> */}
              <div className="bg-dots bg-repeat-x px-4 pt-6 pb-6">
                <p className="max-w-xs mx-auto text-lg text-center text-gray-600 md:max-w-md">
                  Se você fosse comprar separado a lista de contatos deste BÔNUS
                  custaria
                  <span className="font-bold"> R$59</span>, mas você leva
                  <span className="font-bold uppercase"> grátis</span> comprando
                  o curso de Depilação Profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bonus;
