export function Form() {
  return (
    <div className="max-w-[728px] m-auto mt-10 flex flex-col border-2 p-4 border-light-grey rounded-md gap-6">
      <div>
        <img src="" alt="" />

        <span className="font-thin">Horario</span>
      </div>

      <div>
        <h2>Qual período quer treinar?</h2>

        {/* make a radio button list */}
        <div>
          <input type="radio" id="manha" name="periodo" value="manha" />
          <label htmlFor="manha">Manhã</label>

          <input type="radio" id="tarde" name="periodo" value="tarde" />
          <label htmlFor="tarde">Tarde</label>

          <input type="radio" id="noite" name="periodo" value="noite" />
          <label htmlFor="noite">Noite</label>
        </div>
      </div>
    </div>
  );
}
