interface SocialNetworkConfig {
    AppName: string
    AppId: number
    ApiSecret: string
    ApiKey: string
    AccessToken: string
    AccessTokenSecret: string
    BearerToken: string
    ClientId: string
    ClientSecret: string
    MySecret: string
    ShaSeed: string
}

interface SocialNetworkAPIConfigs {
    Twitter: SocialNetworkConfig
    Instagram: SocialNetworkConfig
    Reddit: SocialNetworkConfig
    Youtube: SocialNetworkConfig
    Tiktok: SocialNetworkConfig
    Facebook: SocialNetworkConfig
}

interface KeycloakConfig {
    Username: string
    Password: string
    URL: string
    RealmName: string
    AuthServerUrl: string
    SSLRequired: string
    Resource: string
    PublicClient: boolean
    ConfidentialPort: number
    ClientId: string
    ClientSecret: string
}

export interface ServiceInfo {
    oracle: any
    keycloakConfig: KeycloakConfig
    configs: SocialNetworkAPIConfigs
}
