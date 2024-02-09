import { expect } from "chai";

describe("window position & chai", () => {
  beforeEach(async () => {
    browser.url("https://qavbox.github.io/demo/");
  });
  it("get window rect", async () => {
    await browser.pause(3000);
    console.log(await browser.getWindowRect()); // { height: 1012, width: 945, x: 10, y: 10 }
  });
  it("chai", async () => {
    const title = await browser.getTitle();
    console.log(title);
    expect(title).to.equal("QAVBOX Demo");
    expect(await browser.getUrl()).to.include("qavbox");
  });
});

// npx wdio run ./wdio.conf.ts --spec alert.e2e.ts => run a specific test
