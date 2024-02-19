import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {
        // this.authService.test()
    }

    // POST /auth/signup
    @Post('signup')
    signup() {
        // return 'I am signed up';
        // return {msg: 'Hello' };
        return this.authService.signup();
    }
    
    @Post('signin')
    sigin() {
        // return 'I am signed in';
        return this.authService.signin();
    }
}