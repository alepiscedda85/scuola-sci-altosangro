export type ContactPayload = Record<string, string | number | boolean>

export async function submitContact(payload: ContactPayload) {
  const endpoint = import.meta.env.VITE_CONTACT_API_URL as string | undefined
  if (!endpoint) return { ok: false as const, mode: 'not-configured' as const, payload }
  const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
  if (!response.ok) throw new Error('Invio non riuscito')
  return { ok: true as const, mode: 'api' as const }
}
