import { delay } from "../../utils/auto.helper";

class FoxyNewStorePage{

    public async LogoutFoxyApp(){
        await $("//*[contains(text(),'Log Out')]").click();
        await delay(5000);
    }
}

export default new FoxyNewStorePage();