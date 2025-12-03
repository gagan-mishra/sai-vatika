const FORM_ENDPOINT = 'https://formsubmit.co/ajax/contact@saivatika4.com'

export async function submitLead(payload: Record<string, string>) {
  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const message = await response.text().catch(() => 'Unable to submit form right now.')
    throw new Error(message)
  }

  return response.json().catch(() => ({}))
}
