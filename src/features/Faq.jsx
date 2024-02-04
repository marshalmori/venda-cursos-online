import { useState } from "react";
import Button from "../ui/Button";

const Faq = ({ linkToButton, textButton, textColorButton, bgColorButton }) => {
  const [answer, setAnswer] = useState([
    {
      question: "Como vou receber acesso ao curso?",
      content:
        "Após o pagamento, você receberá automaticamente em seu e-mail cadastrado os seus dados de acesso. Caso não encontre este e-mail, procure em sua caixa de spam e, ainda não encontrando, entre em contato com a equipe de suporte através do e-mail",
      open: false,
    },
    {
      question: "O valor pago é único ou mensal?",
      content: "Seu investimento é ÚNICO, este curso NÃO tem mensalidade.",
      open: false,
    },
    {
      question: "Quem ministra as aulas?",
      content:
        "O curso é ministrado por Priscilla Fidelis e mentores especialistas supervisionados pela equipe Priscilla Fidelis Academy.",
      open: false,
    },
    {
      question: "Quanto tempo tenho de acesso?",
      content:
        "Você terá 12 meses de acesso, podendo assistir quantas vezes quiser nesse período.",
      open: false,
    },
    {
      question: "Como funciona o suporte?",
      content:
        "O suporte é individual (vip) pelo WhatsApp exclusivo para alunos. São 3 meses de suporte a partir da data de compra.",
      open: false,
    },
    {
      question: "Como vou receber o certificado?",
      content:
        "Ao concluir 100% as aulas, após 7 dias da compra você poderá emitir seu certificado dentro da plataforma em PDF, baixar e imprimir.",
      open: false,
    },
  ]);

  const toggleContent = (index) => {
    setAnswer(
      answer.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <section className="py-12 bg-[#E3F3ED] sm:py-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="grid gap-4 mx-auto mt-8 md:mt-16">
          {answer.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                className="flex justify-between w-full px-4 py-5 sm:p-6 "
                onClick={() => toggleContent(index)}
              >
                <span className="flex text-lg font-semibold text-black">
                  {" "}
                  {item.question}
                </span>

                <svg
                  className={`w-6 h-6 text-gray-400 ${
                    item.open ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`${
                  item.open ? "block" : "hidden"
                } px-4 pb-5 sm:px-6 sm:pb-6`}
              >
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col mx-auto justify-center mt-9 space-x-2 items-center">
          <Button
            linkToButton={linkToButton}
            text={textButton}
            textColor={textColorButton}
            bgColor={bgColorButton}
          />

          {/* Price */}
          <div className="flex flex-col w-full md:w-96 mb-4 space-y-3 text-center border-2 p-4 rounded-lg border-green-400">
            <p className="uppercase font-semibold text-xl">Preço Promocional</p>
            <span className="flex mx-auto">
              De &emsp; <p className="line-through"> R$547,00</p>
            </span>
            <p className="text-3xl font-bold">Por R$147,00</p>
            <hr className="bg-green-400" />
            <div className="flex items-center mx-auto">
              <img src="images/cadeado.svg" alt="" className="w-12" />
              <p>Compra 100% segura</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
