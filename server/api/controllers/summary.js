const api = require('../../config/api');


module.exports = {
    analyseText : async function(req,res,next){
        let txt = req.body.text;
        let data = {
            "text-stream" : txt 
        }
        let resp = await api.post("",data);
        // resp.data -> summary, keywords, status

        res.json({code: 200, status: 'success', message: 'Text Analysed Successfully', data: resp.data});
    }
}