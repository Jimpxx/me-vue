<template>
    <div class="container">
        <h1>Kmom02</h1>
        <p>
            <a href="https://github.com/Jimpxx/me-vue">Repots Github</a>
        </p>
        <p>Jag satt ett par timmar och klurade på hur jag skulle få till en datepicker som ser ut som en kalender. Efter mycket sökande och hårdragande så gav jag upp den versionen och gjorde det lite enklare för mig. Jag bestämde mig för att göra min datepicker genom att ha 3 st select boxar. Användaren får därefter välja år, månad och dag då han eller hon föddes. Jag valde en väldigt minimalistisk design på mitt formulär och jag designade min datepicker därefter. Datepickern är för övrigt gjord till en egen komponent som jag importerar i mitt formulär.</p>
        <p>Jag tog lite inspiration från Emil genom att göra mitt formulär lite större med padding och större teckensnitt vilket ökar läsbarheten. Gällande valideringen använde jag mig av HTML5s valideringsverktyg. Jag försökte få till en röd outline när något var ":invalid" men det gjorde att alla fält fick en röd outline vid sidladdning och jag lyckades aldrig få bort det. Jag nöjde mig med HTMLs meddelande om man lämnar en ruta som ska vara ifylld tom.</p>
    </div>
</template>

<script>
export default {
    name: "Kmom02"
};
</script>

<style>
p,
h1 {
    margin-bottom: 1rem;
}
</style>
