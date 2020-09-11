import { JwtOptionsFactory, JwtModuleOptions } from "@nestjs/jwt";

export class JwtConfigService implements JwtOptionsFactory {
    createJwtOptions(): JwtModuleOptions {
        return {
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: process.env.JWT_EXPIRES_IN }
        }
    }
}