const cryptoSecureRandomDigit = require('crypto-secure-random-digit');
const AWS = require('aws-sdk');

// Create a new Pinpoint object.
const sns = new AWS.SNS();

// Get Pinpoint Project ID from environment variable
// var poinpointProjectID = process.env.PINPOINT_PROJECT_ID;

// Send secret code over SMS via Amazon Simple Notification Service (SNS)
// Requirements: Permission for this function to publish to SNS
async function sendSMSviaSNS(phoneNumber, secretLoginCode) {
  const params = {
    Message: `Change Agent: ${secretLoginCode}`,
    PhoneNumber: phoneNumber,
  };
  await sns.publish(params).promise();
}

// Main handler
exports.handler = async event => {
  let secretLoginCode;
  if (!event.request.session || !event.request.session.length) {
    const phoneNumber = event.request.userAttributes.phone_number;
    // This is a new auth session
    // Generate a new secret login code and text it to the user
    secretLoginCode = cryptoSecureRandomDigit.randomDigits(6).join('');
    await sendSMSviaSNS(phoneNumber, secretLoginCode); // use SNS for sending SMS
  } else {
    // There's an existing session. Don't generate new digits but
    // re-use the code from the current session. This allows the user to
    // make a mistake when keying in the code and to then retry, rather
    // the needing to e-mail the user an all new code again.
    const previousChallenge = event.request.session.slice(-1)[0];
    const secret = previousChallenge.challengeMetadata.match(/CODE-(\d*)/)[1];
    secretLoginCode = secret;
  }
  const eventResponse = event;
  // This is sent back to the client app
  eventResponse.response.publicChallengeParameters = {
    phone: event.request.userAttributes.phone_number,
  };
  // Add the secret login code to the private challenge parameters
  // so it can be verified by the "Verify Auth Challenge Response" trigger
  eventResponse.response.privateChallengeParameters = { secretLoginCode };
  // Add the secret login code to the session so it is available
  // in a next invocation of the "Create Auth Challenge" trigger
  eventResponse.response.challengeMetadata = `CODE-${secretLoginCode}`;
  return eventResponse;
};
