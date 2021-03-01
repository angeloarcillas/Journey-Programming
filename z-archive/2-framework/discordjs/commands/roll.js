module.exports = {
  name: "roll",
  description: "Select random user.",
  execute(message, args) {

    // filter members to only users not bots
    const users = message.channel.members.filter((member) => !member.user.bot);

    //  pick one
    if (!args.length) {
      return message.channel.send(
        `Congratulations you've been selected: ${users.random()}`
      );
    }

    // pick N times
    for (let i = 0; i < args[0]; i++) {
      message.channel.send(
        `Congratulations you've been selected: ${users.random()}`
      );
    }
    return;
  },
};
