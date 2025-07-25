import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div className="w-full">
  <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

  <form>
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">Name</label>
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder="Enter Name"
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

    <div className="mb-4">
      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-300"
      >
        Sign Up
      </button>
    </div>
  </form>

  <div className="text-center">
    <span className="text-gray-600">Already have an Account? </span>
    <button
      className="text-red-600 font-medium hover:underline"
      onClick={openLogin}
    >
      Login
    </button>
  </div>
</div>

  )
}

export default Register