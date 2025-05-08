import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Star } from 'lucide-react';

export default function CareHomeSection() {
    return (
        <div className='relative'>
            <section className=" container mx-auto pt-12 max-w-7xl">
                <div className='  flex justify-between items-center'>
                    <div className='w-1/2'>
                        <div className="text-left text-purple-700 font-semibold uppercase">Who Are We</div>
                        <h2 className="text-4xl font-semibold text-gray-900 mt-2 max-w-lg">
                            Helping Families Find the Right Care Home with Ease
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-lg mt-10">
                            Finding the right care home for your loved ones can be overwhelming. At [Platform Name], we simplify the process by providing a comprehensive platform where you can explore, compare, and connect with care homes that best meet your needs.
                        </p>
                        <p className="text-gray-600 mt-4 max-w-lg">
                            Whether you’re seeking independent living, assisted care, or specialized memory support, we are here to guide you every step of the way.
                        </p>

                        <div className="flex flex-col gap-4 mt-32">
                            <Card className="shadow-md rounded-2xl border border-gray-200 px-2 w-98 h-28 bg-white">
                                <CardContent className="flex gap-4 items-center">
                                    <Home className="text-purple-700 w-15 h-15" />
                                    <div>
                                        <h4 className="font-semibold text-purple-700">Extensive Listings</h4>
                                        <p className="text-gray-600 text-sm">Explore verified care homes with service and pricing details.</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="shadow-md rounded-2xl border border-gray-200  px-2 w-98 h-28 bg-white">
                                <CardContent className="flex gap-4 items-center">
                                    <Star className="text-purple-700 w-8 h-8" />
                                    <div>
                                        <h4 className="font-semibold text-purple-700">Trusted Reviews</h4>
                                        <p className="text-gray-600 text-sm">Get insights from genuine reviews.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="w-1/2">
                        {/* <div className="relative grid grid-cols-2 gap-4">
                        <Image src="/images/main.jpg" alt="Care Home" width={400} height={500} className="rounded-lg shadow-md col-span-2" />
                        <Image src="/images/hands.jpg" alt="Holding Hands" width={200} height={200} className="rounded-lg shadow-md" />
                        <Image src="/images/chat.jpg" alt="Conversation" width={200} height={200} className="rounded-lg shadow-md" />
                    </div> */}
                        <div className=' flex justify-center items-center gap-5 h-screen'>
                            <div className="relative bg-[url('/assets/Hero1.png')] bg-cover bg-center bg-no-repeat rounded-lg shadow-md h-[450px] w-[250px]"></div>


                            <div className='mb-30 flex flex-col gap-5'>
                                <div className="relative bg-[url('/assets/Hero2.png')] bg-cover bg-center bg-no-repeat rounded-lg shadow-md h-[250px] w-[250px]"></div>
                                <div className="relative bg-[url('/assets/Hero3.png')] bg-cover bg-center bg-no-repeat rounded-lg shadow-md h-[150px] w-[250px]"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="text-center pb-14">
                    <p className="text-gray-600 uppercase tracking-wide font-medium">Built with dedication to make care homes accessible & trusted</p>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Impact</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
                        <div>
                            <p className="text-5xl font-bold text-purple-700">99%</p>
                            <p className="text-gray-600">Customer satisfaction</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-purple-700">32M</p>
                            <p className="text-gray-600">Happy Clients</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-purple-700">125+</p>
                            <p className="text-gray-600">Team members</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-purple-700">240+</p>
                            <p className="text-gray-600">Care Homes</p>
                        </div>
                    </div>
                </div>


            </section>
            {/* Light Purple Background (Full Width) */}
            <div className="absolute bottom-0 h-[32%] bg-purple-50 -z-10 w-full mx-0" />
        </div>
    );
}
