import {$,browser,expect} from '@wdio/globals'
import {delay} from '../utils/auto.helper'

describe("Yopmail Tests",()=>{

    before("before Tests",async ()=>{
        console.log("Test before all tests fixture")
        await browser.maximizeWindow()
    })
    
    it("go to yopmail",async()=>{
       await browser.url("https://yopmail.com/")
       await browser.pause(3000)
    })

    it("move to yopmail inbox",async()=>{

        let win =  await browser.getWindowHandle()
        console.log(`win handle: ${win}`)

        await $("input[id='login']").click();
        await $("input[id='login']").setValue("zulutest01@yopmail.com")
        await $("div[id='refreshbut']").click();

        await browser.switchToFrame(await $("iframe[name='ifinbox']"))
       await delay(4000)

       const inbox_layout = await $$("body.bodyinbox.yscrollbar>div:nth-child(2)>div[class='m']");
       console.log(`total element1: ${inbox_layout.length}`);
        
       const len = await $$("div.m")
       console.log(`total element3: ${len.length}`);
       await len[0].click()
       await delay(1000)
       
       await browser.switchToWindow(win);
       await delay(1000)
       await browser.switchToFrame(await $("iframe#ifmail"))
       //await browser.switchToFrame("YOPmail - Mail viewer");
       await delay(1000)
       
       await $("//a[normalize-space()='open this link']").click();
       await delay(5000)

       var mailBody = (await $("//table[1]/tbody[1]/tr[2]/td[1]/p[2]")).getText;
       console.log(mailBody);
       await delay(5000)
    
    })

    it.skip("verify mail",async()=>{

       await $("a.wmlogoclick").click()
       await $("input[id='login']").click();
       await $("input[id='login']").setValue("maxpayne@yopmail.com")
       await $("div[id='refreshbut']").click();
       
       await browser.switchToFrame(await $("iframe[name='ifinbox']"))
       await delay(4000)

       const inbox_layout = await $$("body.bodyinbox.yscrollbar>div:nth-child(2)>div[class='m']");
       console.log(`total element1: ${inbox_layout.length}`);
        
       const len = await $$("div.m")
       console.log(`total element3: ${len.length}`);
       await len[0].click()
       delay(1000)

       await browser.switchToFrame(await $("iframe[name='ifmail']"))
       delay(1000)
       var mailBody = await $("//table[1]/tbody[1]/tr[2]/td[1]/p[2]").getAttribute('innerHTML');
       console.log(mailBody);
       
    })

    it.skip("verify yop inbox",async()=>{
        await browser.switchToFrame(await $("iframe[name='ifinbox']"))
        await delay(4000)

        const inbox_layout = await $$("body.bodyinbox.yscrollbar>div:nth-child(2)>div[class='m']");
        console.log(`total element1: ${inbox_layout.length}`);
        
        
        const len = await $$("div.m")
        console.log(`total element3: ${len.length}`);
        await len[2].click()
        delay(1000)
        await browser.switchToFrame(await $("iframe[name='ifmail']"))
        delay(1000)
        var mailBody = await $("//table[1]/tbody[1]/tr[2]/td[1]/p[2]").getAttribute('text');
        console.log(mailBody);

        // for(let i=0;i<inbox_layout.length;i++){
        //   await inbox_layout[i].scrollIntoView();
        //   // await elem.scrollIntoView({ block: 'center', inline: 'center' });
        //   await browser.pause(500)
        // }
        // await inbox_layout[3].scrollIntoView(true);
        // await inbox_layout[3].click()
    })





})
