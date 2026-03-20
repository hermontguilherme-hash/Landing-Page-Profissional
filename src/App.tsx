import React, { useState, useEffect } from 'react';
import {
  Landmark,
  EyeOff,
  Wallet,
  MousePointerClick,
  ShieldAlert,
  ArrowRight,
  LineChart,
  Compass,
  Globe,
  XCircle,
  Minus,
  CheckCircle,
  Check,
  MapPin,
  ShieldCheck,
  Sun,
  Moon
} from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyHZ5dRznxppCzBCDohX2EqHyA4Gil5243RJyFw_DLbTaJVhVBLLwa-aiQuh_yfa-YN/exec";
      
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      setFormStatus('success');
      form.reset();
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Landmark className="text-primary dark:text-slate-100 w-8 h-8" />
              <span className="text-xl font-bold tracking-tight text-primary dark:text-slate-100">Guilherme Hermont</span>
            </a>
            <nav className="hidden md:flex space-x-8">
              <a className="text-sm font-medium hover:text-primary dark:hover:text-blue-400 transition-colors" href="#processo">Processo</a>
              <a className="text-sm font-medium hover:text-primary dark:hover:text-blue-400 transition-colors" href="#servicos">Serviços</a>
              <a className="text-sm font-medium hover:text-primary dark:hover:text-blue-400 transition-colors" href="#sobre">Sobre</a>
              <a className="text-sm font-medium hover:text-primary dark:hover:text-blue-400 transition-colors" href="#transparencia">Transparência</a>
            </nav>
            <div className="flex items-center gap-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                {isDarkMode ? <Sun className="w-5 h-5 text-slate-100" /> : <Moon className="w-5 h-5 text-slate-900" />}
              </button>
              <a href="#contato" className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all inline-block">
                Agendar Diagnóstico
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-12 items-center text-center">
              <div className="space-y-8 mx-auto">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary dark:bg-primary/30 dark:text-blue-200 border border-primary/20">
                  Wealth Management & Planejamento Patrimonial
                </div>
                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                  Clareza, organização e estratégia para o seu patrimônio.
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  Ajudamos você a organizar seus investimentos com rigor técnico e atendimento humano, independente do estágio da sua jornada financeira.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#contato" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-primary/20 inline-block">
                    Agendar Diagnóstico Gratuito
                  </a>
                  <a href="#processo" className="border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-4 rounded-lg font-bold text-lg transition-all inline-block">
                    Conhecer Metodologia
                  </a>
                </div>
                <div className="flex items-center gap-4 pt-4 justify-center">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-slate-400"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-slate-500"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-slate-600"></div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto"><br/></p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary/5 dark:bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sua carteira está realmente trabalhando para você?</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Identifique os gargalos que impedem seu patrimônio de crescer com eficiência e segurança.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary dark:bg-primary/30 dark:text-blue-200 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <EyeOff className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Falta de Clareza</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">A sensação de não saber exatamente onde o dinheiro está rendendo ou se as taxas estão corroendo seu lucro.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary dark:bg-primary/30 dark:text-blue-200 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Wallet className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excesso de Liquidez</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Recursos parados em opções de baixa rentabilidade que perdem para a inflação no longo prazo.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary dark:bg-primary/30 dark:text-blue-200 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MousePointerClick className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ausência de Estratégia</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Investimentos dispersos e sem conexão real com seus objetivos de vida e prazos necessários.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary dark:bg-primary/30 dark:text-blue-200 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Insegurança</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">A dúvida constante se as decisões tomadas são as melhores diante da volatilidade do mercado atual.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24" id="processo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3 sticky top-24">
                <h2 className="text-primary dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Como eu ajudo</h2>
                <h3 className="text-4xl font-black mb-6 leading-tight">O caminho para uma gestão patrimonial profissional.</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">Nossa metodologia é dividida em três pilares fundamentais para garantir que cada centavo esteja alinhado com seu propósito.</p>
                <a href="#contato" className="bg-primary text-white px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2 group w-fit">
                  Iniciar Diagnóstico
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="mt-12 relative group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                  <img alt="Análise de Diagnóstico Financeiro" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGaFcsTwbJBJ84qJ4iTfe9P9LXmQkW1xNN4uezWjl9AiJHq6F2-k4ylukkUqL__B3Qv-cADw-WjcBMBYTcpaqXD0iz2XZOqAIOOD5rL0eFsrcHC9vg4bii1lzzT7vxZvc9TwDhhkltogGYorHSSI87OfNwmzwpMDLPReDQvc9nqeO7qR_TWUiTu5OrVl18s2dSuoqRKU5aqtYwsyjZEdeFe5VLpZxjqzbeBXIwJ6yOvoLT2LPaX-m724I-7puZaTWiyQsyMqf2pdk" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none"></div>
                </div>
              </div>
              <div className="lg:w-2/3 space-y-12">
                <div className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 z-10">1</div>
                    <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800 absolute top-12"></div>
                  </div>
                  <div className="pb-12">
                    <h4 className="text-2xl font-bold mb-3">Diagnóstico Financeiro</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Uma análise profunda da sua situação atual. Mapeamos seus ativos, passivos, fluxo de caixa, perfil de risco e, principalmente, seus objetivos de curto, médio e longo prazo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 z-10">2</div>
                    <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800 absolute top-12"></div>
                  </div>
                  <div className="pb-12">
                    <h4 className="text-2xl font-bold mb-3">Tese Estratégica</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Criação de um plano personalizado e técnico. Definimos o Asset Allocation ideal, selecionando os melhores veículos de investimento nacionais e internacionais para sua realidade.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 z-10">3</div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">Acompanhamento Contínuo</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      O mercado é dinâmico. Realizamos monitoramento constante, rebalanceamento de carteira e ajustes táticos sempre que houver mudanças no cenário econômico ou na sua vida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-primary text-white" id="servicos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções Personalizadas</h2>
              <p className="text-blue-100/70 max-w-2xl mx-auto">Atendimento focado na preservação e crescimento sustentável do seu patrimônio.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <LineChart className="w-10 h-10 mb-6 text-blue-300" />
                <h3 className="text-xl font-bold mb-4">Wealth Management</h3>
                <p className="text-blue-100/70 text-sm leading-relaxed">Gestão holística da sua riqueza, focando não apenas em retorno, mas em eficiência tributária e sucessória.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Compass className="w-10 h-10 mb-6 text-blue-300" />
                <h3 className="text-xl font-bold mb-4">Planejamento Patrimonial</h3>
                <p className="text-blue-100/70 text-sm leading-relaxed">Estruturação de ativos para proteger sua família e garantir que sua sucessão ocorra de forma tranquila e otimizada.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Globe className="w-10 h-10 mb-6 text-blue-300" />
                <h3 className="text-xl font-bold mb-4">Investimentos Globais</h3>
                <p className="text-blue-100/70 text-sm leading-relaxed">Acesso aos principais mercados do mundo (EUA, Europa) para diversificação geográfica e proteção em moeda forte.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contrast Comparison */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-px bg-slate-200 dark:bg-slate-700 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="bg-white dark:bg-slate-900 p-12">
                <h3 className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> Sem Direção Profissional
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <Minus className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" />
                    <span>Investimentos por "dica" ou impulso do momento.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <Minus className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" />
                    <span>Concentração excessiva em um único ativo ou banco.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <Minus className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" />
                    <span>Altas taxas administrativas e baixa rentabilidade real.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <Minus className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" />
                    <span>Inexistência de planejamento para o futuro e herança.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 dark:bg-slate-800/50 p-12">
                <h3 className="text-primary dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Estratégia Alinhada
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>Portfólio construído com base em metas financeiras claras.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>Diversificação inteligente (Renda Fixa, Ações, Exterior).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>Transparência total sobre remuneração e custos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>Proteção patrimonial e planejamento sucessório estruturado.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/30" id="sobre">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Guilherme Hermont</h2>
                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p>Com mais de 7 anos de experiência no mercado financeiro, atuo como especialista em Wealth Management focado em prover soluções estratégicas para investidores que buscam profissionalismo.</p>
                  <p>Sou pós-graduado em Finanças e possuo as certificações ANCORD e CPA-20, requisitos fundamentais para uma assessoria técnica e ética.</p>
                  <p>Como parceiro do <strong>Grupo Ável</strong>, credenciado à XP Investimentos, uno a personalização de um atendimento boutique com a solidez e o portfólio da maior plataforma de investimentos do Brasil.</p>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <div className="px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold uppercase tracking-wider text-primary dark:text-blue-400 shadow-sm">Pós-Graduado Finanças</div>
                  <div className="px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold uppercase tracking-wider text-primary dark:text-blue-400 shadow-sm">ANCORD</div>
                  <div className="px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold uppercase tracking-wider text-primary dark:text-blue-400 shadow-sm">CPA-20</div>
                </div>
                <div className="mt-10 flex items-center gap-4 text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">Porto Alegre, RS</span>
                  </div>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">Atendimento Nacional</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-slate-800 relative shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] group">
                  <img alt="Guilherme Hermont" className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida/ADBb0ujhY70tLNItccI1NMWNpDw-stz8MLmvNfpLwUVNtQss9Op8359_go8iZpGJ5_bBixgfHpm0M3gCRGMAQeUWKnutgBMKkDm6ZImdi-rc0ed_XnKaOgf8Je_5Apk-k715XLZ8dhylcK5JpCjq2XvvzxxjRc0rJVsWQ8gSfBAQ-W2d4xQ8hPFULOcm11phkJGqVNCWoZshVIHLepLMq21Q8e0GNeRh-bHm5ciUbTG7BFJnG6VnyY0QvRY8-m4n3gM95pAPxd7YsRcKBA" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                    <p className="text-white text-xl font-bold mb-1">Guilherme Hermont</p>
                    <p className="text-blue-300 font-medium">Wealth Advisor @ Grupo Ável (XP)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="py-24" id="transparencia">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-primary/10 text-primary dark:bg-primary/30 dark:text-blue-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Transparência como Pilar Central</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Diferente do modelo bancário tradicional focado em venda de produtos, nossa abordagem é consultiva. Você terá clareza absoluta sobre como sou remunerado e o impacto disso na sua carteira. O foco é sempre o seu resultado.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 text-left">
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold mb-2">Sem Conflito de Interesses</h4>
                <p className="text-sm text-slate-500">A prioridade é o que faz sentido para seu plano de vida, não para bater metas internas do banco.</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold mb-2">Relatórios Detalhados</h4>
                <p className="text-sm text-slate-500">Acesso a métricas reais de rentabilidade líquida, comparativos com benchmarks e taxas pagas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA & Form */}
        <section className="py-24 bg-primary text-white relative overflow-hidden" id="contato">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-primary to-primary opacity-50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Pronto para profissionalizar sua gestão?</h2>
                <p className="text-xl text-blue-100/80 mb-8">
                  Reserve 20 minutos para um diagnóstico gratuito e descubra como podemos otimizar sua jornada financeira.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-blue-300" />
                    </div>
                    <span>Análise técnica de ativos atuais</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-blue-300" />
                    </div>
                    <span>Identificação de ineficiências tributárias</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-blue-300" />
                    </div>
                    <span>Proposta de Asset Allocation ideal</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl text-slate-900">
                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Solicitação Enviada!</h3>
                    <p className="text-slate-600">Em breve entrarei em contato com você pelo WhatsApp ou E-mail para agendarmos nosso diagnóstico.</p>
                    <button onClick={() => setFormStatus('idle')} className="mt-6 text-primary font-bold hover:underline">
                      Enviar nova resposta
                    </button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-slate-700">Nome Completo</label>
                        <input name="nome" required className="w-full rounded-lg border-slate-200 focus:ring-primary focus:border-primary px-4 py-3" placeholder="Seu nome" type="text" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-slate-700">Telefone / WhatsApp</label>
                        <input name="telefone" required className="w-full rounded-lg border-slate-200 focus:ring-primary focus:border-primary px-4 py-3" placeholder="(00) 00000-0000" type="tel" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-700">E-mail</label>
                      <input name="email" required className="w-full rounded-lg border-slate-200 focus:ring-primary focus:border-primary px-4 py-3" placeholder="seu@email.com" type="email" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-700">Faixa de Patrimônio Estimada</label>
                      <select name="patrimonio" required className="w-full rounded-lg border-slate-200 focus:ring-primary focus:border-primary px-4 py-3 bg-white">
                        <option value="">Selecione uma opção</option>
                        <option value="50k-100k">R$ 50.000,00 - R$ 100.000,00</option>
                        <option value="100k-250k">R$ 100.000,00 - R$ 250.000,00</option>
                        <option value="250k-500k">R$ 250.000,00 - R$ 500.000,00</option>
                        <option value="500k-750k">R$ 500.000,00 - R$ 750.000,00</option>
                        <option value="750k-1M">R$ 750.000,00 - R$ 1.000.000,00</option>
                        <option value="1M+">Acima de R$ 1.000.000,00</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-700">Principal Objetivo Financeiro</label>
                      <textarea name="objetivo" required className="w-full rounded-lg border-slate-200 focus:ring-primary focus:border-primary px-4 py-3" placeholder="Ex: Aposentadoria, proteção familiar, comprar um imóvel..." rows={3}></textarea>
                    </div>
                    
                    {formStatus === 'error' && (
                      <p className="text-red-500 text-sm font-medium">Ocorreu um erro ao enviar. Tente novamente.</p>
                    )}

                    <button disabled={formStatus === 'submitting'} className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2" type="submit">
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        'Solicitar Diagnóstico Gratuito'
                      )}
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-4 leading-relaxed uppercase tracking-tighter">
                      Seus dados estão protegidos sob a LGPD. Ao enviar, você concorda em ser contatado para fins de diagnóstico.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background-light dark:bg-background-dark py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Landmark className="text-primary dark:text-slate-100 w-8 h-8" />
              <span className="text-xl font-bold tracking-tight text-primary dark:text-slate-100">Guilherme Hermont</span>
            </a>
            <div className="flex gap-8 text-sm text-slate-500">
              <a className="hover:text-primary transition-colors" href="https://www.instagram.com/hermontinvestimentos?igsh=emM5ZHNnOHp0YXox" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a className="hover:text-primary transition-colors" href="https://www.linkedin.com/in/guilherme-hermont-492469206/" target="_blank" rel="noopener noreferrer">Linkedin</a>
              <a className="hover:text-primary transition-colors" href="https://wa.me/5551997501555?text=Ol%C3%A1%20Guilherme%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico!" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <div className="text-sm text-slate-400">
              © 2024 Guilherme Hermont Wealth Management. Porto Alegre, RS.
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 leading-relaxed text-center">
            Guilherme Hermont é Agente Autônomo de Investimentos devidamente registrado na CVM, parceiro do Grupo Ável credenciado à XP Investimentos. O investimento em ativos financeiros envolve riscos, e o desempenho passado não garante resultados futuros.
          </div>
        </div>
      </footer>
    </>
  );
}
