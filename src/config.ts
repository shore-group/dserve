import * as Dockerode from 'dockerode';

type primitive = string | number | boolean | undefined | null;
type DeepReadonly<T> = T extends primitive ? T : DeepReadonlyObject<T>;
type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
};

type AppConfig = {
    build: BuildConfig;
    repo: RepoConfig;
};

type BuildConfig = {
    containerCreateOptions: Dockerode.ContainerCreateOptions;
    logFilename: string;
    tagPrefix: string;
};

type RepoConfig = {
    project: string;
};

export const config: DeepReadonly<AppConfig> = {
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