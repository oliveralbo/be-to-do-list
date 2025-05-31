import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
if (!globalThis.crypto) {
  Object.defineProperty(globalThis, 'crypto', {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    value: require('crypto'),
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
