const http = require('http');

const port = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EVOREV Association</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f5f7fb; color: #1f2937; }
    .wrap { max-width: 900px; margin: 80px auto; padding: 32px; background: white; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
    h1 { margin-top: 0; }
    .badge { display: inline-block; padding: 6px 10px; background: #e0f2fe; color: #075985; border-radius: 999px; font-size: 14px; }
    .mission { margin-top: 24px; padding: 20px; background: #f8fafc; border-left: 4px solid #0ea5e9; border-radius: 10px; line-height: 1.7; font-size: 18px; }
  </style>
</head>
<body>
  <div class="wrap">
    <span class="badge">EVOREV Association</span>
    <h1>Bienvenue sur EVOREV</h1>
    <p>Page de démonstration simple pour l'association EVOREV.</p>
    <div class="mission">
      Redéfinir le travail pour offrir aux nouvelles générations un épanouissement porteur de sens en
      unissant les mondes économiques, artisanaux et sociaux au service du bien commun.
    </div>
  </div>
</body>
</html>`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
