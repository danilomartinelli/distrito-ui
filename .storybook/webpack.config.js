module.exports = ({ config, mode }) => {
  const fileLoaderRule = config.module.rules.find((rule) =>
    rule.test.test(".svg")
  );
  fileLoaderRule.exclude = /\.svg$/;
  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: {
              removeViewBox: false,
            },
          },
        },
      },
    ],
  });
  return config;
};
