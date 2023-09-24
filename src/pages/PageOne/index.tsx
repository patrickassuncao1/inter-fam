import React from "react";
import PageText from "../../components/PageText";

const Topics = [
  "A ascensão da inteligência artificial no mercado.",
  "Polêmicas em torno do uso ético da IA.",
  "O papel da IA na propagação de fake news.",
];

const PageOne: React.FC = () => {
  return (
    <PageText
      title="Introdução"
      description={Topics}
      imgUrl="/fakenews.jpg"
      position="left"
    />
  );
};

export default PageOne;
