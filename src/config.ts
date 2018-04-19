import * as Dockerode from 'dockerode';

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}

interface AppConfig {
    build: Readonly<BuildConfig>;
    repo: Readonly<RepoConfig>;
};

interface BuildConfig {
    containerCreateOptions: Dockerode.ContainerCreateOptions;
    logFilename: string;
    tagPrefix: string;
};

interface RepoConfig {
    project: string;
};

export const config: Readonly<AppConfig> = {
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