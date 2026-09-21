export default function Home() {
  return (
    <div style={{fontFamily:'sans-serif', background:'#f0f6ff', minHeight:'100vh'}}>
      <div style={{background:'#0d213f', color:'white', padding:'20px', display:'flex', justifyContent:'space-between'}}>
        <h2>ZvyTour</h2><button>Login</button>
      </div>
      <div style={{padding:'30px', textAlign:'center'}}>
        <h1>Your Next Adventure Awaits</h1>
        <p>Search Your Tour - Sajek, Coxs Bazar, Sundarban</p>
        <input style={{padding:'12px', width:'70%', borderRadius:'8px'}} placeholder="Where to?" />
      </div>
      <div style={{padding:'20px'}}>
        <div style={{background:'white', padding:'15px', borderRadius:'12px', marginBottom:'15px'}}>
          <h3>Sajek Valley - 2 Days</h3>
          <p>From ৳4500 / person</p>
          <button style={{background:'#ff5a5f', color:'white', padding:'10px', width:'100%', borderRadius:'8px'}}>Book Now</button>
        </div>
        <div style={{background:'white', padding:'15px', borderRadius:'12px'}}>
          <h3>Cox's Bazar Tour</h3>
          <p>From ৳6500 / person</p>
          <button style={{background:'#0d213f', color:'white', padding:'10px', width:'100%', borderRadius:'8px'}}>Book Now</button>
        </div>
      </div>
    </div>
  )
}
