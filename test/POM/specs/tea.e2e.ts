import { expect } from "chai";

describe("window position & chai", () => {
  it("get window rect", async () => {
    await browser.url("https://qavbox.github.io/demo/");
    await browser.pause(3000);
    console.log(await browser.getWindowRect()); // { height: 1012, width: 945, x: 10, y: 10 }
  });
  it("chai", async () => {
    await browser.url("https://qavbox.github.io/demo/");
    const title = await browser.getTitle();
    console.log(title);
    expect(title).to.equal("QAVBOX Demo");
    expect(await browser.getUrl()).to.include("qavbox");
    // expect((await $("aria/Dummy Controls")).isDisplayed).to.equal(true);
  });
});

// npx wdio run ./wdio.conf.ts --spec tea.e2e.ts => run a specific test
