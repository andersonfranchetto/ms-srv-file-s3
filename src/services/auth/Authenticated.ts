import { AuthChecker, ResolverData } from "type-graphql";

import { Context } from "../../interfaces/Token";
import { JWTUtils } from "../../utils/JWTUtils";

export const customAuthChecker: AuthChecker<Context> = (
    { root, args, context, info },
    roles,
) => {
    const decodedToken = JWTUtils.decodeToken(context.token);

    if (decodedToken) {
        return true;
    } else {
        throw new Error("Token de acesso inválido ou inexistente!")
    }

};