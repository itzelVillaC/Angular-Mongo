import { AuthServiceConfig, GoogleLoginProvider} from 'angularx-social-login';
  
  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("1013786917959-spda7tk8i6t6mkkpgi6j8qv3aadpmubk.apps.googleusercontent.com")
      }
    ]);
  
    return config;
  }