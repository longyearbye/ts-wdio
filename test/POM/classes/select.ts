export class Select {
  async getSelectedOption(options) {
    let selectedText = "";
    for (let option of options) {
      if (await option.isSelected()) {
        selectedText = await option.getText();
        break;
      }
    }
    return selectedText;
  }
}

export function scrollInside(selector, scrollAmount) {
  browser.execute(
    (selector, scrollAmount) => {
      let el = document.querySelector(`${selector}`);
      el.scrollTop = el.scrollTop + parseInt(`${scrollAmount}`);
    },
    selector,
    scrollAmount
  );
}
