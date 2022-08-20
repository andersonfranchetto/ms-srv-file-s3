import aws, { S3 } from "aws-sdk";
import { FileUpload } from "graphql-upload";
import { v4 } from "uuid";
import { S3Config } from "../configs/S3Config";

export class UploadFileS3 {
    private client: S3;

    constructor() {
        this.client = new aws.S3({ region: S3Config.region, });
    }

    async singleFileUploadS3(file: FileUpload) {

        const { createReadStream, filename } = await file;

        const fileStream = createReadStream();

        const paramsS3 = {
            Bucket: S3Config.bucketName,
            Body: fileStream,
            Key: `${v4()}_${filename}`,
        }

        const data = await this.client.upload(paramsS3).promise();

        return data;
    }
}