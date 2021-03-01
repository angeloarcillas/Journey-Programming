module.exports = {
  // command name
  name: "user-info",

  // command description
  description: "Display info about yourself.",

  // command action
  execute(message) {
    message.channel.send(
      `Your username: ${message.author.username} \n Your ID: ${message.author.id}`
    );
  },
};
