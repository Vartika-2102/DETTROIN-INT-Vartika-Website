import FacilityPage from '../Components/FacilityPage'

export default function ScienceLabs() {
  return (
    <FacilityPage
      number="02"
      title="Science Laboratories"
      heroImage="/images/facility-labs.jpg"
      intro="Fully equipped physics, chemistry, and biology labs give every student the chance to move beyond textbooks. Every concept gets a hands-on demonstration, turning abstract theory into practical understanding."
      highlights={[
        { title: 'Physics Lab', desc: 'Equipment for mechanics, optics, and electricity experiments.' },
        { title: 'Chemistry Lab', desc: 'Safe, well-ventilated space for practical chemical experiments.' },
        { title: 'Biology Lab', desc: 'Microscopes and specimens for hands-on life sciences learning.' },
        { title: 'Safety First', desc: 'All labs follow strict safety protocols under teacher supervision.' },
      ]}
    />
  )
}