import { AttributeType, Table } from '@aws-cdk/aws-dynamodb';
import * as cdk from '@aws-cdk/core';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new Table(this, "items", {
      partitionKey: {
        name: "itemId",
        type: AttributeType.STRING,
      },
      tableName: "items",
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
  }
}

const app = new cdk.App();
new HelloCdkStack(app, "HelloCdkStack");
app.synth();
