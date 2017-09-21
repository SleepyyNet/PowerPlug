const yt = require('ytdl-core');
const { RichEmbed } = require('discord.js');
const ytapi = require("simple-youtube-api");
const YouTube = new ytapi('AIzaSyBrbzV_UzAf7QaiOO45tej3sZgQK_vU_QM');

exports.run = (bot, msg, args) => {
    let voiceChan = msg.member.voiceChannel;
    if (!voiceChan) return msg.reply("You must be in a voice channel!");
    voiceChan.join()
    .then(connection => {
      YouTube.searchVideos(args.join(" "), 1).then(results => {
          let url = "https://youtube.com/watch?v=" + results[0].id
              const streamOptions = { seek: 0, volume: 1, passes: 2 };
              const stream = yt(url, { filter : 'audioonly'});
              const dispatcher = connection.playStream(stream, streamOptions);
            
            yt.getInfo(url, function(err, info) {
           msg.channel.send(":arrow_forward: PowerPlug is playing **" + info.title + "** requested by **" + msg.author.username + "**");
           
           dispatcher.on('end', () => {
               msg.channel.send('Ended the queue, now leaving...');
               voiceChan.leave();
           });
         });
       });
    });
}
