import React from 'react';
import './Enter.css'

function Enter() {
  return (
    <div className="enter">
      <div className="login p-20 pr-40">
        <form>
          <div class="mb-4">
            <input className="border rounded w-full py-2 px-3 text-black mb-3"  id="username" type="text" placeholder="username"></input>
          </div>
          <div class="mb-6">
            <input className="border rounded w-full py-2 px-3 text-black mb-3" id="password" type="password" placeholder="password">
            </input>
          </div>
          <div className="flex items-center justify-around">
            <button class="bg-black text-white py-2 px-4 border-2 rounded hover:bg-white hover:text-black hover:border-black hover:font-bold" type="button">
              login
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-black" href="#">
              forgot password?
            </a>
          </div>
        </form>
      </div>
      <hr class="divider"></hr>

      <div className="signup p-20 pl-40">
      <form>
          <div class="mb-4">
            <input className="border rounded w-full py-2 px-3 text-black mb-3"  id="username" type="text" placeholder="username"></input>
          </div>
          <div class="mb-6">
            <input className="border rounded w-full py-2 px-3 text-black mb-3" id="email" type="text" placeholder="email">
            </input>
          </div>
          <div class="mb-6">
            <input className="border rounded w-full py-2 px-3 text-black mb-3" id="password" type="password" placeholder="password">
            </input>
          </div>
          <div className="flex justify-center">
            <button class="bg-black text-white py-2 px-4 border-2 rounded hover:bg-white hover:text-black hover:border-black hover:font-bold" type="button">
              sign up
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-black" href="#">
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Enter;  