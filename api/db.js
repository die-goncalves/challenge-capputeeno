const { faker } = require('@faker-js/faker')

const baseProducts = [
  {
    name: 'Caneca de cerâmica rústica',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
    category: 'mugs',
  },
  {
    name: 'Camiseta not today.',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg',
    category: 't-shirts',
  },
  {
    name: 'Caneca Black Ring',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg',
    category: 'mugs',
  },
  {
    name: 'Camiseta Broken Saints',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg',
    category: 't-shirts',
  },
  {
    name: 'Camiseta Outcast',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg',
    category: 't-shirts',
  },
  {
    name: 'Caneca The Grounds',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg',
    category: 'mugs',
  },
  {
    name: 'Camiseta evening',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg',
    category: 't-shirts',
  },
  {
    name: 'Caneca preto fosco',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg',
    category: 'mugs',
  },
  {
    name: 'Caneca Never settle',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg',
    category: 'mugs',
  },
  {
    name: 'Camiseta DREAMER',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg',
    category: 't-shirts',
  },
  {
    name: 'Caneca Decaf! P&Co',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg',
    category: 'mugs',
  },
  {
    name: 'Camiseta Ramones',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg',
    category: 't-shirts',
  },
];

function generateProducts(amount, baseProducts) {
  return Array.from({ length: amount }).map((p) => {
    return {
      ...baseProducts[faker.number.int({ min: 0, max: baseProducts.length - 1 })],
      id: faker.string.uuid(),
      price_in_cents: faker.number.int({
        min: 2000,
        max: 10000,
      }),
      sales: faker.number.int(40),
      created_at: faker.date.past(),
    }
  })
}  

const allProducts = [
  {
      "name": "Caneca Never settle",
      "description": "Recusandae expedita velit enim. Commodi eum architecto deserunt temporibus quaerat sint sapiente voluptatibus. Nemo fugit quisquam vitae doloribus recusandae voluptatem praesentium dolorum deleniti.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
      "category": "mugs",
      "id": "cf69f421-4e9d-41ba-aea3-566fcb4d2811",
      "price_in_cents": 9955,
      "sales": 27,
      "created_at": "2023-05-26T07:09:17.698Z"
  },
  {
      "name": "Camiseta not today.",
      "description": "Accusantium sit ad delectus neque quibusdam. Nulla quidem ab ipsa maxime ducimus. Laboriosam adipisci perferendis hic voluptas.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
      "category": "t-shirts",
      "id": "beeb095f-5886-4229-9ec6-e7092da3f7a5",
      "price_in_cents": 6598,
      "sales": 0,
      "created_at": "2023-02-08T05:00:03.759Z"
  },
  {
      "name": "Caneca Never settle",
      "description": "Recusandae expedita velit enim. Commodi eum architecto deserunt temporibus quaerat sint sapiente voluptatibus. Nemo fugit quisquam vitae doloribus recusandae voluptatem praesentium dolorum deleniti.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
      "category": "mugs",
      "id": "b708880e-9a70-4454-9686-2e722856696f",
      "price_in_cents": 3314,
      "sales": 34,
      "created_at": "2022-06-21T06:42:46.486Z"
  },
  {
      "name": "Camiseta Broken Saints",
      "description": "Adipisci exercitationem dolore deleniti laborum. Exercitationem iste adipisci unde illo in quia modi. Nesciunt soluta temporibus quod blanditiis omnis cumque ratione dolore expedita.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
      "category": "t-shirts",
      "id": "8ceb9658-31b6-4545-a6d7-acdb12ea9f79",
      "price_in_cents": 6940,
      "sales": 27,
      "created_at": "2022-10-19T07:22:39.838Z"
  },
  {
      "name": "Camiseta Ramones",
      "description": "Enim veniam inventore ea blanditiis vel perferendis explicabo. Vero repellendus nemo. Officiis unde harum deleniti vel distinctio.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
      "category": "t-shirts",
      "id": "bb73a405-b658-42f7-b08c-41eb2b545f1a",
      "price_in_cents": 9053,
      "sales": 20,
      "created_at": "2022-06-19T06:23:19.418Z"
  },
  {
      "name": "Caneca de cerâmica rústica",
      "description": "Expedita assumenda tempora veniam quia voluptates enim alias eveniet. Eos ex saepe accusantium. Mollitia reiciendis numquam tempora nesciunt doloremque aliquid eligendi reiciendis quo.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
      "category": "mugs",
      "id": "a90ee90e-787e-4d50-adf1-c048804d900d",
      "price_in_cents": 8087,
      "sales": 6,
      "created_at": "2022-07-14T17:59:32.412Z"
  },
  {
      "name": "Caneca Black Ring",
      "description": "Cum maiores officiis doloribus veniam fuga provident. Consequuntur a eum explicabo accusantium eveniet debitis repellat aperiam. Facilis deleniti nisi enim.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
      "category": "mugs",
      "id": "ae74c71b-66fa-40ad-a34a-36ad2efcd378",
      "price_in_cents": 5452,
      "sales": 5,
      "created_at": "2022-09-29T12:20:42.716Z"
  },
  {
      "name": "Caneca The Grounds",
      "description": "Facere minima quis atque modi accusamus. Modi aperiam iste facilis at. Cupiditate vel saepe fuga.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg",
      "category": "mugs",
      "id": "10bc8a93-7b1b-4e20-8ff5-60a925079f67",
      "price_in_cents": 6190,
      "sales": 8,
      "created_at": "2022-10-05T17:51:18.471Z"
  },
  {
      "name": "Caneca de cerâmica rústica",
      "description": "Expedita assumenda tempora veniam quia voluptates enim alias eveniet. Eos ex saepe accusantium. Mollitia reiciendis numquam tempora nesciunt doloremque aliquid eligendi reiciendis quo.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
      "category": "mugs",
      "id": "28a5a779-88ed-438c-8411-22db90d47694",
      "price_in_cents": 5739,
      "sales": 12,
      "created_at": "2023-03-24T04:11:08.455Z"
  },
  {
      "name": "Camiseta Broken Saints",
      "description": "Adipisci exercitationem dolore deleniti laborum. Exercitationem iste adipisci unde illo in quia modi. Nesciunt soluta temporibus quod blanditiis omnis cumque ratione dolore expedita.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
      "category": "t-shirts",
      "id": "fce5df7f-da0f-49f1-8182-2288801e0796",
      "price_in_cents": 6632,
      "sales": 22,
      "created_at": "2022-08-30T16:53:13.303Z"
  },
  {
      "name": "Caneca The Grounds",
      "description": "Facere minima quis atque modi accusamus. Modi aperiam iste facilis at. Cupiditate vel saepe fuga.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg",
      "category": "mugs",
      "id": "6c85d432-49d9-4ea1-adee-aab6380b671f",
      "price_in_cents": 6749,
      "sales": 2,
      "created_at": "2022-07-17T22:41:03.073Z"
  },
  {
      "name": "Camiseta Ramones",
      "description": "Enim veniam inventore ea blanditiis vel perferendis explicabo. Vero repellendus nemo. Officiis unde harum deleniti vel distinctio.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
      "category": "t-shirts",
      "id": "d1b4a6d5-8867-4486-af66-96dbf1de4f69",
      "price_in_cents": 9218,
      "sales": 30,
      "created_at": "2022-09-19T22:19:15.315Z"
  },
  {
      "name": "Camiseta not today.",
      "description": "Accusantium sit ad delectus neque quibusdam. Nulla quidem ab ipsa maxime ducimus. Laboriosam adipisci perferendis hic voluptas.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
      "category": "t-shirts",
      "id": "f88d77bd-7ce6-4625-aa98-1db0fa855bce",
      "price_in_cents": 3283,
      "sales": 34,
      "created_at": "2023-03-07T21:07:30.042Z"
  },
  {
      "name": "Camiseta not today.",
      "description": "Accusantium sit ad delectus neque quibusdam. Nulla quidem ab ipsa maxime ducimus. Laboriosam adipisci perferendis hic voluptas.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
      "category": "t-shirts",
      "id": "e711e9ef-4e09-47b8-be31-5c193ee5d69d",
      "price_in_cents": 3398,
      "sales": 40,
      "created_at": "2022-09-26T23:08:20.101Z"
  },
  {
      "name": "Camiseta evening",
      "description": "Odit quas voluptas odio ad tempore eveniet. Veritatis sunt aut recusandae. Eius expedita odit dolore dolor sequi facilis vero ut quam.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
      "category": "t-shirts",
      "id": "ee7ebd88-5bc3-4839-bf95-abcf7b97c7b0",
      "price_in_cents": 4524,
      "sales": 12,
      "created_at": "2022-07-11T07:17:13.228Z"
  },
  {
      "name": "Camiseta evening",
      "description": "Odit quas voluptas odio ad tempore eveniet. Veritatis sunt aut recusandae. Eius expedita odit dolore dolor sequi facilis vero ut quam.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
      "category": "t-shirts",
      "id": "ebdf49e9-1bd1-4da1-a219-f4795d48f734",
      "price_in_cents": 8514,
      "sales": 1,
      "created_at": "2022-11-03T07:39:21.290Z"
  },
  {
      "name": "Camiseta DREAMER",
      "description": "Voluptates eveniet quam. Quia omnis quaerat quis eum fugiat eaque ducimus ab. Iure sint consequuntur perspiciatis magnam dolore esse sequi voluptatum.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg",
      "category": "t-shirts",
      "id": "010b8d22-4df2-4c9d-9308-102d7a9e0910",
      "price_in_cents": 4503,
      "sales": 20,
      "created_at": "2023-04-27T17:22:59.294Z"
  },
  {
      "name": "Caneca Never settle",
      "description": "Recusandae expedita velit enim. Commodi eum architecto deserunt temporibus quaerat sint sapiente voluptatibus. Nemo fugit quisquam vitae doloribus recusandae voluptatem praesentium dolorum deleniti.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
      "category": "mugs",
      "id": "fe906b90-9642-4d1e-bbaf-2514a5bae2f7",
      "price_in_cents": 7948,
      "sales": 1,
      "created_at": "2023-04-14T06:49:14.790Z"
  },
  {
      "name": "Camiseta evening",
      "description": "Odit quas voluptas odio ad tempore eveniet. Veritatis sunt aut recusandae. Eius expedita odit dolore dolor sequi facilis vero ut quam.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
      "category": "t-shirts",
      "id": "1a902a50-3750-4e86-90f8-d7eda556b003",
      "price_in_cents": 5981,
      "sales": 31,
      "created_at": "2023-05-16T00:24:15.880Z"
  },
  {
      "name": "Camiseta DREAMER",
      "description": "Voluptates eveniet quam. Quia omnis quaerat quis eum fugiat eaque ducimus ab. Iure sint consequuntur perspiciatis magnam dolore esse sequi voluptatum.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg",
      "category": "t-shirts",
      "id": "119fd428-ca0b-4399-a8a7-6260b65f7c51",
      "price_in_cents": 9772,
      "sales": 35,
      "created_at": "2022-07-06T01:18:38.753Z"
  },
  {
      "name": "Camiseta Outcast",
      "description": "Totam in assumenda occaecati corrupti deleniti sit. Culpa facilis perferendis labore minima explicabo officia cupiditate. Cupiditate qui molestiae dolore quidem corporis harum distinctio.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
      "category": "t-shirts",
      "id": "de24ee7e-78e0-47d2-ab20-84e1af8e4a83",
      "price_in_cents": 2438,
      "sales": 0,
      "created_at": "2022-06-26T21:53:47.245Z"
  },
  {
      "name": "Caneca Decaf! P&Co",
      "description": "Maiores tempore nisi perspiciatis nostrum aspernatur iste dolorum. Odit error fugit. Doloremque doloremque veniam atque suscipit incidunt voluptates.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
      "category": "mugs",
      "id": "b6a32b41-73ec-424d-9c26-9d06c4d7568b",
      "price_in_cents": 5152,
      "sales": 39,
      "created_at": "2023-02-28T04:08:33.767Z"
  },
  {
      "name": "Camiseta Outcast",
      "description": "Totam in assumenda occaecati corrupti deleniti sit. Culpa facilis perferendis labore minima explicabo officia cupiditate. Cupiditate qui molestiae dolore quidem corporis harum distinctio.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
      "category": "t-shirts",
      "id": "6d5f9445-36fa-4a5b-83a9-aa6c210050d0",
      "price_in_cents": 2843,
      "sales": 0,
      "created_at": "2022-09-16T08:46:17.545Z"
  },
  {
      "name": "Caneca Decaf! P&Co",
      "description": "Maiores tempore nisi perspiciatis nostrum aspernatur iste dolorum. Odit error fugit. Doloremque doloremque veniam atque suscipit incidunt voluptates.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
      "category": "mugs",
      "id": "60fd7942-5cc0-4f83-a672-e514d78d9408",
      "price_in_cents": 6330,
      "sales": 34,
      "created_at": "2022-10-04T10:58:43.032Z"
  },
  {
      "name": "Camiseta not today.",
      "description": "Accusantium sit ad delectus neque quibusdam. Nulla quidem ab ipsa maxime ducimus. Laboriosam adipisci perferendis hic voluptas.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
      "category": "t-shirts",
      "id": "35447e8c-e5ba-4863-ab0c-030a7a106276",
      "price_in_cents": 4700,
      "sales": 32,
      "created_at": "2022-12-06T14:23:24.765Z"
  },
  {
      "name": "Caneca Decaf! P&Co",
      "description": "Maiores tempore nisi perspiciatis nostrum aspernatur iste dolorum. Odit error fugit. Doloremque doloremque veniam atque suscipit incidunt voluptates.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
      "category": "mugs",
      "id": "c0cb6399-7bf8-4ab2-9213-b7b0deaabf8b",
      "price_in_cents": 4834,
      "sales": 34,
      "created_at": "2023-04-28T21:24:04.699Z"
  },
  {
      "name": "Camiseta Outcast",
      "description": "Totam in assumenda occaecati corrupti deleniti sit. Culpa facilis perferendis labore minima explicabo officia cupiditate. Cupiditate qui molestiae dolore quidem corporis harum distinctio.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
      "category": "t-shirts",
      "id": "8432a5a4-862b-46f3-9c19-ebf1642c537e",
      "price_in_cents": 7011,
      "sales": 4,
      "created_at": "2023-03-14T11:17:28.933Z"
  },
  {
      "name": "Camiseta Ramones",
      "description": "Enim veniam inventore ea blanditiis vel perferendis explicabo. Vero repellendus nemo. Officiis unde harum deleniti vel distinctio.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
      "category": "t-shirts",
      "id": "4ed3d3b7-2c93-4050-9ab6-3d7255875c17",
      "price_in_cents": 5442,
      "sales": 25,
      "created_at": "2023-05-11T22:01:40.045Z"
  },
  {
      "name": "Camiseta not today.",
      "description": "Accusantium sit ad delectus neque quibusdam. Nulla quidem ab ipsa maxime ducimus. Laboriosam adipisci perferendis hic voluptas.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
      "category": "t-shirts",
      "id": "77686522-2e87-4964-80ff-36007679d96f",
      "price_in_cents": 8867,
      "sales": 36,
      "created_at": "2023-04-27T13:50:12.845Z"
  },
  {
      "name": "Camiseta not today.",
      "description": "Accusantium sit ad delectus neque quibusdam. Nulla quidem ab ipsa maxime ducimus. Laboriosam adipisci perferendis hic voluptas.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
      "category": "t-shirts",
      "id": "abeef194-b05b-453c-9d20-21a0cb3b9a23",
      "price_in_cents": 8647,
      "sales": 28,
      "created_at": "2022-06-13T20:32:41.580Z"
  },
  {
      "name": "Caneca Never settle",
      "description": "Recusandae expedita velit enim. Commodi eum architecto deserunt temporibus quaerat sint sapiente voluptatibus. Nemo fugit quisquam vitae doloribus recusandae voluptatem praesentium dolorum deleniti.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
      "category": "mugs",
      "id": "23423fe7-ae4e-4be4-806a-a14dcbd03f2f",
      "price_in_cents": 8642,
      "sales": 22,
      "created_at": "2023-04-14T05:57:06.865Z"
  },
  {
      "name": "Caneca Decaf! P&Co",
      "description": "Maiores tempore nisi perspiciatis nostrum aspernatur iste dolorum. Odit error fugit. Doloremque doloremque veniam atque suscipit incidunt voluptates.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
      "category": "mugs",
      "id": "37621c74-c1d9-4bb5-bd20-b43faad73149",
      "price_in_cents": 7397,
      "sales": 3,
      "created_at": "2023-01-31T14:05:48.610Z"
  },
  {
      "name": "Camiseta Outcast",
      "description": "Totam in assumenda occaecati corrupti deleniti sit. Culpa facilis perferendis labore minima explicabo officia cupiditate. Cupiditate qui molestiae dolore quidem corporis harum distinctio.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
      "category": "t-shirts",
      "id": "0c6f03f4-a916-4147-b6db-de89a6ee255a",
      "price_in_cents": 3219,
      "sales": 39,
      "created_at": "2022-06-23T03:43:40.257Z"
  },
  {
      "name": "Camiseta evening",
      "description": "Odit quas voluptas odio ad tempore eveniet. Veritatis sunt aut recusandae. Eius expedita odit dolore dolor sequi facilis vero ut quam.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
      "category": "t-shirts",
      "id": "e9a8e6e7-8dad-48da-a5d2-7dd7cd0e55e1",
      "price_in_cents": 7305,
      "sales": 26,
      "created_at": "2023-01-19T22:23:40.798Z"
  },
  {
      "name": "Camiseta Outcast",
      "description": "Totam in assumenda occaecati corrupti deleniti sit. Culpa facilis perferendis labore minima explicabo officia cupiditate. Cupiditate qui molestiae dolore quidem corporis harum distinctio.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
      "category": "t-shirts",
      "id": "04c1278c-adf5-40f5-a018-fba4b0a941a8",
      "price_in_cents": 7883,
      "sales": 16,
      "created_at": "2022-10-22T05:15:48.546Z"
  },
  {
      "name": "Camiseta DREAMER",
      "description": "Voluptates eveniet quam. Quia omnis quaerat quis eum fugiat eaque ducimus ab. Iure sint consequuntur perspiciatis magnam dolore esse sequi voluptatum.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg",
      "category": "t-shirts",
      "id": "fa16acbb-d1e6-450a-a951-6cd77be96f52",
      "price_in_cents": 3081,
      "sales": 24,
      "created_at": "2022-08-28T11:07:50.758Z"
  },
  {
      "name": "Caneca Decaf! P&Co",
      "description": "Maiores tempore nisi perspiciatis nostrum aspernatur iste dolorum. Odit error fugit. Doloremque doloremque veniam atque suscipit incidunt voluptates.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
      "category": "mugs",
      "id": "b96c6d5d-d80c-40eb-9aaa-dac769a32dea",
      "price_in_cents": 2896,
      "sales": 36,
      "created_at": "2023-06-04T02:02:45.168Z"
  },
  {
      "name": "Caneca Black Ring",
      "description": "Cum maiores officiis doloribus veniam fuga provident. Consequuntur a eum explicabo accusantium eveniet debitis repellat aperiam. Facilis deleniti nisi enim.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
      "category": "mugs",
      "id": "e59431e7-7c1c-497c-bc36-0b08d906c0c2",
      "price_in_cents": 4852,
      "sales": 3,
      "created_at": "2022-06-23T16:56:51.151Z"
  },
  {
      "name": "Camiseta Outcast",
      "description": "Totam in assumenda occaecati corrupti deleniti sit. Culpa facilis perferendis labore minima explicabo officia cupiditate. Cupiditate qui molestiae dolore quidem corporis harum distinctio.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
      "category": "t-shirts",
      "id": "a1efe081-9841-454f-9412-9c5b2b243fa7",
      "price_in_cents": 8427,
      "sales": 8,
      "created_at": "2022-11-22T11:44:38.697Z"
  },
  {
      "name": "Caneca preto fosco",
      "description": "Est minima totam. Ipsum cupiditate porro nisi. Sapiente accusantium quae.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg",
      "category": "mugs",
      "id": "de79c10a-37d5-4a3b-b4ed-da719dea4c6d",
      "price_in_cents": 7716,
      "sales": 27,
      "created_at": "2022-07-07T18:52:46.490Z"
  },
  {
      "name": "Camiseta Broken Saints",
      "description": "Adipisci exercitationem dolore deleniti laborum. Exercitationem iste adipisci unde illo in quia modi. Nesciunt soluta temporibus quod blanditiis omnis cumque ratione dolore expedita.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
      "category": "t-shirts",
      "id": "c1acfd4e-db45-4451-a4bc-ecae1311efe2",
      "price_in_cents": 5747,
      "sales": 39,
      "created_at": "2023-02-04T12:16:23.417Z"
  },
  {
      "name": "Camiseta Outcast",
      "description": "Totam in assumenda occaecati corrupti deleniti sit. Culpa facilis perferendis labore minima explicabo officia cupiditate. Cupiditate qui molestiae dolore quidem corporis harum distinctio.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
      "category": "t-shirts",
      "id": "8f5a9d3b-e247-43ea-a2ce-c04ecb8cf578",
      "price_in_cents": 7446,
      "sales": 28,
      "created_at": "2022-11-07T10:37:34.305Z"
  },
  {
      "name": "Caneca Never settle",
      "description": "Recusandae expedita velit enim. Commodi eum architecto deserunt temporibus quaerat sint sapiente voluptatibus. Nemo fugit quisquam vitae doloribus recusandae voluptatem praesentium dolorum deleniti.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
      "category": "mugs",
      "id": "217f56c2-4a7a-4b4e-8e35-b36d35aa6e50",
      "price_in_cents": 4502,
      "sales": 14,
      "created_at": "2022-12-02T13:40:54.516Z"
  },
  {
      "name": "Camiseta Broken Saints",
      "description": "Adipisci exercitationem dolore deleniti laborum. Exercitationem iste adipisci unde illo in quia modi. Nesciunt soluta temporibus quod blanditiis omnis cumque ratione dolore expedita.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
      "category": "t-shirts",
      "id": "ffcb5669-646b-454d-a658-70b2839db24d",
      "price_in_cents": 4508,
      "sales": 24,
      "created_at": "2022-12-17T03:14:54.511Z"
  },
  {
      "name": "Caneca The Grounds",
      "description": "Facere minima quis atque modi accusamus. Modi aperiam iste facilis at. Cupiditate vel saepe fuga.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg",
      "category": "mugs",
      "id": "6f93182c-322e-444e-9fb5-90f89656e188",
      "price_in_cents": 7262,
      "sales": 15,
      "created_at": "2023-04-02T22:49:06.363Z"
  },
  {
      "name": "Camiseta Broken Saints",
      "description": "Adipisci exercitationem dolore deleniti laborum. Exercitationem iste adipisci unde illo in quia modi. Nesciunt soluta temporibus quod blanditiis omnis cumque ratione dolore expedita.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
      "category": "t-shirts",
      "id": "49a32366-e93c-4eae-a210-83f2024f584d",
      "price_in_cents": 9940,
      "sales": 21,
      "created_at": "2022-07-21T01:57:54.266Z"
  },
  {
      "name": "Camiseta Outcast",
      "description": "Totam in assumenda occaecati corrupti deleniti sit. Culpa facilis perferendis labore minima explicabo officia cupiditate. Cupiditate qui molestiae dolore quidem corporis harum distinctio.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
      "category": "t-shirts",
      "id": "0336c408-9c06-4fbc-add5-497ba291efa0",
      "price_in_cents": 5344,
      "sales": 7,
      "created_at": "2022-06-27T14:51:00.479Z"
  },
  {
      "name": "Caneca Never settle",
      "description": "Recusandae expedita velit enim. Commodi eum architecto deserunt temporibus quaerat sint sapiente voluptatibus. Nemo fugit quisquam vitae doloribus recusandae voluptatem praesentium dolorum deleniti.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
      "category": "mugs",
      "id": "9dab6f79-d0a0-4ff6-bae8-5cd466f54b4b",
      "price_in_cents": 9335,
      "sales": 12,
      "created_at": "2023-05-02T06:58:36.481Z"
  },
  {
      "name": "Camiseta not today.",
      "description": "Accusantium sit ad delectus neque quibusdam. Nulla quidem ab ipsa maxime ducimus. Laboriosam adipisci perferendis hic voluptas.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
      "category": "t-shirts",
      "id": "f096fb69-d1b3-437b-82a0-f11f184cb23d",
      "price_in_cents": 5633,
      "sales": 33,
      "created_at": "2022-08-30T17:18:42.707Z"
  },
  {
      "name": "Caneca de cerâmica rústica",
      "description": "Expedita assumenda tempora veniam quia voluptates enim alias eveniet. Eos ex saepe accusantium. Mollitia reiciendis numquam tempora nesciunt doloremque aliquid eligendi reiciendis quo.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
      "category": "mugs",
      "id": "22c12ce3-435c-407c-b035-b4c1cd43a318",
      "price_in_cents": 5494,
      "sales": 12,
      "created_at": "2023-03-24T07:51:50.667Z"
  },
  {
      "name": "Caneca The Grounds",
      "description": "Facere minima quis atque modi accusamus. Modi aperiam iste facilis at. Cupiditate vel saepe fuga.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg",
      "category": "mugs",
      "id": "9eff509a-ec1c-4e1a-85f1-ebe345af365e",
      "price_in_cents": 3183,
      "sales": 23,
      "created_at": "2022-10-30T08:35:43.079Z"
  },
  {
      "name": "Camiseta DREAMER",
      "description": "Voluptates eveniet quam. Quia omnis quaerat quis eum fugiat eaque ducimus ab. Iure sint consequuntur perspiciatis magnam dolore esse sequi voluptatum.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg",
      "category": "t-shirts",
      "id": "0896b316-8ab5-4064-bc94-99b2a9df99f9",
      "price_in_cents": 7977,
      "sales": 0,
      "created_at": "2023-05-03T09:11:25.178Z"
  },
  {
      "name": "Camiseta Ramones",
      "description": "Enim veniam inventore ea blanditiis vel perferendis explicabo. Vero repellendus nemo. Officiis unde harum deleniti vel distinctio.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
      "category": "t-shirts",
      "id": "9799c690-6008-4a4e-8bde-b1e0a0e0b551",
      "price_in_cents": 3914,
      "sales": 7,
      "created_at": "2023-03-31T19:30:23.119Z"
  },
  {
      "name": "Camiseta Broken Saints",
      "description": "Adipisci exercitationem dolore deleniti laborum. Exercitationem iste adipisci unde illo in quia modi. Nesciunt soluta temporibus quod blanditiis omnis cumque ratione dolore expedita.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
      "category": "t-shirts",
      "id": "86f8c08e-9277-4858-86f4-2570537335c0",
      "price_in_cents": 4019,
      "sales": 20,
      "created_at": "2023-01-05T01:05:23.027Z"
  },
  {
      "name": "Caneca Decaf! P&Co",
      "description": "Maiores tempore nisi perspiciatis nostrum aspernatur iste dolorum. Odit error fugit. Doloremque doloremque veniam atque suscipit incidunt voluptates.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
      "category": "mugs",
      "id": "e3a09493-e0c8-4dff-a21e-0228e4938ea8",
      "price_in_cents": 6695,
      "sales": 9,
      "created_at": "2022-06-18T09:55:11.234Z"
  },
  {
      "name": "Caneca Black Ring",
      "description": "Cum maiores officiis doloribus veniam fuga provident. Consequuntur a eum explicabo accusantium eveniet debitis repellat aperiam. Facilis deleniti nisi enim.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
      "category": "mugs",
      "id": "3a33d63f-0498-4b48-a5e6-76cbfda2f212",
      "price_in_cents": 3801,
      "sales": 18,
      "created_at": "2022-09-07T17:54:04.728Z"
  },
  {
      "name": "Caneca Black Ring",
      "description": "Cum maiores officiis doloribus veniam fuga provident. Consequuntur a eum explicabo accusantium eveniet debitis repellat aperiam. Facilis deleniti nisi enim.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
      "category": "mugs",
      "id": "459b63bc-befd-4bca-be6f-01c611ac587e",
      "price_in_cents": 3345,
      "sales": 16,
      "created_at": "2022-08-06T08:46:29.107Z"
  },
  {
      "name": "Caneca Never settle",
      "description": "Recusandae expedita velit enim. Commodi eum architecto deserunt temporibus quaerat sint sapiente voluptatibus. Nemo fugit quisquam vitae doloribus recusandae voluptatem praesentium dolorum deleniti.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
      "category": "mugs",
      "id": "8e977331-cd2a-400b-b78c-01233f48de44",
      "price_in_cents": 8461,
      "sales": 39,
      "created_at": "2023-02-20T11:58:48.404Z"
  },
  {
      "name": "Caneca Never settle",
      "description": "Recusandae expedita velit enim. Commodi eum architecto deserunt temporibus quaerat sint sapiente voluptatibus. Nemo fugit quisquam vitae doloribus recusandae voluptatem praesentium dolorum deleniti.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
      "category": "mugs",
      "id": "f97a99b2-eea5-4594-bd63-57e3221fc6b9",
      "price_in_cents": 7509,
      "sales": 25,
      "created_at": "2022-06-30T20:21:21.316Z"
  },
  {
      "name": "Camiseta Broken Saints",
      "description": "Adipisci exercitationem dolore deleniti laborum. Exercitationem iste adipisci unde illo in quia modi. Nesciunt soluta temporibus quod blanditiis omnis cumque ratione dolore expedita.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
      "category": "t-shirts",
      "id": "0bf8516c-3ddd-4497-9dbf-f3f0af6ecd5a",
      "price_in_cents": 4918,
      "sales": 19,
      "created_at": "2022-07-08T05:58:00.562Z"
  }
]

module.exports = {
  products: allProducts
}
