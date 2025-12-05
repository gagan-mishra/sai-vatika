const FORM_ENDPOINT = 'https://formsubmit.co/ajax/contact@saivatika4.in'

const MAILTO_ADDRESS = 'contact@saivatika4.in'

export async function submitLead(payload: Record<string, string>) {
  const formData = new FormData()
  Object.entries(payload).forEach(([key, value]) => formData.append(key, value))

  // FormSubmit helpers
  formData.append('_subject', 'New enquiry - Sai Vatika')
  formData.append('_captcha', 'false')

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8000)

  let response: Response
  try {
    response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
      signal: controller.signal,
    })
  } catch (error) {
    clearTimeout(timeout)
    window.location.href = buildMailto(payload)
    return { fallback: 'mailto', ok: true }
  }

  clearTimeout(timeout)

  if (!response.ok) {
    const message = await response.text().catch(() => 'Unable to submit form right now.')
    throw new Error(message || 'Unable to submit form right now.')
  }

  const json = await response.json().catch(() => ({}))
  return { ok: true, ...json }
}

function buildMailto(payload: Record<string, string>) {
  const subject = encodeURIComponent('New enquiry - Sai Vatika')
  const body = encodeURIComponent(
    Object.entries(payload)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n'),
  )
  return `mailto:${MAILTO_ADDRESS}?subject=${subject}&body=${body}`
}
