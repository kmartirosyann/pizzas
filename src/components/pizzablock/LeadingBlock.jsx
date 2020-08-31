import React from 'react'
import ContentLoader from "react-content-loader"

function LeadingBlock() {
  return(
    <ContentLoader 
    className= "pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle cx="130" cy="130" r="130" /> 
    <rect x="0" y="285" rx="0" ry="0" width="280" height="24" /> 
    <circle cx="157" cy="227" r="7" /> 
    <rect x="0" y="325" rx="0" ry="6" width="280" height="85" /> 
    <rect x="0" y="430" rx="0" ry="6" width="89" height="26" /> 
    <rect x="123" y="424" rx="30" ry="30" width="150" height="40" />
  </ContentLoader>
  )
}

export default LeadingBlock
