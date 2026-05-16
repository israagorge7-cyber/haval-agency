export default function Footer(){
  return (
    <footer className="section" style={{
      borderTop:'1px solid rgba(255,255,255,0.08)'
    }}>
      <div style={{
        display:'flex',
        justifyContent:'space-between',
        gap:'60px',
        flexWrap:'wrap'
      }}>
        <div>
          <div className="gold" style={{
            fontSize:'3rem',
            letterSpacing:'0.4em',
            marginBottom:'20px'
          }}>
            HAVAL
          </div>

          <p style={{
            color:'#999',
            maxWidth:'500px',
            lineHeight:'1.8'
          }}>
            Premium digitale Experiences für visionäre Luxusmarken.
          </p>
        </div>

        <div>
          <h3 style={{fontSize:'2rem', marginBottom:'20px'}}>Kontakt</h3>

          <div style={{color:'#aaa', lineHeight:'2'}}>
            <p>Bonn, Deutschland</p>
            <p>Haval_agency@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}