const should = require("should");
const { createReadStream } = require("fs");
const parser = require("../../lib/lifts/parser");
const parse = require("../../lib/lifts/parse")("morzine");

/*global describe, it */
describe("parse morzine", function () {
  it("should return lift status", function (done) {
    var stream = createReadStream(__dirname + "/example/morzine.html");
    stream.on("error", done);
    stream.pipe(
      parser(parse, function (err, status) {
        var expected = {
          "FIL-NEIGE EBAUDS": "closed",
          "TAPIS CHAVANNES": "closed",
          "TAPIS PLATAIS": "closed",
          "TC CHAVANNES": "closed",
          "TC CHERY": "closed",
          "TC du Pleney": "closed",
          "TD4 CHOUCAS": "closed",
          "TD4 INTRETS": "closed",
          "TD4 LINDARETS": "closed",
          "TD4 MOSSETTES": "closed",
          "TD4 ZORE": "closed",
          "TD6 BROCHEAUX": "closed",
          "TD6 CASES": "closed",
          "TD6 CHAUX FLEURIE": "closed",
          "TD6 FORNET": "closed",
          "TD6 GRANDES COMBES": "closed",
          "TD6 LECHERE": "closed",
          "TD6 PROCLOU": "closed",
          "TD6 PROLAYS": "closed",
          "TD6 SERAUSSAIX": "closed",
          "TD6 STADE": "closed",
          "TELECORDE MOUILLE AU BLE": "closed",
          "TK BOULE DE GOMME": "closed",
          "TK GRAND CRY": "closed",
          "TK MOUILLE AU ROI": "closed",
          "TK STADE": "closed",
          "TK SUPER CHERY": "closed",
          "TK TETE DES CRETS": "closed",
          "TK TURCHE": "closed",
          "TK VIEUX CHENE": "closed",
          "TK des Prés": "closed",
          "TK du Bouchet": "closed",
          "TK du Mas Verjus": "closed",
          "TK du Poireau 1": "closed",
          "TK du Poireau 2": "closed",
          "TLC ARDENT": "closed",
          "TLC SUPER": "closed",
          "TPH PRODAINS 3S": "closed",
          "TPH Pointe de Nyon": "closed",
          "TS CHERY NORD": "closed",
          "TS CROIX": "closed",
          "TS FOLLIETS DU GOLF": "closed",
          "TS GRANDE OURSE": "closed",
          "TS Les Têtes": "closed",
          "TS PLANEYS": "closed",
          "TS POINTE": "closed",
          "TS Pointe de Nyon": "closed",
          "TS ROSTA": "closed",
          "TS d'Atray": "closed",
          "TS de Nabor": "closed",
          "TS de la Crusaz": "closed",
          "TS des Fys": "closed",
          "TS des Mouilles": "closed",
          "TS des Raverettes": "closed",
          "TS du Belvédère": "closed",
          "TS du Pré Favre": "closed",
          "TS3 CUBORE": "closed",
          "TS3 PLATEAU": "closed",
          "TS6 TOUR": "closed",
          "TSD CHAVANNES EXPRESS": "closed",
          "TSD Chamossière": "closed",
          "TSD GRAINS D'OR EXPRESS": "closed",
          "TSD Les Troncs": "closed",
          "TSD NAUCHETS EXPRESS": "closed",
          "TSD PERRIERES EXPRESS": "closed",
          "TSD RANFOILLY EXPRESS": "closed",
          "TSD la Charniaz": "closed",
          "TSK ARARE 2": "closed",
          "TSK ARARE1": "closed",
          "TSK BARMETTES": "closed",
          "TSK BARON": "closed",
          "TSK CHAPELLE": "closed",
          "TSK CHAVANETTE 1": "closed",
          "TSK CHAVANETTE 2": "closed",
          "TSK DES TRASHERS": "closed",
          "TSK DROMONTS 1": "closed",
          "TSK DROMONTS 2": "closed",
          "TSK ECOLES 1": "closed",
          "TSK ECOLES 2": "closed",
          "TSK PRODAINS": "closed",
          "TSK SURF": "closed",
          "Tapis Viking": "closed",
        };
        should.exist(status);
        status.should.eql(expected);
        done(err);
      })
    );
  });
});
