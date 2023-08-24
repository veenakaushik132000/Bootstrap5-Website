import React from 'react'

const BrowseDiv = () => {
  return (
    <div className='topSecondThirdDivCombofirst'>
      <div className='secondThirdDivCombofirst'>
        <div className='firstSecondThirdDivCombofirst'>
          <h2 style={{paddingLeft:"60px"}}>Browse</h2>
        </div>
        <div className='secondSecondThirdDivCombofirst'>
          <p style={{fontSize:"20px",marginTop:"-20px"}}>Category</p>
          
          <div className='categoryDiv1'>
            <p>Agency, Blog, Business, Consulting, Corporate, Creative, Finance, Landing Page, Marketing,
                Pro, Small Business, Startup
            </p>
          </div>
        </div>
        <div className='thirdSecondThirdDivCombofirst'>
        <p style={{fontSize:"20px"}}>Tags</p>
        <div className='categoryDiv2'>
        <p>Agency, Blog, Business, Consulting, Corporate, Creative, Finance, Landing Page, Marketing,
                Pro, Small Business, Startup, Consulting, Corporate, Creative, Finance,
                Consulting, Corporate, Creative, Finance, Consulting, Corporate, Creative, Finance
            </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseDiv