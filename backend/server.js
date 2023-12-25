const express = require("express")
const sqlite3 = require("sqlite3").verbose()
const fs = require("fs")
const bcrypt = require("bcrypt")
const path = require("path")

const db = new sqlite3.Database("savjeti_db")

if (!fs.existsSync("./savjeti_db")) {
  console.log("[INFO] Created DB")
  db.run(`CREATE TABLE savjeti (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR,
    desc VARCHAR,
    img VARCHAR
    );`)
}

const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let auth = false

app.use(express.static(path.join(__dirname, "static")))

app.post("/api/auth", (req, res, next) => {
  db.get("SELECT password FROM users WHERE username = ?", [req.body.username], (err, row) => {
    if (err) {
      res.status(400).send("Bad Request")
    }

    bcrypt.compare(req.body.password, row["password"], (err, result) => {
      if (result === true) {
        auth = true
        setTimeout(() => {
          auth = false
        }, 30 * 60 * 1000)
        res.redirect("/api/savjeti/add")
        next()
      } else {
        res.status(403).send("failed")
      }

    })
  })
})

app.delete("/api/savjeti/delete/:id", (req, res) => {
  if (auth === false) {
    res.status(403).send("Unauthorized")
  }

  db.run("DELETE FROM savjeti WHERE id = ?", [req.params.id], (err) => {
    if (err) {
      res.status(400).send("Bad request")
    } else {
      res.status(200).send("Ok")
    }
  })
})

app.get("/api/savjeti/delete", (req, res) => {
  if (auth === false) {
    res.status(403).send("Unauthorized")
  } else {
    res.sendFile(path.join(__dirname, '/remove.html'))
  }
})

app.get("/api/savjeti/add", (req, res) => {
  if (auth === false) {
    res.status(403).send("Unauthorized")
  } 
  res.sendFile(path.join(__dirname, '/add.html'));
})

app.get("/api/auth", (req,res) => {
  res.sendFile(path.join(__dirname, '/auth.html'));
})

app.get("/api/savjeti/all", (req, res) => {
  db.all("SELECT id, title FROM savjeti", (err, rows) => {
    res.json(JSON.parse(JSON.stringify(rows)))
  })
})

app.get('/api/savjeti/:id', (req, res) => {
  console.log(req.params.id)
  db.get("SELECT * FROM savjeti WHERE id = ?", [req.params.id], (err, row) => {
    if (err) {
      res.status(400).send("Bad Request")
    }

    if (typeof row === "undefined") {
      res.json(JSON.parse(`{
          "id": 0,
          "title": "",
          "desc": "",
          "img": ""
        }`))
    } else {
      let data = JSON.parse(JSON.stringify(row))
      res.json(data)
    }
  })
})

app.post("/api/savjeti/add", (req, res) => {
  if (auth === false) {
    res.status(403).send("Unauthorized")
  }

  db.run("INSERT INTO savjeti(title, desc, img) VALUES(?, ?, ?)", [req.body.title, req.body.desc, req.body.img], (err) => {
    if (err) {
      console.log("[ERR] " + err)
      res.status(400).send("Bad Request")
    }
    console.log("[INFO] Successfully inserted into db.")
    res.status(200).send("OK")
  })
})



app.listen(port, () => {
  console.log(`[INFO] Started server on port ${port}`)
})
