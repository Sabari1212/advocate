const model = require("../Model/UserModel")
const mailer = require('nodemailer')
const fs = require("fs");
const PDFDocument = require('pdfkit-table');



exports.CreateUser = async (req, res) => {
    try {
        const data = req.body
        const response = await model.create(data)


        const sender = mailer.createTransport({
            service: 'gmail',
            auth: {
                user: "advocatestrk@gmail.com",
                pass: "pmbb oooj eqws fgzd"
            }
        })

        const compose = {
            from: "advocatestrk@gmail.com",
            to: "sabari9750371420@gmail.com,prosbari6@gmail.com",
            subject: "One Client Sent Message",
            text: `Name:${data.Name}\nEmail:${data.Email}\n Mobile-No:${data.Mobile_No}\n Message:${data.Message}`
        };
        const compose1 = {
            from: "advocatestrk@gmail.com",
            to: data.Email,
            subject: "Respond Message from Trk Advocate'S",
            text: `Thaning You For Contact Us.\n We Will Contact You Soon`
        };

        sender.sendMail(compose, (err, info) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Mail Sent Successfully" + info.response)
            }
        })
        sender.sendMail(compose1, (err, info) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Mail Sent Successfully" + info.response)
            }
        })
        res.status(200).json({ message: "Successfully sent" })

    }
    catch (err) {
        res.status(400).json({ message: err })
    }


}
exports.getUser = async (req, res) => {
    try {
        const data = await model.find()

        res.status(200).json(data)

    }
    catch (err) {
        res.status(400).json({ message: err })
    }
}
exports.getPdf = async (req, res) => {
    try {
        const data = await model.find()
        console.log(data)
        // init document
        let doc = new PDFDocument({ margin: 30, size: 'A4' });
        res.setHeader('Content-Type','application/pdf');
        res.setHeader('Content-Disposition','attachment;filename="tables.pdf"');
        doc.pipe(res);

        const tableJson = { 
            "headers": [
                { "label":"S.No", "property":"s.no", "width":50},
              { "label":"Name", "property":"name", "width":100,},
              { "label":"Email", "property":"email", "width":100 },
              { "label":"Mobile_No", "property":"mobile-no", "width":100 },
              { "label":"Message", "property":"message", "width":200 }
            ],
           
            "rows": data.map((user,index)=>[index+1,user.Name,user.Email,user.Mobile_No,user.Message]),
            "options": {
              "width": 700
            }
          }
          doc.font('Helvetica-Bold').fontSize(20)
          doc.text("Client Details",{align:'center'})
          doc.moveDown(1)
          doc.table(tableJson);
    // done!
    doc.end();

    } catch (error) {

        res.status(400).send('failed to generate pdf')




    }

};

exports.deleteUser=async (req,res)=>{
    try{
        const response=await model.findByIdAndDelete(req.params.id)
        res.status(200).send("Successfully Deleted")
    }
    catch(err){
        res.status(400).send("Error in Delete")
    }
}