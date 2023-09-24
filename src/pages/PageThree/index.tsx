import React from "react";
import PageText from "../../components/PageText";

const Topics = [
  "Necessidade de um esforço conjunto para prevenir a propagação de fake news.",
  "Sinais de perfis automatizados: alta taxa de postagem, nomes semelhantes, data de criação igual.",
  "Identificação de bots de fake news seguindo uns aos outros.",
];

const PageThree: React.FC = () => {
  return (
    <PageText
      title="Prevenção de Fake News"
      description={Topics}
      imgUrl="/image1.png"
      position="right"
    />
  );
};

export default PageThree;


