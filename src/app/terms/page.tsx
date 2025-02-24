import Image from "next/image";

export default function Terms() {
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
        <span className="text-2xl font-semibold">TERMO DE USO</span>
        <div className="ml-4 flex flex-col gap-2">
          <span>1. Aceitação dos Termos</span>
          <br />
          <span className="ml-4">
            Ao acessar e utilizar o aplicativo Foco Saúde Animal, disponível na
            Apple Store e Play Store, você aceita e concorda em cumprir estes
            termos de uso, além de todas as leis e regulamentos aplicáveis. Você
            é responsável por garantir a conformidade com todas as leis locais
            aplicáveis. Caso não concorde com algum dos termos, você está
            proibido de utilizar ou acessar este aplicativo. Os materiais
            oferecidos por este aplicativo são protegidos pelas leis de direitos
            autorais e marcas comerciais aplicáveis.
          </span>
          <br />
          <span>2. Licença de Uso</span>
          <br />
          <span className="ml-4">
            É concedida a permissão para baixar uma cópia temporária dos
            materiais (informações ou software) do aplicativo Foco Saúde Animal
            apenas para visualização transitória pessoal e não comercial. Essa é
            a concessão de uma licença e não uma transferência de título, e sob
            essa licença você não pode: Modificar ou copiar os materiais; Usar
            os materiais para qualquer finalidade comercial ou para exibição
            pública (comercial ou não comercial); Tentar descompilar ou fazer
            engenharia reversa de qualquer software contido no aplicativo Foco
            Saúde Animal; Remover quaisquer direitos autorais ou outras notações
            de propriedade dos materiais; ou Transferir os materiais para outra
            pessoa ou &quot;espelhar&quot; os materiais em qualquer outro
            dispositivo. Esta licença será automaticamente rescindida se você
            violar alguma dessas restrições e pode ser rescindida pelo Foco
            Saúde Animal a qualquer momento. Ao encerrar a visualização desses
            materiais ou após o término desta licença, você deve apagar todos os
            materiais baixados em sua posse, seja em formato eletrônico ou
            impresso.
          </span>
          <br />
          <span>3. Isenção de Responsabilidade</span>
          <br />
          <span className="ml-4">
            Os materiais no aplicativo da Foco Saúde Animal são fornecidos
            &apos;como estão&apos;. O Foco Saúde Animal não oferece garantias,
            expressas ou implícitas, e, por este meio, isenta e nega todas as
            outras garantias, incluindo, sem limitação, garantias implícitas ou
            condições de comercialização, adequação a um fim específico ou não
            violação de propriedade intelectual ou outra violação de direitos.
            Além disso, o Foco Saúde Animal não garante ou faz qualquer
            representação quanto à precisão, aos resultados prováveis ou à
            confiabilidade do uso dos materiais no seu aplicativo ou de outra
            forma relacionado a esses materiais ou em sites vinculados a este
            aplicativo.
          </span>
          <br />
          <span>4. Limitações de Responsabilidade</span>
          <br />
          <span className="ml-4">
            Em nenhum caso o Foco Saúde Animal ou seus fornecedores serão
            responsáveis por quaisquer danos (incluindo, sem limitação, danos
            por perda de dados ou lucro, ou devido à interrupção dos negócios)
            decorrentes do uso ou da incapacidade de usar os materiais no
            aplicativo Foco Saúde Animal, mesmo que Foco Saúde Animal ou um
            representante autorizado tenha sido notificado oralmente ou por
            escrito da possibilidade de tais danos. Como algumas jurisdições não
            permitem limitações em garantias implícitas ou limitações de
            responsabilidade por danos consequenciais ou incidentais, essas
            limitações podem não se aplicar a você.
          </span>
          <br />
          <span>5. Precisão dos Materiais</span>
          <br />
          <span className="ml-4">
            Os materiais exibidos no aplicativo Foco Saúde Animal podem incluir
            erros técnicos, tipográficos ou fotográficos. O Foco Saúde Animal
            não garante que qualquer material em seu aplicativo seja preciso,
            completo ou atual. O Foco Saúde Animal pode fazer alterações nos
            materiais contidos em seu aplicativo a qualquer momento, sem aviso
            prévio. No entanto, o Foco Saúde Animal não se compromete a
            atualizar os materiais.
          </span>
          <br />
          <span>6. Links para Terceiros</span>
          <br />
          <span className="ml-4">
            O Foco Saúde Animal não revisou todos os serviços ou conteúdos de
            terceiros que possam estar vinculados ao seu aplicativo e não é
            responsável pelo conteúdo de qualquer site vinculado. A inclusão de
            qualquer link não implica endosso pelo Foco Saúde Animal do site ou
            aplicativo vinculado. O uso de qualquer site ou aplicativo vinculado
            é por conta e risco do usuário.
          </span>
          <br />
          <span>7. Modificações dos Termos</span>
          <br />
          <span className="ml-4">
            O Foco Saúde Animal pode revisar estes termos de uso do aplicativo a
            qualquer momento, sem aviso prévio. Ao usar este aplicativo, você
            concorda em ficar vinculado à versão atual desses termos de uso.
          </span>
          <br />
          <span>8. Lei Aplicável</span>
          <br />
          <span className="ml-4">
            Estes termos e condições são regidos e interpretados de acordo com
            as leis da jurisdição em que o Foco Saúde Animal opera e você
            consente e se submete irrevogavelmente à jurisdição exclusiva dos
            tribunais naquela localidade.
          </span>
        </div>
      </div>
    </div>
  );
}
