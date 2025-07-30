import { AppModule } from "./app.Module";
import { NestFactory } from "@nestjs/core";

const start = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
};
start();
