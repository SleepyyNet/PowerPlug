exports.run = async (bot, message, args) => {
var FeedParser = require('feedparser');
    var feedparser = new FeedParser();
    var snekfetch = require('snekfetch');
    snekfetch.get('http://www.engadget.com/rss.xml').pipe(feedparser);
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
