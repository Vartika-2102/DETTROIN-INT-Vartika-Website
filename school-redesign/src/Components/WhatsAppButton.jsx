import { FaWhatsapp } from 'react-icons/fa'

// Replace with the school's actual WhatsApp-enabled number, country code first, no + or spaces.
const WHATSAPP_NUMBER = '919837050000'
const MESSAGE = encodeURIComponent(
  "Hi, I'd like to know more about admissions at Krishna International School."
)

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
    >
      <FaWhatsapp className="text-2xl" aria-hidden="true" />
    </a>
  )
}
