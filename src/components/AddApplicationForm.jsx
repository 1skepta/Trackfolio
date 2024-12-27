import React from "react";

function AddApplicationForm() {
  return (
    <div>
      <form>
        <div>
          <label>
            Company Name
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Role
            <input type="text" />
          </label>
        </div>
        role, status (applied, interview, offer), and date applied
        <div>
          <label>
            Role
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Status
            <label>
              <input type="radio" name="status" />
              Applied
            </label>
            <label>
              <input type="radio" name="status" />
              Interview
            </label>
            <label>
              <input type="radio" name="status" />
              Offer
            </label>
          </label>
        </div>
        <div>
          <label>
            Date Applied <input type="text" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default AddApplicationForm;
