// Load variables from .env file
require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client();
const token = process.env.DISCORD_BOT_TOKEN;
const prefix = "uwu";

client.on("ready", () => {
  console.log("Bot Started");
  randomizeActivity();
  setInterval(randomizeActivity, 1000 * 60);
});

function randomizeActivity() {
  const acts = [
    "make their lives better",
    "improving their lifestyle",
    "promoting culture",
    "being men of culture",
    "embracing UwU",
    "spreading the love",
    "with nothing else to do",
    "patting lolis",
    "proteccting lolis"
  ]

  var randAct = acts[Math.floor(Math.random() * acts.length)];
  var onlineCount = client.users.filter(u => { return u.presence.status != "offline" && !u.bot }).size;
  var activity = `${onlineCount} degenerates ${randAct}`;
  client.user.setActivity(activity, { type: "WATCHING" });
}

client.on("message", async (message) => {
  if (!message.channel.guild || message.author.bot)
    return;

  var text = message.content;

  if (text == `${prefix} ping`) {
    var embed = new Discord.RichEmbed();
    embed.description = `Pong, ${client.ping}ms UwU`;
    message.channel.send(embed);
    return;
  }
  
  var textSplit = text.split(" ");
  var uwuDis = textSplit[0] == prefix && textSplit[1] == "dis";

  if (message.channel.name.match(/uwu/i) || uwuDis) {
    
    var embed = new Discord.RichEmbed();
    embed.setAuthor(message.author.username, message.author.avatarURL);
    embed.setColor(message.member.displayColor);

    var attachments = message.attachments.array();
    for (var i in attachments) {
      var url = attachments[i].url;
      embed.attachFile(url);
    }

    if (uwuDis)
      text = text.replace(`${prefix} dis`, "");
    
    embed.description = uwufy(text);

    await message.channel.send(embed);
    message.delete();
  }
});

// The Main Dish
function uwufy(text) {
  const dictionary = [
    [["hello"], "hewwo"],
    [["love"], "luv"],
    [["welcome"], "youkoso"],
    [["you", "u"], "anata"],
    [["is that so"], "naruhodo"],
    [["i am", "i'm", "im", "i've", "ive"], "watashi wa"],
    [["i", "me"], "watashi"],
    [["my", "mine"], "watashi no"],
    [["that's why", "thats why"], "dakara"],
    [["why"], "doushite"],
    [["what"], "nani"],
    [["whewe",], "doko"],
    [["who"], "dare"],
    [["when"], "itsu"],
    [["how"], "douyatte"],
    [["the"], "za"],
    [["wowld"], "warudo"],
    [["owa"], "ora ora ora ora"],
    [["good morning"], "ohayou"],
    [["good aftewnoon"], "konnichiwa"],
    [["good night"], "oyasumi"],
    [["thank you", "thanks", "tnx", "ty"], "arigatou"],
    [["bye bye", "bye", "goodbye"], "sayonara"],
    [["sowwy", "apologies"], "gomenasai"],
    [["my bad"], "warukatta"],
    [["excuse me"], "sumimasen"],
    [["he", "him"], "kare"],
    [["his"], "kare no"],
    [["she", "her"], "kanojo"],
    [["powew"], "chikara"],
    [["plan"], "keikaku"],
    [["wife"], "waifu"],
    [["husband"], "hasubando"],
    [["cute"], "kawaii"],
    [["wondewful"], "subarashi"],
    [["nice"], "suteki"],
    [["bad"], "warui"],
    [["cool"], "sugoi"],
    [["handsome"], "kakkoi"],
    [["idiot"], "baka"],
    [["dumb", "dumbass"], "aho"],
    [["undewstand"], "wakarimasu"],
    [["undewstood"], "wakatta"],
    [["please"], "onegai"],
    [["absolute", "absolutely"], "zettai"],
    [["help"], "tasukete"],
    [["die"], "shine"],
    [["dead"], "deddo"],
    [["shut up", "shut the fuck up", "stfu", "shutup", "shattap"], "urusai"],
    [["weally"], "hontou"],
    [["this is bad", "oh no", "that's bad", "thats bad"], "yabai"],
    [["that's good", "thats good"], "ii desu ne"],
    [["name"], "namae"],
    [["lose"], "wose"],
    [["baby"], "akachan"],
    [["sistew"], "oneesan"],
    [["bwothew"], "oniichan"],
    [["little sistew"], "imouto"],
    [["little bwothew"], "otouto"],
    [["fwiends"], "tomodachi-tachi"],
    [["fwiend"], "tomodachi"],
    [["ally", "allies", "comnrade", "comrades"], "nakama"],
    [["enemy", "enemies", "nemesis"], "teki"],
    [["family"], "kazoku"],
    [["anyone"], "daredemo"],
    [["anything"], "nandemo"],
    [["evewything"], "subete"],
    [["evewyone", "crowd", "people"], "minnasan"],
    [["new"], "atarashi"],
    [["old"], "furui"],
    [["see you", "see ya"], "mata ne"],
    [["good luck", "goodluck", "do your best", "you got this", "gl"], "ganbatte"],
    [["dog"], "inu"],
    [["cat"], "neko"]
  ];

  const additions = [
    [["happy", "exciting", "excited", "wonderful", "nice", "joyful", "gleeful", "glee", "blessed", "delighted", "smile", "smiling"],
      ["＾ω＾", "（＾∀＾）", "≧ω≦", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "	(≧◡≦)"]],
    [["sad", "unhappy", "depressed", "depressing", "depression", "miserable", "heartbroken", "broken-hearted"],
      ["╥﹏╥", "༼☯﹏☯༽", "(╥_╥)", "(⋟﹏⋞)", "༼ ༎ຶ ෴ ༎ຶ༽", "（>﹏<）", "（；＿；）"]],
    [["angry", "angery", "mad", "annoyed", "annoying", "hate", "rage", "quit", "ragequit", "fuck", "shit", "bullshit", "motherfucker", "triggered"],
      ["ಠ_ಠ", "⋋_⋌", "ಠ▃ಠ", "(╬ಠ益ಠ)", "(¬_¬)", "（＞μ＜＃）", "凸ಠ益ಠ)凸", "(ノಠ益ಠ)ノ彡┻━┻"]],
    [["ez", "easy", "gg"],
      ["(⌐■_■)", "(ﾒ▼_▼)"]],
    [["love", "luv", "heart", "affection", "passion", "cute", "kawaii", "wife", "waifu", "husband", "husbando", "hasubando"],
      ["(♥ω♥*)", "(｡♥‿♥｡)", "ღゝ◡╹)ノ♡", "（♥￫ｏ￩♥）"]],
    [["bored", "boring", "tired", "tiring", "exhausted", "exhausting"],
      ["(￣Д￣", "（；￣д￣）", "（－－；", "（￣Ω￣）"]],
    [["hello", "hewwo", "hi", "welcome", "youkoso"],
      ["ヾ(＾∇＾)", "( ﾟ▽ﾟ)/", "(=ﾟωﾟ)ﾉ", "(≧∇≦)/", "ヾ(・ω・ｏ)", "( ^_^)／"]],
    [["lol", "lul", "xd", "rofl", "wofl", "lmao", "lmfao"],
      ["（ ´థ౪థ）", "( ◉◞౪◟◉)", "（ლ ^ิ౪^ิ）ლ", ";´༎ຶਊ ༎ຶ`;", "( ՞ਊ՞)"]]
  ]

  const puntuations = [
    [".", "desu"],
    ["?", "ka"],
    ["!", "DESU"],
    ["~", "ne"]
  ]

  const hahaThreshhold = 3;

  // Add Kaomojis UwU
  for (var i in additions) {
    var toAddOn = additions[i][0];
    var adds = additions[i][1];

    for (var j in toAddOn) {
      var addWord = toAddOn[j];

      text = text.split("\n");
      for (var k in text) {
        var line = text[k];
        line = line.split(" ");

        for (var l in line) {
          var word = line[l];
          var rnd = Math.floor(Math.random() * adds.length);
          var toAddWith = adds[rnd];

          if (word.replace(/[^a-z]/gi, "").toLowerCase() == addWord)
            line[l] = line[l].replace(new RegExp(addWord, "i"), `${word} ${toAddWith}`);
        }

        line = line.join(" ");
        text[k] = line;
      }
      text = text.join("\n");
    }
  }

  // Change Rs to Ws
  text = text.split("");
  for (var i in text) {
    var letter = text[i];
    if (letter == "r")
      letter = "w"
    if (letter == "R")
      letter = "W"
    text[i] = letter;
  }
  text = text.join("");

  // JAPANAZING BEAM
  for (var i in dictionary) {
    var toReplace = dictionary[i][0];
    var replaceWith = dictionary[i][1];

    for (var j in toReplace) {
      var rWord = toReplace[j];

      if (rWord.includes(" ")) {
        text = text.replace(new RegExp(rWord, "gi"), replaceWith);
        continue;
      }

      text = text.split("\n");
      for (var k in text) {
        var line = text[k];
        line = line.split(" ");

        for (var l in line) {
          var word = line[l];
          var hahaRegex = new RegExp("(ha)", "gi");
          var hahaMatch = word.match(hahaRegex)

          if (hahaMatch && hahaMatch.length >= hahaThreshhold) {
            line[l] = line[l].replace(new RegExp("a", "gi"), "笑").replace(new RegExp("h", "gi"), "");
            continue;
          }

          if (word.replace(/[^a-z]/gi, "").toLowerCase() == rWord)
            line[l] = line[l].replace(new RegExp(rWord, "i"), matchCase(word, replaceWith));
        }

        line = line.join(" ");
        text[k] = line;
      }

      text = text.join("\n");
    }
  }

  // Finally, desu.
  for (var i in puntuations) {
    var symbol = puntuations[i][0];
    var replaceWith = puntuations[i][1];
    text = text.replace(new RegExp(`\\${symbol}`, "g"), ` ${replaceWith}${symbol}`);
  }

  return text;
}

// Shitty hackfix to macth the word casing
function matchCase(source, text) {
  source = source.split("");

  var firstOnly = false;
  var upperCases = 0;

  for (var i in source) {
    var letter = source[i];
    if (letter == letter.toUpperCase()) {
      if(i == 0)
        firstOnly = true;
      upperCases++;
    }
  }

  if (firstOnly) {
    text = text.split("");
    text[0] = text[0].toUpperCase();
    text = text.join("");
  }

  if (upperCases == source.length && source.length > 1) {
    text = text.toUpperCase();
  }

  return text;
}

// Web Server (to keep the bot alive with a monitor)
var http = require("http");
const PORT = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.write("Stay Alive");
  res.end();
}).listen(PORT);

client.login(token);