import { Controller } from "@hotwired/stimulus"
import { toggle } from 'el-transition'
export default class extends Controller {
  static targets = ['openUserMenu', 'userAuthLink'];
  connect() {
    // this.element.textContent = "Bye World"
    this.openUserMenuTarget.addEventListener('click', this.toggleDropdownMenu)
    this.userAuthLinkTargets.forEach((link) => {
      link.addEventListener('click', () => {
        console.log("user links clicked");
      });
    });
  }
  toggleDropdownMenu(){
    toggle(document.getElementById('menu-dropdown-items'));
    }
}
