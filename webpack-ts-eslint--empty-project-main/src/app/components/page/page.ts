import Component, { RootElement } from '../../app.api';
import { Header } from './header/header';

export class Page implements Component {
  private readonly page: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.root?.appendChild(this.page);
    this.page.appendChild(new Header(this.page).render());

    return this.page;
  }
}
