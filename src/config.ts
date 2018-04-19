import * as Dockerode from 'dockerode';
import * as bunyan from 'bunyan';
import * as portfinder from 'portfinder';

interface AppConfig {
    build: BuildConfig;
    repo: RepoConfig;
    server: ServerConfig;
};

interface BuildConfig {
    containerCreateOptions: Dockerode.ContainerCreateOptions;
    logFilename: string;
    logLevel: bunyan.LogLevel;
    tagPrefix: string;
};

interface RepoConfig {
    project: string;
};

interface ServerConfig {
    logLevel: bunyan.LogLevel;
};

export const config: AppConfig = {
    build: {
        containerCreateOptions: {
            Env: [ 'NODE_ENV=wpcalypso', 'CALYPSO_ENV=wpcalypso'],
            ExposedPorts: { '3000/tcp': {} },
            Tty: false,
        },
        logFilename: 'dserve-build-log.txt',
        logLevel: bunyan.DEBUG,
        tagPrefix: 'dserve-wpcalypso'
    },

    repo: {
        project: 'Automattic/wp-calypso'
    },

    server: {
        logLevel: bunyan.DEBUG,
    },
};