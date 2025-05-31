if (!globalThis.crypto) {
  Object.defineProperty(globalThis, 'crypto', {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    value: require('crypto'),
  });
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://fe-to-do-list-bm4al387z-oliveralbos-projects.vercel.app/',
      'http://localhost:5173',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
