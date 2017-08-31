module.exports.run = async (bot, message, args) => {
    let points = JSON.parse(fs.readFileSync("../levels/points.json", "utf8"));
    let userData = points[message.author.id];
    userData.points++;
    let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
    if (curLevel > userData.level) {
        userData.level = curLevel;
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
    }
}

module.exports.help = {
    name: "level"
}