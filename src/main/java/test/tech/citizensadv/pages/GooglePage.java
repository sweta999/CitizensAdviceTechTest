package test.tech.citizensadv.pages;

import org.openqa.selenium.By;
import test.tech.citizensadv.utility.Utility;

public class GooglePage extends Utility {

    //Page Object Model
    By googleSearchBox = By.xpath("");
    By citizensAdviceWebsite = By.xpath("//body/div[@id='main']/div[@id='cnt']/div[@id='rcnt']/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/div[1]/cite[1]");


    public void setGoogleSearchBox() {
        sendTextToElement(googleSearchBox,"Citizens Advice");
    }
    public void setCitizensAdviceWebsite() {
        mouseHoverToElementAndClick(citizensAdviceWebsite);
    }
}
