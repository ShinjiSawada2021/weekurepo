'use strict';
module.exports = robot => {

  //今月とチャットすると今月の週報提出日を教えてくれる
  robot.hear(/今月/i, msg => {
    const d = new Date();
    d.setDate(1);
    const user_id = msg.message.user.id;
    msg.send(`今月の週報提出日は${d.getFullYear()}年${d.getMonth()+1}月${(7-d.getDay()+2)}日と${d.getFullYear()}年${d.getMonth()+1}月${(21-d.getDay()+2)}日です。 <@${user_id}>`);
  });

  //来月とチャットすると来月の週報提出日を教えてくれる
  robot.hear(/^来月.*$/i, msg => {
    const d = new Date();
    d.setDate(1);
    const user_id = msg.message.user.id;
    d.setMonth(d.getMonth()+1);
    msg.send(`来月の週報提出日は${d.getFullYear()}年${d.getMonth()+1}月${(7-d.getDay()+2)}日と${d.getFullYear()}年${d.getMonth()+1}月${(21-d.getDay()+2)}日です。 <@${user_id}>`);
  });

  //再来月とチャットすると再来月の週報提出日を教えてくれる
  robot.hear(/^再来月.*$/i, msg => {
    const d = new Date();
    d.setDate(1);
    const user_id = msg.message.user.id;
    d.setMonth(d.getMonth()+2);
    msg.send(`再来月の週報提出日を出力します。 ${d.getFullYear()}年${d.getMonth()+1}月${(7-d.getDay()+2)}日と${d.getFullYear()}年${d.getMonth()+1}月${(21-d.getDay()+2)}日です。 <@${user_id}>`);
  });

  //1年とチャットすると今月から1年分の週報提出日を教えてくれる
  robot.hear(/^(1年|１年).*$/i, msg => {
    const d = new Date();
    d.setDate(1);
    const user_id = msg.message.user.id;
    msg.send(`今月から1年間の週報提出日を出力します。 <@${user_id}>`);
    for(var i = 0; i < 12; i++){
      msg.send(`${d.getFullYear()}年${d.getMonth()+1}月${(7-d.getDay()+2)}日と${d.getFullYear()}年${d.getMonth()+1}月${(21-d.getDay()+2)}日です。`);
      d.setMonth(d.getMonth() + 1);
    }
  });

  //2年とチャットすると今月から２年分の週報提出日を教えてくれる
  robot.hear(/^(2年|２年).*$/i, msg => {
    const d = new Date();
    d.setDate(1);
    const user_id = msg.message.user.id;
    msg.send(`今月から2年間の週報提出日を出力します。 <@${user_id}>`);
    for(var i = 0; i < 24; i++){
      msg.send(`${d.getFullYear()}年${d.getMonth()+1}月${(7-d.getDay()+2)}日と${d.getFullYear()}年${d.getMonth()+1}月${(21-d.getDay()+2)}日です。`);
      d.setMonth(d.getMonth() + 1);
    }
  });

  //3年とチャットすると今月から３年分の週報提出日を教えてくれる
  robot.hear(/^(3年|３年).*$/i, msg => {
    const d = new Date();
    d.setDate(1);
    const user_id = msg.message.user.id;
    msg.send(`今月から3年間の週報提出日を出力します。 <@${user_id}>`);
    for(var i = 0; i < 36; i++){
      msg.send(`${d.getFullYear()}年${d.getMonth()+1}月${(7-d.getDay()+2)}日と${d.getFullYear()}年${d.getMonth()+1}月${(21-d.getDay()+2)}日です。`);
      d.setMonth(d.getMonth() + 1);
    }
  });

  //4年とチャットすると今月から４年分の週報提出日を教えてくれる
  robot.hear(/^(4年|４年).*$/i, msg => {
    const d = new Date();
    d.setDate(1);
    const user_id = msg.message.user.id;
    msg.send(`今月から4年間の週報提出日を出力します。 <@${user_id}>`);
    for(var i = 0; i < 48; i++){
      msg.send(`${d.getFullYear()}年${d.getMonth()+1}月${(7-d.getDay()+2)}日と${d.getFullYear()}年${d.getMonth()+1}月${(21-d.getDay()+2)}日です。`);
    d.setMonth(d.getMonth() + 1);
    }
  });

  //5年とチャットすると今月から５年分の週報提出日を教えてくれる
  robot.hear(/^(5年|５年).*$/i, msg => {
    const d = new Date();
    d.setDate(1);
    const user_id = msg.message.user.id;
    msg.send(`今月から5年間の週報提出日を出力します。 <@${user_id}>`);
    for(var i = 0; i < 60; i++){
      msg.send(`${d.getFullYear()}年${d.getMonth()+1}月${(7-d.getDay()+2)}日と${d.getFullYear()}年${d.getMonth()+1}月${(21-d.getDay()+2)}日です。`);
    d.setMonth(d.getMonth() + 1);
    }
  });

  //該当の文字じゃなかった場合、ボットの説明が出てくる機能
  robot.hear(/^(?!今月|来月|再来月|1年|１年|2年|２年|3年|３年|4年|４年|5年|５年).*$/i, msg => {
    msg.send(`当ボットは週報提出日を出力するボットです。\n次の文字列の中から調べたい期間を選んでボットに話しかけてください。\n※話しかけるときは文章の行頭に次の期間を入れてください。\n今月, 来月, 再来月, 1年, １年 , 2年, ２年, 3年, ３年, 4年, ４年, 5年, ５年`);
  });
};

