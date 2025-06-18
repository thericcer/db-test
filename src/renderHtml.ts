export function renderHtml(): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Insemination Records</title>
    <style>
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ccc; padding: 6px; text-align: left; }
      th { background-color: #f9f9f9; }
    </style>
  </head>
  <body>
    <h2>Insemination Records</h2>
    <table id="data-table">
      <thead>
        <tr><th>ID</th><th>Tag ID</th><th>Insemination Date</th><th>Exam Date</th></tr>
      </thead>
      <tbody></tbody>
    </table>
    <script>
      async function loadData() {
        const res = await fetch("/api/data");
        const rows = await res.json();
        const tbody = document.querySelector("#data-table tbody");
        for (const row of rows) {
          const tr = document.createElement("tr");
          tr.innerHTML = \`
            <td>\${row.id}</td>
            <td>\${row.tag_id}</td>
            <td>\${row.insemination_date}</td>
            <td>\${row.exam_date ?? ""}</td>
          \`;
          tbody.appendChild(tr);
        }
      }
      loadData();
    </script>
  </body>
  </html>`;
}
