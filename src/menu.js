import { Menu } from './core/menu'

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector)
    this.menuItems = []
    this.menu = null
    this.createMenu()
  }

  createMenu() {
    this.menu = document.querySelector('#menu')
  }

  open() {
    this.menu.classList.add('open')
  }

  close() {
    this.menu.classList.remove('open')
  }

  add(module) {
    this.menuItems.push(module)
    const menuItem = document.createElement('li')
    menuItem.classList.add('menu-item')
    menuItem.dataset.type = module.type
    if (module.render) {
      menuItem.append(module.render())
    } else {
      menuItem.textContent = module.text
    }
    menuItem.addEventListener('click', (event) => {
      const target = event.target
      if (
        !(
          target.innerHTML === '60s' ||
          target.innerHTML === '30s' ||
          target.innerHTML === '15s'
        )
      ) {
        module.trigger()
      }
      this.close()
    })
    this.menu.append(menuItem)
  }

  showContextMenu(event) {
    event.preventDefault()
    this.open()
    this.menu.style.left = `${event.clientX}px`
    this.menu.style.top = `${event.clientY}px`
  }
}