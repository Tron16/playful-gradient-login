declare module "@amplify" {
  const value: {
    auth: {
      user_pool_id: string;
      aws_region: string;
      user_pool_client_id: string;
      identity_pool_id: string;
      mfa_methods: string[];
      standard_required_attributes: string[];
      username_attributes: string[];
      user_verification_types: string[];
      groups: string[];
      mfa_configuration: string;
      password_policy: {
        min_length: number;
        require_lowercase: boolean;
        require_numbers: boolean;
        require_symbols: boolean;
        require_uppercase: boolean;
      };
      unauthenticated_identities_enabled: boolean;
    };
    data: {
      url: string;
      aws_region: string;
      default_authorization_type: string;
      authorization_types: string[];
      model_introspection: any;
    };
    version: string;
  };
  export default value;
}
