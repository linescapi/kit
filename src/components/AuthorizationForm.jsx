import { useState } from "react";

import { Input } from "./AuthComponents/Input";

const AuthorizationForm = () => {
  return (
    <div className="background-color">
      <div className="container">
        <div className="num-of-q">
          <h5>1/19</h5>
        </div>
        <div className="auth-form-header">
          <h3>
            Привет! Расскажи немного о себе и о своих инересах в форме ниже
            &#127802;
          </h3>
        </div>
        <div className="auth-form">
          <Input inputId={"gender"} />
        </div>
      </div>
    </div>
  );
};

export default AuthorizationForm;
