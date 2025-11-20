export default function Footer() {
    return (
        <footer class="bg-blue-900 text-white py-10">
            <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">

                {/* <!-- Logo + Description --> */}
                <div>
                    <h2 class="text-2xl font-bold tracking-wide">TravelTour</h2>
                    <p class="mt-3 text-gray-300 text-sm leading-relaxed">
                        Khám phá những hành trình tuyệt vời cùng chúng tôi.
                        Mang đến trải nghiệm du lịch chất lượng, an toàn và đáng nhớ.
                    </p>
                </div>

                {/* <!-- Quick Links --> */}
                <div>
                    <h3 class="font-semibold text-lg mb-3">Liên Kết Nhanh</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li class="hover:text-white duration-200 cursor-pointer">Trang chủ</li>
                        <li class="hover:text-white duration-200 cursor-pointer">Tour Hot</li>
                        <li class="hover:text-white duration-200 cursor-pointer">Về chúng tôi</li>
                        <li class="hover:text-white duration-200 cursor-pointer">Liên hệ</li>
                    </ul>
                </div>

                {/* <!-- Popular Tours --> */}
                <div>
                    <h3 class="font-semibold text-lg mb-3">Tour Phổ Biến</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li class="hover:text-white duration-200 cursor-pointer">Đà Nẵng – Hội An</li>
                        <li class="hover:text-white duration-200 cursor-pointer">Phú Quốc</li>
                        <li class="hover:text-white duration-200 cursor-pointer">Đà Lạt</li>
                        <li class="hover:text-white duration-200 cursor-pointer">Hạ Long</li>
                    </ul>
                </div>

                {/* <!-- Contact --> */}
                <div>
                    <h3 class="font-semibold text-lg mb-3">Liên Hệ</h3>
                    <ul class="space-y-3 text-gray-300 text-sm">
                        <li>📍 123 Đường Du Lịch, Việt Nam</li>
                        <li>📞 0909 999 999</li>
                        <li>📧 support@traveltour.com</li>
                    </ul>

                    {/* <!-- Social Icons --> */}
                    <div class="flex items-center gap-4 mt-4 text-xl">
                        <a class="hover:text-yellow-400 duration-200 cursor-pointer">🌐</a>
                        <a class="hover:text-yellow-400 duration-200 cursor-pointer">📘</a>
                        <a class="hover:text-yellow-400 duration-200 cursor-pointer">📸</a>
                    </div>
                </div>

            </div>

            {/* <!-- Bottom --> */}
            <div class="text-center text-gray-400 text-sm mt-10 border-t border-white/20 pt-4">
                © 2025 TravelTour. All rights reserved.
            </div>
        </footer>

    )
}