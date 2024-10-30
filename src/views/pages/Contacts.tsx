const Contacts = () => {

  return (
    <div className="my-12 mx-12 sm:w-1/2 sm:mx-auto text-sm sm:text-lg">
        <h1 className="text-3xl font-semibold text-center mb-12">Kontakter Brf Studio 58</h1>
        <h3 className="text-xl font-semibold">Kontakt</h3>
        <p>
            Styrelsen sammanträder ca en gång i månaden och kommunikation med styrelsen kan ske
            via mailadress: <a href="mailto:styrelsen@studio58.se" className="underline" target="_blank">styrelsen@studio58.se</a> eller via postlådan på Östra Eriksbergsgatan 87. <br />
            Information finns på anslagstavlorna i entréerna och på hemsidan eller på <a className="underline" href="https://www.studio58.se/">https://www.studio58.se/</a>
        </p>
        <p>
            Om du har tankar, idéer eller förslag på förbättringar så kontakta gärna styrelsen.
        </p>
        <br />
        <h3 className="text-xl font-semibold">Förvaltare</h3>
        <p>
            Bostadsrättsföreningens ekonomiska och administrativa förvaltning sköts av Nabo. <br />
            Telefon: <a href="tel:010-2880027" className="underline">010-2880027</a><br />
            Email: <a href="mailto:info@nabo.se" className="underline" target="_blank">info@nabo.se</a><br /> 
            Hemsida: <a className="underline" href="https://www.studio58.se/">https://portal.nabo.se</a>
            <br />
            <br />
            Logga in med Bankid så ser ni era uppgifter och ärenden.
            (tex. lägenhet utdrag, avier, etc)
            <br />
            <br />
            Teknisk förvaltning, fastighetsskötsel och städning sköts av GUAB. <br />
            Felanmälan görs till: tel: <a href="tel:031-515240" className="underline">031-515240</a> (vardagar 07:00-16:00), email: <a href="mailto:info@guab.se" className="underline" target="_blank">info@guab.se</a> <br />
            (tex. hissen, dörrar, sophantering, lampor etc.) <br />
            <a className="underline" href="https://guab.se/felanmalan/">https://guab.se/felanmalan/</a>
        </p>
        <br />
        <h3 className="text-xl font-semibold">Jourtjänst</h3>
        <p>
            Vid akut fara för väsentlig skada på fastigheten skall alltid den tekniska förvaltaren kontaktas
            på jourtelefon. Dock är kostnaden för en jourutryckning belagd med en hög avgift, så vi vill
            undvika onödiga utryckningar. Översvämning är alltid ett akut ärende. <br />
            Tel: <a href="tel:031-7610030" className="underline">031-7610030</a> (kvällar &amp; helger)
        </p>
    </div>
  )
}

export default Contacts