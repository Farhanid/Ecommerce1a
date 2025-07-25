import React from 'react'

const Login = ({openSignUp}) => {
  return (
   <div className="w-full">
  <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

  <form>
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">Email</label>
      <input
        type="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder="Enter Email"
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">Password</label>
      <input
        type="password"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder="Enter Password"
      />
    </div>

    <div className="mb-4 flex items-center justify-between text-sm">
      <label className="inline-flex items-center text-gray-700">
        <input type="checkbox" className="form-checkbox accent-red-500" />
        <span className="ml-2">Remember Me</span>
      </label>
      <a href="#" className="text-red-600 hover:underline">Forget password?</a>
    </div>

    <div className="mb-4">
      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-300"
      >
        Login
      </button>
    </div>
  </form>

  <div className="text-center">
    <span className="text-gray-600">Don't have an Account? </span>
    <button
      className="text-red-600 font-medium hover:underline"
      onClick={openSignUp}
    >
      Sign Up
    </button>
  </div>
</div>

  )
}

export default Login