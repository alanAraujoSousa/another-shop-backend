import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local']
    }),
    UserModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
