const express = require('express')
const app = express()


var fs = require('fs')


let data = new Date().getTime()
app.use(express.json())
app.get('/api/writefiles', async (req,res) => {   
    await fs.writeFile(`D:/API/${data}.txt`, `${data}` , function (err, file) {
        if (err) throw err;
        console.log('Saved!');
      });
      res.send("File Created")
})
app.get('/api/readfiles', async(req,res) => {
    await  fs.readdir("D:/API", function(err, files) {
       
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }        
        files.forEach(function (file) {           
            res.send(file)            
        });
       
      });
})

  


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});