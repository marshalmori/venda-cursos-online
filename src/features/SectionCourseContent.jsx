import { useState } from "react";
import Button from "../ui/Button";

const SectionCourseContent = ({
  linkToButton,
  textButton,
  textColorButton,
  bgColorButton,
}) => {
  const [courseContent, setCourseContent] = useState([
    {
      number: "Módulo 0",
      module: "Módulo de Apoio",
      content: [
        "- Aprenda a usar a plataforma",
        "- Normas da ANVISA",
        "- Higiene",
        "- Biossegurança",
        "- Cabine de depilação e contraindicações",
        "- Comunidade exclusiva de alunas no Facebook",
        "- Grupo exclusivo no Telegram",
        "- Mentoria com a professora",
      ],
      open: false,
    },
    {
      number: "Módulo 1",
      module: "Arquivos em PDF",
      content: [
        "- Apostila completa de depilação",
        "- Ficha pronta de anamnese depilação",
        "- Ficha pronta de Anamnese argiloterapia",
        "- O Guia prático da intercorrência",
      ],
      open: false,
    },
    {
      number: "Módulo 2",
      module: "Produtos / Materiais",
      content: [
        "- Tipos de ceras e métodos",
        "- Como aquecer a cera - método Espanhol",
        "- Como aquecer a cera - método Rool-on",
        "- Produtos de pré e pós-depilação",
        "- EPI's – Equipamentos de proteção individual",
      ],
      open: false,
    },
    {
      number: "Módulo 3",
      module: "Depilação facial",
      content: [
        "- Depilação facial completa",
        "- Depilação facial/costeleta",
        "- Depilação buço",
        "- Depilação orelhas",
        "- Depilação nariz/narina",
      ],
      open: false,
    },
    {
      number: "Módulo 4",
      module: "Depilação íntima / virilha",
      content: [
        "- Depilação virilha simples",
        "- Depilação virilha cavada",
        "- Depilação virilha completa ",
        "- Depilação virilha + ânus",
        "- Depilação glúteo/nádegas",
        "- Depilação virilha + ajuda do cliente",
        "- Depilação virilha com a cera verde",
        "- Aprenda usar a linha para fazer o mapeamento da virilha",
      ],
      open: false,
    },
    {
      number: "Módulo 5",
      module: "Depilação pernas e interno de coxa",
      content: [
        "- Depilação meia perna",
        "- Depilação perna completa",
        "- Depilação método Roll-on",
        "- Depilação pernas método espanhol",
        "- Depilação nos joelhos",
        "- Depilação pés e dedos",
        "- Depilação coxa + interno de coxa (método exclusivo)",
      ],
      open: false,
    },
    {
      number: "Módulo 6",
      module: "Depilação axilas e braços",
      content: [
        "- Depilação axilas em 12 minutos",
        "- Depilação nos braços",
        "- Depilação axilas com a técnica do copo de isopor",
        "- Depilação axilas com a técnica da escovinha (Novidade)",
        "- Ordem certa de produtos para epilação das axilas",
        "- Axilas pele sensível – Reativa",
        "- Depilação do braço com o método Rool-on",
      ],
      open: false,
    },
    {
      number: "Módulo 7",
      module: "Especial hidrossolúvel",
      content: [
        "- Aprenda preparar a cera para aplicação",
        "- Hidrossolúvel em axilas",
        "- Depilação íntima hidrossolúvel",
        "- Pós-depilação com máscara de porcelana",
      ],
      open: false,
    },
    {
      number: "Módulo 8",
      module: "Depilação masculina",
      content: [
        "- Depilação axilas 1",
        "- Depilação axilas 2",
        "- Depilação axilas 3",
        "- Depilação costas",
        "- Depilação pescoço",
        "- Depilação peitoral e abdômen",
        "- Depilação pernas completa",
        "- Depilação virilha completa",
      ],
      open: false,
    },
    {
      number: "Módulo 9",
      module: "Eletroterapia avançada",
      content: [
        "- O que é alta frequência (eletroterapia)",
        "- Aprenda como aplicar na pele de forma segura e eficiente",
        "- Aplicação em virilhas",
        "- Aplicação em axilas",
        "- Tratamento capilar com alta frequência",
      ],
      open: false,
    },
    {
      number: "Módulo 10",
      module: "Biossegurança",
      content: [
        "- Tipos de riscos e prevenções",
        "- Microbiologia",
        "- Métodos de controle",
        "- Materiais para esterilização",
        "- Limpeza e desinfecção ambiente",
        "- Higiene das mãos",
        "- Uso de EPI's",
      ],
      open: false,
    },
    {
      number: "Módulo 11",
      module: "Biossegurança",
      content: [
        "- O Guia Prático da intercorrência",
        "- Produtos home care",
        "- Máscara de porcelana (SPA da Epilação)",
        "- Entrando em ação na intercorrência interno de coxa",
      ],
      open: false,
    },
    {
      number: "Módulo 12",
      module: "Máscaras hidroplástica e gelatinosas",
      content: [
        "- Passo a passo de aplicação",
        "- Todas as informações sobre a técnica",
      ],
      open: false,
    },
    {
      number: "Módulo 13",
      module: "Especial caixinha de dúvidas",
      content: [
        "- Coringas no home care",
        "- Técnica da escovinha",
        "- Qual melhor método para gestantes",
        "- Apresento minha maca de depilação",
        "- Qual posicionamento ter se a cliente relatar alergia",
        "- Lapidando o interno de coxa",
        "- Porque devemos fazer avaliação no cliente",
      ],
      open: false,
    },
    {
      number: "Módulo 14",
      module: "Diário de dúvidas frequentes",
      content: [
        "- Foliculite",
        "- Pseudofoliculite (pelo encravado)",
        "- Tudo sobre pré e pós depilação",
        "- Clareamento associado ao alta frequência",
        "- Acne + argila verde",
        "- Método Rool-on",
        "- O ponto da cera",
        "- A melhor idade para receber a primeira depilação",
      ],
      open: false,
    },
    {
      number: "Módulo Extra",
      module: "Depilação em gestante",
      content: [
        "- Conhecendo sua mentora de gestantes",
        "- Material de apoio",
        "- Proibidos e permitidos",
        "- Depilação íntima",
        "- Depilação perna + interno de coxa",
      ],
      open: false,
    },
    {
      number: "Módulo Extra",
      module: "Módulo extra 2.0",
      content: [
        "- A troca do talco por argila (intenda sobre essa evolução)",
        "- Tudo sobre os produtos de pré e pós-depilação",
        "- Aprenda como encontrar o ponto ideal da cera (os segredos do sucesso estão aqui)",
        "- Depilação método Hidrossolúvel",
        "- Depilação método Express",
        "- Depilação barriga e umbigo",
        "- Esfoliação corporal",
        "- Massagem pós-depilação",
        "- Foliculite prevenção - como tratar",
        "- Aprenda a individualizar a cera com o copo de isopor",
        "- Tatuagem temporária",
      ],
      open: false,
    },
    {
      number: "Módulo Extra",
      module: "Módulo extra 2.1",
      content: [
        "- Como se posicionar nas redes sociais usando as ferramentas das redes sociais",
        "- Depilação virilha cavada",
        "- Depilação coxa (Método Espanhol)",
        "- Depilação método Hidrossolúvel",
        "- Como Iniciar? Quais produtos e estrutura precisa ter?",
        "- Dicas para a cera não grudar no método Roll-on",
        "- LIVE (Como superar as dificuldades na estética)",
        "- Quando adquirir conhecimentos?",
        "- Aprenda a limpar a sua termocera",
        "- Conheça o plástico protetor para termocera",
      ],
      open: false,
    },
  ]);

  const toggleContent = (index) => {
    setCourseContent(
      courseContent.map((item, i) => {
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
    <section className="py-10 bg-[#B8E0D2] sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            O que você vai aprender
          </h2>
          <p className="leading-normal text-xl mb-8 text-gray-600">
            São <strong>140</strong> aulas dividas em <strong>30</strong>{" "}
            módulos
          </p>
        </div>

        <div className="grid gap-4 mx-auto mt-8 md:mt-16">
          {courseContent.map((item, index) => (
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
                  {item.number} - {item.module}{" "}
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
                {item.content.map((content, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></p>
                ))}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCourseContent;

/*


import React, { useState } from 'react';

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: 'How to create an account?',
            answer: 'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
            open: false
        },
        {
            question: 'How can I make payment using Paypal?',
            answer: 'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
            open: false
        },
        {
            question: 'Can I cancel my plan?',
            answer: 'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
            open: false
        },
        {
            question: 'How can I reach to support?',
            answer: 'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
            open: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }

            return item;
        }));
    }

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-black"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
            </div>
        </section>
    );
}

export default Faq;

*/
