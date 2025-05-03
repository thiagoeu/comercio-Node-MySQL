import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/produto.route.js"];

const doc = {
  info: {
    title: "API Ecommerce",
    version: "1.0.0",
    description:
      "Esta API foi desenvolvida para gestão de produtos e usuarios de uma plataforma de e-commerce.",
  },
  host: "localhost:3000",
  basePath: "/api",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Produto",
      description: "Endpoints",
    },
  ],
  components: {
    schemas: {
      Produto: {
        type: "object",
        properties: {
          nome: { type: "string" },
          preco: { type: "number" },
        },
      },
    },
  },
};

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc).then(
  async () => {
    const appModule = await import("./index.js");
  }
);
