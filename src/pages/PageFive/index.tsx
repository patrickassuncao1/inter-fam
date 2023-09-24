import React from "react";
import PageText from "../../components/PageText";

const Topics = [
  "A necessidade de verificar a veracidade das notícias antes de compartilhá-las.",
  "O papel do público na prevenção da propagação de fake news.",
  "O impacto positivo da checagem e denúncia na redução da propagação de notícias falsas.",
];

function PageFive() {
    return (
        <PageText
            title="Importância da Checagem e Conscientização"
            description={Topics}
            imgUrl="/image3.jpg"
            position="right" />
    );
}

export default PageFive;



