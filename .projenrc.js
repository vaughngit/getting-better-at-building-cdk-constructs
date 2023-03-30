const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'awsalvin',
  authorAddress: 'awsalvin@amazon.com',
  cdkVersion: '2.66.1',
  defaultReleaseBranch: 'main',
  name: 'pipeline-with-time-windows',
  repositoryUrl: 'https://github.com/awsalvin/pipeline-with-time-windows.git',

  deps: ['@cdklabs/cdk-codepipeline-extensions'],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
   devDeps: ['@types/aws-lambda', ],             /* Build dependencies for this module. */
   bundledDeps: ['aws-sdk'],
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();