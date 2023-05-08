import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import {config} from '../../config';

interface Args extends pulumi.Inputs {
}

export default class AWSProviderManagement extends pulumi.ComponentResource {

    public readonly managementProvider : aws.Provider

    constructor(args: Args, opts?: pulumi.ComponentResourceOptions){
        super('dedrive:management', 'aws-provider', args, opts);
        const generalOpt: pulumi.CustomResourceOptions = { parent: this };
        // console.log(config.all_aws_account.degital_cloud_networking.aws_access_key)
        // console.log(config.all_aws_account.degital_cloud_networking.aws_secret_key)
        this.managementProvider = new aws.Provider(
            "aws-provider-management", {
                accessKey: config.first_aws_account.degital_cloud_management.aws_access_key,
                secretKey: config.first_aws_account.degital_cloud_management.aws_secret_key,
                region: "ap-east-1",
                
            }, { ...generalOpt }
        )
    }
}