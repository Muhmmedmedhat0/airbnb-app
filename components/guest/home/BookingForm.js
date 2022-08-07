import React from 'react'

function BookingForm() {
  return (
    <div>

      $182
 night
$182 per night
4.71 ·
43 reviews
<form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="date"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" className="form-text">
        <p>We&#39; ll never share your email with anyone else.</p>
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="date"
        className="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    <button type="submit" className="btn btn-primary">
    Check availability
    </button>
  </form>


    </div>
  
  )
}

export default BookingForm