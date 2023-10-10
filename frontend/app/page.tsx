'use client'
import { useState } from 'react'
type ContainerProps = {
  children?: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>
}

function MenuBar() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  )
}

function Hero() {
  return (
    <section>
      <h1 className="flex bg-sky-100 text-3xl font-bold">Home</h1>
    </section>
  )
}

type VitoFormProps = {
  linkedInUrl: string
  companyUrl: string
  onChangeLinkedInUrl: (url: string) => void
  onChangeCompanyUrl: (url: string) => void
  onSubmit: (response: string) => void
}

function VitoForm({
  linkedInUrl,
  companyUrl,
  onChangeLinkedInUrl,
  onChangeCompanyUrl,
  onSubmit,
}: VitoFormProps) {
  return (
    <div>
      <h2>Provide your data:</h2>
      <label>
        LinkedIn Url
        <input
          value={linkedInUrl}
          onChange={(e) => onChangeLinkedInUrl(e.target.value)}
        ></input>
      </label>
      <label>
        Company Url
        <input
          value={companyUrl}
          onChange={(e) => onChangeCompanyUrl(e.target.value)}
        ></input>
      </label>
      <button
        onClick={(e) => {
          e.preventDefault()
          onSubmit('response')
        }}
      >
        Submit
      </button>
    </div>
  )
}

type VitoMessageProps = { response: string }

function VitoMessage({ response }: VitoMessageProps) {
  if (response) {
    return <div>{JSON.stringify(response)}</div>
  }
  return null
}

function Footer() {
  return (
    <footer>
      <p>Footer</p>
    </footer>
  )
}

export default function Page() {
  const [linkedInUrl, setLinkedInUrl] = useState('')
  const [companyUrl, setCompanyUrl] = useState('')
  const [response, setResponse] = useState('')

  return (
    <Container>
      <MenuBar />
      <Hero />
      <h2>
        Linkedin: {linkedInUrl} companyUrl {companyUrl} response {response}
      </h2>
      <VitoForm
        linkedInUrl={linkedInUrl}
        companyUrl={companyUrl}
        onChangeLinkedInUrl={setLinkedInUrl}
        onChangeCompanyUrl={setCompanyUrl}
        onSubmit={setResponse}
      />
      <VitoMessage response={response} />
      <Footer />
    </Container>
  )
}
