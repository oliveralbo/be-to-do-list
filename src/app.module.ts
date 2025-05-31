import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
      isGlobal: true,
    }),

    // GraphQL
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),

    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const isProd = process.env.NODE_ENV === 'production';

        if (isProd) {
          return {
            type: 'postgres',
            url: process.env.DATABASE_URL,
            synchronize: true,
            autoLoadEntities: true,
          };
        }

        return {
          type: 'postgres',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT || '5432'),
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),

    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
