import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { TokenService } from './token/token.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    UsersModule,
    JwtModule.register({
      secret: 'holajajajaja1541232',
      signOptions:{
        expiresIn: 86400
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, TokenService],
  exports: [TokenService]
})
export class AuthModule {}
