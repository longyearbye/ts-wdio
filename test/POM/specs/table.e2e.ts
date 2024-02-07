import { scrollInside } from "../classes/select.ts";

describe("name of the group", () => {
  beforeEach(async () => {
    browser.url("https://qavbox.github.io/demo/");
  });
  it("test web table", async () => {
    await $("=WebTable").click();
    browser.pause(2000);
    await $(
      "table[id='table01'] tbody tr:nth-child(1) td:nth-child(2)"
    ).getText(); // Functional
    await browser.pause(5000);
  });
  it("should demonstrate the getProperty command", async () => {
    var elem = await $("https://qavbox.github.io/demo/");
    var tag = await elem.getProperty("href");
    console.log(tag); // outputs: https://qavbox.github.io/demo/
  });
  it("should scroll inside the table", async () => {
    await $("=WebTable").click();
    await (await $("#table02")).scrollIntoView();
    while (!(await $("td=Paul Byrd").isDisplayedInViewport())) {
      scrollInside("#table02", 200);
    }
  });
});
