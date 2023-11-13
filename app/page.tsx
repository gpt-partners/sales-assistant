import { AddForm } from '@/app/add-form'
import { CreateVito } from '@/components/create-vito'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-2">
      <div className="mx-auto max-w-lg text-gray-800">
        <h3 className="py-3 text-3xl font-semibold md:py-5 md:text-4xl">
          Sales Messages on <span className="text-indigo-600">Autopilot</span>
        </h3>
        <p className="mt-3 py-3 leading-relaxed text-gray-500 md:py-4">
          Generate personalized sales messages from LinkedIn profiles for any company. Just input
          your website URL and watch your sales soar. Don't miss out—Automate Your Sales Today!
        </p>
        <AddForm />
        <CreateVito />
      </div>
    </main>
  )
}
