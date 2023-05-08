import * as dotenv from "dotenv";

dotenv.config();

interface IConfig {
	first_aws_account: {
        degital_cloud_management: {
            aws_access_key: string,
            aws_secret_key: string
        } 
    };
    second_aws_account: {
        degital_cloud_networking: {
            aws_access_key: string,
            aws_secret_key: string
        } 
    }
}

export const config: IConfig = {
	first_aws_account: {
		degital_cloud_management: {
            aws_access_key: process.env.FIRST_AWS_ACCESS_KEY_ID||'UNDIFINED ACCESS KEY',
            aws_secret_key: process.env.FIRST_AWS_SECRET_ACCESS_KEY||'UNDIFINED SECRET KEY'
        }
	},
    second_aws_account: {
		degital_cloud_networking: {
            aws_access_key: process.env.SECOND_AWS_ACCESS_KEY_ID||'UNDIFINED ACCESS KEY',
            aws_secret_key: process.env.SECOND_AWS_SECRET_ACCESS_KEY||'UNDIFINED SECRET KEY'
        }
	}
}