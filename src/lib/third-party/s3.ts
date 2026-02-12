import { _Object } from "@aws-sdk/client-s3";

const bucket = process.env.S3_BUCKET;
const region = process.env.S3_BUCKET_REGION;

export function getObjectPublicURL(object: _Object) {
	return `https://${bucket}.s3.${region}.amazonaws.com/${object.Key}`;
}
