import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import {config} from '../../config';

interface Args extends pulumi.Inputs {
}

export default class AWSProviderNetworking extends pulumi.ComponentResource {

    public readonly networkingProvider : aws.Provider

    constructor(args: Args, opts?: pulumi.ComponentResourceOptions){
        super('dedrive:networking', 'aws-provider', args, opts);
        const generalOpt: pulumi.CustomResourceOptions = { parent: this };
        // console.log(config.all_aws_account.degital_cloud_networking.aws_access_key)
        // console.log(config.all_aws_account.degital_cloud_networking.aws_secret_key)
        this.networkingProvider = new aws.Provider(
            "aws-provider-networking", {
                accessKey: config.second_aws_account.degital_cloud_networking.aws_access_key,
                secretKey: config.second_aws_account.degital_cloud_networking.aws_secret_key,
                region: "ap-southeast-1",
                
            }, { ...generalOpt }
        )
    }
}