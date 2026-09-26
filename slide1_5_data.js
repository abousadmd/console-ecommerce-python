const slidesContent = [
    // Slide 1
    `
    <div class="content flex-center">
        <div class="hero-composition">
            <h1 class="huge-title title-part-1 abs" style="top: 10%; left: 10%; opacity:0;">LA</h1>
            <h1 class="huge-title title-part-2 abs" style="top: 30%; left: 20%; z-index: 5; opacity:0;">CRÉATIVITÉ</h1>

            <div class="img-frame rot-1 abs img-alex" style="top: 15%; right: 15%; width: 25vw; z-index: 2; opacity:0;">
                <div class="tape tape-1"></div>
                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Alexander_Mosaic_detail_of_Alexander_the_Great_%283x4_cropped%29.jpg/960px-Alexander_Mosaic_detail_of_Alexander_the_Great_%283x4_cropped%29.jpg" alt="Alexander the Great">
                <p class="hand-note" style="bottom: -2vw; right: 2vw;">Alexander</p>
            </div>

            <div class="img-frame rot-2 abs img-steve" style="top: 45%; left: 10%; width: 20vw; z-index: 4; opacity:0;">
                <div class="tape tape-3"></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg" alt="Steve Jobs">
                <p class="hand-note" style="bottom: -3vw; left: 1vw;">Steve J.</p>
            </div>

            <div class="paper-cut abs note-imaginer" style="bottom: 10%; right: 20%; transform: rotate(-3deg); opacity:0; z-index: 6;">
                <p class="text-body" style="font-weight: 700; font-size: 2vw;">« Imaginer autrement. »</p>
            </div>
        </div>
    </div>
    `,

    // Slide 2
    `
    <div class="content">
        <h2 class="section-title">Définition de la créativité</h2>
        <div class="paper-cut" style="margin-top: 5vw; max-width: 60vw; transform: rotate(1deg);">
            <div class="tape tape-1"></div>
            <p class="text-body" style="font-size: 2.2vw; line-height: 1.8;">
                « La créativité, c'est la capacité de fabriquer ou d'imaginer des choses nouvelles. C'est <span class="highlight">inventer</span> une idée originale, <span class="highlight">créer</span> un objet, peindre une image ou trouver une solution simple à un problème. »
            </p>
            <div style="margin-top: 4vw; display: flex; gap: 2vw; justify-content: center;">
                <span class="hand-note rot-1" style="position: static; font-size: 3vw;">IMAGINER</span>
                <span class="hand-note rot-3" style="position: static; font-size: 3vw;">INVENTER</span>
                <span class="hand-note rot-2" style="position: static; font-size: 3vw;">CRÉER</span>
                <span class="hand-note rot-4" style="position: static; font-size: 3vw;">RÉSOUDRE</span>
            </div>
        </div>
    </div>
    `,

    // Slide 3
    `
    <div class="content">
        <h2 class="section-title" style="font-size: 3vw; max-width: 70vw;">Une même situation,<br>deux manières de la raconter</h2>
        <div class="grid-2" style="margin-top: 4vw;">
            <div class="paper-cut rot-3">
                <div class="tape tape-3"></div>
                <h3 style="font-family: var(--f-title); font-size: 1.5vw; margin-bottom: 1vw;">TEXTE 1 : DESCRIPTION CLASSIQUE</h3>
                <p class="text-body">« Le soleil se lève à six heures du matin. Marie se réveille, éteint son réveil et boit une tasse de café chaud. Elle met son manteau bleu, prend son sac et sort de chez elle pour aller prendre le bus. La journée commence de manière calme et habituelle. »</p>
            </div>

            <div class="paper-cut rot-2" style="background-color: var(--c-black); color: var(--c-bg);">
                <div class="tape tape-2" style="background-color: var(--c-yellow);"></div>
                <h3 style="font-family: var(--f-title); font-size: 1.5vw; margin-bottom: 1vw; color: var(--c-yellow);">TEXTE 2 : IMAGINATION</h3>
                <p class="text-body" style="color: var(--c-bg);">« À six heures pile, <span class="highlight-blue">une boule d'or brûlante</span> chasse la nuit. Marie ouvre les yeux, fait taire <span class="highlight-blue">le monstre de métal</span> qui sonne sur sa table et avale une gorgée de nuit noire transformée en café. Enfilant <span class="highlight-blue">un morceau de ciel bleu</span> sur ses épaules, elle franchit le pas de sa porte pour s'envoler vers sa journée. »</p>
            </div>
        </div>
    </div>
    `,

    // Slide 4
    `
    <div class="content grid-center">
        <div style="text-align: center;">
            <h2 class="section-title" style="font-size: 3vw;">Lequel de ces textes est un texte créatif ?</h2>

            <div style="display: flex; gap: 4vw; justify-content: center; margin-top: 5vw;">
                <button class="btn-primary" id="btn-text-1" style="font-size: 3vw; padding: 2vw 4vw;">[TEXTE 1]</button>
                <button class="btn-primary" id="btn-text-2" style="font-size: 3vw; padding: 2vw 4vw;">[TEXTE 2]</button>
            </div>

            <div id="quiz-feedback" class="paper-cut abs" style="bottom: -15vw; left: 50%; transform: translateX(-50%) rotate(2deg); width: 50vw; opacity: 0; pointer-events: none;">
                <h3 id="feedback-title" style="font-family: var(--f-hand); font-size: 4vw; color: var(--c-blue);"></h3>
                <p id="feedback-text" class="text-body" style="margin-top: 1vw;"></p>
            </div>
        </div>
    </div>
    `,

    // Slide 5
    `
    <div class="content">
        <h2 class="section-title" style="font-size: 3.5vw;">Pourquoi le texte 2 paraît-il plus créatif ?</h2>

        <div style="margin-top: 5vw; position: relative; height: 30vw;">
            <div class="paper-cut rot-4 abs" style="top: 0; left: 0; z-index: 2;">
                <p class="hand-note" style="position: static; font-size: 4vw; color: var(--c-black);">IMAGINATION</p>
            </div>
            <div class="paper-cut rot-1 abs" style="top: 8vw; left: 20vw; z-index: 3;">
                <p class="hand-note" style="position: static; font-size: 4vw; color: var(--c-blue);">MÉTAPHORE</p>
            </div>
            <div class="paper-cut rot-3 abs" style="top: 16vw; left: 5vw; z-index: 4;">
                <p class="hand-note" style="position: static; font-size: 4vw; color: var(--c-accent);">VOCABULAIRE ORIGINAL</p>
            </div>
            <div class="paper-cut rot-2 abs" style="top: 22vw; left: 35vw; z-index: 5;">
                <p class="hand-note" style="position: static; font-size: 4vw; color: var(--c-yellow);">REGARD DIFFÉRENT</p>
            </div>

            <!-- Animation demonstration -->
            <div class="paper-cut abs" style="top: 5vw; right: 5vw; width: 35vw; background-color: var(--c-black); color: var(--c-bg);">
                <div class="tape tape-1"></div>
                <p class="text-body" style="color: var(--c-bg); font-size: 1.5vw; opacity: 0.5;">Elle met son manteau bleu.</p>
                <div style="height: 2vw; display:flex; justify-content:center; align-items:center; margin: 1vw 0;">
                    <span style="font-size: 2vw;">↓</span>
                </div>
                <p class="text-body" style="color: var(--c-bg); font-size: 1.8vw; font-weight: 700;">Elle enfile un morceau de ciel bleu.</p>
            </div>
        </div>
    </div>
    `
];
