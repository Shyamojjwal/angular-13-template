export const userSignInErrorMessage = {
  authUser: {
    required: `User Name can't be blank.`,
    whitespace: `User Name can't be blank.`,
    pattern: `Invalid User Name.`
  },
  authPass: {
    required: `Password can't be blank.`,
    whitespace: `Password can't be blank.`,
    badCredential: `User Name/Password doesn't valid`,
  }
}

export const userForgotPassErrorMessage = {
  userAuth: {
    required: `Username or Email can't be blank.`,
    whitespace: `Username or Email can't be blank.`,
    wrongUserName: `Invalid Username or Email`,
  }
}