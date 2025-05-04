import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/produto.route.js", "./routes/user.route.js"];

const doc = {
  info: {
    title: "API Ecommerce",
    version: "1.0.0",
    description:
      "Esta API foi desenvolvida para gestão de produtos e usuarios de uma plataforma de e-commerce.",
  },
  host: "localhost:3000",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Produto",
      description: "Endpoints",
    },
    {
      name: "Usuario",
      description: "Endpoints",
    },
  ],
  components: {
    schemas: {
      Produto: {
        type: "object",
        properties: {
          name: { type: "string" },
          price: { type: "number" },
          description: { type: "string" },
          category: { type: "string" },
          product_stock: { type: "number" },
          product_code: { type: "string" },
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
