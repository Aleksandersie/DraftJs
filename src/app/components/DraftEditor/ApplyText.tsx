"use client"



export default function ApplyText(){
    const text = "<p>my text</p>"
   

    return(
        <div dangerouslySetInnerHTML={{__html:text}}>
            
        </div>
    )
}