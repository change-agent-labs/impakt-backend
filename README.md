# Change Agent Backend App

## Very important about Amplify CLI

Never, ever, in any circumstances call `amplify delete` :)

## Tools

- `graphql-playground` if you like standalone. Alternative: `amplify mock api`.

## Prerequisites

- AWS Account with appropriate permissions to create the related resources
- NodeJS with NPM
- AWS CLI (`pip install awscli --upgrade --user` or `brew upgrade awscli`)
- AWS Amplify CLI (configured for a region where AWS AppSync is available) (`npm install -g @aws-amplify/cli`) **NOTE** for mac users - call before: `brew install zeromq` `brew install pkgconfig`
- Keys for multiple accounts configured according to documantation: `https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-multiple-profiles`
- git-flow tool might be helpful (`npm install -g git-flow`)

## Manual operator steps need to be done before first run

- Create following params in SSM Parameter Store:
- `change-agent-admin-pass` - default pass for Admins (not for prod)
- `change-agent-service-email` - service email for notifications

- Please keep in mind that AWS SES requires you to verify the email address specified as the Source in the params before it can be used as a sender.

## Architecture

![Alt text](__docs__/change-agent-arch-1.jpg 'diagram')

## Security

Currently most of security features are turned off or not implemented. From Graphql perespective there is `dev-key` API KEY and `@auth(rules: [{allow: public}])` directive to make operation accessible for not logged-in user.

List of other misses:

- DynamoDB encryption
- `@auth` narrowing permissions to certain Cognito groups or users
- End to End encryption in channels (Public Key)
- End to End encryption of events (Symmetric Encr)

## DynamoDB design

AppSync supports only one table per one model design. According to AWS it's far away from optimal one table approach. However revriting generated Cloudformation files seems to be futile, as it breakes some AppSync annotation functionalities like @Connection or Unions.

## Environments

Prod and Dev envs are deployed automatically using AWS Amplify Console.
As long as, API is "protected" using API KEY remember to add `x-api-key` param to POST header. When using JWT authorization use `Authorization` param.

**NOTE**: `amplify delete env dev` == `amplify delete` :/ do not mistake it with `amplify remove env dev`.

### MST - associated with master branch

```txt
GraphQL endpoint: https://ma3fzjopozfajlhnnpxqj4kfka.appsync-api.eu-west-1.amazonaws.com/graphql
GraphQL API KEY: da2-extz3zc4gvc4lp3v7moguekdhu
UserPoolId: eu-west-1_FFPlCzHj6
AppClientIDWeb: 6cuofthvg8fbautu8ekk46vuqk
```

**Obtaining JWT Token** To call any Graphql you need to provide valid JWT Access Token in your request Header. It can be received using `amplify-js` lib. However for some dev tasks you may have a need to call API manually using tools like `GraphQL Playground`. To do so you need to get somehow this token. Here comes dev app from `devWebClient`. Running procedure:

- go to `__tools__/devWebClient/`
- edit `src/environments/environment.ts` with UserPoolId and UserPoolClientID
- call `npm install`
- call `npm run start`
- open `http://localhost:4200`
- follow instructions
- after successful login you'll land on `http://localhost:4200/private` page
- copy `access-token`
- fill http Header with following data (bare in mind that you shouldn't provide any prefix like `Bearer or JWT` before token) and call Grapqhql endpoint with any sample query:

```json
{
  "Content-Type": "application/json",
  "Authorization": "copied access-token"
}
```

- If you receive `Token has expired.` error just click `Refresh Token` button in app's private page.
- SMSs are cheap but still not free of charge. Try not to log out or stop app frequently. As long as it stores session you can use your access-tokens, without need of receiving additional login SMSs.
- In each dev environmnent SMSes are not sent. Instead use `111111` as a passphrase.

## Additional resurces

- [Ideas behind solution](/__docs__/ideas.md)
- [How to develop with Amplify Framework](/__docs__/howto.md)
- [GraphQL sample](/__docs__/graphql.md)
- [Hacking Amplify](__docs__/hacking.md)
- [Troubleshooting](/__docs__/bug.md)
