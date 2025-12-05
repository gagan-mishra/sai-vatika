const whatsappNumber = '+917798221313'
const whatsappText = encodeURIComponent('Hi, I am interested in the Sai Vatika Shirdi Project. Please share details.')

export function WhatsAppButton() {
  const href = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappText}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-ink/30 transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-ink/40 sm:right-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.33 5.507 0 12.051 0 18.595 0 23.98 5.33 23.98 11.894c0 6.563-5.385 11.894-11.93 11.894a12.2 12.2 0 01-6.032-1.616L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.593 5.448 0 9.886-4.421 9.886-9.86 0-5.44-4.438-9.86-9.887-9.86-5.45 0-9.887 4.42-9.887 9.86 0 2.225.73 4.148 1.957 5.803l-.999 3.648 3.538-.984zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.165-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.873.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      </svg>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  )
}
