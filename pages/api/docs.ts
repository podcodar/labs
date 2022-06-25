// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSwagger } from "next-swagger-doc";

const swaggerHandler = withSwagger({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PodCodar API Docs",
      version: "0.1.0",
    },
  },
  apiFolder: "pages/api",
});
export default swaggerHandler();
