export const sum = (a: number, b: number) => a + b;

type Config = {
    clusters: { [id in string]: string };
    helpMenu: {
        open: boolean;
    };
};

const DEFAULT_CLUSTER_CONFIG = "foo";

const getDefaultClusters = (clusters: Config["clusters"]) => {
    return new Proxy(clusters, {
        get() {
            return DEFAULT_CLUSTER_CONFIG;
        },
    });
};

export const DEFAULT_CONFIG = {
    clusters: getDefaultClusters({}),
    helpMenu: {
        open: true,
    },
};

export const getDefaultConfig = (openMenu: boolean): Config => {
    return {
        ...DEFAULT_CONFIG,
        helpMenu: {
            open: openMenu,
        },
    };
};
