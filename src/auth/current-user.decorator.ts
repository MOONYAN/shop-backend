import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { ValidUser } from "./interface/valid-user.interface";

export const CurrentUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest();
        const passUser = req.user;
        return passUser as ValidUser;
    }
)