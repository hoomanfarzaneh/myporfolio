import './testimonials.scss'

export default function testimonials() {
const data=[
  {
    id:1,
    name: 'number 1',
    title: 'CEO 1',
    img: './assets/amber.jpg',
    icon: './assets/linkedin.png',
    decs: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dolore dolorum sunt ipsam molestiae quasi volupt'
  },
  {
    id:2,
    name: 'number 2',
    title: 'CEO 2',
    img: './assets/amber.jpg',
    icon: './assets/linkedin.png',
    decs: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dolore dolorum sunt ipsam molestiae quasi volupt',
    featured: true
  },
  {
    id:3,
    name: 'number 3',
    title: 'CEO 3',
    img: './assets/amber.jpg',
    icon: './assets/linkedin.png',
    decs: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dolore dolorum'
  }
]

  return <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) =>(
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
           <img src="assets/rightarow.png" alt="" className='left' />
           <img src={d.img} alt="" className='user' />
           <img src={d.icon} alt="" className='right' />
          </div>
          <div className="center">
            {d.decs}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
  </div>;
}
