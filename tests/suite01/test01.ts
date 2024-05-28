import {$,browser} from '@wdio/globals'
import {setValue,getValue} from '@wdio/shared-store-service'


global.username =undefined

describe("Suite 1",()=>{
    it("test setting to share varibale1",async ()=>{
        await browser.url("https://www.google.com/")
        await browser.sharedStore.set('key', 'foobar123')

        global.username = "zimpa123@yopmail.com"
        console.log("first test name: ")
    })
})