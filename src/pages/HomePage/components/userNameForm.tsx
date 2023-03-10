import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const UserNameForm = () => {
  const [username, setUserName] = useState<string>('');
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const navigate = useNavigate();
  const goToResume = () =>
    navigate({
      pathname: `resume/${username}`,
    });
  return (
    <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative px-6 py-3 mx-auto w-full sm:w-96 text-center">
        <style scoped />

        <span className="text-2xl text-light">Enter github username</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-indigo-400 rounded-t-md" />
          <div className="border px-8 py-6">
            <label className="label block font-semibold">Username</label>
            <input
              className="w-full h-5 mt-2 px-3 py-5 border rounded-md
    focus:outline-none focus:ring-1 focus:ring-indigo-400"
              type="text"
              placeholder="username"
              onChange={onChangeHandler}
            />

            <div className="flex items-center mt-4">
              <button
                disabled={username.length === 0}
                onClick={goToResume}
                className={username.length === 0 ? 'px-4 py-2 bg-gray-400 text-white rounded-md' : 'px-4 py-2 bg-indigo-400 text-white rounded-md'}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
