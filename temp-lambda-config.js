module.exports = {
  profile: '', // load your AWS credentials from a custom profile
  region: 'us-west-2', //the region of your Lambda function
  handler: 'index.handler', //the name of the handler function: index because the main file is index.js
  role: 'arn:aws:iam::YOURACCOUNTHERE:role/lambda_basic_execution', // the Lambda role
  functionName: '', //name
  timeout: 10,
  memorySize: 128,
  publish: true, // this creates a new version of your Lambda function every time you update it
  runtime: 'nodejs', // for node 10, otherwise use 'nodejs4.3'
}

//see other options here: https://github.com/ThoughtWorksStudios/node-aws-lambda