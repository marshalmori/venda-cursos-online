const CustomerSatisfaction = () => {
  return (
    <>
      {/* <!-- Testimonial section --> */}
      <section id="download" className="bg-[#512D5D] py-12 pb-12">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-4xl font-bold text-center text-white md:text-4xl">
            Satisfação do cliente ou seu dinheiro de volta
          </h2>
          <p className="max-w-xs mx-auto text-lg text-center text-white md:max-w-md">
            Risco <strong className="uppercase">Zero </strong> para você. Se não
            gostar do conteúdo apresentado no curso você tem{" "}
            <strong className="uppercase">7 </strong> dias para pedir{" "}
            <strong className="uppercase">
              100% do seu dinheiro de volta.{" "}
            </strong>
            <strong className="uppercase"> </strong>
          </p>
          <div className="flex mx-auto justify-center rounded pt-10 w-40">
            <img src="images/money.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerSatisfaction;
