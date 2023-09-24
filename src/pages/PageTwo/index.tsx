import React from "react";
import PageText from "../../components/PageText";

const Topics = [
  "O impacto das redes sociais na disseminação de notícias falsas.",
  "Automatização da produção e propagação de conteúdo falso por IA.",
  "Velocidade de disseminação das fake news automatizadas.",
];

const PageTwo: React.FC = () => {
  return (
    <PageText
      title="Propagação de Fake News"
      description={Topics}
      imgUrl="/fakenews.jpg"
      position="right"
    />
  );
};

export default PageTwo;
