import React from 'react';

const Account = () => {
  return (
    <div className="container entry-container">
      <div className="row m-4">
        <h2 className="entry-h1">Account Sign-in</h2>
        <hr />
      </div>
      <div className="row">
        <form className="ml-3 mb-5">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              className="form-control"
              placeholder="Username"
              defaultValue="Example username"
              id="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              defaultValue="your.email@example.com"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              defaultValue="*******"
              placeholder="*******"
              id="exampleInputPassword1"
            />
            <small id="passwordHelp" className="form-text text-muted">
              Password must contain at least one digit, small and capital letters, and should not be less than 8 characters.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputRetypePassword1">
              Re-type Password
            </label>
            <input
              type="password"
              className="form-control"
              defaultValue="********"
              placeholder="********"
              id="exampleInputRetypePassword1"
            />
          </div>

          <p>I am:</p>
          <div className="form-check form-check-inline">
            <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label ml-2" htmlFor="exampleRadios1">Vegan</label>
          </div>
          <div  className="form-check form-check-inline ml-2">
            <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label ml-2" htmlFor="exampleRadios1">Vegetarian</label>
          </div>
          <div  className="form-check form-check-inline ml-2">
            <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label ml-2" htmlFor="exampleRadios1">Paleo</label>
          </div>

          <div className="mt-4">
            <button type="submit" className="btn btn-secondary card-button">
              Submit
            </button>
         
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
