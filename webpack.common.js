const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/js/main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/[name].[fullhash].bundle.js',
    publicPath: '',
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    modules: [
      path.resolve('src'),
      path.resolve('src/js'),
      path.resolve('src/scss'),
      path.resolve('src/image'),
      path.resolve('node_modules'),
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader:
              'url-loader' /* ref Url: https://awdr74100.github.io/2020-03-09-webpack-urlloader-fileloader/ */,
            options: {
              limit: 10,
              name: '[path][name].[ext]?[hash:5]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
        include: path.resolve('./src/image'),
        exclude: path.resolve('./node_modules'),
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      'window.jquery': 'jquery',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      title: 'Title｜Slogan',
      sitename: 'template',
      viewport: 'width=device-width, initial-scale=1, user-scalable=yes',
      description: 'description',
      keywords: 'key-1, key-2, key-3',
      icon: './static/favicon/favicon.png', // path of dist folder
      ogtype: 'website',
      ogimage: '{host}/static/ogshare/ogshare.jpg',
      ogurl: '{host}',
      oglocale: 'zh_tw',
      twurl: '{host}',
      twtitle: 'Title｜Slogan',
      twdescription: 'description',
      twimage: '{host}/static/ogshare/ogshare.jpg',
      twimagealt: 'description',
      chunks: ['main'], // description url: https://segmentfault.com/a/1190000007294861
      minify: true, // Does compress html?
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'jquery',
          entry: {
            path: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
          },
          global: '$',
        },
        // {
        //   module: '',
        //   entry: {
        //     path: 'https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.5.0/parallax.min.js',
        //   },
        // },
        // {
        //   module: 'gsap',
        //   entry: {
        //     path: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js',
        //   },
        //   global: 'gsap',
        // },
        // {
        //   module: 'ScrollToPlugin',
        //   entry: {
        //     path: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollToPlugin.min.js',
        //   },
        //   global: 'ScrollToPlugin',
        // },
        // {
        //   module: 'ScrollTrigger',
        //   entry: {
        //     path: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js',
        //   },
        //   global: 'ScrollTrigger',
        // },
        // {
        //   module: 'Swiper',
        //   entry: {
        //     path: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.14/swiper-bundle.min.js',
        //   },
        //   global: 'Swiper',
        // },
        // {
        //   module: '',
        //   entry: {
        //     path: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.14/swiper-bundle.min.css',
        //   },
        // },
        // {
        //   module: 'anime',
        //   entry: {
        //     path: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js',
        //   },
        //   global: 'anime',
        // },
      ],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './static',
          to: './static',
        },
      ],
    }),
  ],
}
