'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Modal from '@/components/Modal'
import VitoForm from '@/components/VitoForm'
import { useState } from 'react'

export default function Page() {
  const [linkedInUrl, setLinkedInUrl] = useState('')
  const [companyUrl, setCompanyUrl] = useState('')
  const [response, setResponse] = useState('')
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <Header />
      <Hero />
      <VitoForm
        linkedInUrl={linkedInUrl}
        companyUrl={companyUrl}
        onChangeLinkedInUrl={setLinkedInUrl}
        onChangeCompanyUrl={setCompanyUrl}
        onSubmit={setResponse}
        onOpenModal={setOpenModal}
      />
      <Modal open={openModal} setOpen={setOpenModal} children={response} />
      <Footer />
    </div>
  )
}
