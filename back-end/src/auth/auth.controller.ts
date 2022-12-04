import { Body, Controller } from "@nestjs/common";
import { Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { AuthDto } from "src/auth/dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        console.log({
            dto,
        })
        return this.authService.signup(dto);
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}