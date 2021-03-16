module: {
  rules: [
    {
      test: /\.ts$/,
      exclude: [/node_modules/],
      loader: 'ts-loader'
    }
  ];
},