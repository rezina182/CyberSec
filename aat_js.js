// Informações sobre os cargos
const cargos =[
    {
        id: 1,
        cargo_img: "imagens/analista.png",
        nomeCargo: "Analista",
        resumo: "O Analista é encarregado de ajudar no diagnóstico de problemas.",
        requisitos: "Para cargos de analista na área de segurança da informação são requisitados formação bacharela em uma área relacionada a Tecnologia da Informação, experiencia de 5 a 9 anos na área de TI, noções básicas de TCP/IP, modelo OSI, roteadores e switchs.",
        atrib1: ["Identificação de ameaças, vulnerabilidades e riscos;",
        "Monitorar indicadores e alertas de segurança;",
        "Analisar tendencias de eventos de segurança com uso de ferramentas especificas."]
    },
    {
        id: 2,
        cargo_img: "imagens/especialista.png",
        nomeCargo: "Especialista",
        resumo: "Como principal função o especialista deverá ajudar no diagnóstico de problemas.",
        requisitos: "Para cargos de especialista na área de segurança da informação são requisitados ao menos 1 ano de experiência atuando na área de segurança da informação e para posições sênior ao menos 5 anos.",
        atrib1: ["Projetar, testar, configurar e monitorar controles de seguranças para sistemas e redes;",
        "Defender sistemas contra invasões, modificações e/ou destruições de dados;",
        "Realizar testes de vulnerabilidade, análise de risco e avaliações de segurança."]
    },
    {
        id: 3,
        cargo_img: "imagens/auditor.png",
        nomeCargo: "Auditor",
        resumo: "Os Auditores da área da segurança da informação devem garantir que a organização esteja protegendo o que é necessário.",
        requisitos: "Auditores da área de segurança da informação devem possuir formações relacionas a área de TI, ao menos 5 a 7 anos de experiência com auditorias, além de bom conhecimento de leis que regulam a segurança de dados e experiencias com implementação de estruturas ISO 27001/27002, ITIL ou COBIT.",
        atrib1: ["Planejar, executar e liderar auditorias de segurança em uma empresa;",
        "Elaborar recomendações rigorosas de “melhores práticas” para melhorar a segurança em todos os níveis;",
        "Trabalhar com a gerência para melhorar a conformidade de segurança, gerenciar riscos e melhorar a eficácia da segurança."]
    },
    {
        id: 4,
        cargo_img: "imagens/engenheiro.png",
        nomeCargo: "Engenheiro",
        resumo: "Engenheiros da área de segurança da informação são os responsáveis por projetar sistemas e resolver problemas complexos da área.",
        requisitos: "Para engenheiros na área de segurança da informação são requisitados formações relacionas a área de TI, ao menos 5 anos de experiência com TI e com pelo menos 3 relacionados a segurança, atuação ativa com tecnologias e processos de segurança, desde configurações de firewall a investigação forense, além de conhecimentos de SO's como Linux, Windows.",
        atrib1: ["Desenvolver soluções e ferramentas para área de segurança;",
        "Investigar incidentes de intrusão, conduzir investigações forenses e liderar respostas a incidentes;",
        "Elaborar scripts para lidar e rastrear incidentes além de automatizar tarefas repetitivas."]
    },
    {
        id: 5,
        cargo_img: "imagens/consultor.png",
        nomeCargo: "Consultor",
        resumo: "Consultores da área de segurança da informação são os responsáveis por orientar clientes em questões técnicas relacionadas a área.",
        requisitos: "Além de habilidades de comunicação e uma formação voltada a área de TI um bom consultor deve possuir experiência minima de 2 a 4 anos com segurança da informação, e em empresas lideres no ramo, vivência com supervisão de equipes de nível júnior e experiencias com ISO 27001/27002, ITIL e COBIT e implementação de frameworks como PCI, HIPAA, NIST, GLBA ou SOX.",
        atrib1: ["Determinar o meio mais eficaz de proteger equipamentos, redes, softwares, dados e informações contra possíveis ataques;",
        "Avaliar com base em relatos de empregados e gerentes de departamento o estado da rede e mapear possíveis vulnerabilidades;",
        "Realiza testes de vulnerabilidade, análises de risco e avaliações de segurança seguindo critérios de análise padrão do setor."]
    },
    {
        id: 6,
        cargo_img: "imagens/administrador.png",
        nomeCargo: "Administrador",
        resumo: "Administradores voltados a área da segurança são os responsáveis por oferecer suporte a sistemas de segurança e garantir que apenas pessoas autorizadas possam acessá-los.",
        requisitos: "Para cargos voltados a administração de segurança da informação, são requisitados a formação em áreas relacionadas a TI, de 1 a 2 anos de experiência com TI, sendo um ano voltado a, atividades administrativas para segurança da informação e experiencias técnicas com segurança de redes atuando com identificação e controle de acesso, firewalls, VPNs, etc..",
        atrib1: ["Administrar os direitos de acesso de usuários ao sistema;",
        "Configurar e suportar sistemas de segurança, como firewalls, antivírus, gerenciadores de patches;",
        "Monitorar o tráfego de rede para atividades incomuns."]
    },
    {
        id: 7,
        cargo_img: "imagens/arquiteto.png",
        nomeCargo: "Arquiteto",
        resumo: "Arquitetos de segurança da informação são aqueles incumbidos de projetar e arquitetar soluções de segurança complexas e garantir que sejam implementadas corretamente.",
        requisitos: "Profissionais que atuam como arquitetos da área normalmente possuem ao menos 7 anos de experiência com segurança da informação ou gerenciamento de risco de TI, no mínimo 5 anos de experiências exercendo atividades relacionadas a elaboração de arquiteturas, além de grande conhecimento em clouding, princípios de arquitetura e frameworks da área.",
        atrib1: ["Planejar, pesquisar e elaborar arquiteturas robustas de segurança para qualquer projeto voltado a área de TI;",
        "Testar, revisar e aprovar instalações de firewall, VPNs, roteadores, IDS de varredura e servidores;",
        "Fornecer supervisão técnica e orientação para equipes de segurança da informação."]
    },
    {
        id: 8,
        cargo_img: "imagens/gerente.png",
        nomeCargo: "Gerente",
        resumo: "São os responsáveis por gerenciar equipes e projetos na área de segurança da informação.",
        requisitos: "Além da formação na área de TI, é exigido dos Gerentes ao menos 6 anos de experiência com segurança da informação ou de áreas relacionadas, experiência com implementação de padrões e boas práticas para segurança da informação e experiência liderando equipes diversas.",
        atrib1: ["Criar e executar estratégias que melhorem o programa de segurança de uma organização;", 
        "Definir, implementar e manter politicas e procedimentos de segurança da informação;",
        "Gerenciar equipes de administradores, analistas e demais profissionais da área."]
    },
    {
        id: 9,
        cargo_img: "imagens/diretor.png",
        nomeCargo: "Diretor",
        resumo: "Com todo conhecimento adquirido a longo do tempo atuando na área é o responsável por definir a visão de segurança da organização e trabalhar em conjunto com as lideranças para garantir que ela seja implementada.",
        requisitos: "Em geral, se busca nos Diretores uma formação na área de TI, em casos especiais até de nível mestre, experiência minima de 8 anos atuando com segurança de TI e outros 4 anos de experiência com atividades de gerenciamento de reports a diretoria.",
        atrib1: ["Prover a visão do estado ideal de segurança para a organização;", "Liderar o planejamento estratégico para a implementação de tecnologias de segurança de TI e supervisionar os departamentos de segurança;", "Preparar e apresentar relatórios técnicos de segurança para gestão executiva."]
    },
];

const img = document.getElementById("cargo_img");
const cargo = document.getElementById("nomeCargo");
const resumo = document.getElementById("resumoCargo");
const requisitos = document.getElementById("requisitosCargo");
const atributo1 = document.getElementById("atrib1Cargo");
const atributo2 = document.getElementById("atrib2Cargo");
const atributo3 = document.getElementById("atrib3Cargo");

const btnAnt = document.querySelector(".btn_ant")
const btnPrx = document.querySelector(".btn_prx")

const btnAna = document.querySelector(".btnCargAna")
const btnEsp = document.querySelector(".btnCargEsp")
const btnAud = document.querySelector(".btnCargAud")
const btnEng = document.querySelector(".btnCargEng")
const btnCon = document.querySelector(".btnCargCon")
const btnAdm = document.querySelector(".btnCargAdm")
const btnArq = document.querySelector(".btnCargArq")
const btnGer = document.querySelector(".btnCargGer")
const btnDir = document.querySelector(".btnCargDir")

const areaShow = document.getElementById("dsp")

let currentItem = 2;

window.addEventListener('DOMContentLoaded', function(){
    carregarCargo();
});
//areaShow.onload = function() {move(true)};
areaShow.addEventListener('mouseout',function(){
    move(true)
});
areaShow.addEventListener('mouseover', function(){
    move(false)
});

function carregarCargo(){
    const item = cargos[currentItem];
    img.src = item.cargo_img;
    cargo.textContent = item.nomeCargo;
    resumo.textContent = item.resumo;
    requisitos.textContent = item.requisitos;
    atributo1.textContent = item.atrib1[0];
    atributo2.textContent = item.atrib1[1];
    atributo3.textContent = item.atrib1[2];
}

btnAna.addEventListener('click', function(){
    currentItem = 0;
    carregarCargo(currentItem);
});
btnEsp.addEventListener('click', function(){
    currentItem = 1;
    carregarCargo(currentItem);
});
btnAud.addEventListener('click', function(){
    currentItem = 2;
    carregarCargo(currentItem);
});
btnEng.addEventListener('click', function(){
    currentItem = 3;
    carregarCargo(currentItem);
});
btnCon.addEventListener('click', function(){
    currentItem = 4;
    carregarCargo(currentItem);
});
btnAdm.addEventListener('click', function(){
    currentItem = 5;
    carregarCargo(currentItem);
});
btnArq.addEventListener('click', function(){
    currentItem = 6;
    carregarCargo(currentItem);
});
btnGer.addEventListener('click', function(){
    currentItem = 7
    carregarCargo(currentItem);
});
btnDir.addEventListener('click', function(){
    currentItem = 8;
    carregarCargo(currentItem);
});


btnAnt.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = cargos.length -1;
    }
    carregarCargo(currentItem);
});
btnPrx.addEventListener('click', function(){
    currentItem++;
    if (currentItem >= cargos.length) {
        currentItem = 0;
    }
    carregarCargo(currentItem);
});

let bar_sts = 0;
function move(status) {
    //while (status) {
        //setti
        if (bar_sts == 0) {
            bar_sts = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 30);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    bar_sts = 0;
                } 
                else {
                    width++;
                    elem.style.width = width + "%";
                }
            }
        }
    //}  
}