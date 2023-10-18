import Container from '@/components/Container'
import Scroll from '@/components/Scroll'

export default function Hero() {
  return (
    <Container>
      <div className="py-2">
        <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
          Sales Messages on <span className="text-indigo-600">Autopilot</span>
        </h3>
        <p className="text-gray-500 leading-relaxed mt-3">
          Generate personalized sales messages from LinkedIn profiles for any
          company. Just input your website URL and watch your sales soar. Don't
          miss out—Automate Your Sales Today!
        </p>
      </div>
      <div className="py-8">
        <Scroll LinkName="anchor">
          <div className="cta-pr-btn px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center">
            Try it out
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </Scroll>
      </div>
      <style jsx>{`
        .cta-pr-btn:hover svg {
          transform: translateX(5px);
        }
      `}</style>
    </Container>
  )
}
