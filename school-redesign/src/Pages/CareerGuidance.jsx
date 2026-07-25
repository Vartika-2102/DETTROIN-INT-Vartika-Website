import FacilityPage from '../Components/FacilityPage'

export default function CareerGuidance() {
  return (
    <FacilityPage
      number="04"
      title="Career Guidance"
      heroImage="/images/facility-guidance.jpg"
      intro="Structured guidance from middle school onward, preparing students for the choices ahead of them. We help students understand their strengths and explore paths that align with their interests."
      highlights={[
        { title: 'One-on-One Counselling', desc: 'Personalized sessions to discuss academic and career paths.' },
        { title: 'Aptitude Assessments', desc: 'Tools to help students identify their natural strengths.' },
        { title: 'College Preparation', desc: 'Guidance on applications, entrance exams, and stream selection.' },
        { title: 'Industry Exposure', desc: 'Talks and workshops with professionals from various fields.' },
      ]}
    />
  )
}