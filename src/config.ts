import * as Dockerode from 'dockerode';

interface AppConfig {
    build: BuildConfig;
    repo: RepoConfig;
};

interface BuildConfig {
    containerCreateOptions: Dockerode.ContainerCreateOptions;
    logFilename: string;
    tagPrefix: string;
};

interface RepoConfig {
    project: string;
};

export const config: AppConfig = {
    build: {
        containerCreateOptions: {
            Env: [ 'NODE_ENV=wpcalypso', 'CALYPSO_ENV=wpcalypso'],
        },
        logFilename: 'dserve-build-log.txt',
        tagPrefix: 'dserve-wpcalypso'
    },

    repo: {
        project: 'Automattic/wp-calypso'
    },
};