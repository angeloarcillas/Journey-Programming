module.exports = {
  name: "avatar",
  description: "Get the avatar URL of the tagged user(s), or your own avatar.",

  // command aliases
  aliases: ["icon", "pfp"],
  execute(message) {
    // if no mentions
    if (!message.mentions.users.size) {
	// dynamic: true => enable animation
      return message.channel.send(
        `Your avatar: <${message.author.displayAvatarURL({ dynamic: true })}>`
      );
    }

    message.channel.send(message.mentions.users.map((user) => {
      return `${user.username}'s avatar:
        <${user.displayAvatarURL({ dynamic: true, })}>`;
    }));
  },
};
