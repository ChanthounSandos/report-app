import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
    return (
        <>
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">More than 1000 songs on SPOTIY</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">Ad-free music listening · Download to listen offline · Play songs in any order · High audio quality · Listen with friends in real time · Organize listening queue.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Create Playlist</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Browse Podcast</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <img
                                className="-z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                                src="/welcome_page.webp"
                                alt="Abstract Object"
                                height="4000"
                                width="3000"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}