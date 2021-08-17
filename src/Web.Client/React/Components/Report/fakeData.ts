/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import { IReport } from '../../../../TypeScript/Interfaces/IReport';


const fakeData = {
  Profiles: [
    {
      Name: 'Perfil Organizador', Total: 36, Color: 'Amarelo', ExternalNumber: 3, InternalNumber: 1,
    }, {
      Name: 'Perfil Criativo', Total: 10, Color: 'Vermelho', ExternalNumber: 2, InternalNumber: 1,
    }, {
      Name: 'Perfil Comandante', Total: 34, Color: 'Amarelo', ExternalNumber: 3, InternalNumber: 2,
    }, {
      Name: 'Perfil Planejador', Total: 33, Color: 'Azul', ExternalNumber: 1, InternalNumber: 3,
    }, {
      Name: 'Perfil Visionário', Total: 12, Color: 'Azul', ExternalNumber: 1, InternalNumber: 2,
    }, {
      Name: 'Perfil Prestativo', Total: 37, Color: 'Vermelho', ExternalNumber: 2, InternalNumber: 2,
    }, {
      Name: 'Perfil Analítico', Total: 41, Color: 'Azul', ExternalNumber: 1, InternalNumber: 1,
    }, {
      Name: 'Perfil Mediador', Total: 15, Color: 'Amarelo', ExternalNumber: 3, InternalNumber: 3,
    }, {
      Name: 'Perfil Realizador', Total: 33, Color: 'Vermelho', ExternalNumber: 2, InternalNumber: 3,
    },
  ],
  StaticContent: [{
    Id: 1, Title_PT: 'Seja bem-vindo ao Assessment Profile4d', Title_ENG: 'will soon be available', Text_PT: '<p>O Profile4d – DNA Comportamental, considera as quatro dimensões do ser:<strong><span style="color: rgb(153, 138, 0);"> física</span></strong>, <strong><span style="color: rgb(152, 0, 0);">emocional</span></strong>,<strong><span style="color: rgb(0, 51, 153);"> intelectual</span></strong> e <strong><span style="color: rgb(153, 0, 133);">espiritual.</span></strong> Foi desenvolvido por Carlos de Souza, especialista comportamental e autor do livro “Você em Dezoito Versões”.</p><p>É um processo auto avaliativo sobre inteligência comportamental, que coleta informações, cruza dados e, ao final, produz relatórios completos, com emissão de gráficos e estatísticas que oferecem maior precisão aos processos de avaliação pessoal e profissional.</p><p>As seis fontes de inspiração utilizadas na metodologia:<br></p><p>Psicologia Corporal (Wilhelm Reich), Psicologia Analítica (Carl Gustav Jung), Eneagrama (George Gurdjieff e Cláudio Naranjo), Neurociência (Paul MacLean), Psicologia Positiva (Barbara Fredrickson), Programação Neurolinguística (Richard Bandler e John Grinder).</p><p>As informações desse relatório podem contribuir para o sucesso de processos de contratação ou promoção, desenvolvimento de competências (as <em>Soft Skills</em>), formação de equipes ou identificação de lideranças, <em>coaching</em> e <em>mentoring</em>.</p><p><span style="color: rgb(53, 53, 53); letter-spacing: 0.01071em;"><br></span></p><p>E<span style="color: rgb(53, 53, 53); letter-spacing: 0.01071em;">ste relatório tem validade por 6 meses.</span></p>', Text_ENG: '<p>will soon be available</p><p><br></p>',
  }, {
    Id: 2, Title_PT: 'ANÁLISE PESSOAL', Title_ENG: 'will soon be available', Text_PT: '<p>excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 3, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p><span style="color: rgb(53, 53, 53);"><span style="letter-spacing: 0.01071em;">Mente Inferior é a parte egóica do ser, </span><span style="letter-spacing: 0.13923px;">constituída</span><span style="letter-spacing: 0.01071em;">&nbsp;de forma primordial pela “Mente Consciente” e a “Mente Inconsciente”. É a representação do nosso ego ferido ou danificado, que se reflete através da crença distorcida, de que estamos separados do poder criativo da inteligência universal. A mente inferior possibilita a expressão da natureza do ser humano atentando para sobrevivência, racionalidade, desejos e necessidades materiais, que refletem a manifestação do nosso comportamento através das funções vitais ou centros de inteligências:</span><strong> </strong><span style="letter-spacing: 0.01071em;">o</span><strong> </strong></span><strong><span style="letter-spacing: 0.01071em; color: rgb(0, 51, 153);">Intelectual</span><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">,</span></strong><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);"> que lida com o </span><strong><span style="letter-spacing: 0.01071em; color: rgb(0, 51, 153);">medo</span><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);"> </span></strong><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">(</span><strong><span style="letter-spacing: 0.01071em; color: rgb(0, 51, 153);">Neocortex - Pensar</span></strong><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">), o </span><strong><span style="letter-spacing: 0.01071em; color: rgb(152, 0, 0);">Emocional</span></strong><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">, que lida com o </span><strong><span style="letter-spacing: 0.01071em; color: rgb(152, 0, 0);">afeto</span></strong><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);"> (</span><strong><span style="letter-spacing: 0.01071em; color: rgb(152, 0, 0);">Sistema Límbico - Sentir</span></strong><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">) e o</span><span style="color: rgb(153, 138, 0);"><span style="letter-spacing: 0.01071em;"> </span><strong><span style="letter-spacing: 0.01071em;">Instintivo</span></strong><span style="letter-spacing: 0.01071em;">, </span></span><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">que lida com a </span><strong><span style="letter-spacing: 0.01071em; color: rgb(153, 138, 0);">raiva</span></strong><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);"> (</span><strong><span style="color: rgb(153, 138, 0);"><span style="letter-spacing: 0.01071em;">Sistema Reptiliano - Agir</span></span></strong><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">). &nbsp;</span></p><p><span style="color: rgb(53, 53, 53);"><strong>A Mente Consciente</strong><span style="letter-spacing: 0.01071em;"> (</span></span><strong><span style="color: rgb(0, 51, 153);"><span style="letter-spacing: 0.01071em;">Neocortex</span></span></strong><span style="color: rgb(53, 53, 53);"><span style="letter-spacing: 0.01071em;">) é racional, lógica e a responsável em criar e visualizar a maquete do sonho e se importa com a força de vontade e memórias funcionais de curto prazo. <strong>A Mente inconsciente</strong> (</span></span><strong><span style="letter-spacing: 0.01071em; color: rgb(152, 0, 0);">Sistema Límbico </span></strong><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">+ </span><strong><span style="letter-spacing: 0.01071em; color: rgb(153, 138, 0);">Sistema reptiliano</span></strong><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">) se importa com as memórias de longo prazo, hábitos, sentimentos, emoções, autopreservação e impulsos.</span></p><p><a style="color: rgb(53, 53, 53); letter-spacing: 0.01071em;">Quando em determinada situação usamos as funções vitais de forma desordenada, nossa mente torna-se confusa, a atenção se dispersa e nossa percepção da realidade passa a ser imparcial e incompleta. Neste caso, o nosso <span style="color: rgb(152, 0, 0);"><strong>modo sabotador&nbsp;</strong></span>de agir<strong>,</strong>&nbsp; estimula inconscientemente, às memorias das&nbsp;<strong><span style="color: rgb(152, 0, 0);">“dores essenciais”</span></strong></a><span style="color: rgb(152, 0, 0);">,</span><a style="color: rgb(53, 53, 53); letter-spacing: 0.01071em;"> (inerentes aos perfis) que ocorreram na primeira infância e, que “gritam” para acharmos o nosso verdadeiro caminho (a nossa essência), mas acabam trazendo sentimentos com vibrações negativas, como: tristeza, mágoa, insegurança, vingança. Quando as funções vitais são utilizadas de forma ordenada, o sistema entra em equilíbrio e o nosso </a><span style="color: rgb(0, 51, 153);"><strong>modo competente</strong></span><a style="color: rgb(53, 53, 53); letter-spacing: 0.01071em;"><strong> </strong>de agir “entra em cena”, estimula o estado de recursos, tornando o indivíduo mais&nbsp; assertivo, pois este estado emite sentimentos com vibrações positivas, como: felicidade, alegria, otimismo e contentamento.</a><span style="color: rgb(53, 53, 53); letter-spacing: 0.01071em;">&nbsp;</span><br></p>', Text_ENG: '<p>will soon be available</p><p><br></p>',
  }, {
    Id: 4, Title_PT: 'excluir', Title_ENG: 'delete', Text_PT: '<h3>A NOSSA MENTE PODE ATUAR DE DOIS MODOS DISTINTOS:<br></h3><p><strong>1.</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Modo Competente:</strong><br></p><p><span>Nove </span><span style="color: rgb(0, 0, 0);">perfis</span><strong><span style="color: rgb(0, 51, 153);"> “competentes”</span><span style="color: rgb(0, 0, 0);">:&nbsp;</span></strong><span style="color: rgb(0, 51, 153);"><strong>Intelectuais:</strong></span><strong><span>&nbsp;</span></strong><span>Visionário, Planejador e Analítico.<strong>&nbsp;</strong></span><span style="color: rgb(152, 0, 0);"><strong>Emocionais:</strong></span><strong><span> </span></strong><span>Criativo, Realizador e Prestativo.<strong>&nbsp;</strong></span><span style="color: rgb(153, 138, 0);">I<strong>nstintivos: </strong></span><span>Organizador, Mediador e Comandante. Estimulam os </span><strong><span style="color: rgb(0, 51, 153);">"recursos fortalecedores"</span></strong><span>.</span></p><p><strong><span><span>2.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></strong><strong><span>Modo Sabotador</span></strong></p><p><span>Nove </span><span style="color: rgb(0, 0, 0);">perfis</span><strong><span style="color: rgb(255, 0, 0);"> </span></strong><span style="color: rgb(152, 0, 0);"><strong>“sabotadores”</strong></span><strong><span style="color: rgb(0, 0, 0);">:</span></strong><span style="color: rgb(0, 0, 0);">&nbsp;</span><strong><span style="color: rgb(0, 51, 153);">Intelectuais: </span></strong><span>Inquieto, Superpreocupado, e Super-racional.<strong> </strong></span><strong><span style="color: rgb(152, 0, 0);">Emocionais: </span></strong><span>Pseudovítima, Workaholic e Confrontador.&nbsp;</span><span style="color: rgb(153, 138, 0);"><strong>Instintivos:</strong></span><strong><span> </span></strong><span>Perfeccionista, Indolente e Controlador. Estimulam a </span><strong><span style="color: rgb(152, 0, 0);">"dor essencial".</span></strong></p><p><span style="letter-spacing: 0.01071em;">Somos uma mistura de todos esses perfis. O Profile4d mensura a energia de cada um deles, seleciona a sua tríade comportamental e apresenta suas tendências </span><strong><span style="letter-spacing: 0.01071em; color: rgb(0, 51, 153);">intelectuais</span></strong><span style="letter-spacing: 0.01071em;">, </span><strong><span style="letter-spacing: 0.01071em; color: rgb(152, 0, 0);">emocionais</span></strong><span style="letter-spacing: 0.01071em;"> e </span><strong><span style="letter-spacing: 0.01071em; color: rgb(153, 138, 0);">instintivas</span></strong><span style="letter-spacing: 0.01071em;">, que se refletem em um estilo predominante de comportamento na vida de cada indivíduo. Embora a tríade comportamental trabalhe de forma sincronizada (</span><strong><span style="letter-spacing: 0.01071em; color: rgb(0, 51, 153);">pensar</span><span style="letter-spacing: 0.01071em;">,</span></strong><span style="letter-spacing: 0.01071em;"> </span><strong><span style="letter-spacing: 0.01071em; color: rgb(152, 0, 0);">sentir</span></strong><span style="letter-spacing: 0.01071em;"> e </span><strong><span style="letter-spacing: 0.01071em; color: rgb(153, 138, 0);">agir</span></strong><span style="letter-spacing: 0.01071em;">), o relatório apresenta os perfis, separadamente, como se funcionassem de forma isolada.</span><br></p><p><span>Seu </span><strong><span>PERFIL DOMINANTE</span></strong><span> é formado por um conjunto de padrões comportamentais habituais, <span>&nbsp;</span>inconscientes, fazendo você&nbsp;agir numa espécie de “piloto automático”. Consideramos “dominante” o perfil que possuir energia acima da média de sua tríade, assumindo<span>&nbsp; </span>portanto, o papel de protagonista.</span></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 5, Title_PT: 'SEU PERFIL DOMINANTE', Title_ENG: 'YOUR DOMINANT PROFILE', Text_PT: '<p>Excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 6, Title_PT: 'Excluir  ', Title_ENG: 'delete', Text_PT: '<h3><a style="font-size: 1.17em; font-weight: 400; letter-spacing: 0.01071em;"><strong><span style="color: rgb(53, 53, 53);">MODO COMPETENTE - MINDSET CRESCENTE&nbsp;</span></strong></a></h3><p><a style="font-size: 1.17em; font-weight: 400; letter-spacing: 0.01071em;"><span style="color: rgb(53, 53, 53);">Estimula os "recursos fortalecedores"</span></a></p><p><a style="font-weight: 400; font-size: 1.17em; letter-spacing: 0.01071em;"><span style="color: rgb(53, 53, 53);">O modo competente descreve o funcionamento do indivíduo, que de forma inconsciente, se identifica com suas máscaras (papéis que representamos socialmente). Sua mente poderá atuar no modo competente e, portanto, estimular seu estado de recursos, quando suas funções vitais (</span><span style="color: rgb(0, 51, 153);"><strong>pensar</strong></span><span style="color: rgb(53, 53, 53);"><strong>,&nbsp;</strong></span><span style="color: rgb(152, 0, 0);"><strong>sentir</strong></span><span style="color: rgb(0, 0, 0);">,</span><span style="color: rgb(53, 53, 53);"><strong> </strong></span><span style="color: rgb(153, 138, 0);"><strong>agir</strong></span><span style="color: rgb(53, 53, 53);">) estiverem em equilíbrio e o ciclo do seu fluxo emocional estiver ordenado, pois este arranjo favorece um fluxo emocional saudável&nbsp; (</span><strong><span style="color: rgb(0, 51, 153);">medo</span><span style="color: rgb(53, 53, 53);">/</span><span style="color: rgb(0, 51, 153);">pensar</span></strong><span style="color: rgb(53, 53, 53);"> - </span><strong><span style="color: rgb(152, 0, 0);">afeto/sentir</span></strong><span style="color: rgb(53, 53, 53);"> - </span><strong><span style="color: rgb(153, 138, 0);">raiva/agir</span></strong><span style="color: rgb(53, 53, 53);">). Outro fator relevante que pode contribuir para que sua mente atue no modo competente é você utilizar seu perfil dominante com a frequência, que ele necessita para "existir", ou seja, ele não pode ser reprimido ou impedido de atuar. E por último, quando você permitir que sentimentos positivos predominem seus pensamentos. O ideal é que se tenha uma</span><strong><span style="color: rgb(53, 53, 53);"> relação de positividade de 3:1</span></strong><span style="color: rgb(53, 53, 53);">, ou seja, para cada pensamento, sensação ou sentimento negativo você deve buscar três positivos, assim, você terá mais facilidade em permanecer no seu <strong>estado de recursos</strong>, gerando uma carga emocional positiva, resultando em bem estar ao invés de estresse.</span></a><br></p>', Text_ENG: '<p>will soon be available</p><p><br></p><p><br></p>',
  }, {
    Id: 7, Title_PT: 'excluir', Title_ENG: 'delete', Text_PT: '<h3><strong>Quem sou?&nbsp;&nbsp;</strong></h3><p>Quem você é quando age no modo competente?</p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 8, Title_PT: 'Dinâmico', Title_ENG: 'Excluir ', Text_PT: '<p>Dinâmico&nbsp;</p>', Text_ENG: '<p>Excluir</p>',
  }, {
    Id: 9, Title_PT: 'Recursos fortalecedores do seu perfil dominante e seu Fluxo Emocional Saudável', Title_ENG: 'will soon be available', Text_PT: '<p>dinâmico&nbsp;</p>', Text_ENG: '<p>will soon be available</p><p><br></p>',
  }, {
    Id: 10, Title_PT: 'Recursos do seu perfil DOMINANTE', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 11, Title_PT: 'As quatro forças da personalidade', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 12, Title_PT: 'Suas motivações', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 13, Title_PT: 'Seu foco de atenção', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 14, Title_PT: 'Seu diferencial como líder', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 15, Title_PT: 'Valores relacionados ao seu perfil dominante', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 16, Title_PT: 'Competência Emocional', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 17, Title_PT: 'Modo que se comunica', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 18, Title_PT: 'Modo que interage nos relacionamentos', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 19, Title_PT: 'SEU SABOTADOR DOMINANTE', Title_ENG: 'will soon be available', Text_PT: '<p>Excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 20, Title_PT: 'Excluir', Title_ENG: 'delete', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">MODO SABOTADOR - MINDSET FIXO&nbsp;</span></h3><p><span style="letter-spacing: 0.13923px;">Estimula a "dor essencial"</span></p><p><span style="font-weight: 400; letter-spacing: 0.01071em;">O modo sabotador descreve o funcionamento do indivíduo, que de forma inconsciente, se identifica com sua sombra, (experiências reprimidas da consciência) distorce a realidade e acaba gerando mal-estar tanto para si, quanto para os outros. Sua mente poderá atuar no modo sabotador e, portanto, estimular a </span><strong><span style="letter-spacing: 0.01071em; color: rgb(152, 0, 0);">"dor essencial" </span></strong><span style="font-weight: 400; letter-spacing: 0.01071em;">quando suas funções vitais (</span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(0, 51, 153);"><strong>pensar</strong></span><span style="font-weight: 400; letter-spacing: 0.01071em;"><strong>,&nbsp;</strong></span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(152, 0, 0);"><strong>sentir</strong></span><span style="font-weight: 400; letter-spacing: 0.01071em;"><strong>&nbsp;</strong></span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(53, 53, 53);">e</span><span style="font-weight: 400; letter-spacing: 0.01071em;"> </span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(153, 138, 0);"><strong>agir</strong></span><span style="font-weight: 400; letter-spacing: 0.01071em;">) estiverem desequilibradas e o ciclo do seu fluxo emocional&nbsp;</span><strong>(</strong><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(0, 51, 153);"><strong>medo</strong></span><span style="font-weight: 400; letter-spacing: 0.01071em;">/</span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(53, 53, 53);">pensar</span><span style="font-weight: 400; letter-spacing: 0.01071em;"> - </span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(152, 0, 0);"><strong>afeto</strong></span><span style="font-weight: 400; letter-spacing: 0.01071em;">/sentir - </span><strong>raiva</strong><span style="font-weight: 400; letter-spacing: 0.01071em;">/agir) estiver desordenado, gerando, portanto, um fluxo não saudável. Outro fator relevante que poderá contribuir para que sua mente atue no modo sabotador é você utilizar o perfil dominante com menos frequência do que realmente ele necessita para "existir", ou seja, se ele for reprimido ou impedido de atuar. E por último, quando você permitir que sentimentos negativos predominem seus pensamentos. O ideal é que se tenha uma relação de positividade de 3:1, ou seja, para cada pensamento, sensação ou sentimento negativo você deve buscar três positivos. Se esta relação estiver pendendo para o lado negativo, facilitará o contato com a </span><strong><span style="color: rgb(152, 0, 0);"><span style="letter-spacing: 0.01071em;">"dor essencial"</span></span></strong><span style="font-weight: 400; letter-spacing: 0.01071em;"><strong>&nbsp;</strong>gerando uma carga emocional negativa, que poderá causar estresse.</span><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 21, Title_PT: 'excluir', Title_ENG: 'delete', Text_PT: '<h3>Quem sou?</h3><p>Quem você é quando age no modo sabotador?</p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 22, Title_PT: 'Dinâmico', Title_ENG: 'Dinâmico', Text_PT: '<p>Excluir&nbsp;</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 23, Title_PT: 'Síntese do seu principal SABOTADOR', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 24, Title_PT: 'Crença Matriz Limitante', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 25, Title_PT: 'Dificuldade na Comunicação', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 26, Title_PT: 'Dificuldade nos Relacionamentos', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 27, Title_PT: 'As Quatro Forças Limitadoras', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 28, Title_PT: 'Atitudes limitantes', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 29, Title_PT: 'Vício Comportamental', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 30, Title_PT: 'Vício Emocional', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 31, Title_PT: 'Vício Mental', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 32, Title_PT: 'Mecanismo de Defesa', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 33, Title_PT: 'Compulsão Neurótica', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 34, Title_PT: 'Recursos deste perfil', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 35, Title_PT: 'Recursos deste perfil', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 36, Title_PT: 'Síntese deste sabotador', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 37, Title_PT: 'Síntese deste sabotador', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico&nbsp;</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 38, Title_PT: 'Tríade Comportamental - Modo Competente', Title_ENG: 'will soon be available', Text_PT: '<h3>Excluir</h3>', Text_ENG: '<p>delete</p>',
  }, {
    Id: 39, Title_PT: 'Excluir', Title_ENG: 'will soon be available', Text_PT: '<h3>Parceiros internos</h3><p>Além do perfil <strong>DOMINANTE</strong> descrito anteriormente, existem mais dois perfis (parceiros internos) que integram sua tríade comportamental (<span style="color: rgb(0, 51, 153);">pensar</span>, <span style="color: rgb(152, 0, 0);">sentir</span> e <span style="color: rgb(153, 138, 0);">agir</span>) – <strong>MODO COMPETENTE</strong>. Quando esses perfis “entram em cena” poderão te influenciar positivamente na hora de tomar decisão. Quem são eles?</p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 40, Title_PT: 'Excluir', Title_ENG: 'will soon be available', Text_PT: '<h3>Quem sou?</h3><p>Parceiro de Apoio</p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 41, Title_PT: 'Dinâmico', Title_ENG: 'delete', Text_PT: '<p>Excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 42, Title_PT: 'As quatro forças da personalidade', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 43, Title_PT: 'Excluir', Title_ENG: 'will soon be available', Text_PT: '<h3>Quem sou?</h3><p>Parceiro Complementar</p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 44, Title_PT: 'Dinâmico', Title_ENG: 'Dinâmico', Text_PT: '<p>Excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 45, Title_PT: 'As quatro forças da personalidade', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 46, Title_PT: 'Excluir', Title_ENG: 'delete', Text_PT: '<h3>Tríade Comportamental - Modo Sabotador</h3>', Text_ENG: '<p>will soon be available<br></p>',
  }, {
    Id: 47, Title_PT: 'Excluir', Title_ENG: 'will soon be available', Text_PT: '<h3>Inimigos Internos</h3><p>Além do sabotador <strong>DOMINANTE</strong> descrito anteriormente, existem mais dois perfis sabotadores (inimigos internos), que integram sua “tríade sabotadora”. Quando esses perfis “entram em cena”, poderão agir em conjunto ou isoladamente e influenciar de forma negativa na hora de tomar decisão. Quem são eles?</p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 48, Title_PT: 'Excluir', Title_ENG: 'will soon be available', Text_PT: '<h3>Quem sou?</h3><h3><span style="font-weight: 400; letter-spacing: 0.01071em;">Inimigo Interno - 1</span><br></h3>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 49, Title_PT: 'Dinâmico', Title_ENG: 'Dinâmico', Text_PT: '<p>Excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 50, Title_PT: 'As Quatro Forças Limitadoras', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmica</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 51, Title_PT: 'Excluir', Title_ENG: 'will soon be available', Text_PT: '<h3>Quem sou?</h3><h3><span style="box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px; font-weight: 400; letter-spacing: 0.01071em;">Inimigo Interno - 2</span></h3>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 52, Title_PT: 'Dinâmico', Title_ENG: 'Dinâmico', Text_PT: '<p>Excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 53, Title_PT: 'As Quatro Forças Limitadoras', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 54, Title_PT: 'PLANO DE DESENVOLVIMENTO INDIVIDUAL – PDI', Title_ENG: 'will soon be available', Text_PT: '<p>Excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 55, Title_PT: 'OS CENTROS DE INTELIGÊNCIAS E SUAS RESPECTIVAS ENERGIAS', Title_ENG: 'will soon be available', Text_PT: '<h3>Excluir</h3>', Text_ENG: '<p>will soon be available<br></p>',
  }, {
    Id: 56, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p><span style="letter-spacing: 0.01071em;">O gráfico acima apresenta os níveis de energia que você possui em cada centro de inteligência e o resultado apontado (0 - 100%) é a média aritmética dos três perfis que integram cada centro de inteligência. O trauma que todos nós sofremos na primeira infância, causou na "criança" um desconforto e gerou a&nbsp;</span><span style="color: rgb(152, 0, 0);"><strong>“dor essencial"</strong><span style="letter-spacing: 0.01071em;">,</span></span><span style="letter-spacing: 0.01071em;"> (inerente ao perfil dominante). Por causa desta "dor", a criança acaba reprimindo a emoção relacionada a um dos centros de inteligências e então, passa a evitá-lo.</span><br></p><p><span style="letter-spacing: 0.01071em;">Desta forma, há um centro que usamos como predominante, outro que usamos como apoio e outro, que rejeitamos. Assim, quando entramos em ação e nos comportamos, inicia-se um “ciclo”, cujo movimento denominamos, “fluxo emocional” e envolve as seguintes emoções básicas:&nbsp;</span><strong style="letter-spacing: 0.01071em;"><span style="color: rgb(0, 51, 153);">medo</span></strong><span style="letter-spacing: 0.01071em;">,</span><span style="letter-spacing: 0.01071em; color: rgb(152, 0, 0);">&nbsp;<strong>afeto</strong></span><span style="letter-spacing: 0.01071em;">&nbsp;e</span><span style="letter-spacing: 0.01071em; color: rgb(153, 138, 0);">&nbsp;<strong>raiva</strong></span><span style="letter-spacing: 0.01071em;">, respectivamente relacionadas ao <strong><span style="color: rgb(0, 51, 153);">pensar</span></strong>,&nbsp;</span><strong style="letter-spacing: 0.01071em;"><span style="color: rgb(152, 0, 0);">sentir</span></strong><span style="letter-spacing: 0.01071em;">&nbsp;e,&nbsp;</span><span style="letter-spacing: 0.01071em;"><strong><span style="color: rgb(153, 138, 0);">agir</span></strong></span></p><p><span style="letter-spacing: 0.01071em;">Se o fluxo emocional estiver ordenado, ou seja, se o seu perfil dominante estiver acessando a emoção correta, os seus desejos poderão se manifestar mais facilmente, pois este fluxo torna-se saudável, contribuindo de forma&nbsp;</span><span style="letter-spacing: 0.01071em;">significativa</span><span style="letter-spacing: 0.01071em;">, para que&nbsp;</span><span style="letter-spacing: 0.01071em;">você</span><span style="letter-spacing: 0.01071em;">&nbsp;tenha um excelente desempenho nas suas demandas comportamentais.</span></p><p><span style="letter-spacing: 0.01071em;">O seu centro de inteligência predominante é o que apresenta a maior energia (gráfico acima) e mais adiante o relatório apontará o resultado do seu fluxo emocional, ou seja, se está saudável ou em alerta.</span></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 57, Title_PT: 'OS PERFIS COMPORTAMENTAIS E SUAS RESPECTIVAS ENERGIAS', Title_ENG: 'will soon be available', Text_PT: '<p>Excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 58, Title_PT: 'Excluir', Title_ENG: 'DELETE', Text_PT: '<h3><strong><span style="letter-spacing: 0.01071em;">PONTOS DE ATENÇÃO</span></strong></h3><p><span style="font-family: &quot;Helvetica Neue&quot;, sans-serif; font-size: 13px; color: rgb(53, 53, 53); letter-spacing: 0.14994px;"><span style="letter-spacing: 0.01071em;">O gráfico acima, apresenta os níveis de energia que você possui em cada um dos nove perfis (0 – 33,3%). Eles estão&nbsp;</span><span style="letter-spacing: 0.13923px;">distribuídos</span><span style="letter-spacing: 0.01071em;">&nbsp;nos três centros de inteligências&nbsp;</span></span><a style="letter-spacing: 0.01071em;"><span style="color: rgb(53, 53, 53);">e, quanto mais intensidade de energia os perfis possuírem, mais dominantes eles serão. Portanto, caso você tenha uma combinação de perfis, cujos níveis de energia forem intensos, muito próximos entre si e, que se contrapõem, saiba que você poderá enfrentar um dilema. Isto acontece,&nbsp;</span></a><span style="font-family: &quot;Helvetica Neue&quot;, sans-serif; font-size: 13px; letter-spacing: 0.01071em; color: rgb(53, 53, 53);">porque no momento em que os recursos fortalecedores destes perfis forem exigidos,&nbsp;</span><a style="letter-spacing: 0.01071em;"><span style="color: rgb(53, 53, 53);">poderá haver uma disputa interna entre eles e você nem perceberá, pois isto ocorre, de forma inconsciente.&nbsp; Então, cada&nbsp;</span></a><span style="font-family: &quot;Helvetica Neue&quot;, sans-serif; font-size: 13px; color: rgb(53, 53, 53); letter-spacing: 0.14994px;"><span style="letter-spacing: 0.01071em;">um deles tentará assumir o papel de "protagonista" para controlar a situação e este conflito interno, poderá te paralisar e fazer com que você procrastine suas decisões.</span></span><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 59, Title_PT: 'Conflitos identificados', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 60, Title_PT: 'A SUA TRÍADE COMPORTAMENTAL E OS PICOS DE ENERGIA', Title_ENG: 'delete', Text_PT: '<p><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(0, 51, 153);">Pensamentos </span><span style="font-weight: 400; letter-spacing: 0.01071em;">geram </span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(152, 0, 0);">sentimentos</span><span style="font-weight: 400; letter-spacing: 0.01071em;"> que geram </span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(153, 138, 0);">ações,</span><span style="font-weight: 400; letter-spacing: 0.01071em;"> ou seja, existe um padrão cíclico da mente que contribui para o modo que você </span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(0, 51, 153);">PENSA,</span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(152, 0, 0);">SENTE </span><span style="font-weight: 400; letter-spacing: 0.01071em;">E </span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(153, 138, 0);">AGE</span><span style="font-weight: 400; letter-spacing: 0.01071em;">, (</span><em style="font-weight: 400; letter-spacing: 0.01071em;">Mindset</em><span style="font-weight: 400; letter-spacing: 0.01071em;">). O gráfico abaixo apresenta os três perfis que possuem os picos de energia em cada um dos três centros de inteligências (</span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(153, 138, 0);">instintivo</span><span style="font-weight: 400; letter-spacing: 0.01071em;">, </span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(152, 0, 0);">emociona</span><span style="font-weight: 400; letter-spacing: 0.01071em;">l e </span><span style="font-weight: 400; letter-spacing: 0.01071em; color: rgb(0, 51, 153);">intelectual</span><span style="font-weight: 400; letter-spacing: 0.01071em;">).</span><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 61, Title_PT: 'excluir', Title_ENG: 'delete', Text_PT: '<p><span style="box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: rgb(0, 0, 0); display: inline; vertical-align: baseline; margin: 0px; padding: 0px;">Legenda</span></p><p><span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px;">Tr</span>íade original - cor preta /&nbsp;</span><span style="color: rgb(152, 0, 0);">Tríade adaptada - cor vermelha</span></p><p><a><span style="box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px; color: rgb(153, 138, 0);">Centro Instintivo: Agir</span><span style="box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px; color: rgb(0, 0, 0);"> /&nbsp;</span></a><a style="letter-spacing: 0.01071em;"><span style="color: rgb(152, 0, 0);">Centro Emocional: Sentir</span><span style="color: rgb(0, 0, 0);">&nbsp;/&nbsp;</span><span style="color: rgb(0, 51, 153);">Centro Intelectual: Pensar</span></a></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 62, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>excluir</p>', Text_ENG: '<p>delete</p>',
  }, {
    Id: 63, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 64, Title_PT: 'Característica específica da sua tríade', Title_ENG: 'will soon be available', Text_PT: '<h3>Dinâmico</h3>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 65, Title_PT: 'TRÍADE ORIGINAL X TRÍADE ADAPTADA', Title_ENG: 'will soon be available', Text_PT: 'EXCLUIR', Text_ENG: 'DELETE',
  }, {
    Id: 66, Title_PT: 'Título PT', Title_ENG: 'Title ENG', Text_PT: 'Texto PT', Text_ENG: 'Text ENG',
  }, {
    Id: 67, Title_PT: 'excluir', Title_ENG: 'delete', Text_PT: '<h3>Será que seu fluxo emocional está saudável?<br></h3><p>Como já vimos, possuímos três centos de inteligências. Usamos um como predominante,  o segundo usamos como apoio e procuramos evitar o uso do terceiro, que foi rejeitado numa das cinco fases durante a formação do caráter na primeira infância e onde se encontra a origem da abordagem parcial e distorcida que temos da realidade. O trauma sofrido neste centro de inteligência nos acompanha até a vida adulta e quando precisamos utilizá-lo, uma memória de sofrimento é desencadeada e, por isso, procuramos evitá-lo. <strong>Existem três emoções básicas que nos movem. </strong>A palavra&nbsp;"emoção" deriva do latim <em>emovere</em>, onde o "<em>e</em>" significa "fora" e "<em>movere</em>" significa&nbsp; movimento. É, portanto, o que nos leva a um movimento para fora, ou seja, nos leva a um determinado comportamento e cada centro de inteligência sustenta uma dessas emoções:&nbsp;<span style="color: rgb(53, 53, 53);">o</span><span style="color: rgb(0, 0, 0);"> </span><strong><span style="color: rgb(0, 51, 153);">intelectual </span></strong>lida com o <strong><span style="color: rgb(0, 51, 153);">medo</span></strong>, o <strong><span style="color: rgb(152, 0, 0);">emocional</span></strong> com o <strong><span style="color: rgb(152, 0, 0);">afeto</span></strong> e o <strong><span style="color: rgb(153, 138, 0);">instintivo</span></strong> com a <strong><span style="color: rgb(153, 138, 0);">raiva</span>.&nbsp;</strong></p><p><span style="letter-spacing: 0.01071em;">Portanto, as emoções antecedem o nosso comportamento, desta forma, no </span><strong><span style="letter-spacing: 0.01071em; color: rgb(61, 0, 153);">pensar (medo), </span><span style="letter-spacing: 0.01071em; color: rgb(152, 0, 0);">sentir (afeto)</span></strong><span style="letter-spacing: 0.01071em;"> e </span><strong><span style="letter-spacing: 0.01071em; color: rgb(153, 138, 0);">agir (raiva</span><span style="letter-spacing: 0.01071em;">) </span></strong><span style="letter-spacing: 0.01071em;">há um fluxo emocional que poderá se manifestar de três formas distintas: Fluxo Emocional Sinergético, Fluxo Emocional Saudável e Fluxo Emocional em alerta!</span><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 68, Title_PT: 'ANÁLISE AVANÇADA', Title_ENG: 'will soon be available', Text_PT: '<p>Excluir&nbsp;</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 69, Title_PT: 'Perfil Dominante', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 70, Title_PT: 'Parceiro de Apoio', Title_ENG: 'will soon be available', Text_PT: '<p>Excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 71, Title_PT: 'Parceiro Complementar', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 72, Title_PT: 'Parceiro ideal para seu crescimento', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 73, Title_PT: 'RESULTADO DA ANÁLISE DO SEU FLUXO EMOCIONAL', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico<br></p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 74, Title_PT: 'O CAMINHO IDEAL PARA SUA MELHOR VERSÃO', Title_ENG: 'will soon be available', Text_PT: '<p>Excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 75, Title_PT: 'excluir', Title_ENG: 'delete', Text_PT: '<h3>O SEU DNA COMPORTAMENTAL<br></h3><p>Gestação, parto, formação da personalidade e fase atual</p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 76, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p><span style="letter-spacing: 0.01071em;">A </span><strong><span style="letter-spacing: 0.01071em;">Mente Superior</span></strong><span style="letter-spacing: 0.01071em;"> é a </span><span style="color: rgb(153, 0, 133);"><span style="letter-spacing: 0.01071em;">dimensão espiritual</span></span><span style="letter-spacing: 0.01071em;"> ou supramental do ser e tem como finalidade essencial, o despertar da consciência e a materialização dos sonhos.&nbsp;Tem a ver com nossos valores, virtudes e com os arquétipos que definem, verdade, beleza, abundância, justiça, bondade, entre outros. É, portanto, uma dimensão mais ligada à intuição do que à razão, pois é capaz de transcender as fronteiras da matéria, tempo e espaço e operar além do ego, estimulando a coordenação de conhecimentos e esforços no sentido de se harmonizar com a mente inferior.</span><br></p><p><span style="letter-spacing: 0.01071em;">A </span><strong>Mente Inferior</strong><span style="letter-spacing: 0.01071em;">&nbsp;é formada pela&nbsp;<strong>mente consciente, que é racional </strong>e <strong>pela mente inconsciente, </strong>que possui todo registro de memória vivido pelo indivíduo, e passa essas informações à </span><strong>Mente Superior</strong><span style="letter-spacing: 0.01071em;">, que se organiza em função dos conhecimentos transcendentes, podendo validar ou não os desejos. Ou seja, se a mente consciente e a inconsciente estiverem alinhadas no mesmo objetivo, o desejo poderá ser materializado, caso contrário, o desejo será repelido pela Mente Superior.&nbsp;</span></p><p><span style="letter-spacing: 0.01071em;">O problema surge, quando os desejos teimam em não se materializar, gerando um ciclo repetitivo de frustrações ao longo da vida. Talvez isso aconteça, porque o indivíduo, inconscientemente, esteja tendo ganhos indiretos e, desta forma,  a mente inconsciente procura bloquear os desejos da mente consciente dando ao indivíduo um benefício que o mantém na sua zona de conforto e, portanto, precisa ser investigado.&nbsp;</span><br></p><p><span style="letter-spacing: 0.01071em;">O autoconhecimento é de fundamental importância para facilitar o entendimento de como alinhar a mente consciente e a mente inconsciente, a fim de gerar sentimentos harmônicos com vibrações positivas, como:  compaixão, generosidade, humildade, inteireza, serenidade, desapego, virtudes necessárias que contribuem, para que a mente superior materialize os seus sonhos e você alcance o seu propósito de vida.</span><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 77, Title_PT: 'SUA MELHOR VERSÃO – "O ADULTO SAUDÁVEL" ', Title_ENG: 'will soon be available', Text_PT: '<h3>Excluir</h3>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 78, Title_PT: 'MODO SINERGÉTICO (MINDSET CRESCENTE – RECURSOS POTENCIALIZADOS)', Title_ENG: 'will soon be available', Text_PT: '<p><br></p><h3><a><span style="box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: rgb(53, 53, 53); display: inline; vertical-align: baseline; margin: 0px; padding: 0px;">MODO SINERGÉTICO - MINDSET CRESCENTE&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></a></h3><p><a><span style="box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: rgb(53, 53, 53); display: inline; vertical-align: baseline; margin: 0px; padding: 0px;">Potencializa os "recursos fortalecedores"</span></a></p><p><br></p><p>O <strong>Modo Sinergético</strong> descreve o funcionamento do indivíduo em sua melhor versão, produzindo bem-estar para si mesmo e para os outros. Você poderá atuar nesse modo, quando “virar a chave”, ativar o seu estado de recursos (<strong>Modo Competente</strong>) e o seu perfil dominante estiver interligado ao parceiro ideal, pois este alinhamento, gera sinergia e potencializa, ainda mais, os seus recursos fortalecedores, a fim de atingir a alta performance. Quando sua mente estiver atuando no <strong>Modo Sinergético </strong>você poderá transcender, entrar em contato com a <strong><span style="color: rgb(61, 0, 153);">inteligência espiritual </span></strong><span style="color: rgb(53, 53, 53);">e acessar</span> a <strong>Mente Superior</strong>. Assim, poderá descobrir o seu arquétipo/essência, conhecer sua verdadeira identidade e, finalmente, viver o seu propósito.</p><p><span style="letter-spacing: 0.01071em;">Se você está insatisfeito com a sua vida pessoal ou profissional, muito provavelmente, é porque ainda não tem consciência do seu arquétipo/essência e quanto menos consciência tiver, mais distante do seu propósito de vida você estará.</span><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 79, Title_PT: 'Descobrindo seu Arquétipo – Sua essência', Title_ENG: 'will soon be available', Text_PT: '<p>DINÂMICO</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 80, Title_PT: 'Característica essencial', Title_ENG: 'will soon be available', Text_PT: '<p>DINÂMICO</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 81, Title_PT: 'Seu perfil Dominante', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 82, Title_PT: 'Seu grande desafio', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 83, Title_PT: 'Sua tarefa chave', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 84, Title_PT: 'Parceiro ideal a ser modelado a fim de gerar sinergia', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 85, Title_PT: 'Formação do seu perfil dominante', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.01071em;">A formação do caráter ocorre durante o processo de mielinização da medula, em cinco fases distintas, que vai desde a gestação até os cinco anos de idade. Apesar de sermos uma mistura das cinco estruturas que formam os nove perfis, algumas delas se estruturam de modo mais intenso que outras e, portanto, serão dominantes.</span><br></p><p><span style="letter-spacing: 0.01071em;">Cada indivíduo nasce com uma essência original e em cada fase do processo ocorre um evento desconfortável, que incide sobre esta essência. No entanto, existe uma fase específica, em que a criança sente esse desconforto de forma mais intensa. Chamamos este momento de </span><strong><span style="color: rgb(152, 0, 0);"><span style="letter-spacing: 0.01071em;">“dor essencial"</span></span></strong><span style="letter-spacing: 0.01071em;">, e poderá instalar-se nos centros:&nbsp;</span><strong><span style="color: rgb(153, 138, 0);">instintivo (agir)<span style="letter-spacing: 0.01071em;">,</span></span></strong><span style="letter-spacing: 0.01071em;">&nbsp;</span><strong><span style="color: rgb(152, 0, 0);">emocional (sentir)</span>&nbsp;</strong><span style="letter-spacing: 0.01071em;">ou&nbsp;</span><strong><span style="color: rgb(0, 51, 153);">intelectual (pensar)<span style="letter-spacing: 0.01071em;">.&nbsp;</span></span></strong></p><p><span style="letter-spacing: 0.01071em;">O centro onde a “dor” se instala é reprimido pela criança e será o fator determinante na formação da sua personalidade. &nbsp;Ao reprimir o centro de inteligência o sistema se desequilibra (</span><span style="color: rgb(0, 51, 153);"><strong>pensar/medo</strong></span><span style="letter-spacing: 0.01071em;">,&nbsp;</span><span style="color: rgb(152, 0, 0);"><strong>sentir/afeto</strong></span><strong>&nbsp;</strong><span style="letter-spacing: 0.01071em;">e&nbsp;</span><span style="color: rgb(153, 138, 0);"><strong>agir/raiva</strong></span><span style="letter-spacing: 0.01071em;">) e como consequência, o fluxo emocional se desordena. A personalidade se forma a partir do desconforto que a criança sente em sua essência ferida, então, para se proteger “veste uma máscara (papéis que representamos socialmente).&nbsp;</span></p><p><span style="letter-spacing: 0.01071em;">Em relação à formação da personalidade (perfis) existem dois grupos: O primeiro grupo, são aqueles que sentiram o desconforto, mas permanecem no próprio centro reprimido (</span><strong><span style="color: rgb(152, 0, 0);">Realizador</span></strong><span style="letter-spacing: 0.01071em;">, </span><strong><span style="color: rgb(0, 51, 153);">Planejador</span></strong><span style="letter-spacing: 0.01071em;"> e</span><strong> <span style="color: rgb(153, 138, 0);">Mediador</span></strong><span style="letter-spacing: 0.01071em;">). O segundo grupo, são aqueles que se afastaram do centro reprimido, a fim de se distanciarem da "dor" (</span><strong><span style="color: rgb(152, 0, 0);">Prestativo</span></strong><span style="letter-spacing: 0.01071em;">, </span><strong><span style="color: rgb(152, 0, 0);">Criativo</span></strong><span style="letter-spacing: 0.01071em;">, </span><strong><span style="color: rgb(0, 51, 153);">Analítico, Visionário</span></strong><span style="letter-spacing: 0.01071em;">, </span><strong><span style="color: rgb(153, 138, 0);">Comandante e Organizador</span></strong><span style="letter-spacing: 0.01071em;">). Durante seu desenvolvimento, num esforço de adaptação a criança vai incorporando sua “máscara”, desenvolvendo sua personalidade e ficando cada vez mais distante da sua essência.</span><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 86, Title_PT: 'Momento da formação do seu perfil Dominante', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 87, Title_PT: '"Dor Essencial" (Ferida da criança)', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 88, Title_PT: 'NOTAS:', Title_ENG: 'will soon be available', Text_PT: '<h3>NOTAS:<br></h3><p>1.\tO conceito de pai e mãe no Profile4d refere-se aos responsáveis pela formação da criança.</p><p>2. Você não deve culpar os seus pais, pelos eventos ocorridos na primeira infância, que causaram a <span style="color: rgb(152, 0, 0);">“dor essencial"</span>.  O melhor a fazer é “virar a chave”, ativar os seus “recursos fortalecedores” e em caso de alguma sensação de magoa, em momento oportuno você deverá perdoá-los.</p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 89, Title_PT: 'Processo de cristalização do seu perfil dominante (máscara)', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 90, Title_PT: 'Estrutura corporal', Title_ENG: 'will soon be available', Text_PT: '<p>“Mente e Corpo formam um sistema único”. Existe uma relação cibernética entre mente e corpo, ou seja, se alterarmos alguma coisa na mente, aparecerão reflexos no corpo e vice e versa. Em cada fase do processo de mielinização da medula a criança passa por um momento denominado, <span style="color: rgb(152, 0, 0);"><strong>"dor essencial"</strong></span> e em cada uma dessas fases o seu corpo vai sendo moldado por esses estímulos. As vezes, algumas estruturas corporais ficam mais evidentes que outras, mas podemos afirmar, que não existe ninguém que tenha somente um tipo de estrutura corporal, na verdade, somos a mistura das cinco estruturas que formam os nove perfis.</p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 91, Title_PT: 'Formato do Corpo', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 92, Title_PT: 'excluir', Title_ENG: 'delete', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">O que significa modelar?</span><br></h3><p><span style="letter-spacing: 0.01071em;">Encontrar alguém que já está obtendo os resultados que você deseja em alguma área e aprender o que essa pessoa fez para conseguir esses resultados. Modelagem aqui, está relacionado ao parceiro de apoio mais apto em gerar sinergia ao interligar-se com seu perfil dominante. Esta sinergia potencializa seus recursos, evita a autossabotagem e contribui, significativamente, para atingir a alta performance.</span><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 93, Title_PT: 'Principal virtude à desenvolver para entrar em contato com a essência', Title_ENG: 'will soon be available', Text_PT: 'Excluir', Text_ENG: 'Delete',
  }, {
    Id: 94, Title_PT: 'Benefícios que terá ao entrar em contato com a sua "essência"', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 95, Title_PT: 'AS DOZE FORÇAS DO CARÁTER DO ADULTO SAUDÁVEL', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 96, Title_PT: 'ANÁLISE PROFISSIONAL', Title_ENG: 'will soon be available', Text_PT: '<p>Excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 97, Title_PT: 'O Profile4d e sua relação com as competências (As Soft Skills)', Title_ENG: 'will soon be available', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">O Profile4d e sua relação com as competências (As Soft Skills)</span><br></h3><p><span style="letter-spacing: 0.01071em;">No Profile4d cada competência é representada por uma tríade de perfis comportamentais, aqueles que mais se adaptam à cada uma das doze competências apresentadas no relatório. Em relação a energia da tríade comportamental pertinente às doze competências, podemos considerar duas situações: &nbsp;&nbsp;&nbsp;&nbsp;</span><br><br></p><p><span>&nbsp;</span><strong>1.&nbsp;&nbsp;&nbsp; </strong><strong>Competência com energia em Nível Satisfatório</strong></p><p><span>Se você possuir energia com </span><strong><span>nível satisfatório</span></strong><span> (</span><strong><span>acima de 16%</span></strong><span>) nos três perfis </span><a><span style="color: rgb(53, 53, 53);">que integram cada competência, </span></a><span style="color: rgb(53, 53, 53);">signi</span><span>fica que você poderá atuar com facilidade em relação às habilidades comportamentais que a referida competência exige. Portanto, quanto mais energia você possuir, mais facilidade você terá, para atender as expectativas em situações que requeiram a utilização da referida competência.<span> </span></span></p><p><strong><span><span>2.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></strong><strong><span>Competência com energia em Nível de Atenção</span></strong></p><p><span>Se você possuir energia com </span><strong><span>nível de atenção</span></strong><span> (</span><strong><span>abaixo de 16%</span></strong><span>) em um ou mais perfis, que integram cada competência apresentada, neste relatório, significa que há um </span><strong><span><em>GAP</em></span></strong><span> de energia comportamental a ser desenvolvido e, neste caso, dois pontos importantes precisam ser considerados:</span></p><p><strong><span>2.1</span></strong><span>. Se a função ou cargo que você ocupa, exigir atuação de expertise plena em relação a competência considerada, você terá que aumentar a energia do perfil que estiver com nível abaixo de 16%, afim de obter as habilidades comportamentais (</span><strong><em><span style="color: rgb(53, 53, 53);">Soft Skills</span></em></strong><span>) necessárias para atuar de forma plena no cargo que ocupa.</span></p><p><strong>2.2</strong><span style="letter-spacing: 0.01071em;">. Mas se a função ou cargo que você ocupa, “não exigir” atuação, individual em relação a competência considerada, então, não será necessário desenvolver o&nbsp;<em><strong>GAP</strong>,</em>&nbsp;pois supõe-se que alguém da equipe já é responsável por atuar com esta competência e, desta forma, você poderá contribuir com as </span><span style="color: rgb(53, 53, 53);"><strong><em><span style="letter-spacing: 0.01071em;">Soft skills</span></em><span style="letter-spacing: 0.01071em;"> </span></strong></span><span style="letter-spacing: 0.01071em;">inerentes a você, ou seja, aquelas que você possui expertise e habilidade, a fim de potencializar os resultados da equipe.</span><br></p><p><span style="letter-spacing: 0.01071em;">O Profile4d, aponta apenas as </span><strong><em><span style="letter-spacing: 0.01071em;">Soft Skills</span></em><span style="letter-spacing: 0.01071em;">.</span></strong><span style="letter-spacing: 0.01071em;"> No entanto, sempre que uma determinada competência for exigida é importante considerar dois pilares: as&nbsp;</span><em><strong>Soft Skills</strong></em><strong>&nbsp;</strong><span style="letter-spacing: 0.01071em;">e as</span><strong>&nbsp;</strong><em><strong>Hard Skills</strong></em><span style="letter-spacing: 0.01071em;">, sendo que a última, é mais fácil de se obter, pois sabemos que o maior problema que as organizações enfrentam é de natureza comportamental.</span></p><p><span>&nbsp;</span></p><p><span>&nbsp;</span></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 98, Title_PT: 'Título PT', Title_ENG: 'Title ENG', Text_PT: 'Texto PT', Text_ENG: 'Text ENG',
  }, {
    Id: 99, Title_PT: 'Título PT', Title_ENG: 'Title ENG', Text_PT: 'Texto PT', Text_ENG: 'Text ENG',
  }, {
    Id: 100, Title_PT: 'Título PT', Title_ENG: 'Title ENG', Text_PT: 'Texto PT', Text_ENG: 'Text ENG',
  }, {
    Id: 101, Title_PT: 'AS DOZE COMPETÊNCIAS - Habilidades Comportamentais (Soft Skills)', Title_ENG: 'will soon be available', Text_PT: '<h3>AS DOZE COMPETÊNCIAS - Habilidades Comportamentais (Soft Skills)<br></h3><p>Os gráficos abaixo, apresentam doze competências dividas em três grupos (Competências Interpessoais, Intrapessoais e Estratégicas). Cada competência é composta pela interação de três perfis comportamentais e cada um deles pertence ao seu respectivo centro de inteligência (<strong><span style="color: rgb(153, 138, 0);">Instintivo</span></strong>, <strong><span style="color: rgb(152, 0, 0);">Emocional </span></strong>e <strong><span style="color: rgb(0, 51, 153);">Intelectual</span></strong>).</p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 102, Title_PT: '1.\tCOMPROMISSO COM A EXCELÊNCIA', Title_ENG: 'will soon be available', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">1.<span style="white-space: pre;">\t</span>COMPROMISSO COM A EXCELÊNCIA</span><br></h3><p><span style="letter-spacing: 0.01071em;">Capacidade de gerar soluções de forma bem objetiva, envolvendo criatividade e singularidade em relação a qualidade do trabalho, esforçando-se para melhorar a produtividade, a fim de oferecer os melhores resultados possíveis.</span></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 103, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 104, Title_PT: 'Conflitos', Title_ENG: 'will soon be available', Text_PT: '<p><strong><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Conflitos</span></strong><br></p><p><span style="letter-spacing: 0.01071em;">Sob estresse, você poderá ter alterações, comportamentais e, então, poderá se irritar, quando a tarefa não estiver sendo bem executada, desanimar-se ou até mesmo, isolar-se dos outros.</span></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 105, Title_PT: '2 - RESOLUÇÃO DE CONFLITOS', Title_ENG: 'excluir', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">2.<span style="white-space: pre;">\t</span>RESOLUÇÃO DE CONFLITOS</span><br></h3><p><span style="letter-spacing: 0.01071em;">Capacidade de ouvir atentamente as razões que envolvem os conflitos, considerando os possíveis riscos e</span><span style="letter-spacing: 0.01071em;">&nbsp;</span><span style="letter-spacing: 0.01071em;">exercendo uma postura política e empática a fim de solucioná-los.</span><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 106, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 107, Title_PT: 'Conflitos', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Conflitos</span><br></p><p><span style="letter-spacing: 0.01071em;">Sob estresse, você poderá ter alterações em seus comportamentos e, então, poderá se distanciar do problema que causa o conflito, confrontar os outros ou até mesmo, adiar decisões por imaginar o pior cenário.</span></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 108, Title_PT: '3.\tADAPTABILIDADE', Title_ENG: 'will soon be available', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">3.<span style="white-space: pre;">\t</span>ADAPTABILIDADE</span><br></h3><p><span style="letter-spacing: 0.01071em;">Capacidade de se adaptar a mudanças e novos cenários, encarar imprevistos com naturalidade e agir com versatilidade, entusiasmo, tolerância e flexibilidade.</span></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 109, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 110, Title_PT: 'Conflitos', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Conflitos</span><br></p><p><span style="letter-spacing: 0.01071em;">Sob estresse, você poderá ter alterações em seus comportamentos e, então, poderá tornar-se retraído por causa dos conflitos, ironizar ou até mesmo ficar pessimista diante da insegurança.</span><br></p><p><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 111, Title_PT: '4.\tPROATIVIDADE', Title_ENG: 'will soon be available', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">4.<span style="white-space: pre;">\t</span>PROATIVIDADE</span><br></h3><p><span style="letter-spacing: 0.01071em;">Capacidade de tomar decisões por conta própria agindo com rapidez, ter habilidade de perceber um problema logo no início e solucioná-lo, a fim de atingir os objetivos de forma bem objetiva.</span><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 112, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 113, Title_PT: 'Conflitos', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Conflitos</span><br></p><p><span style="letter-spacing: 0.01071em;">Sob estresse, você poderá ter alterações em seus comportamentos e, então, poderá tornar-se controlador, quando se sentir desrespeitado, manipulador ou até mesmo, deixar de compartilhar informações com os outros.</span><br></p><p><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 114, Title_PT: '5.\tRELACIONAMENTO INTERPESSOAL', Title_ENG: 'will soon be available', Text_PT: '<h3><font color="#353535"><span style="letter-spacing: 0.13923px;">5.<span style="white-space: pre;">\t</span>RELACIONAMENTO INTERPESSOAL</span></font><br></h3><p><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">Capacidade de interagir de forma coerente e inclusiva mesmo diante de conflitos, relacionar-se com empatia e disponibilidade, sempre procurando compartilhar com os outros</span><a style="letter-spacing: 0.01071em;"><span style="color: rgb(53, 53, 53);"> o lado positivo da vida.</span></a><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 115, Title_PT: 'Dinâmico', Title_ENG: 'Dinâmico', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 116, Title_PT: 'Conflitos', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Conflitos</span><br></p><p><span style="letter-spacing: 0.01071em;">Sob estresse, você poderá ter alterações em seus comportamentos e, então, poderá tornar-se retraído devido aos conflitos, exigir reconhecimento dos outros ou até mesmo,&nbsp; utilizar-se de argumentos fascinadores para tentar influenciar e seduzir os outros.</span><br></p><p><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 117, Title_PT: '6.\tORIENTAÇÃO PARA O CLIENTE', Title_ENG: 'will soon be available', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">6.<span style="white-space: pre;">\t</span>ORIENTAÇÃO PARA O CLIENTE</span><br></h3><p><span style="letter-spacing: 0.01071em;">Capacidade de disponibilizar-se de forma acessível, analisar e compreender, objetivamente, as necessidades do outro e executar as demandas necessárias para entregar tudo com excelência.</span><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 118, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 119, Title_PT: 'Conflitos', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Conflitos</span><br></p><p><span style="letter-spacing: 0.01071em;">Sob estresse, você poderá ter alterações em seus comportamentos e, então, poderá irritar-se quando as coisas não estiverem perfeitas e tornar-se inflexível, condicionar relações ou até mesmo, isolar-se quando não compreende objetivamente, aquilo que precisa entregar.</span><br></p><p><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 120, Title_PT: '7.\tDESENVOLVIMENTO DE PESSOAS', Title_ENG: 'will soon be available', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">7.<span style="white-space: pre;">\t</span>DESENVOLVIMENTO DE PESSOAS</span><br></h3><p><span style="letter-spacing: 0.01071em;">Capacidade de identificar as necessidades dos outros, elaborar planos e métodos estruturados para estimular e contribuir com o aprendizado, o desenvolvimento e a atualização profissional da equipe.</span><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 121, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 122, Title_PT: 'Conflitos', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Conflitos</span><br></p><p><span style="letter-spacing: 0.01071em;">Sob estresse, você poderá ter alterações em seus comportamentos e, então, poderá exigir muito das pessoas e tornar-se inflexível, exigir reconhecimento ou até mesmo, questionar em excesso, quando sentir-se inseguro.</span><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 123, Title_PT: '8.\tNEGOCIAÇÃO / PERSUASÃO', Title_ENG: 'will soon be available', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">8.<span style="white-space: pre;">\t</span>NEGOCIAÇÃO / PERSUASÃO</span><br></h3><p><span style="letter-spacing: 0.01071em;">Capacidade de discernir claramente o contexto das situações relacionadas ao cenário do momento, criar alternativas de forma positiva, consensual e </span><span style="letter-spacing: 0.01071em;">&nbsp;</span><span style="letter-spacing: 0.01071em;">flexível, utilizando-se do poder de persuasão e direcionando tudo de forma objetiva, para o alvo que se quer atingir.</span><br></p><p><a><span>.</span></a></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 124, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 125, Title_PT: 'Conflitos', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Conflitos</span><br></p><p><span style="letter-spacing: 0.01071em;">Sob estresse, você poderá ter alterações em seus comportamentos e, então, poderá tornar-se indeciso diante de pressões, tirar proveito das circunstancias para benefício próprio ou até mesmo, demonstrar ansiedade e inquietação quando houver excesso de demandas.</span><br></p><p><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 126, Title_PT: '9.\tINOVAÇÃO / CRIATIVIDADE', Title_ENG: 'will soon be available', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">9.<span style="white-space: pre;">\t</span>INOVAÇÃO / CRIATIVIDADE</span><br></h3><p><span style="letter-spacing: 0.01071em;">Capacidade de perceber necessidades de melhoria, superar situações inesperadas, criar e apresentar soluções inovadoras através de</span><em><span style="letter-spacing: 0.01071em;"> insights</span></em><strong><em><span style="letter-spacing: 0.01071em;"> </span></em></strong><span style="letter-spacing: 0.01071em;">e agir rapidamente para pôr as ideias em prática.</span><br></p><p><strong><span>&nbsp;</span></strong></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 127, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 128, Title_PT: 'Conflitos', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Conflitos</span></p><p><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">Sob estresse, você poderá ter alterações em seus comportamentos e, então, poderá irritar-se quando as coisas não estiverem perfeitas e tornar-se inflexível, desiludir-se ou até mesmo, ficar extremamente inquieto e partir para outras demandas, mesmo sem finalizar as atuais.</span></p><p><br></p><p><span>&nbsp;</span></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 129, Title_PT: '10.\tORIENTAÇÃO PARA RESULTADOS', Title_ENG: 'will soon be available', Text_PT: '<h3><a style=""><font color="#353535"><span style="letter-spacing: 0.13923px; color: rgb(53, 53, 53);">10.<span style="white-space: pre;">\t</span>ORIENTAÇÃO PARA RESULTADOS</span></font><br></a></h3><p><a style="letter-spacing: 0.01071em;"><span style="color: rgb(53, 53, 53);">Capacidade de propor e implementar projetos, influenciar e estimular esforços de uma equipe, através de ações assertivas, direcionando metas, priorizando objetivos e assumir de forma pragmática, o comando das decisões.</span></a><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 130, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 131, Title_PT: 'Conflitos', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Conflitos</span><br></p><p><span style="letter-spacing: 0.01071em;">Sob estresse, você poderá ter alterações em seus comportamentos e, então, poderá tornar-se controlador quando não apoiado ou desrespeitado, manipular pessoas quando não consegue o que quer ou até mesmo, demonstrar superficialidade e falta de foco.</span><br></p><p><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 132, Title_PT: '11.\tPLANEJAMENTO ESTRATÉGICO', Title_ENG: 'will soon be available', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">11.<span style="white-space: pre;">\t</span>PLANEJAMENTO ESTRATÉGICO</span><br></h3><p><span style="letter-spacing: 0.01071em;">Capacidade de analisar de forma estratégica sob vários ângulos, considerar riscos, definir metas tangíveis e mensuráveis e executar as ações alinhadas com o planejamento.</span></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 133, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 134, Title_PT: 'Conflitos', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Conflitos</span><br></p><p><span style="letter-spacing: 0.01071em;">Sob estresse, você poderá ter alterações em seus comportamentos e, então, poderá irritar-se facilmente diante dos riscos eminentes, manipular as situações ou até mesmo, demonstrar insegurança e preocupação, quando o cenário estiver desfavorável.</span><br></p><p><br></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 135, Title_PT: '12.\tVISÃO SISTÊMICA', Title_ENG: 'will soon be available', Text_PT: '<h3>12.<span style="white-space:pre">\t</span>VISÃO SISTÊMICA<br></h3><p>Capacidade de antecipar cenários, visualizar tendências, motivar pessoas para atingir os resultados e estruturar ações ordenadas para atingir a visão.</p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 136, Title_PT: 'Excluir', Title_ENG: 'Delete', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 137, Title_PT: 'Conflitos', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Conflitos</span><br></p><p><span style="letter-spacing: 0.01071em;">Sob estresse, você poderá ter alterações em seus comportamento e, então, poderá tornar-se inflexível e não aceitar as mudanças a se</span><span style="letter-spacing: 0.01071em;">rem feitas, trabalhar excessivamente sem direção ou até mesmo, agir com superficialidade, devido as inúmeras possibilidades que sua imaginação fértil lhe proporciona.</span></p><p><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 138, Title_PT: 'ENERGIA POR ÁREA DE ATUAÇÃO', Title_ENG: 'will soon be available', Text_PT: '<p><span style="letter-spacing: 0.01071em;">O gráfico abaixo, aponta o nível de energia relacionado a cada uma das quatro áreas de atuação.</span></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 139, Title_PT: 'Classificação de sua energia comportamental por área de atuação:', Title_ENG: 'will soon be available', Text_PT: '<h3>Classificação de sua energia comportamental por área de atuação:<br></h3><p>&nbsp; 0&nbsp; &nbsp;à&nbsp; &nbsp;49%  -&nbsp;<span style="letter-spacing: 0.01071em;">baixo desempenho&nbsp;</span></p><p>50  à&nbsp; &nbsp;75% - desempenho satisfatório&nbsp;</p><p>76  à  100% - alto desempenho&nbsp;</p><p><span style="letter-spacing: 0.01071em;">A tríade de perfis relacionados às áreas de atuação são aqueles, que mais se adaptam às </span><em><span style="letter-spacing: 0.01071em;">Soft Skills</span></em><span style="letter-spacing: 0.01071em;"> exigidas nestas respectivas áreas. Quanto maior for o nível de energia indicado no gráfico, mais apto </span><span style="letter-spacing: 0.13923px;">você</span><span style="letter-spacing: 0.01071em;">&nbsp;estará para atuar. Se o nível de energia for menor que 50%, e esta área for relevante para o cargo que você exerce, será necessário desenvolver o </span><em><span style="letter-spacing: 0.01071em;">GAP</span></em><span style="letter-spacing: 0.01071em;">. Aqui, obviamente, não consideramos as habilidades técnicas (as </span><em><span style="letter-spacing: 0.01071em;">Hard Skills</span></em><span style="letter-spacing: 0.01071em;">).</span></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 140, Title_PT: 'Inovação e Criatividade (Visionário, criativo e organizador)', Title_ENG: 'will soon be available', Text_PT: '<h3><a style=""><span style="letter-spacing: 0.13923px; color: rgb(53, 53, 53);">Inovação e Criatividade&nbsp;</span></a></h3><p><a style=""><strong><span style="letter-spacing: 0.13923px; color: rgb(53, 53, 53);">(</span><span style="letter-spacing: 0.13923px; color: rgb(0, 51, 153);">Visionário</span><span style="letter-spacing: 0.13923px; color: rgb(53, 53, 53);">, </span><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">criativo</span><span style="letter-spacing: 0.13923px; color: rgb(53, 53, 53);"> e </span><span style="letter-spacing: 0.13923px; color: rgb(153, 138, 0);">organizador</span><span style="letter-spacing: 0.13923px; color: rgb(53, 53, 53);">)</span></strong></a><strong></strong><br></p><p><a style="letter-spacing: 0.01071em;"><span style="color: rgb(53, 53, 53);">Tem facilidade para criar projetos, atrair novidades e vender ideias. Gosta de se arriscar; quebrar regras e paradigmas, inovar e desenvolver uma visão estratégica. É avesso à rotinas e gosta de ter liberdade para expressar suas ideias. Mas por outro lado, está sempre atento aos detalhes e buscando a melhoria continua.</span></a></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 141, Title_PT: 'Planejamento (Planejador, analítico e organizador)', Title_ENG: 'will soon be available', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">Planejamento&nbsp;</span></h3><p><strong><span style="letter-spacing: 0.13923px;">(</span></strong><span style="color: rgb(0, 51, 153);"><strong><span style="letter-spacing: 0.13923px;">Planejador,</span></strong></span><strong><span style="letter-spacing: 0.13923px;"> </span></strong><span style="color: rgb(0, 130, 153);"><strong><span style="letter-spacing: 0.13923px; color: rgb(0, 51, 153);">analítico</span></strong></span><strong><span style="letter-spacing: 0.13923px;"> e </span></strong><span style="color: rgb(153, 138, 0);"><strong><span style="letter-spacing: 0.13923px;">organizador</span></strong></span><strong><span style="letter-spacing: 0.13923px;">)</span></strong><br></p><p><span style="letter-spacing: 0.01071em;">Tem facilidade em aplicar fórmulas, analisar dados, lidar com aspectos financeiros e resolver problemas com base na lógica. Aprecia fazer análise e diagnóstico e busca compreender e esclarecer questões complexas. É metódico, organizado, sempre analisa os riscos do projeto e costuma estabelecer metas baseando-se em seus conhecimentos especializados.</span><br></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 142, Title_PT: 'Relacionamento (Prestativo, visionário e mediador)', Title_ENG: 'will soon be available', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">Relacionamento&nbsp;</span></h3><p><span style="letter-spacing: 0.13923px;">(</span><strong><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">Prestativo</span></strong><span style="letter-spacing: 0.13923px;">, </span><strong><span style="letter-spacing: 0.13923px; color: rgb(0, 51, 153);">visionário</span></strong><span style="letter-spacing: 0.13923px;"> e </span><strong><span style="color: rgb(153, 138, 0);"><span style="letter-spacing: 0.13923px;">mediador</span></span></strong><span style="letter-spacing: 0.13923px;">)</span><br></p><p><span style="letter-spacing: 0.01071em;">Tem facilidade para desenvolver relacionamentos, trabalhar com pessoas e gerar conexão e harmonia entre elas. Aprecia fazer parte de uma equipe e gosta de compartilhar as tarefas. É inclusivo e persuasivo em relação às pessoas. Percebe o ambiente, gosta de ajudar e se disponibiliza para os outros. Gosta de atuar como mentor e conselheiro, ouvindo, mas também, expressando suas ideias.</span></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 143, Title_PT: 'Execução e Controle (Organizador, comandante e realizador)', Title_ENG: 'will soon be available', Text_PT: '<h3><span style="letter-spacing: 0.13923px;">Execução e Controle&nbsp;</span></h3><p><span style="letter-spacing: 0.13923px; color: rgb(0, 0, 0);">(</span><strong><span style="letter-spacing: 0.13923px; color: rgb(153, 138, 0);">Organizador, comandante </span><span style="font-weight: 400; letter-spacing: 0.13923px;">e </span><span style="letter-spacing: 0.13923px; color: rgb(152, 0, 0);">realizador</span><span style="font-weight: 400; letter-spacing: 0.13923px;">)</span></strong></p><p><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">Tem facilidade para ordenar, estruturar e executar tarefas. </span><a style="letter-spacing: 0.01071em;"><span style="color: rgb(53, 53, 53);">É metódico</span></a><span style="letter-spacing: 0.01071em; color: rgb(53, 53, 53);">, </span><span style="letter-spacing: 0.01071em;">atento aos detalhes, e gosta de ambientes organizados. Prefere que as regras sejam bem definidas e costuma apoiar as pessoas, que o </span><span style="letter-spacing: 0.13923px;">respeita. Tem</span><span style="letter-spacing: 0.01071em;">&nbsp;muita capacidade de delegar e gosta de preservar o </span><em>status quo.&nbsp;</em>É<em>&nbsp;</em><span style="letter-spacing: 0.01071em;">muito competitivo, cria estratégias e procura cumprir os prazos das metas que foram estabelecidas.</span></p>', Text_ENG: '<p>will soon be available</p>',
  }, {
    Id: 144, Title_PT: 'RESUMO DA ANÁLISE PROFISSIONAL', Title_ENG: 'will soon be available', Text_PT: 'Excluir', Text_ENG: 'delete',
  }, {
    Id: 145, Title_PT: 'Perfil Dominante', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Dinâmico</p>',
  }, {
    Id: 146, Title_PT: 'Síntese do seu perfil Dominante', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 147, Title_PT: 'Parceiro de Apoio', Title_ENG: 'will soon be available', Text_PT: '<p>Excluir</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 148, Title_PT: 'Parceiro Complementar', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 149, Title_PT: 'Parceiro ideal a ser modelado a fim de gerar sinergia', Title_ENG: 'will soon be available', Text_PT: '<p>Dinâmico</p>', Text_ENG: '<p>Delete</p>',
  }, {
    Id: 150, Title_PT: 'Título PT', Title_ENG: 'Title ENG', Text_PT: 'Texto PT', Text_ENG: 'Text ENG',
  }, {
    Id: 151, Title_PT: 'Título PT', Title_ENG: 'Title ENG', Text_PT: 'Texto PT', Text_ENG: 'Text ENG',
  }, {
    Id: 152, Title_PT: 'Título PT', Title_ENG: 'Title ENG', Text_PT: 'Texto PT', Text_ENG: 'Text ENG',
  }],
  DynamicContent: [
    {
      Id: 2,
      Title_PT: 'ORGANIZADOR',
      Title_ENG: 'will soon be available',
      Text_PT: '<h3><span style="font-weight: 400; letter-spacing: 0.01071em;">AQUELE QUE ORDENA</span><br></h3>',
      Text_ENG: '<p>will soon be available</p>',
    },
    {
      Id: 3,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: 'É responsável, integro, metódico, detalhista, diligente e disciplinado. Tudo o que faz precisa ser perfeito com base em elevados padrões éticos e também morais. A responsabilidade ou trabalho vem antes da diversão. Tem necessidade de criar rotinas para quase tudo o que se propõe fazer. Aprecia sobremaneira o território pessoal: “minha mesa de trabalho”. Lidera pelo exemplo e se esforça para alcançar o máximo de qualidade. Enxerga o mundo como certo ou errado e leva tudo muito a sério. É controlado nas atitudes, nos ambientes e também nas emoções. É direcionado para executar tarefas, focando no que precisa ser corrigido ou melhorado e não se preocupa em ser admirado pelos outros. Sente prazer em um trabalho bem feito. Limpeza, ordem, rotinas e excelência é sua “marca registrada”.',
      Text_ENG: 'will soon be available',
    },
    {
      Id: 4,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: '<p>•\tDetalhista</p><p>• Autodisciplinado</p><p><span style="letter-spacing: 0.01071em;">•\tMetódico</span></p><p><span style="letter-spacing: 0.01071em;">• Verificador</span><br></p>',
      Text_ENG: '<p>will soon be available</p>',
    },
    {
      Id: 5,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: 'Fica motivado quando se depara com ideias brilhantes e põe a “mão na massa” para executá-las, principalmente se forem ligadas a causas nobres. Fica feliz em fazer a coisa certa, sem se preocupar tanto com as recompensas. Fica motivado quando está diante de uma tarefa onde algo precisa ser corrigido ou melhorado. Motiva-se ainda mais quando participa de processos e ações de melhoria contínua, esforçando-se para alcançar o máximo de qualidade, deixando tudo perfeito.\n\n',
      Text_ENG: 'will soon be available',
    },
    {
      Id: 6,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: 'Seu foco de atenção é direcionado para a execução de tarefas com ênfase naquilo que precisa ser melhorado.  \n\n',
      Text_ENG: 'will soon be available',
    },
    {
      Id: 7,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: 'Entregar tudo o que faz com ordem e excelência.',
      Text_ENG: 'will soon be available',
    },
    {
      Id: 8,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: 'Honestidade, integridade, ordem, qualidade, comprometimento e excelência. Lembre-se: valor é uma sensação de ganho. Durante sua jornada para alcançar objetivos sempre haverá uma força contrária e, se você tiver um valor forte, com certeza, permanecerá determinado em seguir seu caminho.',
      Text_ENG: 'will soon be available',
    },
    {
      Id: 9,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: '<p><strong>PERSISTÊNCIA:</strong></p><p>Capacidade de manter-se constante em algo; determinação.</p>',
      Text_ENG: '<p>will soon be available</p>',
    },
    {
      Id: 10,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: '<p>Prefere comunicar-se de modo formal e cordial; gosta de seguir protocolos e respeita os procedimentos e hierarquias. No seu discurso, não existe algo que seja “meio-termo”. Seus julgamentos são baseados em um profundo senso de “certo” ou “errado”. Assim, usa expressões, como: “isso está errado”; “o certo é”; “tenho que”; “devo”. Ouve atentamente as pessoas pelas quais tem consideração e respeito. Ao se comunicar, pode ter uma postura reservada, se retrair, reter emoções, ter discrição e poderá ter mais facilidade de se expressar por meio da escrita. Trata os outros com respeito, mas tem dificuldade de receber críticas e, quando acontecem, reage rapidamente, de maneira defensiva, voltando-se para dentro de si, tornando-se introspectivo.</p>',
      Text_ENG: '<p>will soon be available</p>',
    },
    {
      Id: 11,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: 'Age com integridade e com responsabilidade, sempre buscando a excelência e a razoabilidade. Procura nas pessoas uma prova de caráter ético, como, boas maneiras, disciplina e respeito. Prefere estar ligado a uma área em que seu esforço possa ser mensurado. Seu senso prático é muito útil nas situações em que os temas principais são a ordem e a organização. \nQuando subordinado, procura executar as atividades sempre primando pela qualidade dentro de um padrão de forma assertiva.  Quando lidera, tem estilo focado na tarefa e nos detalhes.\n',
      Text_ENG: 'will soon be available',
    },
    {
      Id: 12,
      Title_PT: 'PERFECCIONISTA',
      Title_ENG: 'will soon be available',
      Text_PT: '<p>AQUELE QUE INSISTE</p>',
      Text_ENG: '<p>will soon be available</p>',
    },
    {
      Id: 13,
      Title_PT: 'Excluir',
      Title_ENG: 'Deletar',
      Text_PT: '<p>Age com tendências e forte inclinação a separar as coisas em “boas” e “más”, “corretas” e “incorretas”, “certas” e “erradas”. Se preocupa muito com as “formalidades”, a “ordem” e se fixa demais nos detalhes. Tem dificuldade de perceber que existem outras maneiras de executar a tarefa e por esta razão torna-se inflexível.</p>',
      Text_ENG: '<p>will soon be available</p>',
    },
    {
      Id: 14,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: '“O mundo é imperfeito e estou aqui para corrigi-lo. Preciso ser bom e perfeito para ser merecedor”.\n\n',
      Text_ENG: 'will soon be available',
    },
    {
      Id: 15,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: 'Durante um diálogo, uma simples sugestão pode ser entendida como crítica. Em tal situação, reage defensivamente, tentando minimizar os erros. Deixa claro aos outros seus ressentimentos e, como internaliza a raiva, deixa de perceber muitas coisas que estão acontecendo ao seu redor. Pode tornar-se inflexível e não costuma “dar ouvidos” para aqueles que julga serem irresponsáveis.',
      Text_ENG: 'will soon be available',
    },
    {
      Id: 16,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: '<p>Pode tornar-se exigente e inflexível, com dificuldades em se relacionar com pessoas que demonstrem irresponsabilidade e desorganização. Tem necessidade exagerada de pôr as coisas em ordem e é intolerante com as pessoas que possuem padrões inferiores ao seu, deixando-as ansiosas e nervosas. Sua energia é drenada pela influência do sabotador perfeccionista na busca constante da perfeição, levando o indivíduo a constantes frustrações. Reprime desejos, impulsos e não costuma compartilhar suas conquistas, além disso, têm dificuldades em reconhecê-las.</p>',
      Text_ENG: '<p>will soon be available</p>',
    },
    {
      Id: 17,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: '<p>•\tExigente</p><p>•\tIntolerante</p><p>•\tInflexível</p><p>•\tRígido</p>',
      Text_ENG: '<p>will soon be available</p>',
    },
    {
      Id: 18,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: '<p>•\tDificuldade em considerar alternativas.</p><p>•\tFica irritado facilmente com mudanças repentinas&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; de&nbsp;<span style="letter-spacing: 0.01071em;">rotinas ou atividades.</span></p><p>•\tSentimento de culpa por cometer erros, o que pode levá-lo&nbsp; &nbsp; a protelar ações e a se autopunir.</p><p>•\tTendência à autocrítica e ao autojulgamento.</p><p>•\tTendência em buscar papéis mais técnicos e de menor&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;liderança.</p><p>•\tPoderá torna-se crítico, inflexível e duro com a equipe.</p>',
      Text_ENG: '<p>will soon be available</p>',
    },
    {
      Id: 20,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: '<p>IRRITAÇÃO: Um sentimento que costuma implodir de forma incontrolada em consequência ou fruto da raiva reprimida e da indignação pelas coisas não serem como deveriam ser.</p>',
      Text_ENG: '<p>will soon be available</p>',
    },
    {
      Id: 21,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: 'RESSENTIMENTO: Pensamento repetitivo, fruto da raiva reprimida daquele que não foi “correto” consigo e então, fica remoendo as coisas por muito tempo.\n\n',
      Text_ENG: 'will soon be available',
    },
    {
      Id: 22,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: 'FORMAÇÃO REATIVA: Oposição ou reação ao “mau” comportamento, controle dos impulsos, anseios e desejos do instinto. Aparece como uma forma corporal, tentando abafar e controlar os impulsos vindos da região logo abaixo do umbigo (energia visceral).',
      Text_ENG: 'will soon be available',
    },
    {
      Id: 23,
      Title_PT: 'Excluir',
      Title_ENG: 'Delete',
      Text_PT: 'CRÍTICA',
      Text_ENG: 'will soon be available',
    },
  ],
  Images: [
    {
      Id: 1,
      Src: '36',
      Alt_PT: 'Alt em Português',
      Alt_ENG: 'English alt',
    },
    {
      Id: 2,
      Src: '37',
      Alt_PT: 'Alt em Português',
      Alt_ENG: 'English alt',
    },
    {
      Id: 3,
      Src: '16',
      Alt_PT: 'Alt em Português',
      Alt_ENG: 'English alt',
    },
    {
      Id: 4,
      Src: '38',
      Alt_PT: 'Alt em Português',
      Alt_ENG: 'English alt',
    },
    {
      Id: 5,
      Src: '18',
      Alt_PT: 'Alt em Português',
      Alt_ENG: 'English alt',
    },
    {
      Id: 6,
      Src: '34',
      Alt_PT: 'Arquivo não encontrado',
      Alt_ENG: 'File not found',
    },
  ],
  Success: true,
} as IReport;

export default fakeData;
