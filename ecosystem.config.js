module.exports = {
  apps : [{
    name: 'crabby-bot',
    script: 'bot.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: true,
    ignore_watch: ["node_modules", "images", ".git"],
    max_memory_restart: '500M'
  }]
};
