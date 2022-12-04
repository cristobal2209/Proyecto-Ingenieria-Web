import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ImageModule } from './image/image.module';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, ImageModule, PublicationModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
