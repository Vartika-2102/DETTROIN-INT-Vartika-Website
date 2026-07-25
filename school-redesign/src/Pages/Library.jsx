import FacilityPage from '../Components/FacilityPage'

export default function Library() {
  return (
    <FacilityPage
      number="03"
      title="Library"
      heroImage="/images/facility-library.jpg"
      intro="A full reference and digital collection, open through the school day for independent reading and research. Our library is designed as a quiet, welcoming space where curiosity is encouraged."
      highlights={[
        { title: 'Extensive Collection', desc: 'Fiction, reference, and academic titles across all grade levels.' },
        { title: 'Digital Resources', desc: 'Access to online journals and research databases.' },
        { title: 'Reading Programs', desc: 'Regular initiatives to build a lifelong love of reading.' },
        { title: 'Quiet Study Spaces', desc: 'Dedicated areas for focused, independent research.' },
      ]}
    />
  )
}