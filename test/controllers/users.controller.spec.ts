import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { databaseConfig } from '../../src/config/configuration';
import { SequelizeConfigService } from '../../src/config/sequelizeConfig.service';
import { UsersModule } from '../../src/users/users.module';

const mockedUser = {
  username: 'Andrey',
  email: 'andrey@gmail.com',
  password: 'andrey1234',
};

describe('Users Controller', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRootAsync({
          imports: [ConfigModule],
          useClass: SequelizeConfigService,
        }),
        ConfigModule.forRoot({
          load: [databaseConfig],
        }),
        UsersModule,
      ],
    }).compile();

    app = testModule.createNestApplication();
    await app.init();
  });
});
