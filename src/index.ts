const buttonsEl = document.querySelectorAll(
  'button'
) as NodeListOf<HTMLButtonElement>; /* selecting all the buttons */

const inputFieldEl = document.getElementById('result') as HTMLInputElement;

for (let i: number = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener('click', () => {
    const buttonValue = buttonsEl[i].textContent as string;

    if (buttonValue === 'C') clearResult();
    else if (buttonValue === '=') calculateResult();
    else appendValue(buttonValue);
  });
}

const clearResult = (): void => {
  inputFieldEl.value = '';
};

const calculateResult = (): void => {
  inputFieldEl.value = eval(inputFieldEl.value);
};

const appendValue = (buttonValue: string): void => {
  inputFieldEl.value += buttonValue;
};
