export const sum = (a: number, b: number) => a + b;

type Config = {
    clusters: { [id in string]: string };
    helpMenu: {
        open: boolean;
    };
};

const getDefaultClusters = (clusters: Config["clusters"]) => {
    return new Proxy(clusters, {
        get() {
            return "foo";
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
