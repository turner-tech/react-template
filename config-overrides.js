const { override, fixBabelImports, addLessLoader } = require('customize-cra');
// const darkTheme = require('@ant-design/dark-theme');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            // modifyVars: darkTheme.default
            modifyVars: {
                '@font-family': '"Open Sans", sans-serif',
                '@outline-width': '1px',
                '@btn-font-weight': '600',
                '@btn-text-shadow': 'none',
                '@btn-border-style': 'solid',
                '@animation-duration-slow': '0.3s',
                '@animation-duration-base': '0.08s',
                '@animation-duration-fast': '0.05s',
                '@pagination-font-family': '"Open Sans", sans-serif',
                '@layout-header-padding': '0 24px',
            },
        },
    }),
);
