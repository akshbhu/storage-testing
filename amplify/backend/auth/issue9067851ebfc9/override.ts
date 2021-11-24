import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyAuthCognitoStackTemplate) {
    resources.userPool.deviceConfiguration = {
        challengeRequiredOnNewDevice : true,
        deviceOnlyRememberedOnUserPrompt: true
    }
}
