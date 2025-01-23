declare const typographyConfig: (theme: (path: string) => string) => {
    DEFAULT: {
        css: {
            ':first-child': {
                marginTop: string;
            };
            'h1, h2, h3, h4, h5, h6': {
                fontWeight: string;
                letterSpacing: string;
                marginBottom: string;
                '+ h1, + h2, + h3, + h4, + h5, + h6': {
                    marginTop: string;
                };
            };
            h1: {
                fontSize: string;
                marginTop: string;
            };
            h2: {
                fontSize: string;
            };
            h3: {
                fontSize: string;
            };
            h4: {
                fontSize: string;
            };
            h5: {
                fontSize: string;
            };
            h6: {
                fontSize: string;
            };
            table: {
                boxShadow: string;
                borderRadius: string;
                overflow: string;
                p: {
                    margin: number;
                };
                th: {
                    paddingTop: string;
                    paddingRight: string;
                    paddingBottom: string;
                    paddingLeft: string;
                    backgroundColor: string;
                    '&:not(:last-child)': {
                        borderRightWidth: string;
                        borderRightColor: string;
                    };
                };
                'tbody td, tfoot td': {
                    paddingLeft: string;
                    '&:not(:last-child)': {
                        borderRightWidth: string;
                        borderRightColor: string;
                    };
                };
            };
            code: {
                '&::before, &::after': {
                    display: string;
                };
            };
            pre: {
                backgroundColor: string;
                borderWidth: number;
                borderColor: string;
            };
        };
    };
    invert: {
        css: {
            table: {
                boxShadow: string;
                th: {
                    backgroundColor: string;
                    '&:not(:last-child)': {
                        borderRightColor: string;
                    };
                };
                'tbody td, tfoot td': {
                    '&:not(:last-child)': {
                        borderRightColor: string;
                    };
                };
            };
            pre: {
                borderColor: string;
            };
        };
    };
};
export default typographyConfig;
//# sourceMappingURL=typography.config.d.ts.map