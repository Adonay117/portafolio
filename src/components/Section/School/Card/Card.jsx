import School from "../../../Icons/School";

const Card = ({
  className = 'from-yellow-600 to-orange-500',
  school = 'No hay Universidad',
  year = 'No especificado',
  career = 'No hay Carrera'
}) => {
  return (
    <div  className="relative group hover:scale-110 transition-transform  flex gap-4 bg-gradient-to-bl from-gray-900/10 via-slate-800/15S to-slate-600/10 p-6 w-[600px] rounded-2xl overflow-hidden">
      {/* Fondo desenfocado */}
      <div className="absolute inset-0 bg-gradient-to-r ${className} blur-3xl z-0"></div>


      <div className="relative flex gap-4 items-center z-10 flex-wrap">
        <div className={`relative p-1 w-20 h-20  rounded-full bg-gradient-to-r ${className}`}>
          <div className="w-full h-full rounded-full bg-[#30241B] flex justify-center items-center">
            <School className="w-12 h-auto text-gray-300" />
          </div>
        </div>
        <div className="flex flex-col text-white">
          <p className="text-white/80 font-medium">{school}</p>
          <p className="text-white/70">{career}</p>
          <p className="font-light text-white/50">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
