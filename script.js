document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // SEÇÃO 1: BANCO DE DADOS DE PROFISSÕES
    // Para adicionar/editar, siga o padrão:
    // 'valor_profissao': [
    //   { value: 'valor_especializacao', text: 'Texto que o usuário vê' },
    // ]
    // =========================================================================
    const especializacoesPorProfissao = {
        'medico': [
            { value: 'alergologista', text: 'Alergologista' },
            { value: 'angiologista', text: 'Angiologista' },
            { value: 'cardiologista', text: 'Cardiologista' },
            { value: 'cirurgiao_geral', text: 'Cirurgião(ã) Geral' },
            { value: 'cirurgiao_plastico', text: 'Cirurgião(ã) Plástico' },
            { value: 'dermatologista', text: 'Dermatologista' },
            { value: 'endocrinologista', text: 'Endocrinologista' },
            { value: 'gastroenterologista', text: 'Gastroenterologista' },
            { value: 'geriatra', text: 'Geriatra' },
            { value: 'ginecologista', text: 'Ginecologista' },
            { value: 'hematologista', text: 'Hematologista' },
            { value: 'infectologista', text: 'Infectologista' },
            { value: 'nefrologista', text: 'Nefrologista' },
            { value: 'neurocirurgiao', text: 'Neurocirurgião(ã)' },
            { value: 'neurologista', text: 'Neurologista' },
            { value: 'nutrologo', text: 'Nutrólogo(a)' },
            { value: 'oftalmologista', text: 'Oftalmologista' },
            { value: 'oncologista', text: 'Oncologista' },
            { value: 'ortopedista', text: 'Ortopedista' },
            { value: 'otorrinolaringologista', text: 'Otorrinolaringologista' },
            { value: 'pediatra', text: 'Pediatra' },
            { value: 'pneumologista', text: 'Pneumologista' },
            { value: 'proctologista', text: 'Proctologista' },
            { value: 'psiquiatra', text: 'Psiquiatra' },
            { value: 'reumatologista', text: 'Reumatologista' },
            { value: 'urologista', text: 'Urologista' },
        ],
        'advogado': [
            { value: 'advogado_ambiental', text: 'Ambiental' },
            { value: 'advogado_civel', text: 'Cível' },
            { value: 'advogado_consumidor', text: 'Consumidor' },
            { value: 'advogado_contratos', text: 'Contratos' },
            { value: 'advogado_criminal', text: 'Criminal' },
            { value: 'advogado_digital', text: 'Direito Digital' },
            { value: 'advogado_eleitoral', text: 'Eleitoral' },
            { value: 'advogado_empresarial', text: 'Empresarial' },
            { value: 'advogado_familia', text: 'Família' },
            { value: 'advogado_imobiliario', text: 'Imobiliário' },
            { value: 'advogado_previdenciario', text: 'Previdenciário' },
            { value: 'advogado_trabalhista', text: 'Trabalhista' },
            { value: 'advogado_tributario', text: 'Tributário' },
        ],
        'dentista': [
            { value: 'dentistica', text: 'Dentística (Estética)' },
            { value: 'endodontista', text: 'Endodontia (Canal)' },
            { value: 'harmonizacao_facial', text: 'Harmonização Orofacial' },
            { value: 'implantodontista', text: 'Implantodontia' },
            { value: 'odontogeriatria', text: 'Odontogeriatria' },
            { value: 'odontologia_legal', text: 'Odontologia Legal' },
            { value: 'odontopediatra', text: 'Odontopediatria' },
            { value: 'ortodontista', text: 'Ortodontia (Aparelho)' },
            { value: 'pacientes_especiais', text: 'Pacientes Especiais' },
            { value: 'periodontista', text: 'Periodontia (Gengiva)' },
            { value: 'protese_dentaria', text: 'Prótese Dentária' },
        ],
        'engenheiro': [
            { value: 'engenheiro_agronomo', text: 'Agrônomo' },
            { value: 'engenheiro_ambiental', text: 'Ambiental' },
            { value: 'engenheiro_civil', text: 'Civil' },
            { value: 'engenheiro_computacao', text: 'Computação' },
            { value: 'engenheiro_eletricista', text: 'Eletricista' },
            { value: 'engenheiro_mecanico', text: 'Mecânico' },
            { value: 'engenheiro_producao', text: 'Produção' },
            { value: 'engenheiro_quimico', text: 'Químico' },
            { value: 'engenheiro_software', text: 'Software' },
        ],
        'psicologo': [
            { value: 'psicologo_clinico', text: 'Clínico' },
            { value: 'psicologo_comportamental', text: 'Comportamental' },
            { value: 'psicologo_infantil', text: 'Infantil' },
            { value: 'psicologo_organizacional', text: 'Organizacional' },
            { value: 'neuropsicologo', text: 'Neuropsicologia' },
            { value: 'psicanalista', text: 'Psicanálise' },
            { value: 'terapeuta_casal', text: 'Terapia de Casal e Família' },
        ],
        'fisioterapeuta': [
            { value: 'fisio_acupuntura', text: 'Acupuntura' },
            { value: 'fisio_cardiovascular', text: 'Cardiovascular' },
            { value: 'fisio_dermatofuncional', text: 'Dermatofuncional' },
            { value: 'fisio_esportiva', text: 'Esportiva' },
            { value: 'fisio_neurofuncional', text: 'Neurofuncional' },
            { value: 'fisio_ortopedica', text: 'Ortopédica' },
            { value: 'fisio_respiratoria', text: 'Respiratória' },
            { value: 'quiropraxista', text: 'Quiropraxia' },
        ],
        'arquiteto': [
            { value: 'arquiteto_comercial', text: 'Comercial' },
            { value: 'arquiteto_interiores', text: 'Interiores' },
            { value: 'arquiteto_paisagista', text: 'Paisagismo' },
            { value: 'arquiteto_residencial', text: 'Residencial' },
            { value: 'arquiteto_urbanista', text: 'Urbanismo' },
        ]
        // Para adicionar mais, siga o padrão:
        // 'valor_da_profissao': [ { value: 'valor_da_esp', text: 'Texto da Esp' } ]
    };

    // =========================================================================
    // SEÇÃO 2: REFERÊNCIAS AOS ELEMENTOS DO DOM
    // =========================================================================
    const searchForm = document.getElementById('search-form');
    const statusMessage = document.getElementById('status-message');
    
    // Painel de Busca
    const profissaoSelect = document.getElementById('profissao-select');
    const especializacaoContainer = document.getElementById('especializacao-container');
    const especializacaoSelect = document.getElementById('especializacao-select');
    const estadoSelect = document.getElementById('estado-select');
    const cidadeContainer = document.getElementById('cidade-container');
    const cidadeSelect = document.getElementById('cidade-select');
    const contactCheckboxes = document.querySelectorAll('input[name="contato"]'); 
    const contatoStatusMessage = document.getElementById('contato-status-message'); 
    
    // Painel da Direita
    const queryPreviewDisplay = document.getElementById('query-preview-display');
    const resultsDisplay = document.getElementById('results-display');
    const clearResultsBtn = document.getElementById('clear-results-btn');

    // ===================================================
    // Chama a função para iniciar o fundo animado
    // ===================================================
    initFluidBackground();


    // =========================================================================
    // SEÇÃO 3: LÓGICA DOS SELETORES EM CASCATA (PROFISSÃO -> ESPECIALIZAÇÃO)
    // =========================================================================
    profissaoSelect.addEventListener('change', () => {
        const profissaoValor = profissaoSelect.value;
        
        especializacaoSelect.innerHTML = '<option value="">Selecione a especialização...</option>';
        especializacaoContainer.style.display = 'none';

        if (profissaoValor && especializacoesPorProfissao[profissaoValor]) {
            const especializacoes = especializacoesPorProfissao[profissaoValor];
            especializacoes.forEach(esp => {
                const option = document.createElement('option');
                option.value = esp.value; 
                option.text = esp.text;   
                especializacaoSelect.appendChild(option);
            });
            especializacaoContainer.style.display = 'block';
        }
        
        updateQueryPreview(); 
    });


    // =========================================================================
    // SEÇÃO 4: FUNÇÃO PARA ATUALIZAR O "TERMO DE PESQUISA"
    // =========================================================================
    function updateQueryPreview() {
        const profTexto = profissaoSelect.options[profissaoSelect.selectedIndex].text;
        const espTexto = especializacaoSelect.options[especializacaoSelect.selectedIndex].text;
        let termoPrincipal = ""; 
        
        if (especializacaoSelect.value) { 
            termoPrincipal = `${profTexto.replace('(a)', '').replace('(Odontologia)', '').trim()} ${espTexto}`;
        } else if (profissaoSelect.value) { 
            termoPrincipal = profTexto;
        }

        const cidTexto = cidadeSelect.options[cidadeSelect.selectedIndex].text;
        let local = ""; 
        
        if (cidadeSelect.value) {
            local = `${cidTexto} ${estadoSelect.value}`; 
        } else if (estadoSelect.value) {
            local = estadoSelect.options[estadoSelect.selectedIndex].text; 
        }

        let queryFinal = "";
        if (termoPrincipal) {
            queryFinal += `"${termoPrincipal}"`; 
        }
        if (local) {
            queryFinal += ` "${local}"`; 
        }
        
        if (queryFinal) {
            queryPreviewDisplay.textContent = queryFinal.trim();
        } else {
            queryPreviewDisplay.textContent = "Selecione os filtros para ver a busca...";
        }
    }

    // =========================================================================
    // SEÇÃO 5: ADICIONA "OUVINTES" (LISTENERS)
    // =========================================================================
    profissaoSelect.addEventListener('change', updateQueryPreview); 
    especializacaoSelect.addEventListener('change', updateQueryPreview);
    estadoSelect.addEventListener('change', updateQueryPreview);
    cidadeSelect.addEventListener('change', updateQueryPreview);
    contactCheckboxes.forEach(cb => cb.addEventListener('change', updateQueryPreview)); 
    
    updateQueryPreview(); // Inicializa o preview

    // =========================================================================
    // SEÇÃO 6: LÓGICA PARA LIMITAR CHECKBOXES A 2
    // =========================================================================
    const maxContactLimit = 2;
    contactCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', (event) => {
            const checkedCount = document.querySelectorAll('input[name="contato"]:checked').length;
            
            if (checkedCount > maxContactLimit && checkbox.checked) {
                event.preventDefault(); 
                contatoStatusMessage.textContent = 'Você só pode selecionar até 2 contatos.';
            } else {
                contatoStatusMessage.textContent = ''; 
            }
        });
    });
    

    // =========================================================================
    // SEÇÃO 7: LÓGICA PARA BUSCAR CIDADES (API DO IBGE)
    // =========================================================================
    estadoSelect.addEventListener('change', () => {
        const ufSelecionado = estadoSelect.value;
        
        cidadeSelect.innerHTML = '<option value="">Selecione a cidade...</option>';
        cidadeContainer.style.display = 'none';
        
        if (!ufSelecionado) {
            updateQueryPreview(); 
            return;
        }

        cidadeSelect.innerHTML = '<option value="">Carregando cidades...</option>';
        cidadeContainer.style.display = 'block';

        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelecionado}/municipios`;

        fetch(url)
            .then(response => response.json()) 
            .then(cidades => {
                cidades.sort((a, b) => a.nome.localeCompare(b.nome));
                cidadeSelect.innerHTML = '<option value="">Selecione a cidade...</option>';
                
                cidades.forEach(cidade => {
                    const option = document.createElement('option');
                    option.value = cidade.nome; 
                    option.text = cidade.nome;
                    cidadeSelect.appendChild(option);
                });
                updateQueryPreview(); 
            })
            .catch(error => {
                console.error('Erro ao buscar cidades:', error);
                statusMessage.textContent = 'Erro ao carregar cidades.';
                statusMessage.className = 'error';
                cidadeContainer.style.display = 'none';
            });
    });

    // =========================================================================
    // SEÇÃO 8: LÓGICA DE ENVIO DO FORMULÁRIO (SUBMIT)
    // ATUALIZADO com a URL de PRODUÇÃO correta
    // =========================================================================
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // --- 1. Coleta de Dados Brutos ---
        const profissaoValor = profissaoSelect.value;
        const profissaoTexto = profissaoSelect.options[profissaoSelect.selectedIndex].text;
        
        const especializacaoValor = especializacaoSelect.value;
        const especializacaoTexto = especializacaoSelect.options[especializacaoSelect.selectedIndex].text;
        
        const estado = estadoSelect.value;
        const cidade = cidadeSelect.value;

        const contatosSelecionados = []; 
        document.querySelectorAll('input[name="contato"]:checked').forEach((checkbox) => {
            contatosSelecionados.push(checkbox.value); 
        });

        // --- 2. Validação ---
        if (!profissaoValor || (especializacaoContainer.style.display === 'block' && !especializacaoValor) || !estado || !cidade) {
            statusMessage.textContent = 'Preencha todos os campos.';
            statusMessage.className = 'error';
            return;
        }
        if (contatosSelecionados.length === 0) {
            statusMessage.textContent = 'Selecione pelo menos um tipo de contato.';
            statusMessage.className = 'error';
            return;
        }

        // --- 3. Limpa mensagens ---
        statusMessage.textContent = 'Buscando... Por favor, aguarde.';
        statusMessage.className = ''; 
        contatoStatusMessage.textContent = '';

        // --- 4. Prepara dados para o Backend (n8n) ---
        const dadosDaBusca = {
            profissao: profissaoValor,       
            profTexto: profissaoTexto,       
            especializacao: especializacaoValor, 
            espTexto: especializacaoTexto,   
            cidade: cidade,                  
            estado: estado,                  
            contatos: contatosSelecionados   
        };

        console.log('Enviando para o backend (n8n):', dadosDaBusca);
        
        // ===================================================================
        // INÍCIO DA BUSCA REAL (ENVIAR PARA O n8n)
        // ===================================================================

        // !!! URL DE PRODUÇÃO CORRETA !!!
        const urlDoWebhook = https://adminqe23r.app.n8n.cloud/webhook/1c563364-e6b1-474c-81bd-0fe6ceb6327d; 

        fetch(urlDoWebhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosDaBusca), // Envia o JSON com todos os dados brutos
        })
        .then(response => {
            if (!response.ok) {
                // Tenta ler o corpo da resposta mesmo se não for OK, pode ter uma msg de erro do n8n
                return response.text().then(text => { 
                    throw new Error(`Erro na resposta do servidor n8n: ${response.status} ${response.statusText} - ${text}`);
                });
            }
            // Verifica se a resposta é JSON antes de tentar parsear
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                return response.json(); 
            } else {
                return response.text().then(text => {
                    console.warn("Resposta do n8n não é JSON:", text);
                    // Retorna um objeto padrão para evitar quebrar o .then seguinte
                    return { resultados: [] }; 
                });
            }
        })
        .then(data => {
            console.log('Resposta recebida do n8n:', data);
            
            statusMessage.textContent = 'Busca concluída!';
            statusMessage.className = 'success';
            
            // Verifica se 'data' e 'data.resultados' existem antes de chamar displayResults
            if (data && data.resultados) {
                 displayResults(data.resultados, dadosDaBusca); 
            } else {
                 console.warn("Formato inesperado da resposta do n8n. Esperava '{ resultados: [...] }'.");
                 // Mostra que a busca foi concluída, mas sem resultados (ou com erro no formato)
                 displayResults([], dadosDaBusca); // Chama com array vazio
            }
        })
        .catch(error => {
            console.error('Erro ao enviar para o n8n ou processar resposta:', error);
            statusMessage.textContent = `Erro na busca: ${error.message}. Verifique o console.`;
            statusMessage.className = 'error';
             // Limpa resultados anteriores ou mostra erro
            displayResults({ error: `Falha na comunicação: ${error.message}` }, dadosDaBusca);
        });
        // ===================================================================
        // FIM DA BUSCA REAL
        // ===================================================================
    });


    // =========================================================================
    // SEÇÃO 9: FUNÇÃO PARA MOSTRAR OS RESULTADOS NO PAINEL
    // =========================================================================
    function displayResults(data, searchParams = {}) {
        const placeholder = resultsDisplay.querySelector('.placeholder-text');
        if (placeholder) {
            placeholder.remove();
        }
        
        const searchHeader = document.createElement('div');
        searchHeader.className = 'search-result-header';
        
        let headerTitle = `${searchParams.profTexto} - ${searchParams.espTexto}`;
        headerTitle += ` em ${searchParams.cidade}, ${searchParams.estado}`;

        // Trata caso 'contatos' não exista em searchParams
        const contatosNomes = (searchParams.contatos || []).map(val => {
             // Adiciona verificação se o elemento existe
             const inputElement = document.querySelector(`.checkbox-label input[value="${val}"]`);
             if (inputElement && inputElement.parentElement) {
                 return inputElement.parentElement.innerText.trim();
             }
             return val; // Retorna o valor bruto se não encontrar o label
        }).join(', ');

        searchHeader.innerHTML = `
            <h3>Busca: ${headerTitle}</h3>
            <p>Contatos: ${contatosNomes || 'N/A'}</p> 
            <hr>
        `;
        resultsDisplay.prepend(searchHeader);

        // Verifica se 'data' é um array antes de iterar
        if (Array.isArray(data) && data.length > 0) {
            data.forEach(item => {
                const p = document.createElement('p');
                // Adiciona verificação se 'item' tem as propriedades esperadas
                p.textContent = `[${item.type || 'Tipo desconhecido'}] ${item.value || 'Valor não encontrado'}`;
                searchHeader.appendChild(p);
            });
            clearResultsBtn.style.display = 'block';
        // Mostra mensagem de erro se 'data' tiver a propriedade 'error'
        } else if (data && data.error) {
             const p = document.createElement('p');
             p.className = 'error'; // Aplica estilo de erro
             p.textContent = `Erro: ${data.error}`;
             searchHeader.appendChild(p);
             clearResultsBtn.style.display = 'block'; // Mostra botão mesmo com erro para limpar
        }
         else {
            const p = document.createElement('p');
            p.className = 'placeholder-text';
            p.textContent = 'Nenhum resultado encontrado para esta busca.';
            searchHeader.appendChild(p);
            // Mantém o botão limpar visível se já houver outros resultados
             if (resultsDisplay.querySelectorAll('.search-result-header').length > 1) {
                 clearResultsBtn.style.display = 'block';
             }
        }
        resultsDisplay.scrollTop = 0; 
    }

    // =========================================================================
    // SEÇÃO 10: LÓGICA DO BOTÃO "LIMPAR RESULTADOS"
    // =========================================================================
    clearResultsBtn.addEventListener('click', () => {
        resultsDisplay.innerHTML = '<p class="placeholder-text">Nenhuma busca realizada ainda. <br>Os resultados aparecerão aqui.</p>';
        clearResultsBtn.style.display = 'none'; 
    });

    
    // =========================================================================
    // SEÇÃO 11: LÓGICA DO FUNDO ANIMADO (THREE.JS)
    // =========================================================================
    function initFluidBackground() {
        if (typeof THREE === 'undefined') {
            console.error("Three.js não carregou. O fundo animado não funcionará.");
            return;
        }

        let scene, camera, renderer, plane, clock;
        const canvas = document.getElementById('animated-bg');

        try { // Adiciona try...catch para gracefully handle WebGL errors
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 2; 

            renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true }); // Adiciona antialias
            renderer.setSize(window.innerWidth, window.innerHeight);
            // Otimização: Define a proporção de pixels para corresponder ao dispositivo
            renderer.setPixelRatio(window.devicePixelRatio); 

            const geometry = new THREE.PlaneGeometry(6, 6, 60, 60); // Aumenta tamanho e segmentos

            const material = new THREE.MeshStandardMaterial({
                color: 0x080808, // Um pouco mais escuro
                metalness: 0.95, // Mais metálico
                roughness: 0.4,  // Um pouco menos áspero
                flatShading: false, // Remove flat shading para ser mais suave
                // Adiciona wireframe para debug se necessário
                // wireframe: true 
            });

            plane = new THREE.Mesh(geometry, material);
            scene.add(plane);

            // Luzes ajustadas
            const pointLight1 = new THREE.PointLight(0xffffff, 0.3); // Aumenta intensidade
            pointLight1.position.set(5, 5, 5);
            scene.add(pointLight1);
            
            const pointLight2 = new THREE.PointLight(0xaaaaaa, 0.2); // Aumenta intensidade
            pointLight2.position.set(-5, -5, 3);
            scene.add(pointLight2);
            
            const ambientLight = new THREE.AmbientLight(0x333333); // Aumenta luz ambiente
            scene.add(ambientLight);

            clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);

                const t = clock.getElapsedTime() * 0.15; // Diminui velocidade

                const vertices = plane.geometry.attributes.position.array;
                const originalVertices = plane.geometry.attributes.position.clone().array; // Pega posições originais

                for (let i = 0; i < vertices.length; i += 3) {
                    const x = originalVertices[i]; // Usa posição original para cálculo
                    const y = originalVertices[i+1];
                    
                    // Ondas mais complexas e lentas
                    const wave1 = Math.sin(x * 0.4 + t * 0.8) * 0.15;
                    const wave2 = Math.cos(y * 0.6 + t * 0.6) * 0.1;
                    const wave3 = Math.sin((x + y) * 0.2 + t) * 0.1;
                    const wave4 = Math.cos(x * y * 0.1 + t * 0.4) * 0.05; // Onda menor e mais rápida

                    vertices[i+2] = wave1 + wave2 + wave3 + wave4; // Combina as ondas
                }
                
                plane.geometry.attributes.position.needsUpdate = true;
                plane.geometry.computeVertexNormals(); // Recalcula normais para iluminação correta

                renderer.render(scene, camera);
            }

            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                // Atualiza pixel ratio em resize também
                renderer.setPixelRatio(window.devicePixelRatio); 
            }
            window.addEventListener('resize', onWindowResize, false);

            animate();

        } catch (error) {
             console.error("Erro ao inicializar o fundo WebGL:", error);
             // Opcional: Esconder o canvas se der erro
             if(canvas) canvas.style.display = 'none';
        }
    }

}); // Fim do DOMContentLoaded
