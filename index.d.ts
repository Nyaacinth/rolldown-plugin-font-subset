type LikelyOutputAsset = {
    type: "asset";
    source: string | Uint8Array;
    [k: string]: any;
};
type LikelyOutputChunk = {
    type: "chunk";
    code: string;
    [k: string]: any;
};
type PluginOptions = {
    verbose?: boolean;
};
export default function pluginFontSubset(options?: PluginOptions): {
    name: string;
    generateBundle: (_options: any, bundle: {
        [fileName: string]: LikelyOutputAsset | LikelyOutputChunk;
    }) => Promise<void>;
};
export {};
