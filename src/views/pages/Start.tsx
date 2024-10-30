import Studio58Image from '../../assets/images/Studio58-front.jpg';
import Studio58Bottom from '../../assets/images/alvsborgsbron-1785139.jpg';
import Studio58Hero from '../../assets/images/studio58-sidan.png';

const Start = () => {
  return (
    <div className="flex flex-col">
      <div
        className="bg-cover bg-center bg-no-repeat grow flex flex-col justify-between pt-16 py-64"
        style={{ backgroundImage: `url(${Studio58Image})` }}
      >
        {/* Hero Section */}
        <div className="text-center text-white py-12 leading-none tracking-tight flex justify-center items-center">
          <div className="backdrop-blur-sm bg-gray-700/30 p-12 rounded border">
            <h1 className="text-4xl sm:text-6xl font-bold">BRF STUDIO 58</h1>
            <p className="text-md sm:text-lg">Östra Eriksbergsgatan 85-87</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white">
          <div className="mx-auto md:flex justify-center items-center gap-8 sm:py-12 xl:w-1/2">
            {/* Left Column */}
            <div className="bg-gray-200 rounded p-8 sm:p-12">
              <h1 className="font-bold text-lg">Studio 58</h1>
              <p className="mb-5">
                Välkommen till Studio 58. Ett av de mest spektakulära husen på Eriksberg.
                Två huskroppar, den ena spetsig, den andra med terrasser, skapar tillsammans
                en spännande form. Mellan husen finns plats för en lagom liten innergård,
                en grön skön lunga. Samtliga lägenheter har inglasade balkonger, som är
                ett härligt extrarum som kan användas året om.
              </p>
              <p>
                Studio 58 inrymmer 58 ljusa och fräscha ettor, tvåor och treor. Flera av
                lägenheterna bjuder på stor flexibilitet i planlösningen, några tvåor kan
                till och med göras om till treor. Inredningen är stilren med material av
                hög kvalitet som står sig över tiden.
              </p>
            </div>

            {/* Right Column */}
            <img className="mx-auto p-5 mb:p-0" src={Studio58Hero} alt="Studio 58" />
            
          </div>
        </div>

      {/* Bottom Section */}
      <div
          className="bg-auto bg-center bg-no-repeat py-64"
          style={{ backgroundImage: `url(${Studio58Bottom})` }}
      >
      </div>
    </div>
  );
};

export default Start;
