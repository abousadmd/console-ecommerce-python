const slides6to10Content = [
    // Slide 6
    `
    <div class="content grid-center">
        <div style="width: 100%;">
            <h2 class="section-title" style="font-size: 3.5vw; text-align: center; margin-bottom: 4vw;">Les ingrédients de la créativité</h2>

            <div style="display: flex; gap: 2vw; justify-content: center;">
                <div class="paper-cut rot-1 hover-card" style="width: 20vw; padding: 2vw 1.5vw;">
                    <div class="tape tape-1"></div>
                    <h3 style="font-family: var(--f-hand); font-size: 3vw; color: var(--c-blue); margin-bottom: 1vw;">IMAGINATION</h3>
                    <p class="text-body" style="font-size: 1.2vw;">« Imaginer ce qui n'existe pas encore. »</p>
                </div>

                <div class="paper-cut rot-3 hover-card" style="width: 20vw; padding: 2vw 1.5vw; margin-top: 2vw;">
                    <div class="tape tape-2" style="background-color: var(--c-yellow);"></div>
                    <h3 style="font-family: var(--f-hand); font-size: 3vw; color: var(--c-accent); margin-bottom: 1vw;">OBSERVATION</h3>
                    <p class="text-body" style="font-size: 1.2vw;">« Regarder les choses autrement. »</p>
                </div>

                <div class="paper-cut rot-2 hover-card" style="width: 20vw; padding: 2vw 1.5vw; margin-top: -1vw;">
                    <div class="tape tape-3"></div>
                    <h3 style="font-family: var(--f-hand); font-size: 3vw; color: var(--c-black); margin-bottom: 1vw;">CURIOSITÉ</h3>
                    <p class="text-body" style="font-size: 1.2vw;">« Poser des questions et chercher. »</p>
                </div>

                <div class="paper-cut rot-4 hover-card" style="width: 20vw; padding: 2vw 1.5vw; margin-top: 3vw;">
                    <div class="tape tape-1"></div>
                    <h3 style="font-family: var(--f-hand); font-size: 3vw; color: var(--c-yellow); margin-bottom: 1vw;">EXPÉRIMENTATION</h3>
                    <p class="text-body" style="font-size: 1.2vw;">« Essayer, se tromper et recommencer. »</p>
                </div>
            </div>
        </div>
    </div>
    `,

    // Slide 7
    `
    <div class="content">
        <h2 class="section-title">La créativité est partout</h2>

        <div class="collage-container" style="position: relative; width: 100%; height: 70%; margin-top: 2vw;">

            <div class="collage-item rot-2 abs" style="top: 5%; left: 10%;" data-title="ART" data-desc="Exprimer des émotions à travers la peinture, la sculpture ou la scène.">
                <div class="img-frame" style="width: 15vw;">
                    <div class="tape tape-1"></div>
                    <div style="width:100%; height:15vw; background-color: var(--c-blue); display:flex; justify-content:center; align-items:center;">
                        <span style="font-family: var(--f-title); color:white; font-size:2vw;">ART</span>
                    </div>
                </div>
            </div>

            <div class="collage-item rot-3 abs" style="top: 15%; left: 40%;" data-title="TECHNOLOGIE" data-desc="Inventer de nouveaux outils et logiciels pour résoudre des problèmes.">
                <div class="img-frame" style="width: 18vw;">
                    <div class="tape tape-2"></div>
                    <div style="width:100%; height:12vw; background-color: var(--c-black); display:flex; justify-content:center; align-items:center;">
                        <span style="font-family: var(--f-title); color:white; font-size:2vw;">TECHNOLOGIE</span>
                    </div>
                </div>
            </div>

            <div class="collage-item rot-1 abs" style="top: 40%; left: 70%;" data-title="MUSIQUE" data-desc="Composer de nouvelles mélodies et rythmes.">
                <div class="img-frame" style="width: 14vw;">
                    <div class="tape tape-3"></div>
                    <div style="width:100%; height:18vw; background-color: var(--c-accent); display:flex; justify-content:center; align-items:center;">
                        <span style="font-family: var(--f-title); color:white; font-size:2vw;">MUSIQUE</span>
                    </div>
                </div>
            </div>

            <div class="collage-item rot-4 abs" style="top: 50%; left: 15%;" data-title="CUISINE" data-desc="Mélanger des saveurs inédites.">
                <div class="paper-cut" style="width: 15vw;">
                    <div class="tape tape-1"></div>
                    <h3 style="font-family: var(--f-hand); font-size: 3vw; text-align:center;">CUISINE</h3>
                </div>
            </div>

            <div class="collage-item rot-2 abs" style="top: 60%; left: 45%;" data-title="ARCHITECTURE" data-desc="Concevoir des espaces de vie novateurs.">
                <div class="paper-cut" style="width: 20vw; background-color: var(--c-yellow);">
                    <div class="tape tape-2"></div>
                    <h3 style="font-family: var(--f-title); font-size: 2vw; text-align:center;">ARCHITECTURE</h3>
                </div>
            </div>

            <div class="collage-item rot-3 abs" style="top: 10%; left: 75%;" data-title="ÉCRITURE" data-desc="Raconter des histoires captivantes.">
                <div class="paper-cut" style="width: 15vw;">
                    <div class="tape tape-3"></div>
                    <h3 style="font-family: var(--f-hand); font-size: 3vw; text-align:center;">ÉCRITURE</h3>
                </div>
            </div>

            <!-- Overlay for click details -->
            <div id="collage-detail" class="paper-cut abs" style="top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-1deg); width: 40vw; z-index: 50; opacity: 0; pointer-events: none;">
                <button id="close-collage" style="position:absolute; top: 1vw; right: 1vw; background:none; border:none; font-size:2vw; cursor:pointer; font-family:var(--f-title);">✕</button>
                <h3 id="collage-title" style="font-family: var(--f-title); font-size: 3vw; color: var(--c-blue); margin-bottom: 1vw;"></h3>
                <p id="collage-desc" class="text-body" style="font-size: 1.5vw;"></p>
            </div>

        </div>
    </div>
    `,

    // Slide 8
    `
    <div class="content grid-center">
        <div style="width: 100%;">
            <h2 class="section-title" style="text-align: center; margin-bottom: 4vw;">CRÉATIVITÉ ≠ INNOVATION</h2>

            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0 4vw;">
                <div class="step-item" style="text-align: center; opacity:0;">
                    <div class="paper-cut rot-1" style="width: 15vw; height: 15vw; display:flex; justify-content:center; align-items:center;">
                        <span style="font-family: var(--f-hand); font-size: 3.5vw;">IDÉE</span>
                    </div>
                </div>

                <span class="step-arrow" style="font-size: 3vw; opacity:0;">→</span>

                <div class="step-item" style="text-align: center; opacity:0;">
                    <div class="paper-cut rot-3" style="width: 15vw; height: 15vw; display:flex; justify-content:center; align-items:center; background-color: var(--c-yellow);">
                        <span style="font-family: var(--f-hand); font-size: 3vw;">CRÉATIVITÉ</span>
                    </div>
                </div>

                <span class="step-arrow" style="font-size: 3vw; opacity:0;">→</span>

                <div class="step-item" style="text-align: center; opacity:0;">
                    <div class="paper-cut rot-2" style="width: 15vw; height: 15vw; display:flex; justify-content:center; align-items:center;">
                        <span style="font-family: var(--f-hand); font-size: 2.5vw;">DÉVELOPPEMENT</span>
                    </div>
                </div>

                <span class="step-arrow" style="font-size: 3vw; opacity:0;">→</span>

                <div class="step-item" style="text-align: center; opacity:0;">
                    <div class="paper-cut rot-4" style="width: 15vw; height: 15vw; display:flex; justify-content:center; align-items:center; background-color: var(--c-blue); color: white;">
                        <span style="font-family: var(--f-hand); font-size: 3vw;">INNOVATION</span>
                    </div>
                </div>
            </div>

            <div class="paper-cut abs rot-1 step-desc" style="bottom: 5vw; left: 50%; transform: translateX(-50%) rotate(1deg); width: 60vw; opacity:0;">
                <div class="tape tape-1"></div>
                <p class="text-body" style="font-size: 1.5vw; text-align: center;">
                    « La créativité consiste à trouver une <span class="highlight">idée nouvelle</span>.<br>
                    L'innovation consiste à transformer une idée en quelque chose <span class="highlight-blue">d'utile</span>. »
                </p>
                <p class="hand-note" style="position:static; text-align:center; margin-top:1vw;">Ex: Idée d'app → Concept → Dév → Application utilisée</p>
            </div>
        </div>
    </div>
    `,

    // Slide 9
    `
    <div class="content">
        <h2 class="section-title" style="font-size: 3vw; max-width: 80vw;">Des personnes qui ont changé leur domaine</h2>

        <div class="gallery-container" style="display: flex; gap: 2vw; margin-top: 5vw; overflow-x: auto; padding-bottom: 2vw;">

            <!-- Alexander -->
            <div class="gallery-item" style="flex: 0 0 22vw; cursor: pointer;">
                <div class="img-frame rot-1">
                    <div class="tape tape-1"></div>
                    <div style="height: 25vw; overflow:hidden;">
                        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Alexander_Mosaic_detail_of_Alexander_the_Great_%283x4_cropped%29.jpg/960px-Alexander_Mosaic_detail_of_Alexander_the_Great_%283x4_cropped%29.jpg" alt="Alexander" style="object-fit:cover; height:100%;">
                    </div>
                    <h3 style="font-family: var(--f-title); font-size: 1.5vw; margin-top:1vw;">ALEXANDER THE GREAT</h3>
                    <p class="hand-note" style="position:static; font-size: 2vw; color: var(--c-black);">Stratégie / Conquête</p>
                </div>
            </div>

            <!-- Leonardo -->
            <div class="gallery-item" style="flex: 0 0 22vw; cursor: pointer;">
                <div class="img-frame rot-3" style="margin-top: 3vw;">
                    <div class="tape tape-3"></div>
                    <div style="height: 25vw; overflow:hidden;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Leonardo_self.jpg" alt="Leonardo" style="object-fit:cover; height:100%;">
                    </div>
                    <h3 style="font-family: var(--f-title); font-size: 1.5vw; margin-top:1vw;">LEONARDO DA VINCI</h3>
                    <p class="hand-note" style="position:static; font-size: 2vw; color: var(--c-blue);">Art / Ingénierie</p>
                </div>
            </div>

            <!-- Marie Curie -->
            <div class="gallery-item" style="flex: 0 0 22vw; cursor: pointer;">
                <div class="img-frame rot-2">
                    <div class="tape tape-2"></div>
                    <div style="height: 25vw; overflow:hidden;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg" alt="Marie Curie" style="object-fit:cover; height:100%;">
                    </div>
                    <h3 style="font-family: var(--f-title); font-size: 1.5vw; margin-top:1vw;">MARIE CURIE</h3>
                    <p class="hand-note" style="position:static; font-size: 2vw; color: var(--c-accent);">Science / Physique</p>
                </div>
            </div>

            <!-- Steve Jobs -->
            <div class="gallery-item" style="flex: 0 0 22vw; cursor: pointer;">
                <div class="img-frame rot-4" style="margin-top: 2vw;">
                    <div class="tape tape-1"></div>
                    <div style="height: 25vw; overflow:hidden;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg" alt="Steve Jobs" style="object-fit:cover; height:100%;">
                    </div>
                    <h3 style="font-family: var(--f-title); font-size: 1.5vw; margin-top:1vw;">STEVE JOBS</h3>
                    <p class="hand-note" style="position:static; font-size: 2vw; color: var(--c-yellow);">Technologie / Design</p>
                </div>
            </div>

        </div>

        <div id="gallery-info" class="paper-cut abs" style="bottom: 5vw; left: 5vw; max-width: 40vw; opacity: 0; pointer-events: none; z-index: 10;">
            <p class="text-body" style="font-size: 1.2vw; font-weight:700;">Cliquez sur un profil pour voir comment ils ont apporté de nouvelles approches dans leur domaine.</p>
        </div>
    </div>
    `,

    // Slide 10
    `
    <div class="content">
        <h2 class="section-title">Comment développer sa créativité ?</h2>

        <div style="position: relative; width: 100%; height: 70%; margin-top: 4vw;">
            <!-- Drawn Path SVG -->
            <svg style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;" viewBox="0 0 1000 400" preserveAspectRatio="none">
                <path id="creativity-path" d="M 50,200 C 150,100 250,300 400,200 C 550,100 650,300 800,200 C 900,150 950,200 950,200" fill="none" stroke="var(--c-blue)" stroke-width="4" stroke-dasharray="10 10" />
            </svg>

            <!-- 6 Actions -->
            <div class="paper-cut abs rot-1 action-step" style="top: 10%; left: 5%; z-index: 2; padding: 1vw;">
                <p style="font-family: var(--f-title); font-weight:700; font-size: 1.2vw;">01 — LIRE</p>
            </div>

            <div class="paper-cut abs rot-3 action-step" style="top: 60%; left: 20%; z-index: 2; padding: 1vw;">
                <p style="font-family: var(--f-title); font-weight:700; font-size: 1.2vw;">02 — OBSERVER</p>
            </div>

            <div class="paper-cut abs rot-2 action-step" style="top: 15%; left: 35%; z-index: 2; padding: 1vw; background-color: var(--c-yellow);">
                <p style="font-family: var(--f-title); font-weight:700; font-size: 1.2vw;">03 — POSER DES QUESTIONS</p>
            </div>

            <div class="paper-cut abs rot-4 action-step" style="top: 70%; left: 55%; z-index: 2; padding: 1vw;">
                <p style="font-family: var(--f-title); font-weight:700; font-size: 1.2vw;">04 — EXPÉRIMENTER</p>
            </div>

            <div class="paper-cut abs rot-1 action-step" style="top: 20%; left: 70%; z-index: 2; padding: 1vw; background-color: var(--c-accent); color: white;">
                <p style="font-family: var(--f-title); font-weight:700; font-size: 1.2vw;">05 — ACCEPTER LES ERREURS</p>
            </div>

            <div class="paper-cut abs rot-3 action-step" style="top: 50%; left: 85%; z-index: 2; padding: 1vw;">
                <p style="font-family: var(--f-title); font-weight:700; font-size: 1.2vw;">06 — CHERCHER PLUSIEURS SOLUTIONS</p>
            </div>
        </div>
    </div>
    `
];
