const sharp = require('sharp')
const request = require('request')
const fs = require('fs')
const express = require('express')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./'))

const HOST = 'localhost'
const PORT = 3000

app.get('/', (res, req) => {
    res.sendFile('./index.html')
})

app.get('/photos', (req, res) => {
    const path = "./image.png"
    request.head(req.query.url, async (err, resp, body) => {
        request(req.query.url)
            .pipe(fs.createWriteStream(path))
            .on("close", await getPhotos);
    });
    async function getPhotos() {
        try {
            await sharp(path).resize({
                width: 400,
                height: 400
              }).png().toFile('image0.png')
        } catch (error) {
            console.log(error)
        }
        try {
            await sharp(path).resize({
                width: 400,
                height: 400
              })
                .recomb([
                    [1, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]
                ]).png().toFile('image1.png')
        } catch (error) {
            console.log(error)
        }
        try {
            await sharp(path).resize({
                width: 400,
                height: 400
              })
                .recomb([
                    [0, 0, 0],
                    [1, 0, 0],
                    [0, 0, 0]
                ]).png().toFile('image2.png')
        } catch (error) {
            console.log(error)
        }
        try {
            await sharp(path).resize({
                width: 400,
                height: 400
              })
                .recomb([
                    [0, 0, 0],
                    [0, 0, 0],
                    [1, 0, 0]
                ]).png().toFile('image3.png')
        } catch (error) {
            console.log(error)
        }
        res.json({
            img: [`image0.png`, `image1.png`, `image2.png`, `image3.png`],
        });
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
})
