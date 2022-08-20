export abstract class S3Config {
    static bucketName          = process.env.BUCKET_NAME!;
    static region              = process.env.DEFAULT_REGION!;
    static accessKeyId         = process.env.AWS_ACCESS_KEY_ID;
    static secretAccessKey     = process.env.AWS_SECRET_ACCESS_KEY;
}