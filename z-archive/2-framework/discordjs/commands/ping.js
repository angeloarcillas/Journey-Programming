module.exports = {
  // command name
  name: "ping",

  // command description
  description: "Ping someone!",

  // cooldown: 5, // command cooldown

  // command action
  execute(message, args) {
    const user = message.mentions.users.first();

    // (troll spam)
    for (let i = 0; i < args[1]; i++) {
      message.channel.send(`<@${user.id}>`);
    }
  },
};
