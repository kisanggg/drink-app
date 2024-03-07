import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div className='body'>
      <div className='main'>
      <div>
      <h1><i>Cocktail Party</i></h1>
      <p style={{marginLeft:"0px"}}>Finally — an app that shows you all the tasty drinks you can make from the stuff you’ve got.</p>
      </div>
      <img src="https://hips.hearstapps.com/hmg-prod/images/variation-of-infused-water-with-fresh-fruits-royalty-free-image-1626116241.jpg?crop=1xw:0.84415xh;center,top&resize=1200:*" alt="err"
     style={{width:"700px", height:"500px"}} 
      ></img>
      </div>
      <div style={{display:"flex", justifyContent:"flex-start",alignItems:"center",backgroundColor:"#aeadaa"}}>
      <div style={{marginTop:"100px"}}>
      <h2><i>
      You know the story:
      </i>
      </h2>
      <p className='p2'>You just spent an hour Googling for one flippin’ recipe you can actually make – something easy, something good, nothing blue.</p>
      <p className='p3'>But you’ve got bupkis, because you don’t have kumquat juice or balsamic-infused peach hair or whatever all these damn Pinterest recipes require, and so here you are, slurping halfheartedly on your consolation White Russian.*</p>
    </div>
    <div>
    <img style={{marginTop:"170px"}}src='https://www.absolut.com/wp-content/uploads/vodka-bottle-mobile.jpeg?imwidth=360&quality=40' alt='err' width={160} height={180}></img>
    <p style={{marginTop:"0px",width:"150px",marginLeft:"45px"}}>*We ain’t hatin’ – we love Vodka.</p>
    </div>
    </div>
    <div style={{backgroundColor:"#aeadaa"}}>
    <h2 style={{marginTop:"0px"}}><i style={{marginLeft:"30px" }}>Cheer up, buttercup.</i></h2>
    <p className='p4'><strong>Cocktail Party’s got this.</strong> Just tell it what you’ve got, and it’ll tell you what you can make. There aren’t any ads, there’s no obnoxious social sharing, and entering your stuff is quick and painless.</p>
    <p className='p5'>It’s just you, your booze, and page after page of solid cocktail recipes you can actually make, right this very instant.
</p>
    </div>
    </div>
  )
}

export default Home
