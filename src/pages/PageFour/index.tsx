import React from "react";
import PageText from "../../components/PageText";

const Topics = [
  "Como denunciar perfis que propagam fake news.",
  "Canais de denúncia governamentais e em redes sociais populares.",
  "Casos emblemáticos de fake news, como o do Papa Francisco.",
];

function PageFour() {
    return (
        <PageText
            title="Denúncia e Consequências"
            description={Topics}
            imgUrl="/image2.jpg"
            position="right" />
    );
}

export default PageFour;
