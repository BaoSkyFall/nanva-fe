import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Contact = () => {

    return (
        <main>
            <div class="container mx-auto mt-6 p-4">

                <h2 class="text-3xl font-semibold mb-4">Contact Nava Farm</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h3 class="text-xl text-black font-semibold mb-2">Our Location</h3>
                        <p class="text-gray-700">123 Fashion Street</p>
                        <p class="text-gray-700">Ho Chi Minh, Vietnam</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <h3 class="text-xl text-black font-semibold mb-2">Contact Information</h3>
                        <p class="text-gray-700">Phone: +123-456-7890</p>
                        <p class="text-gray-700">Email: info@ourshop.com</p>
                    </div>
                </div>
                <div class="mt-6 bg-white p-4 rounded-lg shadow-md">
                    <h3 class="text-xl text-black font-semibold mb-2">Business Hours</h3>
                    <p class="text-gray-700">Monday - Friday: 10:00 AM - 8:00 PM</p>
                    <p class="text-gray-700">Saturday - Sunday: 11:00 AM - 6:00 PM</p>
                </div>
                <div class="mt-6 bg-white p-4 rounded-lg shadow-md">
                    <h3 class="text-xl text-black font-semibold mb-2">Connect with Us</h3>
                    <div class="flex items-center space-x-4">
                        <div
                            onClick={() =>
                                window.open("https://www.facebook.com/Nava Farm.limbo", "_blank")
                            }
                            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                        >
                            <FaFacebookF size={20} />
                        </div>
                        {/* <Link
                        href="https://twitter.com"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaTwitter size={20} />
                    </Link> */}
                        {/* <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div> */}
                        <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                            onClick={() =>
                                window.open("https://www.instagram.com/Nava Farm.official", "_blank")
                            }>
                            <FaInstagram size={20} />
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
export default Contact