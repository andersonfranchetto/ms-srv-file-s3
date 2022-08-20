import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { UploadFileS3 } from "../services/UploadFileS3";
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { File } from "../models/File";
import { DeleteFileS3 } from "../services/DeleteFileS3";

@Resolver()
export class S3Resolver {
    private _serviceUpload = new UploadFileS3();
    private _serviceDelete = new DeleteFileS3();

    @Query(() => String)
    async init() {
        return "Hello World!"
    }

    @Authorized()
    @Mutation(() => File)
    async uploadFile(@Arg("file", () => GraphQLUpload) file: FileUpload) {
        return await this._serviceUpload.singleFileUploadS3(file);
    }

    @Authorized()
    @Mutation(() => Boolean)
    async deleteFile(@Arg("filename") filename: string) {
        return await this._serviceDelete.deleteFile(filename);
    }
}
