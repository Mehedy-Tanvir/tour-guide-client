const BookingModal = () => {
  return (
    <div className="border-2 shadow-xl w-full lg:w-[400px] border-[#FA7436] card">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="mt-6 form-control">
          <button className="bg-[#FA7436] hover:opacity-90 text-white text-3xl h-[60px] px-[20px] rounded-lg">
            Login
          </button>
          <button
            type="button"
            className="h-[40px] mt-4 w-full text-center border-2 border-[var(--google_color)] font-medium text-[var(--google_color)] rounded-3xl"
          >
            Sign In With Google
          </button>
          <p className="mt-4 font-medium text-center text-gray-600">
            New to this site? <span className="text-blue-700">Register</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default BookingModal;
