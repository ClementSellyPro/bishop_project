export default function Event() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-4 pb-8 pt-10 bg-[#121212] text-[#F2F2F2]"
      style={{
        backgroundImage: "url('/footer_bg.svg')",
      }}
    >
      <div className="ml-0 lg:ml-20 mt-14 w-11/12 md:w-6/12 lg:w-9/12 h-10/12 relative rounded-2xl lg:rounded-4xl px-4 lg:px-18 py-8 lg:py-12 border-2 border-[#229B3C]  bg-[#282828]">
        <h3 className="kaisei-opti-regular lg:text-6xl text-3xl font-semibold mb-12 text-center">
          ÉVÉNEMENT À VENIR
        </h3>
        <div className="flex justify-center items-center h-90 p-8 rounded-xl mt-8 bg-[#121212]/50">
          <p className="text-center">Pas d'évènement prévu pour le moment.</p>
        </div>
      </div>
    </div>
  );
}
