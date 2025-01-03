import feature from '../../../public/features/feature.gif'

const Features = () => {
  return (
    <section className="container mt-48 text-gray-600 body-font grid sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="hero w-full 300 border">
          <img src={feature} alt="Features" />
        </div>
        <div className="hero w-full h-1/3 border">
          <h1 className="text-6xl text-dark-400 font-bold">Best Features Provided by mpluse</h1>
        </div>
    </section>
  )
}

export default Features
