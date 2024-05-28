import {$,browser} from '@wdio/globals'
import {setValue,getValue} from '@wdio/shared-store-service'

describe("Suite 2",()=>{
    it("test get access to share varibale2",async()=>{
        await browser.url("https://www.google.com/")
        const value = await browser.sharedStore.get('key')
        console.log("my value ============>>>>>>>>"+value) // returns "foobar123"
        console.log("first user mail: "+global.newuser)
    })
})