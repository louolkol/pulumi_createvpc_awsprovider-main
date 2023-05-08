import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import * as eks from "@pulumi/eks";
// import AWSProviderNetworking from "./aws_providers/Network/aws_providers";


import AWSProviderManagement from "./aws_providers/management/aws_providers";
import AWSProviderNetworking from "./aws_providers/Network/aws_providers";


/* ========== AWS Infrastructure -- AWS Provider ========== */

const awsProviderManagement = new AWSProviderManagement({});
const awsProviderNetworking = new AWSProviderNetworking({});



// const vpc = new awsx.ec2.Vpc("vpc", {
//     cidrBlock: "10.0.0.0/16",
//     dependsOn: awsProviderManagement,
// 	provider: awsProviderManagement.managementProvider,
// });


// Create a VPC for our cluster with the specific provider.
const vpc = new awsx.ec2.Vpc("vpc", {
    cidrBlock: "10.0.0.0/16"},{
    provider: awsProviderManagement.managementProvider
});


// Create s3 bucket by another provider
const bucket = new aws.s3.Bucket("my-bucket", {
    acl: "private",
    tags: {
        Environment: "Dev",
        Name: "My bucket2233a",
    },
}, {
    provider: awsProviderNetworking.networkingProvider
});
