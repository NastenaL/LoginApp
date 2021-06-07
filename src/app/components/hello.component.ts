import { HelloActions } from '../store/actions/hello.actions';
import { HelloSelectors } from '../store/selectors/hello.selectors';

export class HelloComponent {
  #store = null;

  constructor(store) {
    this.#store = store;
  }

  renderHeader() {
    const helloHeader = document.createElement('h1');

    helloHeader.textContent = HelloSelectors.selectText(this.#store.getState());

    return helloHeader;
  }

  renderButton() {
    const button = document.createElement('button');

    button.innerText = 'Update Title';
    button.addEventListener('click', () => {
      this.#store.dispatch(HelloActions.updateText);
    });

    return button;
  }

  render() {
    const fragment = document.createDocumentFragment();
    const header = this.renderHeader();
    const button = this.renderButton();

    fragment.appendChild(header);
    fragment.appendChild(button);

    return fragment;
  }
}
