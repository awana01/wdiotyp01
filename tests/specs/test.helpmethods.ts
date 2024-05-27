import { basePath, generateRandomInteger, generateTimeToken1 } from "../utils/auto.helper"
import path from 'path'


describe("Test Helper Methods For Project",()=>{
    it("Time token methods",async()=>{
        console.log(`random num ${await generateRandomInteger(10,29)}`)
        console.log(`random num ${await generateRandomInteger(10,29)}`)
        console.log(`random num ${await generateRandomInteger(10,29)}`)
        console.log(`random num ${await generateRandomInteger(10,29)}`)
        console.log(`DateTime: ${await generateTimeToken1()}`)
    })

    it("path and directory related methods",async ()=>{
        var basePath1 = path.resolve('.')
        var imgPath = path.resolve('../img.png')
        var joinPath = path.join(basePath,"/tests/specs");
        
        console.log("Base Path: "+basePath1)
        console.log("Image Path: "+imgPath)
        console.log("base util path:"+basePath)
        console.log("join user path:"+joinPath)
    })


})