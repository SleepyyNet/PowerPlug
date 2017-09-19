const { RichEmbed } = require('discord.js');
require('https')
exports.run = async (bot, message, args) => {
    var http = require('http');

    function getRedditPosts() {
        var url = "http://www.reddit.com/r/dankmemes/random/.json?limit=50";

        var request = http.get(url, function(response) {
            var json = '';
            response.on('data', function(chunk) {
                json += chunk;
            });

            response.on('end', function() {
            var redditResponse = JSON.parse(json);
            redditResponse.data.children.forEach(function(child) {
                if(child.data.domain !== 'self.node') {
                    var embed = new RichEmbed()
                        .setTitle(child.data.title)
                        .setImage(child.data.image)
                        .setFooter('URL : ' + child.data.url);
                    message.channel.send({embed});    
                    }
            });
        })
    });
    request.on('error', function(err) {
        console.log(err);
    });
}

    getRedditPosts();
}