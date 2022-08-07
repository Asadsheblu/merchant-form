import React, { useMemo, useState } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import merchant from "../assest/merchant.gif"
const Merchant = () => {
    const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  const handelForm=(e)=>{
    e.preventDefault()
    toast.success("Your Merchant Account Successfuly Created")
    e.target.reset()
  }
    return (
        <div className='container p-5' id='book'>
          
   
             <div className='text-black'>
            <div className="row">
             <div className="col-md-4 pt-5">
            <img className='img-fluid' src={merchant} alt="" />
             </div>
          
          <div className="col-md-8 mx-auto p-3">
           
          <form onSubmit={handelForm}>
          
         <h4 className='fw-bold text-danger'>Send Request to Open an Merchant Account</h4>
         
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Select Your Country
    </label>
     <Select options={options} value={value} onChange={changeHandler} />
    
  </div>
         
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Email</label>
    <input type="email" name='email' class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Name</label>
    <input type="text" name='name' class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name of the Business/Institute </label>
    <input type="text" name='name' class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Website URL (if any)</label>
    <input type="text" name='name' class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Office Address (Physical Address required) </label>
    <textarea class="form-control rounded"  name="" id="exampleInputEmail1" cols="30" rows="10"></textarea>
   
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Business/Institute Type</label>
    <input type="text" name='name' class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Business/Shop Location</label>
    <input type="text" name='name' class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Payment Received Per Month (Appox.) *</label>
    <input type="text" name='name' class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  
  
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Contact No</label>
  <input type="number" name='number' class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Photo ID Number (National ID or Smart ID/Passport/Driving License)</label>
    <input type="text" name='name' class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Trade License Number</label>
    <input type="text" name='name' class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  
  

  
  <button type="submit" class="btn btn-success mx-auto rounded">Submit Now</button>
  <ToastContainer />
</form>
          </div>
          </div>
        </div>
        </div>
    );
};

export default Merchant;