import React from "react";
import { Card } from "@tremor/react";
import DonutGraphic from "../../components/Graphics/DonutGraphic";
import BarGraphic from "../../components/Graphics/BarGraphic";

const PageSix: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Estatísticas
        </h1>
      </div>
      <div className="w-full h-[90%] mt-4 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8 max-h-max items-stretch w-full">
          <div className="w-full h-full">
            <Card className="bg-gray-50 h-full w-full flex justify-between flex-col">
              <div className="h-full w-full">
                <h3 className="text-black text-2xl font-medium">
                  Capacidade Identificação de Desinformação
                </h3>
                <div className="flex items-center justify-center h-full">
                  <DonutGraphic />
                </div>
              </div>

              <div className="block">
                <p className="mb-2 text-base font-semibold text-gray-900">
                  Legendas:
                </p>
                <ul className="max-w-md space-y-1 text-gray-700 list-inside">
                  <li className="flex items-center ">
                    <span className="flex w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span>Identificaram</span>
                  </li>
                  <li className="flex items-center ">
                    <span className="flex w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    <span>Não Identificaram</span>
                  </li>
                </ul>
                <p className="mt-4">
                  Fonte:
                  <a
                    href="https://fastcompanybrasil.com/tech/inteligencia-artificial/fake-news-criadas-por-ia-sao-mais-convincentes-do-que-as-feitas-por-humanos/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-900 hover:underline ml-1"
                  >
                    Fast Company Brasil
                  </a>
                </p>
              </div>
            </Card>
          </div>
          <div className="w-full h-full">
            <Card className="bg-gray-50 h-full w-full">
              <h3 className="text-black text-2xl font-medium">
                Compartilhamento de Fake News
              </h3>
              <BarGraphic />
              <div>
                <p className="mt-4">
                  Fonte:
                  <a
                    href="https://www.consumidormoderno.com.br/2018/05/04/relacao-dos-brasileiros-com-fake-news/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-900 hover:underline ml-1"
                  >
                    Consumidor Moderno
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSix;
