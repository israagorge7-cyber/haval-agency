const services = [
  {
    title:'PropTech & Architektur',
    image:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title:'Private Aviation',
    image:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title:'Luxury Commerce',
    image:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Services(){
  return (
    <section className="section">
      <p className="gold" style={{letterSpacing:'0.3em', marginBottom:'20px'}}>SERVICES</p>

      <h2 style={{
        fontSize:'clamp(3rem,7vw,7rem)',
        marginBottom:'60px'
      }}>
        Immersive Luxury Experiences
      </h2>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',
        gap:'30px'
      }}>
        {services.map((service,index)=>(
          <div key={index} className="glass" style={{
            borderRadius:'30px',
            overflow:'hidden'
          }}>
            <img
              src={service.image}
              style={{
                width:'100%',
                height:'400px',
                objectFit:'cover'
              }}
            />

            <div style={{padding:'30px'}}>
              <div className="gold" style={{marginBottom:'15px'}}>
                0{index + 1}
              </div>

              <h3 style={{
                fontSize:'2rem',
                marginBottom:'15px'
              }}>
                {service.title}
              </h3>

              <p style={{
                color:'#aaa',
                lineHeight:'1.8'
              }}>
                Futuristische digitale Systeme mit cinematic motion design und immersiven Interfaces.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}