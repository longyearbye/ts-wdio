describe("name of the group", () => {
  beforeEach(async () => {
    browser.url("https://qavbox.github.io/demo/alerts/");
  });
  it("test alerts", async () => {
    await $("[name='commit']").click();
    console.log(await browser.getAlertText());
    await browser.acceptAlert();

    await browser.pause(3000);
    await $("[id='prompt']").click();
    console.log(await browser.getAlertText());
    await browser.sendAlertText("lolo");
    await browser.acceptAlert();
    expect(await $("#Parademo").getText()).toContain("lolo");
  });

  it("verify links", async () => {
    await $("[name='home']").click();
    await $("aria/Links").click();
    await browser.getWindowHandle();
    await browser.newWindow("https://qavalidation.com/demo-form/");
    await $("[aria-label='Consent']").click();
    await browser.switchWindow("Registration Form");
    expect(await $$("a").length).toBe(12);
  });
});
