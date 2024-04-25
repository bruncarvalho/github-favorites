export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root) //o super é o construtor de Favorites, class Pai
    this.update()
  }

  update() {
    this.removeAllTr()
  }

  removeAllTr() {
    const tbody = this.root.querySelector('table tbody')

    tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    });
  }
}