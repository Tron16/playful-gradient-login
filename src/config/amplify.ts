export const amplifyConfig = {
  auth: {
    user_pool_id: "us-east-1_Haq0B2L15",
    aws_region: "us-east-1",
    user_pool_client_id: "5n5p70jvauv0uggst7dm5mcr64",
    identity_pool_id: "us-east-1:f527078c-4314-4298-96ca-01e30e5ac992",
    mfa_methods: [],
    standard_required_attributes: ["email"],
    username_attributes: ["email"],
    user_verification_types: ["email"],
    groups: [],
    mfa_configuration: "NONE",
    password_policy: {
      min_length: 8,
      require_lowercase: true,
      require_numbers: true,
      require_symbols: true,
      require_uppercase: true,
    },
    unauthenticated_identities_enabled: true,
  },
  data: {
    url: "https://7mm4dqfbnngdvj4rwsbmqxvk7m.appsync-api.us-east-1.amazonaws.com/graphql",
    aws_region: "us-east-1",
    default_authorization_type: "AWS_IAM",
    authorization_types: ["AMAZON_COGNITO_USER_POOLS"],
  },
  version: "1.3",
};
