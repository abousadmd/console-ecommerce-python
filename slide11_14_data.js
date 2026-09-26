const slides11to14Content = [
    // Slide 11
    `
    <div class="content grid-center">
        <div style="text-align: center;">
            <h2 class="section-title" style="font-size: 5vw; color: var(--c-accent);">À VOUS DE JOUER !</h2>

            <div class="paper-cut rot-1" style="display:inline-block; margin-top: 2vw; padding: 3vw 5vw; max-width: 60vw;">
                <div class="tape tape-1"></div>
                <p class="text-body" style="font-size: 2vw; margin-bottom: 2vw; font-weight:700;">Défi : Imaginez un objet qui facilite la vie des étudiants.</p>

                <div id="generator-result" style="min-height: 8vw; display:flex; align-items:center; justify-content:center; margin-bottom: 2vw;">
                    <p class="hand-note" style="position:static; font-size: 3vw; color: var(--c-blue); text-align:center;">Cliquez sur le bouton pour générer des contraintes.</p>
                </div>

                <button class="btn-primary" id="btn-generate" style="font-size: 2vw;">[GÉNÉRER UNE IDÉE]</button>
            </div>
        </div>
    </div>
    `,

    // Slide 12
    `
    <div class="content">
        <h2 class="section-title" style="font-size: 4vw; text-align: center;">ET SI… ?</h2>

        <div class="grid-2" style="margin-top: 4vw; padding: 0 4vw;">

            <div class="paper-cut rot-2 et-si-card" style="cursor:pointer; padding: 3vw;">
                <h3 style="font-family: var(--f-title); font-size: 2vw;">« Et si les voitures pouvaient voler ? »</h3>
                <div class="et-si-reveal" style="display:none; margin-top:2vw;">
                    <p class="hand-note" style="position:static; color:var(--c-accent); font-size: 2.5vw;">Imagine les conséquences…</p>
                </div>
            </div>

            <div class="paper-cut rot-4 et-si-card" style="cursor:pointer; padding: 3vw; background-color: var(--c-black); color: var(--c-bg);">
                <div class="tape tape-2" style="background-color: var(--c-yellow);"></div>
                <h3 style="font-family: var(--f-title); font-size: 2vw; color: var(--c-bg);">« Et si les écoles n'avaient plus de salles de classe ? »</h3>
                <div class="et-si-reveal" style="display:none; margin-top:2vw;">
                    <p class="hand-note" style="position:static; color:var(--c-yellow); font-size: 2.5vw;">Imagine les conséquences…</p>
                </div>
            </div>

            <div class="paper-cut rot-1 et-si-card" style="cursor:pointer; padding: 3vw;">
                <h3 style="font-family: var(--f-title); font-size: 2vw;">« Et si les téléphones pouvaient lire nos émotions ? »</h3>
                <div class="et-si-reveal" style="display:none; margin-top:2vw;">
                    <p class="hand-note" style="position:static; color:var(--c-blue); font-size: 2.5vw;">Imagine les conséquences…</p>
                </div>
            </div>

            <div class="paper-cut rot-3 et-si-card" style="cursor:pointer; padding: 3vw; background-color: var(--c-blue); color: white;">
                <div class="tape tape-3"></div>
                <h3 style="font-family: var(--f-title); font-size: 2vw; color: white;">« Et si Internet disparaissait pendant une semaine ? »</h3>
                <div class="et-si-reveal" style="display:none; margin-top:2vw;">
                    <p class="hand-note" style="position:static; color:var(--c-bg); font-size: 2.5vw;">Imagine les conséquences…</p>
                </div>
            </div>

        </div>
    </div>
    `,

    // Slide 13
    `
    <div class="content grid-center">
        <div style="width: 100%;">
            <h2 class="section-title" style="text-align: center; margin-bottom: 5vw; max-width: 80vw; margin-left:auto; margin-right:auto;">Se tromper fait partie du processus</h2>

            <div style="position: relative; height: 15vw; display: flex; justify-content: space-between; align-items: center; padding: 0 5vw;">

                <svg style="position:absolute; top:50%; left:5%; width:90%; height:10vw; transform:translateY(-50%); z-index:1;" preserveAspectRatio="none">
                    <path id="mistake-path" d="M 0,50 Q 25,0 50,50 T 100,50" vector-effect="non-scaling-stroke" fill="none" stroke="var(--c-black)" stroke-width="4" stroke-dasharray="10 10"/>
                </svg>

                <div class="paper-cut rot-1" style="z-index: 2; padding: 1vw 2vw;"><span style="font-family: var(--f-title); font-weight:700; font-size:1.5vw;">ESSAYER</span></div>
                <div class="paper-cut rot-3" style="z-index: 2; padding: 1vw 2vw; background-color: var(--c-accent); color: white;"><span style="font-family: var(--f-title); font-weight:700; font-size:1.5vw;">SE TROMPER</span></div>
                <div class="paper-cut rot-2" style="z-index: 2; padding: 1vw 2vw;"><span style="font-family: var(--f-title); font-weight:700; font-size:1.5vw;">COMPRENDRE</span></div>
                <div class="paper-cut rot-4" style="z-index: 2; padding: 1vw 2vw;"><span style="font-family: var(--f-title); font-weight:700; font-size:1.5vw;">MODIFIER</span></div>
                <div class="paper-cut rot-1" style="z-index: 2; padding: 1vw 2vw; background-color: var(--c-yellow);"><span style="font-family: var(--f-title); font-weight:700; font-size:1.5vw;">CRÉER</span></div>

            </div>

            <div class="text-center" style="margin-top: 5vw; text-align: center;">
                <p class="hand-note" style="position:static; font-size: 4vw; color: var(--c-blue);">« Une erreur peut devenir une nouvelle idée. »</p>
            </div>
        </div>
    </div>
    `,

    // Slide 14
    `
    <div class="content grid-center">
        <div style="text-align: center; position: relative;">
            <h2 class="section-title end-title" style="font-size: 5vw; margin-bottom: 2vw;">ALORS, QU'EST-CE QUE LA CRÉATIVITÉ ?</h2>

            <div style="font-family: var(--f-title); font-size: 3vw; font-weight: 700; line-height: 1.2; margin-bottom: 4vw;">
                <div class="end-word">IMAGINER.</div>
                <div class="end-word">OBSERVER.</div>
                <div class="end-word">QUESTIONNER.</div>
                <div class="end-word">EXPÉRIMENTER.</div>
                <div class="end-word" style="color: var(--c-accent); font-size: 4vw;">CRÉER.</div>
            </div>

            <div class="paper-cut rot-2 end-quote" style="max-width: 60vw; margin: 0 auto; opacity: 0;">
                <div class="tape tape-1"></div>
                <p class="text-body" style="font-size: 2vw; font-weight:700; line-height: 1.4;">
                    « Être créatif, ce n'est pas seulement inventer quelque chose de nouveau.<br>
                    <span class="highlight">C'est aussi regarder le monde d'une manière différente.</span> »
                </p>
            </div>
        </div>
    </div>
    `
];
