#Blank AWS Lambda Bot

##Instructions
There's a more detailed writeup [here.](https://medium.com/@emckean/create-a-simple-free-text-driven-twitterbot-with-aws-lambda-node-js-b80e26209f5#.fwl8p9ikf)

Prerequisites: I assume you have node and npm installed. Need help installing either? [Here's a link for you.](http://blog.npmjs.org/post/85484771375/how-to-install-npm)

1. Clone this repo
2. Run `npm install`
3. Open in your favorite editor.

##Configuration

To run this bot yourself you will need Twitter and AWS credentials.

#####For Twitter, you will need:

* a Twitter account
* a Twitter application (not the same as a Twitter account; apply for one at apps.twitter.com)
* a Consumer Key, a Consumer Secret, an Access Token, and your Access Token Secret

Put this information in the temp-config.js file, and rename it to config.js.

######For AWS, you will need:

* an AWS account (you'll need to know your AWS account number)
* a new AWS user for this bot (and its Access Key ID and the Secret Access Key)
* the [AWS CLI installed](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
* a local profile configured to use your new user's credentials

Attach the AWSLambdaFullAccess Policy to your new user. [Need help setting up an AWS account or user?](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) 

######Configuring for Lambda

Open the temp-lambda-config.js file and update the 'profile', 'role', 'region', and 'function name' fields. Rename this file to lambda-config.js.

If you change the name of the index.js file, you'll need to update it in both the lambda-config.js file and the gulpfile. 

######Tests
There are tests for the functions in index.js in the tests/test.js file. Run them with `npm test`.

##Source Data

To add text for your bot to tweet, add it in the botfiles/sample-text.js directory.

IMPORTANT: you must install the botfiles folder as a local module before deploying: 

`npm install --save ./YOURPATH/botfiles`

If you make changes, you must update the installation: 

`rm -rf node_module/botfiles && npm install /YOURPATH/botfiles`

##Deploy

To deploy, run the tests (and also `gulp lint`). When you're happy with that output, run `gulp deploy`.

##Lambda
Your function will now be available in the Lambda console! You can configure a test event there (use '{}') and try it out! 

You can also set up your bot to run on a schedule using the "Event Sources" tab in the Lambda function console. 

##Thank Yous
Thanks to [Darius Kazemi](https://github.com/dariusk) for the wordfilter module and for the .pick function. Thanks to [Thoughtworks](https://github.com/ThoughtWorksStudios) for the wonderful [node-aws-lambda](https://github.com/ThoughtWorksStudios/node-aws-lambda) module. Thanks also to Allison Parrish and David Celis for reviewing; all errors remain the exclusive property & reponsibility of the author. :-)
