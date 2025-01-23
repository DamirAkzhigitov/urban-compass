import type { Metadata } from 'next';
type MetadataGenerator = Omit<Metadata, 'description' | 'title'> & {
    title: string;
    description: string;
    image?: string;
};
export declare const createMetadata: ({ title, description, image, ...properties }: MetadataGenerator) => Metadata;
export {};
//# sourceMappingURL=metadata.d.ts.map