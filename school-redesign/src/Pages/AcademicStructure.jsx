import FacilityPage from '../Components/FacilityPage'

export default function AcademicStructure() {
  return (
    <FacilityPage
      number="01"
      title="Academic Structure"
      heroImage="/images/facility-academics.jpg"
      intro="Our curriculum is staged carefully from the early years through senior school, aligned to CBSE benchmarks at every level. Each stage builds on the last, ensuring students develop strong foundations before moving to more advanced concepts."
      highlights={[
        { title: 'Structured Progression', desc: 'A clear academic pathway from Nursery through Class XII, mapped to CBSE guidelines.' },
        { title: 'Small Class Sizes', desc: 'Focused attention for every student, so no one falls behind.' },
        { title: 'Regular Assessment', desc: 'Continuous evaluation to track progress and identify areas for support.' },
        { title: 'Experienced Faculty', desc: 'Teachers trained to bring subjects to life through practical, engaging methods.' },
      ]}
    />
  )
}