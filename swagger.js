import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/user.route.js", "./routes/produto.route.js"];

const doc = {
  info: {
    title: "API - Ecommerce",
    description: "API para gerenciamento de produtos e usuários",
  },
  host: "localhost:3000",
  schemes: ["http"],
  tags: [
    // Defina todas as tags AQUI (apenas uma vez)
    {
      name: "Produtos",
      description: "Endpoints relacionados aos produtos",
    },
    {
      name: "Usuários",
      description: "Endpoints relacionados aos usuários",
    },
  ],
};

swaggerAutogen()(outputFile, endpointsFiles, doc);
