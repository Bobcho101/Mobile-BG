const Contact: React.FC = () => {
    return (
        <>
        <div className="max-w-3xl mx-auto py-16 px-6 space-y-12">
            <section className="text-center">
                <h1 className="text-5xl font-bold mb-4 text-blue-400">
                Contact <strong className="text-blue-700">Us</strong>
                </h1>
                <p className="text-lg text-gray-600">
                Got something on your mind? Send us a quick note below.
                </p>
            </section>

            <form className="space-y-6 bg-white p-8 rounded-xl shadow-md">
                <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Title"
                    required
                />
                </div>

                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    placeholder="Type your message here..."
                    required
                />
                </div>

                <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                Send
                </button>
            </form>
        </div>
        </>
    );
};

export default Contact;