import $ from 'jquery'

export default {
    init: function() {
        this.$tweets = $('.tweetUrl');
        this.$tweetsContainer = $('.tweetsContainer ul');
        this.renderTweets();
    },
    renderTweets: function() {
        var that = this;

        this.fetchTweets(function(html) {
            that.$tweetsContainer.append('<li>' + html + '</li>');
        });
    },
    fetchTweets: function(renderTweetsCallback) {
        var that = this;

        $.each(this.$tweets, function() {
            that.fetchSingleTweet($(this).val(), function(html) {
                renderTweetsCallback(html.replace('<blockquote', '<blockquote data-cards="hidden" data-conversation="none"'));
            });
        });
    },
    fetchSingleTweet: function(url, fetchTweetsCallback) {
        if (typeof url === 'undefined') return false;
        $.get('https://api.twitter.com/1/statuses/oembed.json?url=' + url, function(data) {
            if (data.html) fetchTweetsCallback(data.html);
        });
    }
}