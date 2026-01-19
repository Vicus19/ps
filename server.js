// This is the value you copied from the previous step.
const myNpsso = "ytRANQi9XCazRZ6NsTFYDP39wUAOsNIOnN2Dcp7yKPpb5iXCVXfdu8bzwVzGzyKT";

// We'll exchange your NPSSO for a special access code.
const accessCode = await exchangeNpssoForAccessCode(npsso);

// 🚀 We can use the access code to get your access token and refresh token.
const authorization = await exchangeAccessCodeForAuthTokens(accessCode);
