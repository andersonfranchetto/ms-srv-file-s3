import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class File {

    @Field()
    ETag: String

    @Field()
    Location: String

    @Field()
    key: String

    @Field()
    Bucket: String
}