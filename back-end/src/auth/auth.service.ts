import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";

@Injectable({})
export class AuthService{
constructor(private prisma: PrismaService) {}
    
    async signup(dto: AuthDto) {
        //generar el hash de contraseña
        const hash = await argon.hash(dto.password);

        //guardar el usuario en la db
        const user = await this.prisma.user.create({
            data: {
                userName: "prueba",
                email: dto.email,
                hash,
                likesCount: 0,
                postCount: 0,
            },
        });
 
        delete user.hash
        //retornar el usuario guardado
        return user;
    }

    signin() {
        return 'Logueado'
    }
}