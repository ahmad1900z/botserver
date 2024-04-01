const { Client, Intents, MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// اي دي فئة قناة التذاكر
const ticketCategoryID = '1199393981344251914'; // قم بتغييره إلى اي دي فئة التذاكر

client.on('channelCreate', (channel) => {
  // تأكد من أن القناة هي قناة تذاكر
  if (channel.type === 'GUILD_TEXT') {
    // التأكد من أن القناة تنتمي إلى الفئة المحددة
    if (channel.parentId === ticketCategoryID) {
      // تأخير إرسال الرسالة لمدة 5 ثوانٍ
      setTimeout(() => {
        channel.send('أهلاً بك في قناة التذاكر، الرجاء كتابة الأمر المطلوب للمساعدة.');
      }, 2000); // 5000 مللي ثانية تساوي 5 ثوانٍ
    }
  }
});

client.on('messageCreate', (message) => {
  // تجاهل الرسائل الخاصة والرسائل من البوتات الأخرى
  if (message.author.bot || !message.guild) return;

  // التأكد من أن الرسالة في قناة تنتمي إلى الفئة المحددة
  if (message.channel.parentId === ticketCategoryID) {
    // الرد التلقائي
    if (message.content.toLowerCase() === 'مرحبا') {
      const embed = new MessageEmbed()
        .setTitle('مرحبا كيف يمكنني مساعدتك؟')
        .setColor('#0099ff')
        .setImage('https://cdn.discordapp.com/attachments/880814335964876831/880814482467741726/XD_7.gif?ex=66193ee9&is=6606c9e9&hm=adcc0dc88295eb9c6c4b224f15e1ecb00ed58e432ec67250614d3d51f3fe31de&'); // قم بتغيير الرابط إلى رابط الصورة الفعلي

      message.reply({ embeds: [embed] });
    }
  }
});

// قم بتغيير 'YOUR_DISCORD_TOKEN' إلى توكن البوت الخاص بك
client.login('');
