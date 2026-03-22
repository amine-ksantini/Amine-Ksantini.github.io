const Vue = {
    // Génère la page d'accueil principale
    renderAccueil: function(donnees) {
        let html = `
            <header class="mb-16 pt-8 text-center md:text-left">
                <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-4">${donnees.profil.nom}.</h1>
                <p class="text-xl md:text-2xl text-gray-400 font-light mb-8">${donnees.profil.titre}</p>
                
                <div class="glass-card p-8 max-w-4xl border-l-4 border-blue-500">
                    <p class="text-lg text-gray-200 leading-relaxed">${donnees.profil.bio}</p>
                    
                    <div class="mt-8 flex flex-col sm:flex-row gap-4 items-center">
                        <a href="${donnees.profil.cvPath}" target="_blank" download class="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            Télécharger mon CV
                        </a>
                        <div class="flex gap-3 ml-0 sm:ml-4">
                            <span class="bg-white/10 border border-white/5 px-4 py-3 rounded-full text-sm font-semibold text-gray-300 flex items-center gap-2">
                                📍 Île-de-France
                            </span>
                            <span class="bg-white/10 border border-white/5 px-4 py-3 rounded-full text-sm font-semibold text-gray-300 flex items-center gap-2">
                                🚗 ${donnees.profil.permis}
                            </span>
                        </div>
                    </div>
                </div>
            </header>
            
            <h2 class="text-3xl font-semibold mb-6">Au-delà du code</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold mb-4 text-blue-400">Qualités</h3>
                    <ul class="space-y-2 text-gray-300">
                        ${donnees.profil.personnel.qualites.map(q => `<li class="flex items-center gap-2">✓ ${q}</li>`).join('')}
                    </ul>
                </div>
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold mb-4 text-emerald-400">Sports & Discipline</h3>
                    <ul class="space-y-2 text-gray-300">
                        ${donnees.profil.personnel.sports.map(s => `<li class="flex items-center gap-2">⚡ ${s}</li>`).join('')}
                    </ul>
                </div>
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold mb-4 text-purple-400">Ouverture au monde</h3>
                    <p class="text-sm text-gray-400 mb-2">Exploration de différentes cultures :</p>
                    <div class="flex flex-wrap gap-2">
                        ${donnees.profil.personnel.voyages.map(v => `<span class="text-sm bg-white/5 border border-white/10 px-2 py-1 rounded">${v}</span>`).join('')}
                    </div>
                </div>
            </div>
            
            <h2 class="text-3xl font-semibold mb-6 mt-16">Expertise Technique Détaillée</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                ${donnees.competences.map(comp => `
                    <div class="glass-card p-8 hover:border-blue-500/50 transition duration-500">
                        <h3 class="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">${comp.categorie}</h3>
                        <ul class="space-y-4">
                            ${comp.items.map(item => `
                                <li class="flex items-start gap-3 text-gray-300">
                                    <span class="text-blue-500 mt-1 flex-shrink-0">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </span>
                                    <span class="leading-relaxed text-sm md:text-base">${item}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>

            <h2 class="text-3xl font-semibold mb-6 mt-16">Parcours Académique</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                ${donnees.formations.map(form => `
                    <div class="glass-card p-8 border-t-4 border-purple-500 hover:-translate-y-2 transition-transform duration-300">
                        <div class="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                            <h3 class="text-2xl font-bold text-white">${form.diplome}</h3>
                            <span class="text-xs font-bold bg-white/10 text-purple-400 px-3 py-1 rounded-full whitespace-nowrap border border-purple-500/30">
                                🎓 ${form.date}
                            </span>
                        </div>
                        <h4 class="text-lg text-gray-300 font-medium mb-2">${form.etablissement}</h4>
                        <p class="text-gray-400 text-sm leading-relaxed mb-6">${form.specialite}</p>
                        
                        <div class="inline-block">
                            <span class="text-xs font-medium text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                                🏆 ${form.mention}
                            </span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <h2 class="text-3xl font-semibold mb-6 mt-16">Mes Réalisations</h2>
            ${Object.keys(donnees.projetsParSemestre).map(semestre => `
                <h3 class="text-2xl font-bold mb-6 text-gray-400 border-l-4 border-gray-600 pl-4">${semestre}</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    ${donnees.projetsParSemestre[semestre].map(projet => `
                        <div class="glass-card group relative p-6 cursor-default overflow-hidden transition-all duration-500 ease-out h-[220px] hover:h-[auto] min-h-[220px]">
                            
                            <div class="flex items-start gap-4 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 h-[180px] group-hover:h-0">
                                <div class="flex-grow">
                                    <div class="text-sm font-semibold text-emerald-400 mb-1 uppercase tracking-wider">Projet</div>
                                    <h4 class="text-2xl font-bold mb-2 text-white">${projet.titre}</h4>
                                    <p class="text-gray-300 text-sm leading-relaxed">${projet.resume}</p>
                                </div>
                            </div>
                            
                            <div class="detailed-content transition-all duration-500 opacity-0 group-hover:opacity-100 h-0 group-hover:h-[auto] scale-95 group-hover:scale-100 group-hover:mt-2">
                                <div class="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                                    <h4 class="text-3xl font-bold text-white">${projet.titre}</h4>
                                </div>
                                
                                <div class="space-y-4 text-gray-300 text-sm leading-relaxed">
                                    <p><strong class="text-white">Contexte :</strong> ${projet.descriptionDetailed.contexte}</p>
                                    <p><strong class="text-white">Objectifs :</strong> ${projet.descriptionDetailed.objectifs}</p>
                                    <p><strong class="text-white">Fonctionnalités :</strong> ${projet.descriptionDetailed.fonctionnalites}</p>
                                    <p><strong class="text-white">Implémentation :</strong> ${projet.descriptionDetailed.implementation}</p>
                                </div>
                                
                                <div class="mt-6 pt-4 border-t border-white/10">
                                    <h5 class="text-sm font-semibold text-gray-400 mb-2">Technologies clés :</h5>
                                    <div class="flex flex-wrap gap-2">
                                        ${projet.descriptionDetailed.technos.map(tech => `<span class="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium">${tech}</span>`).join('')}
                                    </div>
                                </div>
                                
                                <button onclick="Controleur.naviguer('projet', '${projet.id}')" class="mt-6 w-full text-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition cursor-pointer">
                                    Voir la page détaillée →
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `).join('')}

            <h2 class="text-3xl font-semibold mb-6 mt-16">Expériences Professionnelles</h2>
            <div class="glass-card p-8 md:p-12 mb-16">
                <div class="space-y-12">
        `;

        donnees.experiences.forEach(exp => {
            html += `
                    <div class="relative pl-8 md:pl-0 group">
                        <div class="hidden md:block absolute w-0.5 h-full bg-gray-700 left-[50%] top-0 -translate-x-1/2 group-last:h-0"></div>
                        <div class="md:hidden absolute w-0.5 h-full bg-gray-700 left-[11px] top-2 group-last:h-0"></div>
                        <div class="absolute w-4 h-4 bg-blue-500 rounded-full left-[4px] md:left-[50%] top-1.5 md:top-0 -translate-x-1/2 ring-4 ring-black group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10"></div>
                        
                        <div class="md:w-1/2 md:pr-12 md:text-right md:ml-0 md:group-even:ml-auto md:group-even:pl-12 md:group-even:text-left md:group-even:pr-0 relative">
                            <h3 class="text-2xl font-bold text-white">${exp.poste}</h3>
                            <h4 class="text-lg text-blue-400 mb-2">${exp.entreprise}</h4>
                            
                            <div class="flex flex-wrap gap-3 mb-4 md:justify-end md:group-even:justify-start">
                                <span class="text-xs font-semibold text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 flex items-center gap-1">🗓️ ${exp.date}</span>
                                <span class="text-xs font-semibold text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 flex items-center gap-1">📍 ${exp.lieu}</span>
                                <span class="text-xs font-semibold text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 flex items-center gap-1">💼 ${exp.type}</span>
                            </div>
                            
                            <p class="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">${exp.description}</p>
                            
                            <div class="flex flex-wrap gap-2 md:justify-end md:group-even:justify-start">
                                ${exp.competences.map(c => `<span class="text-xs font-medium text-white bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">${c}</span>`).join('')}
                            </div>
                        </div>
                    </div>
            `;
        });

        html += `
                </div>
            </div>

            <div class="glass-card p-10 md:p-16 text-center flex flex-col items-center justify-center gap-6 mt-16 mb-8 border-t-4 border-blue-500">
                <h2 class="text-4xl font-bold text-white tracking-tight">Prêt à collaborer ?</h2>
                <p class="text-gray-400 text-lg max-w-2xl leading-relaxed">
                    Je suis disponible pour échanger sur mon profil, mes projets, ou pour discuter de mon futur stage de 12 semaines. N'hésitez pas à me contacter !
                </p>
                
                <div class="flex flex-wrap justify-center gap-6 mt-6">
                    <a href="mailto:${donnees.profil.email}" class="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 flex items-center gap-3">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        Envoyer un Email
                    </a>
                    
                    <a href="${donnees.profil.linkedin}" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-[#0A66C2] text-white font-bold rounded-full hover:bg-[#004182] transition-all duration-300 shadow-[0_0_20px_rgba(10,102,194,0.4)] hover:scale-105 flex items-center gap-3">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        LinkedIn
                    </a>

                    <a href="${donnees.profil.github}" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-gray-800 text-white font-bold rounded-full hover:bg-gray-700 transition-all duration-300 border border-gray-600 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105 flex items-center gap-3">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        GitHub
                    </a>
                </div>
                
                <div class="mt-8 inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors cursor-default">
                    <span class="relative flex h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span class="text-gray-200 font-mono text-lg tracking-wider">${donnees.profil.telephone}</span>
                </div>
            </div>
        `;
        return html;
    },

    // Génère la page détaillée d'un projet SANS IMAGE
    renderProjetDetail: function(projet) {
        let tagsHtml = projet.descriptionDetailed.technos.map(tech => `<span class="bg-white/10 px-3 py-1 rounded-full text-sm font-medium text-gray-200">${tech}</span>`).join('');
        
        return `
            <div class="glass-card p-8 md:p-12 mt-8 max-w-4xl mx-auto shadow-2xl fade-in">
                
                <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">${projet.titre}</h1>
                <div class="flex flex-wrap gap-2 mb-12 pb-8 border-b border-white/10">
                    ${tagsHtml}
                </div>
                
                <div class="space-y-10">
                    <div>
                        <h3 class="text-2xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-blue-400"></span> Contexte
                        </h3>
                        <p class="text-gray-300 text-lg leading-relaxed">${projet.descriptionDetailed.contexte}</p>
                    </div>
                    
                    <div>
                        <h3 class="text-2xl font-semibold mb-4 text-emerald-400 flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-emerald-400"></span> Objectifs
                        </h3>
                        <p class="text-gray-300 text-lg leading-relaxed">${projet.descriptionDetailed.objectifs}</p>
                    </div>
                    
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/5">
                        <h3 class="text-2xl font-semibold mb-4 text-purple-400">Fonctionnalités & Implémentation technique</h3>
                        <p class="text-gray-300 text-lg leading-relaxed mb-4">${projet.descriptionDetailed.fonctionnalites}</p>
                        <p class="text-gray-300 text-lg leading-relaxed">${projet.descriptionDetailed.implementation}</p>
                    </div>
                </div>
                
                <div class="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-gray-500 font-medium">Projet académique - Université Paris-Saclay</p>
                    <button onclick="Controleur.naviguer('accueil')" class="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105">
                        ← Retour au portfolio
                    </button>
                </div>
            </div>
        `;
    }
};