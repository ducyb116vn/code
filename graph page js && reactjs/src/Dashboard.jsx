const Dashboard = () => {
    return (
        <section id="dashboard" class="py-20 px-6 bg-gradient-to-b from-dark to-[#0f1329]">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-4xl font-bold mb-10 text-center text-gradient">Dashboard Overview</h2>

            <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mb-16">
                <div
                    class="glass-panel rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 hover:bg-white/10 hover:border-neon-cyan/30 transition-all duration-300">
                    <div
                        class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan">
                    </div>
                    <div class="flex items-center gap-4 mb-5">
                        <div
                            class="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-neon-cyan to-neon-blue">
                            <i class="fa-solid fa-chart-bar text-dark"></i>
                        </div>
                        <div class="text-sm text-gray-400 font-medium">Total Revenue</div>
                    </div>
                    <div class="text-3xl font-bold mb-3 text-gradient">$42,847</div>
                    <div class="text-sm text-gray-500 mb-5">Monthly revenue increased by 23% compared to last month.
                    </div>
                    <div class="h-16 w-full  rounded relative">
                        <div class="absolute bottom-0 left-0 w-full h-full flex items-end gap-1 px-2 pb-2">
                            <div class="w-full bg-neon-cyan/20 h-[40%] rounded-sm"></div>
                            <div class="w-full bg-neon-cyan/40 h-[60%] rounded-sm"></div>
                            <div class="w-full bg-neon-cyan/60 h-[30%] rounded-sm"></div>
                            <div class="w-full bg-neon-cyan/80 h-[80%] rounded-sm"></div>
                            <div class="w-full bg-neon-cyan h-[50%] rounded-sm"></div>
                        </div>
                    </div>
                </div>

                <div
                    class="glass-panel rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 hover:bg-white/10 hover:border-neon-cyan/30 transition-all duration-300">
                    <div
                        class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan">
                    </div>
                    <div class="flex items-center gap-4 mb-5">
                        <div
                            class="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-neon-cyan to-neon-blue">
                            <i class="fa-solid fa-users text-dark"></i>
                        </div>
                        <div class="text-sm text-gray-400 font-medium">Active Users</div>
                    </div>
                    <div class="text-3xl font-bold mb-3 text-gradient">18.5K</div>
                    <div class="text-sm text-gray-500 mb-5">Real-time analytics showing active users.</div>
                    <div class="h-16 w-full  rounded relative overflow-hidden">
                        <svg class="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <path d="M0 30 Q 20 10 40 25 T 100 15" fill="none" stroke="#00ffcc" stroke-width="2" />
                            <path d="M0 30 Q 20 10 40 25 T 100 15 V 40 H 0 Z" fill="rgba(0, 255, 204, 0.1)" />
                        </svg>
                    </div>
                </div>

                <div
                    class="glass-panel rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 hover:bg-white/10 hover:border-neon-cyan/30 transition-all duration-300">
                    <div
                        class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan">
                    </div>
                    <div class="flex items-center gap-4 mb-5">
                        <div
                            class="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-neon-cyan to-neon-blue">
                            <i class="fa-solid fa-bullseye text-dark"></i>
                        </div>
                        <div class="text-sm text-gray-400 font-medium">Conversion Rate</div>
                    </div>
                    <div class="text-3xl font-bold mb-3 text-gradient">94.3%</div>
                    <div class="text-sm text-gray-500 mb-5">Customer satisfaction rate based on recent surveys.</div>
                    <div class="h-16 w-full flex items-center gap-1">
                        <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div class="h-full w-[94%] bg-gradient-to-r from-neon-cyan to-neon-blue"></div>
                        </div>
                    </div>
                </div>

                <div
                    class="glass-panel rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 hover:bg-white/10 hover:border-neon-cyan/30 transition-all duration-300">
                    <div
                        class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan">
                    </div>
                    <div class="flex items-center gap-4 mb-5">
                        <div
                            class="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-neon-cyan to-neon-blue">
                            <i class="fa-solid fa-rocket text-dark"></i>
                        </div>
                        <div class="text-sm text-gray-400 font-medium">Performance</div>
                    </div>
                    <div class="text-3xl font-bold mb-3 text-gradient">7,392</div>
                    <div class="text-sm text-gray-500 mb-5">Overall system performance optimal.</div>
                    <div class="h-16 w-full flex justify-between items-end pb-2 px-1">
                        <div class="w-2 bg-neon-pink/30 h-[30%] rounded-full"></div>
                        <div class="w-2 bg-neon-pink/50 h-[50%] rounded-full"></div>
                        <div class="w-2 bg-neon-pink/70 h-[70%] rounded-full"></div>
                        <div class="w-2 bg-neon-pink h-[90%] rounded-full"></div>
                        <div class="w-2 bg-neon-pink h-[60%] rounded-full"></div>
                        <div class="w-2 bg-neon-pink/40 h-[40%] rounded-full"></div>
                    </div>
                </div>

                <div
                    class="glass-panel rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 hover:bg-white/10 hover:border-neon-cyan/30 transition-all duration-300">
                    <div
                        class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan">
                    </div>
                    <div class="flex items-center gap-4 mb-5">
                        <div
                            class="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-neon-cyan to-neon-blue">
                            <i class="fa-solid fa-money-bill-trend-up text-dark"></i>
                        </div>
                        <div class="text-sm text-gray-400 font-medium">Monthly Growth</div>
                    </div>
                    <div class="text-3xl font-bold mb-3 text-gradient">+28.5%</div>
                    <div class="text-sm text-gray-500 mb-5">Consistent month-over-month growth.</div>
                    <div class="h-16 w-full rounded relative overflow-hidden">
                        <svg class="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <path d="M0 35 L 20 25 L 40 30 L 60 15 L 80 20 L 100 5" fill="none" stroke="#ff8e53"
                                stroke-width="2" />
                            <circle cx="100" cy="5" r="2" fill="#ff8e53" />
                        </svg>
                    </div>
                </div>

                <div
                    class="glass-panel rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 hover:bg-white/10 hover:border-neon-cyan/30 transition-all duration-300">
                    <div
                        class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan">
                    </div>
                    <div class="flex items-center gap-4 mb-5">
                        <div
                            class="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-neon-cyan to-neon-blue">
                            <i class="fa-solid fa-bolt text-dark"></i>
                        </div>
                        <div class="text-sm text-gray-400 font-medium">System Uptime</div>
                    </div>
                    <div class="text-3xl font-bold mb-3 text-gradient">99.9%</div>
                    <div class="text-sm text-gray-500 mb-5">Exceptional reliability with minimal downtime.</div>
                    <div class="h-16 w-full flex items-center">
                        <div class="h-4 w-full bg-white/10 rounded-full overflow-hidden flex">
                            <div class="h-full w-[99.9%] bg-gradient-to-r from-neon-cyan to-neon-blue"></div>
                            <div class="h-full w-[0.1%] bg-red-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    ) }

export default Dashboard;