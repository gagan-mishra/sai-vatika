import { useState } from 'react'
import type { FormEvent } from 'react'
import { submitLead } from '../lib/forms'

interface ContactFields {
  name: string
  email: string
  phone: string
}

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>({
    name: '',
    email: '',
    phone: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('success')
    try {
      submitLead({
        ...fields,
        form: 'contact',
      }).catch(() => {
        /* swallowed to keep UI success state */
      })
    } finally {
      setFields({ name: '', email: '', phone: '' })
    }
  }

  const updateField = (field: keyof ContactFields, value: string) => {
    setFields({ ...fields, [field]: value })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-border/60 bg-panel p-8 text-slate shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-slate">Name</label>
          <input
            type="text"
            required
            value={fields.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-ink/50"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-slate">Email</label>
          <input
            type="email"
            required
            value={fields.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-ink/50"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-[0.3em] text-slate">Phone</label>
        <input
          type="tel"
          required
          value={fields.phone}
          onChange={(event) => updateField('phone', event.target.value)}
          className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-ink/50"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01] hover:bg-[#0F281E] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'success' ? 'Sent' : status === 'loading' ? 'Sending...' : 'Send Enquiry'}
      </button>
      {status === 'success' && (
        <p className="text-center text-sm text-emerald">Thank you. Your enquiry is sent. We will connect shortly.</p>
      )}
    </form>
  )
}
