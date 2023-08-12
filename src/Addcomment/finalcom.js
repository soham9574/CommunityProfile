import React from 'react'
import "./finalcom.css"
const finalcom = () => {
  return (
<>
<div className="comsec">
<br />
<br />
<div class="mb-3">
  {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
  <input type="email" class="form-control input" id="exampleFormControlInput1" placeholder="username@gmail.com"/>
</div>
<br />

<div class="mb-3">
  {/* <label for="exampleFormControlTextarea1" class="form-label">Add your comment below</label> */}
  <textarea placeholder='add your comments...' class="form-control input" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<br />
<div class="btnflex mb-3">
   <button type="button" class="btn btn-success mb-2">Add Comment</button>
</div>
<br />

</div>

</>
  )
}

export default finalcom;
