const LearningResources = () => {
  return (
    <div>
      {/* Stats Section */}
      <section id="stats" className="py-12 bg-white">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Recursos de Aprendizado
          </h2>
          <p className="max-w-xs mx-auto text-lg text-center text-gray-600 md:max-w-md">
            Além das vídeo aulas você terá também os recursos abaixo para{" "}
            <strong className="uppercase">acelerar</strong> e reforçar o{" "}
            <strong className="uppercase">aprendizado</strong> de forma{" "}
            <strong className="uppercase">eficiente</strong>.
          </p>
        </div>
      </section>

      {/* <!-- Feature Box Section --> */}
      <section id="features" className="pb-12 bg-white">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/* <!-- Horizontal Line --> */}
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-[#EBB8D7 md:block"></div>
          {/* <!-- Vertical Line --> */}
          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-[#EBB8D7] md:hidden"></div>

          {/* <!-- Box 1 --> */}
          <div className="relative flex flex-col p-6 space-y-6 bg-gray-100 rounded-lg md:w-1/3">
            {/* <!-- Image Positioning --> */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* <!-- Image Container For Background & Center --> */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-white border-2 border-[#512D5D]">
                {/* <img src="images/icon-brand-recognition.svg" alt="" /> */}
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 1024 1024"
                  fill="#512D5D"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M402.122 442.332l-80.49 278.489H289.44L208.95 442.332h38.636l56.34 210.882h3.22l56.34-210.882h38.636zM530.9 717.601h-37.023V442.332H530.9v275.269z m276.878-191.557c0 25.753-7.513 46.142-22.536 61.166-15.116 15.03-36.038 22.541-62.782 22.541h-46.684v107.85h-37.028V442.332h83.712c26.744 0 47.665 7.512 62.782 22.543 15.023 15.024 22.536 35.412 22.536 61.169z m-37.023 0c0-20.393-4.831-34.34-14.486-41.857-9.667-7.507-24.154-11.266-43.47-11.266h-37.024v106.245H712.8c19.315 0 33.8-3.76 43.469-11.273 9.655-7.513 14.486-21.46 14.486-41.85zM956.942 807.99c0 33.91-27.493 61.397-61.398 61.397H119.93c-33.913 0-61.402-27.486-61.402-61.397V216.01c0-33.91 27.489-61.397 61.402-61.397h775.614c33.905 0 61.398 27.486 61.398 61.397v591.98z m-49.234-466.293h-804.04V789.63c0 17.689 14.34 32.037 32.036 32.037h739.972c17.69 0 32.033-14.348 32.033-32.037V341.697h-0.001z m0-52.891v-51.367c0-17.69-14.343-32.03-32.033-32.03h-739.97c-17.697 0-32.036 14.34-32.036 32.03v51.367h804.039z m0 0"
                    fill="#512D5D"
                  />
                </svg>
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Suporte VIP
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Você terá um suporte VIP com a professora Priscilla Fidelis.
            </p>
          </div>

          {/* <!-- Box 2 --> */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-gray-100 rounded-lg md:mt-0 md:w-1/3">
            {/* <!-- Image Positioning --> */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* <!-- Image Container For Background & Center --> */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-white border-2 border-[#512D5D]">
                <svg
                  height="800px"
                  width="800px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  fill="#512D5D"
                >
                  <style type="text/css">fill:#512D5D;</style>
                  <g>
                    <path
                      className="st0"
                      d="M434.414,406.685c-12.05-18.045-30.352-28.017-47.552-34.507c-8.62-3.244-17.056-5.632-24.482-7.663
		c-7.413-2.018-13.864-3.72-18.197-5.356c-7.572-2.81-15.585-6.463-21.171-10.381c-2.79-1.952-4.94-3.957-6.186-5.659
		c-0.495-0.686-0.752-1.24-1.003-1.781h6.543l0.679,0.607c2.901,2.566,9.115,6.952,23.031,12.155
		c3.984,1.484,9.247,2.902,14.787,4.393c11.687,3.172,27.351,7.492,42.276,14.991c2.368-4.122,3.918-8.85,4.795-14.114
		c4.729-27.892-9.114-71.389-20.327-127.508c-6.074-30.596-11.41-64.971-12.492-102.591c0.132-5.131,0-10.269-0.27-15.4
		C371.132,53.768,336.48-5.056,243.215,0.346c-77.33,4.459-110.558,70.036-113.327,124.534l-0.469,0.27
		c-0.27,14.728-1.016,28.908-2.097,42.48c-1.55,19.252-3.648,37.416-6.074,54.438c-8.106,59.16-18.777,104.747-14.048,135.475
		c0.739,5.269,2.025,10.13,3.918,14.522c14.582-7.024,29.712-11.08,41.194-14.048c5.402-1.418,10.064-2.704,13.844-3.984
		c5.54-1.958,10.335-4.122,14.114-6.213c3.852-2.163,6.622-4.056,8.785-6.081l0.468-0.402h6.642c-0.263,0.541-0.6,1.122-1.114,1.807
		c-2.038,2.744-6.265,6.068-11.284,8.884c-5.006,2.849-10.764,5.31-15.802,7.091c-5.916,2.097-15.446,4.274-26.124,7.334
		c-16.047,4.643-35.008,11.331-50.448,24.561c-7.704,6.615-14.464,14.932-19.226,25.26c-4.762,10.316-7.492,22.583-7.486,36.934
		c0,3.331,0.145,6.78,0.442,10.341c0.224,2.494,1.174,4.525,2.289,6.2c2.123,3.113,4.94,5.434,8.468,7.815
		c6.18,4.089,14.74,8.079,25.702,12.011c32.805,11.7,87.124,22.41,154.423,22.424c54.682,0,100.836-7.097,133.78-16.014
		c16.482-4.472,29.64-9.365,39.15-14.246c4.761-2.466,8.614-4.894,11.667-7.558c1.53-1.346,2.869-2.757,3.997-4.432
		c1.114-1.675,2.065-3.706,2.282-6.2c0.296-3.561,0.442-6.997,0.442-10.315C447.347,434.109,442.434,418.689,434.414,406.685z
		 M181.139,250.02l-0.752-4.261l-4.063-1.445c-2.585-0.923-4.557-1.866-6.278-3.06c-2.54-1.794-4.841-4.241-7.532-9.253
		c-2.658-4.986-5.474-12.439-8.554-23.256c-1.352-4.722-1.834-8.395-1.834-11.126c0-1.642,0.172-2.922,0.416-3.944
		c3.885,2.612,8.204,4.241,13.006,4.551c23.638-81.044,148.58-57.406,145.203-87.798c16.884,40.522,13.507,71.724,36.334,86.109
		c2.269-2.711,4.36-5.586,6.365-8.554c0.936,0.172,2.104,0.494,3.014,1.102c0.851,0.547,1.543,1.18,2.183,2.342
		c0.62,1.174,1.227,3.02,1.234,6.186c0,2.73-0.482,6.404-1.834,11.139c-4.096,14.424-7.77,22.82-11.14,27.476
		c-1.688,2.354-3.232,3.819-4.947,5.026c-1.721,1.194-3.693,2.137-6.279,3.06l-4.062,1.445l-0.752,4.261
		c-4.755,26.619-18.474,41.596-28.604,52.881l-1.906,2.118v2.856c0,13.507,0,23.347,0,31.236c-0.014,4.405,1.57,8.389,3.792,11.707
		l-22.892,43.146l-27.918,41.881l-20.156-38.59l0.013-0.013l-0.969-1.82l-0.244-0.476l-23.77-44.808
		c1.998-3.166,3.436-6.872,3.436-11.027c0-7.888,0-17.728,0-31.236v-2.856l-1.906-2.118
		C199.613,291.616,185.895,276.638,181.139,250.02z M185.743,367.746c3.858-1.886,7.696-4.023,11.218-6.47
		c2.38-1.669,4.55-3.542,6.575-5.547l21.244,40.06l-49.992,45.666L185.743,367.746z M257.85,497.12
		c-0.62,0.007-1.22,0.027-1.846,0.027c-15.974,0-31.09-0.686-45.429-1.788v-7.855l-1.081-68.605l18.533-16.937l29.824,57.116V497.12
		z M302.666,487.504v7.809c-12.07,0.95-24.806,1.537-38.062,1.728V457.41l-7.696-14.741l27.331-40.997l19.489,18.724
		L302.666,487.504z M287.905,395.843l20.954-39.507c3.344,3.179,7.241,5.844,11.416,8.244c2.17,1.227,4.459,2.296,6.734,3.377
		l13.56,78.472L287.905,395.843z"
                    />
                    <path
                      className="st0"
                      d="M242.793,477.658c3.034,0,5.487-2.454,5.487-5.487s-2.453-5.487-5.487-5.487c-3.034,0-5.487,2.454-5.487,5.487
		S239.759,477.658,242.793,477.658z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Métodos Profissionais
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Terá acesso a métodos profissionais utilizados pelos melhores
              profissionais do país.
            </p>
          </div>

          {/* <!-- Box 3 --> */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-gray-100 rounded-lg md:mt-0 md:w-1/3">
            {/* <!-- Image Positioning --> */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* <!-- Image Container For Background & Center --> */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-white border-2 border-[#512D5D]">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 12.7215 17.8726 13.4133 17.6392 14.054C17.5551 14.285 17.4075 14.4861 17.2268 14.6527L17.1463 14.727C16.591 15.2392 15.7573 15.3049 15.1288 14.8858C14.6735 14.5823 14.4 14.0713 14.4 13.5241V12M14.4 12C14.4 13.3255 13.3255 14.4 12 14.4C10.6745 14.4 9.6 13.3255 9.6 12C9.6 10.6745 10.6745 9.6 12 9.6C13.3255 9.6 14.4 10.6745 14.4 12Z"
                    stroke="#512D5D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                    stroke="#512D5D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Comunidades
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Terá a sua disposição de forma exclusiva acesso as comunidades do
              Facebook e Telegram.
            </p>
          </div>

          {/* <!-- Box 4 --> */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-gray-100 rounded-lg md:mt-0 md:w-1/3">
            {/* <!-- Image Positioning --> */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* <!-- Image Container For Background & Center --> */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-white border-2 border-[#512D5D]">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.00003 21V18.5C4.00003 15.4624 6.46246 13 9.50003 13H14.5C17.5376 13 20 15.4624 20 18.5V21M8.00003 21V18M16 21V18M4.37966 7L6.37966 9M4.37966 7L2.12042 9M4.37966 7V11.5M16 6.5C16 8.70914 14.2092 10.5 12 10.5C9.79089 10.5 8.00003 8.70914 8.00003 6.5C8.00003 4.29086 9.79089 2.5 12 2.5C14.2092 2.5 16 4.29086 16 6.5Z"
                    stroke="#512D5D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Zero ao Profissional
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Os conteúdos serão apresentados de forma simples para que você
              consiga sair do zero e chegar ao profissional mesmo sem
              experiência prévia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningResources;
