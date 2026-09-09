export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 max-w-5xl mx-auto space-y-12">
      {/* Header section */}
      <div className="border-b border-warm-sand-border pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-sm font-semibold mb-3">
          <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
          نظام التصميم المعتمد • Design System Tokens
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-espresso tracking-tight">
          اختبار الخطوط وتوكنز الألوان المعتمدة
        </h1>
        <p className="text-muted-slate mt-2 text-lg">
          Cairo (العربية للأوزان 600 و 800) + Plus Jakarta Sans (الإنجليزية) مع لوحة ألوان الكتان الدافئ والفاحم والتراب المحروق.
        </p>
      </div>

      {/* Typography Specimens */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-espresso border-r-4 border-terracotta pr-3">
          1. اختبار الخطوط (Typography Specimens)
        </h2>

        {/* Cairo Arabic Test */}
        <div className="p-6 rounded-2xl bg-white border border-warm-sand-border shadow-xs space-y-4">
          <span className="text-xs font-semibold tracking-wider text-muted-slate uppercase">
            الخط العربي: Cairo (Google Fonts)
          </span>
          <div className="space-y-2">
            <p className="text-4xl font-extrabold text-espresso">
              خط كايرو (800 ExtraBold): مطور ويب Full-stack يبني حلولاً حقيقية
            </p>
            <p className="text-2xl font-semibold text-espresso">
              خط كايرو (600 SemiBold): واجهات سريعة وأنيقة تحقق أعلى معدلات التحويل
            </p>
            <p className="text-base font-normal text-muted-slate leading-relaxed">
              خط كايرو (400 Regular): نصوص القراءة السلسة والمقالات الطويلة، واضحة ومريحة للعين وخالية من التكلف والتعقيد.
            </p>
          </div>
        </div>

        {/* Plus Jakarta Sans English Test */}
        <div className="p-6 rounded-2xl bg-white border border-warm-sand-border shadow-xs space-y-4 font-jakarta" dir="ltr">
          <span className="text-xs font-semibold tracking-wider text-muted-slate uppercase">
            English Font: Plus Jakarta Sans (Google Fonts)
          </span>
          <div className="space-y-2">
            <p className="text-3xl font-extrabold text-espresso">
              Plus Jakarta Sans (800 ExtraBold): High-Performance Web Applications
            </p>
            <p className="text-xl font-semibold text-espresso">
              Plus Jakarta Sans (600 SemiBold): Clean aesthetics, editorial design & robust engineering
            </p>
            <p className="text-base font-normal text-muted-slate leading-relaxed">
              Plus Jakarta Sans (400 Regular): Crafted with precision, optimized for speed and human-centered user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Color Tokens Palette */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-espresso border-r-4 border-terracotta pr-3">
          2. باليتة وتوكنز الألوان المعتمدة (Color Tokens)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Warm Sand */}
          <div className="p-4 rounded-xl border border-warm-sand-border bg-warm-sand space-y-3">
            <div className="h-20 rounded-lg bg-warm-sand border border-warm-sand-border flex items-center justify-center font-bold text-espresso">
              #F7F5F0
            </div>
            <div>
              <p className="font-bold text-espresso text-sm">Warm Sand (الكتان الدافئ)</p>
              <p className="text-xs text-muted-slate">خلفية الوضع النهاري الأساسية</p>
            </div>
          </div>

          {/* Dark Obsidian */}
          <div className="p-4 rounded-xl border border-dark-border bg-dark-obsidian text-white space-y-3">
            <div className="h-20 rounded-lg bg-dark-obsidian border border-dark-border flex items-center justify-center font-bold text-warm-sand">
              #111318
            </div>
            <div>
              <p className="font-bold text-white text-sm">Dark Obsidian (الفاحم الراقي)</p>
              <p className="text-xs text-zinc-400">خلفية الوضع الليلي الفخمة</p>
            </div>
          </div>

          {/* Terracotta Rust */}
          <div className="p-4 rounded-xl border border-warm-sand-border bg-white space-y-3">
            <div className="h-20 rounded-lg bg-terracotta hover:bg-terracotta-hover transition-colors flex items-center justify-center font-bold text-white cursor-pointer">
              #C26D53
            </div>
            <div>
              <p className="font-bold text-espresso text-sm">Terracotta Rust (الطمي الترابي)</p>
              <p className="text-xs text-muted-slate">اللون التفاعلي الأساسي (Primary Accent)</p>
            </div>
          </div>

          {/* Signal WhatsApp */}
          <div className="p-4 rounded-xl border border-warm-sand-border bg-white space-y-3">
            <div className="h-20 rounded-lg bg-whatsapp hover:bg-whatsapp-hover transition-colors flex items-center justify-center font-bold text-white cursor-pointer">
              #22C55E
            </div>
            <div>
              <p className="font-bold text-espresso text-sm">Signal WhatsApp (أخضر الواتساب)</p>
              <p className="text-xs text-muted-slate">زر التواصل الفوري المباشر</p>
            </div>
          </div>
        </div>

        {/* Text and Contrast Shades */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white border border-warm-sand-border">
            <div className="h-10 rounded bg-espresso mb-2 flex items-center px-3 text-white text-xs font-mono">
              #1A1A1A
            </div>
            <p className="text-sm font-bold text-espresso">Espresso (#1A1A1A)</p>
            <p className="text-xs text-muted-slate">النصوص الرئيسية والعناوين</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-warm-sand-border">
            <div className="h-10 rounded bg-muted-slate mb-2 flex items-center px-3 text-white text-xs font-mono">
              #4A4A4A
            </div>
            <p className="text-sm font-bold text-espresso">Muted Slate (#4A4A4A)</p>
            <p className="text-xs text-muted-slate">النصوص الفرعية والوصفية</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-warm-sand-border">
            <div className="h-10 rounded bg-terracotta-light border border-terracotta/20 mb-2 flex items-center px-3 text-terracotta text-xs font-mono font-bold">
              #F8EBE7
            </div>
            <p className="text-sm font-bold text-espresso">Terracotta Light Tint</p>
            <p className="text-xs text-muted-slate">الشارات والخلفيات الخفيفة</p>
          </div>
        </div>
      </section>

      {/* Dark mode card preview */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-espresso border-r-4 border-terracotta pr-3">
          3. معاينة ألوان الوضع الليلي الفخم (Dark Mode Preview Card)
        </h2>
        <div className="p-8 rounded-3xl bg-dark-obsidian border border-dark-border text-warm-sand space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-terracotta/20 text-terracotta">
              Dark Surface • 181B22
            </span>
            <span className="text-xs text-zinc-400 font-jakarta">Obsidian Canvas</span>
          </div>
          <h3 className="text-2xl font-bold text-white">
            تجربة التباين العالي بدون وهج مزعج للعين
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            تم ضبط درجات الرمادي الفاحم بعناية لتوفير راحة بصرية فائقة مع إبراز عناصر التفاعل بلون الطمي الدافئ وأخضر الواتساب النابض.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="px-5 py-2.5 rounded-full bg-terracotta hover:bg-terracotta-hover text-white font-semibold text-sm transition-all shadow-sm">
              زر تفاعلي أساسي
            </button>
            <button className="px-5 py-2.5 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold text-sm transition-all shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              محادثة واتساب
            </button>
            <button className="px-5 py-2.5 rounded-full bg-dark-surface hover:bg-dark-muted text-zinc-300 border border-dark-border font-medium text-sm transition-all">
              زر ثانوي متناسق
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
