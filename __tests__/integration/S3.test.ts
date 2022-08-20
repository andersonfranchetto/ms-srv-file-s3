import { S3Resolver } from "../../src/resolvers/S3Resolver"
import { User } from "../../src/interfaces/User";
import fs from "fs";

describe('Tests from resolver S3', () => {
    const resolver = new S3Resolver();

    it('Should return hello world!', async () => {
        const result = await resolver.init();

        expect(result).toBe('Hello World!');
    })

    it('Should insert and delete image from amazon s3', async () => {

        const filename = "../utils/images/hulkbuster.jpg";

        const user: User = {
            id: 1,
            nome: "Anderson Franchetto",
            tipo: "GESTOR",
            email: "anderson.franchetto@gmail.com",
            avatar_url: ""
        }

        var readStream = fs.createReadStream(filename);

        console.log(readStream);


    })
})
