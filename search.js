const puppeteer = require('puppeteer');
var fs = require('fs'); /*needed to read txt files */



(async () =>{
    const text = fs.readFileSync("./Searchitem.txt").toString();
    const textArray= text.split("\r\n");
    console.log(textArray,textArray.length);
    

    
   
    for (let i= 0; i < 1; i++){
        const browser = await puppeteer.launch();
        const page = await browser.newPage(); /*opens browser*/  
        if (i = 0){
            await page.goto("https://www.amazon.com/");
            await page.screenshot({path: 'images/screenshot '+i+'.png', fullPage:true}); /*Take a screenshot using your settings */
            await browser.close();
        }
    }

})();



