import React ,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
    let newCase=text.toUpperCase();
    setText(newCase)
}
    const handleLowClick = ()=>{
    let newCase=text.toLowerCase();
    setText(newCase)
}
    const handleCapitalizeClick = ()=>{
    let newCase= text.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    setText(newCase)
}
    const handleClear = ()=>{
    let newCase='';
    setText(newCase)
}
    
const handleOnChange = (event)=>{
setText(event.target.value)

}
    const [text,setText] = useState('')
return (
    <>
<div>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" id="mybox" value={text} onChange = {handleOnChange}rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpClick}>convert to upper case</button>
<button className='btn btn-primary mx-1' onClick={handleLowClick}>convert to lower case</button>
<button className='btn btn-primary mx-1' onClick={handleCapitalizeClick}>convert to Capitlize case</button>
<button className='btn btn-primary mx-1' onClick={handleClear}>Clear</button>

</div >
<div className="container my-2">
<h2>Your Text Area</h2>
<p>{text.trim() ? text.trim().split(' ').length : 0} words and  {text.length} charecters  {  
text.trim() ? 0.008 * text.trim().split(' ').length : 0}  Minutes to Read {
text.trim() ? text.trim().split('\n').length : 0} Line Count 
</p>

<h2>Preview</h2>
<p>{text}</p>
</div>
</>
)
}

