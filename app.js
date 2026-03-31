const http = require('http');

const port = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>evorev_asso</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f5f7fb; color: #1f2937; }
    .wrap { max-width: 800px; margin: 80px auto; padding: 24px; background: white; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
    h1 { margin-top: 0; }
    .badge { display: inline-block; padding: 6px 10px; background: #e0f2fe; color: #075985; border-radius: 999px; font-size: 14px; }
  </style>
</head>
<body>
  <div class="wrap">
    <span class="badge">Node.js website</span>
    <h1>evorev_asso</h1>
    <p>Basic website successfully deployed from the GitHub repository.</p>
    <p>If you can see this page, <code>npm start</code> is working correctly.</p>
  </div>
</body>
</html>`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
