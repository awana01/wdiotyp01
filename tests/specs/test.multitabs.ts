import {$,browser} from '@wdio/globals'

describe("Multi tabs", () => {
    it("multiple browser tabs / windows", async () => {
       // open url
       await browser.url("https://google.com");
       await browser.pause(2000);
      
       await browser.newWindow("https://webdriver.io");
       await browser.pause(2000);
       
       await browser.execute((url) => { window.open(url); }, "http://yahoo.com");
       await browser.pause(2000);
       
       await browser.execute((url) => { window.open(url); }, "http://twitter.com");
       await browser.pause(2000);
       
       await browser.switchWindow("google.com");
       await browser.pause(2000);
       
       await browser.switchWindow("webdriver.io");
       await browser.pause(2000);
       
       await browser.switchWindow("yahoo.com");
       await browser.pause(2000);
       
       await browser.switchWindow("twitter.com");
       await browser.pause(2000);
       console.log('test log2')
    });
  });