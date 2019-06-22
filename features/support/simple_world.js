// features/support/simple_world.js
import {setWorldConstructor, setDefaultTimeout} from "cucumber";
import * as seleniumWebdriver from 'selenium-webdriver'
import * as chrome from 'selenium-webdriver/chrome'

class CustomWorld {
  constructor() {
    this.variable = 0;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }




  // ----------


  driver = new seleniumWebdriver.Builder()
      .withCapabilities(seleniumWebdriver.Capabilities.chrome())
      .setChromeOptions(new chrome.Options().addArguments('window-size=1440,900'))
      .build();



}

setDefaultTimeout(20000);

setWorldConstructor(CustomWorld);


