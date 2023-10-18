import { AddForm } from "@/app/AddForm";
export default function Home() {
  return (
    <main className="mx-auto flex max-w-lg flex-col items-center justify-center px-5 py-6 text-center text-gray-800 md:px-10 md:py-20">
      <h3 className="text-3xl font-semibold md:text-4xl">
        Sales Messages on <span className="text-indigo-600">Autopilot</span>
      </h3>
      <p className="mt-3 leading-relaxed text-gray-500">
        Generate personalized sales messages from LinkedIn profiles for any
        company. Just input your website URL and watch your sales soar. Don't
        miss out—Automate Your Sales Today!
      </p>
      <AddForm />
    </main>
  );
}
