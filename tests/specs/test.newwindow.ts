import {browser} from '@wdio/globals'
// import allureReporter from '@wdio/allure-reporter'

describe('Test New Tab Window',async ()=>{
       it('should open a new tab', async () => {
            await browser.url('https://google.com')
            console.log(await browser.getTitle())

            await browser.newWindow('https://webdriver.io', {
                            windowName: 'WebdriverIO window',
                            windowFeatures: 'width=420,height=630,resizable,scrollbars=yes,status=1'
                          })
            console.log(await browser.getTitle()) // outputs: "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
            //allureReporter
            const handles = await browser.getWindowHandles()
            await browser.switchToWindow(handles[1])
            await browser.closeWindow()
            await browser.switchToWindow(handles[0])
            console.log(await browser.getTitle()) // outputs: "Google"
        });
})