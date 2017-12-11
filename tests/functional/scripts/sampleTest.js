module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://yotsonyaas.mybluemix.net/')
      .pause(5000)
      .end();
  }
};
