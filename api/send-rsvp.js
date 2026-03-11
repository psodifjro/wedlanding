export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ ok:false })
}

const data = req.body

const text = `
💌 Новая анкета

👤 ФИО: ${data.fullname}

✅ Придёт: ${data.attendance}

👥 Пара: ${data.companions || "-"}

👶 Дети: ${data.children || "-"}

🍷 Алкоголь: ${data.alcohol || "-"}

`

const response = await fetch(
`https://api.telegram.org/bot7686705887:AAEihFWKhnYeDHVIm1NbPwnxecmLIPgDLSs/sendMessage`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
chat_id:815325116,
text:text
})
}
)

const result = await response.json()

return res.status(200).json({ ok:true, result })
}