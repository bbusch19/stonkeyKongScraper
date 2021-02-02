const puppeteer = require('puppeteer');

// const scrapeImages = async (username) => {
//     const browser = await puppeteer.launch( { headless: true });
//     const page = await browser.newPage();

//     await page.goto('https://twitter.com/login');

//     username = 'scotttharvey'

//     // Login form
//     await page.screenshot({path: '1.png'});

//     await page.type('[type=text', `${username}`);

//     await page.type('[type=password', '');
//     Get yourself some envs bro

//     await page.screenshot({path: '2.png'});

//     await page.click('[role=button]');

//     // Social Page

//     await page.waitFor(5000);

//     await page.goto(`https://twitter.com/${username}`);

//     await page.waitForSelector('#react-root', {
//         visible: true,
//     });


//     await page.screenshot({path: '3.png'});


//     // Execute code in the DOM
//     const data = await page.evaluate( () => {

//         const images = document.querySelectorAll('div img');

//         const urls = Array.from(images).map(v => v.src);

//         return urls
//     });

//     await browser.close();

//     console.log(data);

//     return data;
// }
// scrapeImages('scotttharvey')

const stocky = async () => {
    const browser = await puppeteer.launch( { headless: true });
    var page = await browser.newPage();

    await page.goto('https://robinhood.com/crypto/BTC');

    const name = await page.$eval("#react_root > main > div:nth-child(3) > div > div > div > div > div > div > div.col-12 > section._3ZzTswmGTiUT4AhIhKZfZh > header > div.css-14s4iyf > h1 > span > span > div", el => {
      return  el.innerText.slice(0,10)
    })

    const upDown = await page.$eval("#react_root  main  span.css-10dsbjj > span", el => {
      return  el.classList.contains('up')
    })

    console.log('%c'+`Bitcoin is ${ upDown ? 'UP' : 'DOWN' } @ ${name}`, `color: ${ upDown ? 'cornflowerblue' : 'tomato' }`)

    for (let index = 0; index < 10; index++) {



    }


    await browser.close();

}


stocky()

