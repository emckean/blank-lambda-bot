var expect = require('chai').expect;
var rewire = require("rewire");
var bot = rewire('../index.js');

//rewiring
pickTweet = bot.__get__('pickTweet'); 
tweetOK = bot.__get__('tweetOK'); 
tweetLengthOK = bot.__get__('tweetLengthOK'); 


describe('canary test', function() {
	it ('should pass this canary test', function(){
		expect(true).to.eql(true);
	});
});


describe('pick phrase test', function() {
	it ('it should return a phrase', function(){
		var phrase = pickTweet();
		expect(phrase).to.not.eql(undefined);
	});
});


describe('phrase length tests', function() {
	it ('it should return true if phrase is = 130 char', function(){
		var testPhrase = 'This test text has been hand-crafted with love to equal exactly one hundred & thirty of the finest Tweetable characters available!';
		var phrase = tweetLengthOK(testPhrase);
		expect(phrase).to.eql(true);
	});

	it ('it should return true if phrase is <= 130 char', function(){
		var phrase = tweetLengthOK('Hi! I am a short phrase!');
		expect(phrase).to.eql(true);
	});	

	it ('it should return false if phrase is >= 130 char', function(){
		var testPhrase = 'This text is far, far, far too long to tweet, if you want to stay well under the Twitter 140-character limit, which you do, I believe, yes?';
		var phrase = tweetLengthOK(testPhrase);
		expect(phrase).to.eql(false);
	});
});

describe('word filter test', function() {
	it ('it should return an error if the phrase contains a bad word', function(){
		var phrase = "using the word 'lame' is lame";
		var phraseCheck = tweetOK(phrase);
		expect(phraseCheck).to.eql(false);
	});

	it ('it should return an error if the phrase is undefined', function(){
		var phrase;
		var phraseCheck = tweetOK(phrase);
		expect(phraseCheck).to.eql(false);
	});

	it ('it should return an error if the phrase is empty', function(){
		var phrase = "";
		var phraseCheck = tweetOK(phrase);
		expect(phraseCheck).to.eql(false);
	});

	it ('it should return true if the phrase is OK', function(){
		var phrase = "Hi! I am a short phrase that is perfectly fine.";
		var phraseCheck = tweetOK(phrase);
		expect(phraseCheck).to.eql(true);
	});

});