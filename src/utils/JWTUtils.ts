import { verify, sign } from "jsonwebtoken";
import { User } from "../interfaces/User";

export abstract class JWTUtils {
    static generateToken = async (user: User) => {
        return sign(user, process.env.GLOBAL_SALT_KEY!, { expiresIn: "1d" });
    }

    static decodeToken = (token: string) => {
        return verify(token, process.env.GLOBAL_SALT_KEY!);
    }
}
