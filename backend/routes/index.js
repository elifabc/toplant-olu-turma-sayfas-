var express = require('express');
var router = express.Router();
var fs = require('fs');
const cors = require('cors');
router.use(cors()); //Back-end ve front-ent in aynı makinede çalışabilmesi için

router.post('/toplanti-kaydet', (req, res) => { //Oluştur sayfasındaki verileri alır ve kaydeder.
  const toplanti = req.body; //Aldığımız verileri toplanti değişkenine atar.

  const toplantiJSON = JSON.stringify(toplanti, null, 2); //Toplantı değişkenindeki verileri json formatına dönüştürür.
  let randomCode = Math.random().toString(36).substring(2, 15); //Random kod oluşturuluyor.
  fs.writeFile('toplanti/'+randomCode+'.json', toplantiJSON, 'utf8', (err) => { //Toplantının altına random kod ile dosya kaydediyor.
    if (err) {
      res.status(500).send('Error saving the file');
      return;
    }
    res.status(200).send(randomCode);
  });
});

router.post('/toplanti-oku', (req, res) => { //Toplantıları font-end den okumamız için çağırılan API
  const kod = req.body.data; //Front-end den toplantı kodu alınır.
  const filePath = __dirname+"/../toplanti/"+kod.toString()+".json"; //İlgili toplantının dosya yolunu değişkene atanır.

  if (!fs.existsSync(filePath)) {
    return res.status(404).send('File not found');
  }
  fs.readFile(filePath, 'utf8', (err, data) => { //Dosya okunur.
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading the file');
    }
    res.send(data);
  });
});

router.post('/toplanti-guncelle', (req, res) => { //Topantıya yeni katılımcı geldiğinde ve kesinleştiğinde çalışır.
  const toplanti = req.body.data;
  const kod = req.body.kod;
  const toplantiJSON = JSON.stringify(toplanti, null, 2);
  fs.writeFile('toplanti/'+kod+'.json', toplantiJSON, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      res.status(500).send('Error saving the file');
      return;
    }
    res.status(200).send();
  });
});
module.exports = router;