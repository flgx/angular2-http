export class InMemoryDataService {
  createDb() {
    let posts = [
      {id: 11, name: 'Mr. Nice',body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam exercitationem quos, quo quaerat sequi, numquam blanditiis quis dignissimos repudiandae laborum perspiciatis voluptatem obcaecati quod, accusantium. Accusantium iusto qui nulla natus.',"userId": 1},
      {id: 12, name: 'Narco',body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt accusamus libero odio magni nostrum in doloribus officia sint doloremque illum quos vero quam quod, amet nisi inventore nesciunt minus, accusantium.',"userId": 1},
      {id: 13, name: 'Bombasto',body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eligendi blanditiis, quibusdam assumenda culpa perferendis aliquid ex unde totam. Ratione, natus. At dolorem ipsam impedit placeat perferendis, culpa, atque reprehenderit.',"userId": 1},
      {id: 14, name: 'Celeritas',body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit tenetur consequuntur a incidunt nobis molestias qui aspernatur eaque voluptas repellendus! Quam, libero. Laborum unde nihil nobis. Reiciendis, nam pariatur debitis.',"userId": 1},
      {id: 15, name: 'Magneta',body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus laboriosam recusandae, fuga expedita earum aliquid, in facilis veritatis consequatur quo aliquam, sapiente sit! Quo expedita magnam repudiandae id esse, provident.',"userId": 1},
      {id: 16, name: 'RubberMan',body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat possimus dicta consequatur pariatur ipsam quibusdam facere accusamus tempore fuga consequuntur, porro, recusandae quisquam quas, in corporis beatae nam vitae. Odio.',"userId": 1},
      {id: 17, name: 'Dynama',body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nam mollitia nobis, molestias excepturi tenetur provident error enim esse! Totam saepe molestiae quisquam placeat quidem officiis, nobis laudantium earum maxime!',"userId": 1},
      {id: 18, name: 'Dr IQ',body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nobis velit perferendis autem quaerat pariatur dolores eum qui tempora incidunt necessitatibus, sed sunt quas molestiae, illum officia iusto quae mollitia.,"userId": 1'},
      {id: 19, name: 'Magma',body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias porro omnis, rerum eius consequuntur corporis dolorum, at beatae dolore voluptatibus veritatis sunt tempore, quam commodi. Quo nemo vero excepturi explicabo.',"userId": 1},
      {id: 20, name: 'Tornado',body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro modi necessitatibus quis alias ab architecto earum quidem deleniti reiciendis explicabo nihil labore tenetur libero doloribus laudantium mollitia rem, neque blanditiis!',"userId": 1}
    ];
    return {posts};
  }
}