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
        const embed = new MessageEmbed()
          .setDescription(`من فضلك قم بكتابة اسم التصميم لمعرفة السعر`)
          .setColor('#0099ff');

        channel.send({ embeds: [embed] });
      }, 2000); // 2000 مللي ثانية تساوي 2 ثانية
    }
  }
});

client.on('messageCreate', (message) => {
  // تجاهل الرسائل الخاصة والرسائل من البوتات الأخرى
  if (message.author.bot || !message.guild) return;

  // التأكد من أن الرسالة في قناة تنتمي إلى الفئة المحددة
  if (message.channel.parentId === ticketCategoryID) {
    // الرد التلقائي
    if (message.content.toLowerCase() === 'بلاك ماركت v9') {
      const embed = new MessageEmbed()
        .setTitle('سعر بلاك ماركت v9 \n 250 $')
        .setColor('#0099ff')
        .setImage('https://cdn.discordapp.com/attachments/825483046714867724/1222712213651980389/image.png?ex=6617367c&is=6604c17c&hm=0b5b30c45f6603817e513c0dec29eadd5a5b47cccb0dbd0a8e377c1d9c736f20&'); // قم بتغيير الرابط إلى رابط الصورة الفعلي

      message.reply({ embeds: [embed] });
    }
  }
});

// قم بتغيير 'YOUR_DISCORD_TOKEN' إلى توكن البوت الخاص بك
client.login('');
