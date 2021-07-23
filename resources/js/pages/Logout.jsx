import React from 'react';
import { PrimaryButton } from '../parts/PrimaryButton';

function Logout() {
  const csrf_token = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content")

  const role = document
  .querySelector('meta[name="role"]')
  .getAttribute("content")
  
  var formstyle = {
    display: "none"
  };

  const logoutUser = () =>  {
      document.querySelector("#logout-form").submit();
    }

  const logoutOpe = () =>  {
      document.querySelector("#logout-form-ope").submit();
    }

    return (
      <>
      {role==="user" &&
      <div>
            <PrimaryButton onClick={logoutUser}>ユーザーログアウト</PrimaryButton>
            <form id="logout-form" action="/user/logout" method="POST" style={formstyle}>
            <input type="hidden" name="_token" value={ csrf_token } />
            </form>
      </div>
      }{role==="operator" && 
      <div>
            <PrimaryButton onClick={logoutOpe}>保健師ログアウト</PrimaryButton>
            <form id="logout-form-ope" action="/operator/logout" method="POST" style={formstyle}>
            <input type="hidden" name="_token" value={ csrf_token } />
            </form>
      </div>
    }
      </>
    );
}

export default Logout;
