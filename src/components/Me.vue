<template>
    <div class="container">
        <h1>Me sida</h1><img :src="image" alt= />
        <h2>Bio:</h2>
        <p>Jag bor i Skövde tillsammans med min sambo Martina och vår hund Bella (Se bild). På fritiden sitter jag gärna vid datorn och kollar filmer och serier, blir att jag spelar lite då och då. När jag inte sitter vid datorn umgås jag med familj och vänner, spelar lite beachvolleyboll och golf. Blir några skogspromenader när jag spelar golf då det verkar vara något fel på mina golfbollar, de drar sig mot skogen.</p>
        <p>På senare tid har det blivit mer aktiviteter ute eftersom vi skaffat hund. Det är en av anledningarna jag ville börja studera på distans, så jag kan vara hemma med Bella.</p>
        <p>En annan anledning till att jag sökte programmet Webbprogrammering är att jag vill lära mig mer om webbutveckling. Jag har tidigare läst ett tekniskt gymnasieutbildning med lite grundläggande programmering i C++ och PHP, kommer inte ihåg mycket av det. Efter lumpen och lite jobb började jag en 3-årig högskoleutbildning där jag fick lära mig lite programmering i C++ och Perl.</p>
        <p>Efter högskolan har jag jobbat som IT-tekniker och onsite-tekniker. På fritiden har jag lärt mig själv lite programmering, något som jag tycker är roligt och ser fram emot att lära mig mer om.</p>
    </div>
</template>

<script>
export default {
    name: "Me",
    data() {
        return {
            image: require("@/assets/me_bella.jpg")
        };
    }
};
</script>

<style scoped>
img {
    width: 100%;
    max-width: 500px;
    height: auto;
}
</style>
