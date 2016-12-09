module.exports = function(config) {
  config.set({
    // basePath: '',
    files: [
      './specs/*.spec.js',
    ],
    plugins: ['karma-phantomjs-launcher', 'karma-mocha', 'karma-chai', 'karma-spec-reporter'],
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    reporters: ['spec'],
  });
}

/*
 * test 测试目录，所有跟测试有关的文件都放在这
 * unit 单元测试目录
 * karma.conf.js karma 的配置文件
 * specs 所有的测试代码存放在这里
 */
