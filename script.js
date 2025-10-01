(() => {
  const menuCategories = [
    { id: 'sushi', label: 'Kit padrão', icon: '🍣' },
    { id: 'sashimi', label: 'Kit vegano', icon: '🍃' },
    { id: 'tempura', label: 'kit Hinamatsuri', icon: '🍤' },
    { id: 'ramen', label: 'Kit ano novo', icon: '🍜' },
    { id: 'bebidas', label: 'Bebidas', icon: '🍶' }
  ];

  const menuItems = {
    sushi: [
      {
        name: 'Sushi Salmão',
        description: 'Arroz temperado com fatia de salmão fresco',
        price: 'R$ 18,00',
        image: 'https://www.diadepeixe.com.br/extranet/thumbnail/crop/550x360/Receita/shutterstock_2105735288_1746448515362.jpg'
      },
      {
        name: 'Temaki',
        description: 'Rolinho fino com pepino, peixe e arroz',
        price: 'R$ 12,00',
        image: 'https://static.itdg.com.br/images/auto-auto/e37b23841dfbf1e65819f1e5076b5fdf/temaki-salmao.jpg'
      },
      {
        name: 'Hot Roll',
        description: 'Salmão, pepino, abacate e maionese',
        price: 'R$ 22,00',
        image: 'https://djapa.com.br/wp-content/uploads/2022/05/hot-roll.jpg'
      },
      {
        name: 'Bolinho primavera',
        description: 'Bolinho frito com legumes',
        price: 'R$ 28,00',
        image: 'https://www.sabornamesa.com.br/media/k2/items/cache/e8dcebfd55c9d5d7bbfc0a0f8263a6f3_XL.jpg'
      }
    ],
    sashimi: [
      {
        name: 'Sushi de sunomono',
        description: 'Fatias finas de sunomono fresco',
        price: 'R$ 25,00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFB0jZNUi5xsXnMfg9VjdbH_-yhqPSw_VcA&s'
      },
      {
        name: 'Tempurá',
        description: 'Legumes fritos',
        price: 'R$ 32,00',
        image: 'https://cms.cooknenjoy.com/wp-content/uploads/2023/08/Tempura-01-1200x676.jpg'
      },
      {
        name: 'Yakisoba vegetariano',
        description: 'Clássico prato de macarrão com legumes',
        price: 'R$ 45,00',
        image: 'https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/06/20/133291642-yakisoba-vegetariano.jpg'
      },
      {
        name: 'Tofu',
        description: 'Queijo de soja',
        price: 'R$ 12,00',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG'
      }
    ],
    tempura: [
      {
        name: 'Poke',
        description: 'Peixe cru, gohan e legumas',
        price: 'R$ 30,00',
        image: 'https://ogimg.infoglobo.com.br/rioshow/24896593-8ef-2b7/FT1086A/760/poke-alimento-prato-comida.jpg'
      },
      {
        name: 'Guioza',
        description: 'Bolinho com carne de porco',
        price: 'R$ 22,00',
        image: 'https://anamariareceitas.com.br/wp-content/uploads/2024/06/2148809869-768x512.jpg'
      },
      {
        name: 'Missoshiro',
        description: 'Sopa tradicional japonesa',
        price: 'R$ 35,00',
        image: 'https://s2-receitas.glbimg.com/M3hIZZVmbqimi1xRFLnRo5T5DQA=/600x0/filters:quality(50)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/C/W/4s012VRR2pMTMsTaBtJA/missoshiro-sopa-tipica-japonesa-.jpg'
      },
      {
        name: 'Shimeji',
        description: 'Cogumelos refogados na manteiga',
        price: 'R$ 10,00',
        image: 'https://www.nacozinhadahelo.com.br/wp-content/uploads/2022/06/receita-de-shimeji-na-manteiga.jpg'
      }
    ],
    ramen: [
      {
        name: 'Yakisoba',
        description: 'Clássico macarrão japones',
        price: 'R$ 28,00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2qavhCn19jL2Z5jWYUAllbmzYp1fzTumBw&s'
      },
      {
        name: 'Patel de vento',
        description: 'Pastel',
        price: 'R$ 15,00',
        image: 'https://guiadopastel.com/wp-content/uploads/2021/12/Receitas-de-pastel-de-vento.jpg'
      },
      {
        name: 'Sashimi',
        description: 'Peixe fresco',
        price: 'R$ 26,00',
        image: 'https://www.manusmenu.com/wp-content/uploads/2016/05/1-Salmon-Sashimi-with-Ponzu-3-1-of-1.jpg'
      },
      {
        name: 'Tempurá',
        description: 'Legumes fritos',
        price: 'R$ 32,00',
        image: 'https://cms.cooknenjoy.com/wp-content/uploads/2023/08/Tempura-01-1200x676.jpg'
      }
    ],
    bebidas: [
      {
        name: 'Sake Quente',
        description: 'Sake tradicional servido aquecido',
        price: 'R$ 15,00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY3RiM3Acn3TFieeAx_hiI772XNNE4aMVXg&s'
      },
      {
        name: 'Chá Verde',
        description: 'Chá verde japonês tradicional',
        price: 'R$ 8,00',
        image: 'https://www.estadao.com.br/resizer/v2/AHGCT7ULQ5GMNJ77FHKOLDKENA.jpeg?quality=80&auth=4877e4e7c367b4fe66b64f8de94aaff46b2be43e119ccf889ffba769b3737881&width=1075&height=527&smart=true'
      },
      {
        name: 'Vinho',
        description: 'Vinho',
        price: 'R$ 18,00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvaeihCZIa6De_J6918_wbezbP1fbhlk-96w&s'
      },
      {
        name: 'Refrigerantes',
        description: 'Refrigerantes',
        price: 'R$ 8,00',
        image: 'https://yorkgrill.com.br/wp-content/uploads/2022/06/refrigerante.png'
      }
    ]
  };

  let activeCategory = 'sushi';

  const categoryButtonsContainer = document.getElementById('category-buttons');
  const menuItemsContainer = document.getElementById('menu-items');

  function renderCategoryButtons() {
    categoryButtonsContainer.innerHTML = '';
    menuCategories.forEach(category => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = activeCategory === category.id ? 'active' : '';
      btn.innerHTML = `<span>${category.icon}</span>${category.label}`;
      btn.addEventListener('click', () => {
        if (activeCategory !== category.id) {
          activeCategory = category.id;
          renderCategoryButtons();
          renderMenuItems();
        }
      });
      categoryButtonsContainer.appendChild(btn);
    });
  }

  function renderMenuItems() {
    menuItemsContainer.innerHTML = '';
    const items = menuItems[activeCategory] || [];
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="card-footer">
            <span class="price">${item.price}</span>
            <button class="btn-add" type="button">Adicionar</button>
          </div>
        </div>
      `;

      menuItemsContainer.appendChild(card);
    });
  }

  // Inicializa
  renderCategoryButtons();
  renderMenuItems();
})();