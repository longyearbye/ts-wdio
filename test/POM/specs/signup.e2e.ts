import { Select } from "../classes/select.ts";

describe("name of the group", () => {
  beforeEach(async () => {
    await browser.url("https://qavbox.github.io/demo/signup/");
  });

  it("test sign up form", async () => {
    await $("#username").setValue("alex");
    expect(await $("#username").getValue()).toEqual("alex");
    await $("#username").clearValue();
    expect(await $("#username").getValue()).toEqual("");
    await $("#email").setValue("alex@qa.qa");
    await $("#tel").setValue("123123123");
    await $$('input[type="text"]').forEach(async (el) => {
      console.log(el.getAttribute("id"));
    });
  });

  it("verify radiobuttons", async () => {
    let exps = await $$("input[name='experience']");
    expect(exps.length).toEqual(8);
    exps.filter(async (el) => {
      if ((await el.getValue()) === "three") {
        await el.click();
        expect(await el.isSelected()).toBe(true);
      }
    });
  });

  it("verify select options", async () => {
    let select = await $('select[name="sgender"]');
    let options = await select.$$("option");
    expect(options.length).toBe(4);
    await select.selectByIndex(2);
    expect(await new Select().getSelectedOption(options)).toEqual("Female");
  });

  it("test scollIntoView option", async () => {
    await (await $("=Tutorials!")).scrollIntoView({ behavior: "smooth" });
  });
});
