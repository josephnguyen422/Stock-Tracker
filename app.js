const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'josephnguyen422@gmail.com',
        pass: '420darkness'
    }

});

let mailOptions = {
    from:'josephnguyen422@gmail.com',
    to: 'josephnguyen42@gmail.com',
    subject: 'Notification:Product available!!!',
    text: 'https://www.amazon.com/ZOTAC-Graphics-IceStorm-Advanced-ZT-A30700H-10PLHR/dp/B097YY2NL2/ref=sr_1_4?keywords=rtx+3070&qid=1651967231&sr=8-4'
};






(async () =>{
    const browser = await puppeteer.launch(); //{headless:false, slowMo:200}
        
        
        const page = await browser.newPage() /*opens browser*/   
       
        while(1){
            await page.waitForTimeout(3000);
            await page.goto("https://www.amazon.com/ZOTAC-Graphics-IceStorm-Advanced-ZT-A30700H-10PLHR/dp/B097YY2NL2/ref=sr_1_4?keywords=rtx+3070&qid=1651967231&sr=8-4");//
        
                if(await page.$(".add-to-cart-button") !== null) {
                    console.log('IN STOCK!!')
                    transporter.sendMail(mailOptions,function(err,data){
                        if (err){
                            console.log('Error Occured');
                        }else{
                            console.log('Email Sent!')
                        }
                        process.exit()
                    });
                }                  
                else {
                    console.log('Not in stock')
                }
        }
       
            
            

            
        
          

        
    await browser.close();
})();


