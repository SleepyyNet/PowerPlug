const settings = require('../settings.json')
module.exports.run = async (bot, message, args) => {
    
        var FeedParser = require('feedparser');
        var feedparser = new FeedParser();
        var request = require('request');
        request('http://feeds.ign.com/ign/all').pipe(feedparser);
        feedparser.on('error', function(error){
            message.channel.send("failed reading feed: " + error);
        });
        var shown = 0;
        feedparser.on('readable',function() {
            var stream = this;
            var count = 1;
            shown += 1
            if(shown > count){
                return;
            }
            var item = stream.read();
            message.channel.send(item.title + " - " + item.link, function() {
                if(full === true){
                    var text = htmlToText.fromString(item.description,{
                        wordwrap:false,
                        ignoreHref:true
                    });
                    message.channel.send(text);
                }
            });
            stream.alreadyRead = true;
        
    });
}

module.exports.help = {
    name: "ign"
}