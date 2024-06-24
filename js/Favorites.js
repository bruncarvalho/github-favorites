export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)

    this.tbody = this.root.querySelector('table tbody')


    this.load() //carregar os dados do construtor
  }

  load() { //carregamento de dados
    this.entries = [
      {
        login: 'bruncarvalho',
        name: 'Bruna Carvalho',
        public_repos: '36',
        followers: '5'
      },
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '48',
        followers: '22503'
      },
      {
        login: 'diego3g',
        name: 'Diego Fernandes',
        public_repos: '48',
        followers: '22503'
      },
    ]
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root) //o super é o construtor de Favorites, class Pai
    this.update()
    this.load()
  }

  update() {
    this.removeAllTr() /**tr é a tag do html */

    this.entries.forEach( user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      // row.querySelector('.user img').target = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      //usamos o onclick quando precisamos usar o evento de click apenas uma vez
      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja remover?')
        if(isOk) {
          this.delete(user)
        }
      }


      this.tbody.append(row) //acrescentar (DOM)
    })
  }

  createRow() {
    const tr = document.createElement('tr') //cria o elemento tr

    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/bruncarvalho.png" alt="Imagem de bruncarvalho">
        <a href="https://github.com/bruncarvalho" target="_blank">
          <p>Bruna Carvalho</p>
          <span>bruncarvalho</span>
        </a>
      </td>
      <td class="repositories">
        36
      </td>
      <td class="followers">
        5
      </td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    });
  }
}