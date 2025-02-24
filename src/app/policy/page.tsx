import Image from "next/image";

export default function Policy() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-2 bg-white p-4 text-black lg:p-8">
      <Image
        src="/logo-red.png"
        alt=""
        width={1000}
        height={400}
        className="mx-auto h-40 object-contain"
      />
      <div className="mx-auto flex h-full w-full flex-col gap-2 text-justify lg:w-3/5">
        <span className="text-2xl font-semibold">Política Privacidade</span>
        <div className="ml-4 flex flex-col gap-2">
          <span>
            A sua privacidade é importante para nós. É política do Foco saúde
            animal respeitar a sua privacidade em relação a qualquer informação
            sua que possamos coletar no site Foco saúde animal, e outros sites
            que possuímos e operamos.
          </span>
          <br />
          <span>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </span>
          <br />
          <span>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, os
            protegemos dentro de meios comercialmente aceitáveis ​​para evitar
            perdas e roubos, bem como acesso, divulgação, cópia, uso ou
            modificação não autorizados.
          </span>
          <br />
          <span>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </span>
          <br />
          <span>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas políticas de privacidade.
          </span>
          <br />
          <span>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </span>
          <br />
          <span>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contacto conosco.
          </span>
          <br />
          <div className="ml-4 flex flex-col gap-2">
            <span>
              O serviço Google AdSense que usamos para veicular publicidade usa
              um cookie DoubleClick para veicular anúncios mais relevantes em
              toda a Web e limitar o número de vezes que um determinado anúncio
              é exibido para você.
            </span>
            <span>
              Para mais informações sobre o Google AdSense, consulte as FAQs
              oficiais sobre privacidade do Google AdSense.
            </span>
            <span>
              Utilizamos anúncios para compensar os custos de funcionamento
              deste site e fornecer financiamento para futuros desenvolvimentos.
              Os cookies de publicidade comportamental usados ​​por este site
              foram projetados para garantir que você forneça os anúncios mais
              relevantes sempre que possível, rastreando anonimamente seus
              interesses e apresentando coisas semelhantes que possam ser do seu
              interesse.
            </span>
            <span>
              Vários parceiros anunciam em nosso nome e os cookies de
              rastreamento de afiliados simplesmente nos permitem ver se nossos
              clientes acessaram o site através de um dos sites de nossos
              parceiros, para que possamos creditá-los adequadamente e, quando
              aplicável, permitir que nossos parceiros afiliados ofereçam
              qualquer promoção que pode fornecê-lo para fazer uma compra.
            </span>
          </div>
          <br />
          <span>Compromisso do Usuário</span>
          <span>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o Foco saúde animal oferece no site e com caráter
            enunciativo, mas não limitativo:
          </span>
          <span className="ml-4">
            A) Não se envolver em atividades que sejam ilegais ou contrárias à
            boa fé a à ordem pública;
          </span>
          <span className="ml-4">
            B) Não difundir propaganda ou conteúdo de natureza racista,
            xenofóbica, 166bet ou azar, qualquer tipo de pornografia ilegal, de
            apologia ao terrorismo ou contra os direitos humanos;
          </span>
          <span className="ml-4">
            C) Não causar danos aos sistemas físicos (hardwares) e lógicos
            (softwares) do Foco saúde animal, de seus fornecedores ou terceiros,
            para introduzir ou disseminar vírus informáticos ou quaisquer outros
            sistemas de hardware ou software que sejam capazes de causar danos
            anteriormente mencionados.
          </span>
          <span>Mais informações</span>
          <br />
          <span>
            Esperemos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site.
          </span>
          <br />
          <span className="mx-auto w-full text-center font-semibold">
            Esta política é efetiva a partir de 24 de Fevereiro de 2025
          </span>
        </div>
      </div>
    </div>
  );
}
