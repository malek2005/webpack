import Component, { RootElement } from '../../../app.api';
import { Page } from '../page';
import './header.css';


export class Header implements Component {
  private readonly header: HTMLElement;


  constructor(private readonly root: HTMLElement) {
    this.header = document.createElement('header');

  }

  render(): HTMLElement {
    this.root?.appendChild(this.header);
    return this.header;
      }
}

