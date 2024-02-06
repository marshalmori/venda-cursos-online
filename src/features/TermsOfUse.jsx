import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <section>
      {/* <!-- Items Container --> */}
      <div className="flex flex-col mt-8 mb-24 space-y-10 text-xl md:mb-12 md:text-left pl-5 pr-5">
        {/* Título */}
        <div className="mx-auto">
          <h1 className="text-4xl font-bold mb-18">Termos de Uso</h1>
        </div>
        {/* <!-- Item 1 - Termos --> */}
        <div>
          <h2 className="text-2xl font-semibold">1 - Termos</h2>

          <p className="w-full text-gray-700">
            Ao acessar ao site{" "}
            <Link
              className="text-[#512D5D] font-bold"
              to="/depilacao-profissional"
            >
              Curso de Depilação
            </Link>
            , concorda em cumprir estes termos de serviço, todas as leis e
            regulamentos aplicáveis e concorda que é responsável pelo
            cumprimento de todas as leis locais aplicáveis. Se você não
            concordar com algum desses termos, está proibido de usar ou acessar
            este site. Os materiais contidos neste site são protegidos pelas
            leis de direitos autorais e marcas comerciais aplicáveis.
          </p>
        </div>

        {/* <!-- Item 2 - Uso de Licença --> */}
        <div>
          <h2 className="text-2xl font-semibold">2 - Uso de Licença</h2>
          <p className="w-full text-gray-700 mb-3">
            É concedida permissão para baixar temporariamente uma cópia dos
            materiais (informações ou software) no site Curso de Depilação ,
            apenas para visualização transitória pessoal e não comercial. Esta é
            a concessão de uma licença, não uma transferência de título e, sob
            esta licença, você não pode:
          </p>
          <ol className="w-full text-gray-700 list-decimal pl-8">
            <li>modificar ou copiar os materiais.</li>
            <li>
              usar os materiais para qualquer finalidade comercial ou para
              exibição pública (comercial ou não comercial);
            </li>
            <li>
              tentar descompilar ou fazer engenharia reversa de qualquer
              software contido no site Curso de Depilação;
            </li>
            <li>
              remover quaisquer direitos autorais ou outras notações de
              propriedade dos materiais; ou
            </li>
            <li>
              transferir os materiais para outra pessoa ou &#39;espelhar&#39; os
              materiais em qualquer outro servidor.
            </li>
          </ol>
          <p className="w-full mt-3 text-gray-700">
            Esta licença será automaticamente rescindida se você violar alguma
            dessas restrições e poderá ser rescindida por Curso de Depilação a
            qualquer momento. Ao encerrar a visualização desses materiais ou
            após o término desta licença, você deve apagar todos os materiais
            baixados em sua posse, seja em formato eletrónico ou impresso.
          </p>
        </div>

        {/* <!-- Item 3 - Isençao de responsabilidade --> */}
        <div>
          <h2 className="text-2xl font-semibold">
            3 - Isenção de responsabilidade
          </h2>

          <ol className="w-full text-gray-700 list-decimal pl-8">
            <li>
              Os materiais no site da Curso de Depilação são fornecidos
              &#39;como estão&#39;. Curso de Depilação não oferece garantias,
              expressas ou implícitas, e, por este meio, isenta e nega todas as
              outras garantias, incluindo, sem limitação, garantias implícitas
              ou condições de comercialização, adequação a um fim específico ou
              não violação de propriedade intelectual ou outra violação de
              direitos.
            </li>
            <li>
              Além disso, o Curso de Depilação não garante ou faz qualquer
              representação relativa à precisão, aos resultados prováveis ou à
              confiabilidade do uso dos materiais em seu site ou de outra forma
              relacionado a esses materiais ou em sites vinculados a este site.
            </li>
          </ol>
        </div>

        {/* <!-- Item 4 - Isençao de responsabilidade --> */}
        <div>
          <h2 className="text-2xl font-semibold">4 - Limitações</h2>
          <p className="w-full text-gray-700 mb-3">
            Em nenhum caso o Curso de Depilação ou seus fornecedores serão
            responsáveis por quaisquer danos (incluindo, sem limitação, danos
            por perda de dados ou lucro ou devido a interrupção dos negócios)
            decorrentes do uso ou da incapacidade de usar os materiais em Curso
            de Depilação, mesmo que Curso de Depilação ou um representante
            autorizado da Curso de Depilação tenha sido notificado oralmente ou
            por escrito da possibilidade de tais danos. Como algumas jurisdições
            não permitem limitações em garantias implícitas, ou limitações de
            responsabilidade por danos conseqüentes ou incidentais, essas
            limitações podem não se aplicar a você.
          </p>
        </div>

        {/* <!-- Item 5 - Isençao de responsabilidade --> */}
        <div>
          <h2 className="text-2xl font-semibold">5 - Precisão dos materiais</h2>
          <p className="w-full text-gray-700 mb-3">
            Em nenhum caso o Curso de Depilação ou seus fornecedores serão
            responsáveis por quaisquer danos (incluindo, sem limitação, danos
            por perda de dados ou lucro ou devido a interrupção dos negócios)
            decorrentes do uso ou da incapacidade de usar os materiais em Curso
            de Depilação, mesmo que Curso de Depilação ou um representante
            autorizado da Curso de Depilação tenha sido notificado oralmente ou
            por escrito da possibilidade de tais danos. Como algumas jurisdições
            não permitem limitações em garantias implícitas, ou limitações de
            responsabilidade por danos conseqüentes ou incidentais, essas
            limitações podem não se aplicar a você.
          </p>
        </div>

        {/* <!-- Item 6 - Links --> */}
        <div>
          <h2 className="text-2xl font-semibold">6 - Links</h2>
          <p className="w-full text-gray-700 mb-3">
            O Curso de Depilação não analisou todos os sites vinculados ao seu
            site e não é responsável pelo conteúdo de nenhum site vinculado. A
            inclusão de qualquer link não implica endosso por Curso de Depilação
            do site. O uso de qualquer site vinculado é por conta e risco do
            usuário.
          </p>
          {/* <!-- Item 6 - Links - Modificações --> */}
          <h3 className="text-xl font-semibold">Modificações</h3>
          <p className="w-full text-gray-700 mb-3">
            O Curso de Depilação pode revisar estes termos de serviço do site a
            qualquer momento, sem aviso prévio. Ao usar este site, você concorda
            em ficar vinculado à versão atual desses termos de serviço.
          </p>
          {/* <!-- Item 6 - Links - Lei aplicável --> */}
          <h3 className="text-xl font-semibold">Lei aplicável</h3>
          <p className="w-full text-gray-700 mb-3">
            Estes termos e condições são regidos e interpretados de acordo com
            as leis do Curso de Depilação e você se submete irrevogavelmente à
            jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </div>

        {/* Fim */}
      </div>
    </section>
  );
};

export default TermsOfUse;
