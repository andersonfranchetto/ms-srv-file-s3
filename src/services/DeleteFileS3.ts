import aws, { S3 } from 'aws-sdk';
import { S3Config } from '../configs/S3Config';

export class DeleteFileS3 {
    private client: S3;

    constructor() {
        this.client = new aws.S3({ region: 'us-east-1', });
    }

    async deleteFile(filename: string): Promise<Boolean> {
        await this.client
            .deleteObject({
                Bucket: S3Config.bucketName,
                Key: filename,
            })
            .promise();

        return true;
    }
}