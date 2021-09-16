import React from "react";
import { useSelector } from "react-redux";
import { userLoginSelector } from "../../store/login/selectors";
import { LoginForm } from "../login-form/LoginForm";

export const Login = () => {
  const userData = useSelector(userLoginSelector);

  if (userData && Object.keys(userData).length > 0) {
    return (
      <div className="card">
        <p id="log-success">
          Logged in as <b>{userData}</b>
        </p>
      </div>
    );
  }

  const isLoading = userData.loading;
  const isError = userData.error;
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 mt-5">
        <LoginForm isLoading={isLoading} />
        {isError && (
          <div className="card">
            <p id="paragraph">
              <b>Error: </b> {userData.error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
