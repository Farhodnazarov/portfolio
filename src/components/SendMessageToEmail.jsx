function SendMessageToEmail() {
  return (
    <div className="w-full px-14">
      <form className="w-full text-black flex flex-col gap-3">
        <div className="flex flex-col gap-2 items-start w-full">
          <label className="" htmlFor="name">
            Name :
          </label>
          <input
            className="w-full px-5 py-2 rounded-md text-md font-semibold"
            type="text"
            id="name"
            name="userName"
            placeholder="Enter your Name"
          />
        </div>
        <div className="flex flex-col gap-2 items-start w-full">
          <label className="" htmlFor="company">
            Company Name :
          </label>
          <input
            className="w-full px-5 py-2 rounded-md text-md font-semibold"
            type="text"
            id="company"
            name="companyName"
            placeholder="Enter your Company Name"
          />
        </div>
        <div className="flex flex-col gap-2 items-start w-full">
          <label className="" htmlFor="email">
            Email Address :
          </label>
          <input
            className="w-full px-5 py-2 rounded-md text-md font-semibold"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex flex-col gap-2 items-start w-full">
          <label className="" htmlFor="message">
            Message :
          </label>
          <textarea
            className="w-full px-5 py-2 rounded-md text-md font-semibold"
            id="message"
            placeholder="Write me your opinion"
            name="message"
          />
        </div>
        <button className="border-white text-white border rounded-xl py-2 px-10 ml-auto shadow-lg shadow-white active:shadow-none">
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMessageToEmail;
