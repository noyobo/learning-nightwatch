module.exports = {
  src_folders: ['./tests'],
  output_folder: './results',
  custom_commands_path: './extend/commands',
  custom_assertions_path: './extend/assertions',
  globals_path: './globals.json',
  live_output: true,

  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-2.45.0.jar',
    log_path: './results',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver',
      'webdriver.phantom.driver': require('phantomjs').path,
      'webdriver.ie.driver': './ie/IEDriverServer.exe'
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      silent: true,
      disable_colors: false,
      screenshots: {
        enabled: true,
        path: './results/screenshots'
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true
      }
    },

    ie: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        javascriptEnabled: true
      }
    },

    phantom: {
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled: true
      }
    }
  }
};
