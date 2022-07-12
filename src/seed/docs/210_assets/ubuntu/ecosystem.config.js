module.exports = {
  apps : [{
    name: "app",
    script: "node ./bin/www",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}