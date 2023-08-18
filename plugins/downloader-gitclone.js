import fetch from "node-fetch";

const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/([^\/]+)(?:\/tree\/([^\/]+)|\/archive\/([^\/]+))?(?:\.git)?$/i;

let handler = async (m, { args, usedPrefix, command }) => {
  if (!args[0]) throw `[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝙶𝙸𝚃𝙷𝚄𝙱, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://github.com/DIEGO-OFC/Bot-Tiburon-MD*`;
  
  const match = args[0].match(regex);
  if (!match) throw "🦈 El enlace es incorrecto!";
  
  const [, user, repo] = match.slice(1);
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;

  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentDisposition = response.headers.get("content-disposition");
    if (!contentDisposition) throw "No content-disposition header found in response.";

    const filename = contentDisposition.match(/attachment; filename=(.*)/)[1];
    if (!filename) throw "Filename not found in content-disposition header.";

    m.reply("🤚 Calma ya estoy con tu pedido");
    conn.sendFile(m.chat, url, filename, null, m);
  } catch (error) {
    console.error("Error fetching or sending file:", error);
    m.reply("Ocurrió un error al procesar tu solicitud. Por favor, intenta de nuevo más tarde.");
  }
};

handler.help = ["gitclone <url>"];
handler.tags = ["downloader"];
handler.command = /gitclone/i;

export default handler;
