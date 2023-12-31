import React from "react";
import PageText from "../../components/PageText";

const Topics = [
  "A necessidade de verificar a veracidade das notícias antes de compartilhá-las.",
  "O impacto positivo da checagem e denúncia na redução da propagação de notícias falsas.",
];

const PageFive: React.FC = () => {
  return (
    <PageText
      title="Importância da Checagem e Conscientização"
      description={Topics}
      imgUrl="/image3.jpg"
      position="right"
    />
  );
};

export default PageFive;
