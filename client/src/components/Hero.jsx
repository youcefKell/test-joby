import { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {

    const { setSearchFilter, setIsSearched } = useContext(AppContext)

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        })
        setIsSearched(true)
    }

    return (
        <div className='container 2xl:px-20 mx-auto my-10'>

            <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>

                <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>
                    Find Jobs, Internships & Courses
                </h2>

                <p className='mb-8 max-w-2xl mx-auto text-sm md:text-base font-light px-5'>
                    Discover job opportunities, internships, courses, and AI-powered
                    career tools to help you build your future with Joby.Dz.
                </p>

                {/* Search Bar */}
                <div className='bg-white rounded-xl shadow-lg max-w-4xl mx-4 sm:mx-auto p-2'>

                    <div className='flex flex-col md:flex-row items-stretch md:items-center gap-2'>

                        <div className='flex items-center flex-1 px-3'>
                            <img
                                className='h-5 mr-2'
                                src={assets.search_icon}
                                alt=""
                            />

                            <input
                                type="text"
                                placeholder='Job title, skill or keyword'
                                className='w-full py-3 outline-none text-gray-700'
                                ref={titleRef}
                            />
                        </div>

                        <div className='hidden md:block w-px h-10 bg-gray-200'></div>

                        <div className='flex items-center flex-1 px-3'>
                            <img
                                className='h-5 mr-2'
                                src={assets.location_icon}
                                alt=""
                            />

                            <input
                                type="text"
                                placeholder='Wilaya (Oran, Alger...)'
                                className='w-full py-3 outline-none text-gray-700'
                                ref={locationRef}
                            />
                        </div>

                        <button
                            onClick={onSearch}
                            className='bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg text-white font-medium whitespace-nowrap'
                        >
                            Search
                        </button>

                    </div>

                </div>

                {/* Quick Tags */}
                <div className='flex justify-center gap-3 flex-wrap mt-6 px-4'>

                    <span className='bg-white/10 px-4 py-2 rounded-full text-sm'>
                        💼 Jobs
                    </span>

                    <span className='bg-white/10 px-4 py-2 rounded-full text-sm'>
                        🎓 Internships
                    </span>

                    <span className='bg-white/10 px-4 py-2 rounded-full text-sm'>
                        📚 Courses
                    </span>

                    <span className='bg-white/10 px-4 py-2 rounded-full text-sm'>
                        🤖 AI CV Analysis
                    </span>

                </div>


                <div className='flex justify-center gap-4 flex-wrap mt-8'>

    <a
        href="/courses"
        className='bg-white text-blue-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition'
    >
        📚 Explore Courses
    </a>

    <a
        href="/cv-analysis"
        className='bg-blue-600 border border-blue-400 px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition'
    >
        🤖 Analyze Your CV
    </a>

</div>

            </div>

            

        </div>
    )
}

export default Hero