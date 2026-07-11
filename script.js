/* ============================================================
   PORTFOLYO JAVASCRIPT DOSYASI
   İçindekiler:
   1. Çeviri Sözlüğü (TR / EN)
   2. Tema (Dark/Light) Yönetimi
   3. Dil Yönetimi
   4. Mobil Menü (Hamburger)
   4b. Aktif Navbar Linki (Sayfa Göstergesi)
   5. Navbar Scroll Efekti
   6. Hero Fare İzi (Cursor Trail) Efekti
   7. Başlangıç (Init)
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     1. ÇEVİRİ SÖZLÜĞÜ
     ============================================================ */
  const translations = {
    tr: {
      navLogo: 'Özgür Kadakal',
      navHome: 'Ana Sayfa',
      navProjects: 'Projeler',
      navAbout: 'Hakkımda',
      navContact: 'İletişim',

      heroEyebrow: '// Hoşgeldiniz',
      heroTitle: 'Özgür Kadakal Kişisel Portföy',
      heroText: 'Backend sistemleri, oyun geliştirme ve yazılım mühendisliği alanlarında ürettiğim projeleri, deneyleri ve teknik çalışmaları bir araya getiren kişisel portföy platformu.',
      heroBtnProjects: 'Projelerime göz at',
      heroBtnContact: 'İletişime geç',
      heroQuote: 'Kodun çalışması yetmez; kodun anlaşılır, sürdürülebilir ve geleceğe dayanıklı olması gerekir.',
      heroQuoteAuthor: '— Robert C. Martin (Uncle Bob)',

      projectsEyebrow: '// Öne Çıkan Projelerim',
      projectsTitle: 'Öne Çıkan Projeler',
      projectsSubtitle: 'Üzerinde en çok zaman geçirdiğim ve en çok şey öğrendiğim iki proje.',
      project1Tag: 'Windows Masaüstü Oyunu',
      project1Title: 'Attack Game',
      project1Desc: 'Bu oyun unity ile geliştirilmiş bir samuray temalı savaş oyunudur. Oyuncu, elindeki katana ile düşmanları öldürerek hayatta kalmaya çalışır. Oyun, karakterin ölmesiyle sona erer.',
      project2Tag: 'Windows Masaüstü Uygulaması',
      project2Title: 'Pomodoro App',
      project2Desc: 'Bu uygulama, C# Windows Forms ile geliştirilmiş oyunlaştırılmış bir Pomodoro uygulamasıdır. Kullanıcı, odaklanarak XP kazanır, seviye atlar ve çalışma istatistiklerini takip eder.',
      projectLink: 'Detayları gör →',

      aboutEyebrow: '// Merhaba!',
      aboutTitle: 'Ben Özgür Kadakal',
      aboutText1: 'Merhaba! Ben Özgür Kadakal, yazılım mühendisliği öğrencisi olarak yazılım geliştirme ve teknolojiye olan tutkumla projeler üretiyorum. Problem çözme ve yeni teknolojileri öğrenme konularında sürekli kendimi geliştiriyorum. Amacım, yaratıcı ve etkili çözümlerle yazılım projelerine değer katmak ve profesyonel becerilerimi geliştirmektir.',
      aboutText2: 'Şu anda backend sistemleri, temiz kod prensipleri ve yazılım mimarisi üzerine kendimi geliştiriyorum. Boş zamanlarımda kişisel projeler üretiyor, açık kaynak projelere göz atıyor ve yeni teknolojileri denemekten keyif alıyorum.',
      aboutFact1Label: 'Eğitim',
      aboutFact1Value: 'Yazılım Mühendisliği, 3. Sınıf Öğrencisi',
      aboutFact2Label: 'Uzmanlaşmak İstediğim Alanlar',
      aboutFact2Value: 'Backend & Yazılım Mimarisi',
      aboutFact3Label: 'Yaklaşım',
      aboutFact3Value: 'Temiz kod, performans ve sürdürülebilir yazılım',
      aboutBtn: 'Daha Fazlası →',
      aboutPhotoCaption: 'fotoğrafınız buraya',

      projectsViewAllBtn: 'Bütün Projeler',

      projectsPageEyebrow: '// Projelerim',
      projectsPageTitle: 'Tüm Projelerim',
      projectsPageSubtitle: 'Geliştirdiğim projeler, en yeniden en eskiye doğru sıralanmıştır.',

      projList1Title: 'VaultNet - Secure Vault API',
      projList1Tag: 'Backend API Projesi',
      projList1Desc: 'VaultNet, hassas verilerin güvenli bir şekilde saklanmasını sağlayan, kimlik doğrulama ve şifreleme katmanlarına sahip bir backend API projesidir.',

      projList2Title: 'Pomodoro App',
      projList2Tag: 'Windows Masaüstü Uygulaması',
      projList2Desc: 'Bu uygulama, C# Windows Forms ile geliştirilmiş oyunlaştırılmış bir Pomodoro uygulamasıdır. Kullanıcı, odaklanarak XP kazanır, seviye atlar ve çalışma istatistiklerini takip eder.',

      projList3Title: 'Minesweeper',
      projList3Tag: 'Windows Masaüstü Oyunu',
      projList3Desc: 'Klasik mayın tarlası oyununun C# ile geliştirilmiş bir versiyonudur. Oyuncu, mayınlardan kaçınarak tüm güvenli kareleri açmaya çalışır.',

      projList4Title: 'Game Launcher',
      projList4Tag: 'Windows Masaüstü Uygulaması',
      projList4Desc: 'Kullanıcının bilgisayarındaki oyunları tek bir arayüzden görüntüleyip başlatabildiği bir masaüstü oyun başlatıcı uygulamasıdır.',

      projList5Title: 'Music Player',
      projList5Tag: 'Windows Masaüstü Uygulaması',
      projList5Desc: 'Yerel müzik dosyalarını çalabilen, çalma listesi oluşturma ve temel ses kontrollerine sahip bir masaüstü müzik oynatıcısıdır.',

      projList6Title: 'Attack Game',
      projList6Tag: 'Windows Masaüstü Oyunu',
      projList6Desc: 'Bu oyun unity ile geliştirilmiş bir samuray temalı savaş oyunudur. Oyuncu, elindeki katana ile düşmanları öldürerek hayatta kalmaya çalışır. Oyun, karakterin ölmesiyle sona erer.',

      projList7Title: 'Car Drive Game',
      projList7Tag: 'Windows Masaüstü Oyunu',
      projList7Desc: 'Unity ile geliştirilmiş, tek yönde akan trafikte sonsuz sürüş oyunu.',

      projList8Title: 'Running Game',
      projList8Tag: 'Windows Masaüstü Oyunu',
      projList8Desc: 'Oyuncunun engellerden kaçarak ilerlediği, sonsuz koşu (endless runner) tarzında geliştirilmiş bir oyundur.',

      projList9Title: 'BlackJack Game',
      projList9Tag: 'Windows Masaüstü Oyunu',
      projList9Desc: 'Bu uygulama, animasyonlar, sesler ve etkileşimli bir arayüz içeren, C# ile yazılmış basit bir kart oyunudur.',

      projList10Title: 'Calculator',
      projList10Tag: 'Windows Masaüstü Uygulaması',
      projList10Desc: 'Bu proje, C# ve Windows Forms kullanılarak geliştirilmiş basit bir hesap makinesi uygulamasıdır.',

      projList11Title: 'Login Form App',
      projList11Tag: 'Windows Masaüstü Uygulaması',
      projList11Desc: 'Bu proje, Windows Forms kullanarak basit ve şık bir giriş ve kayıt sistemi oluşturmayı içeriyor.',

      projList12Title: 'Dice Game',
      projList12Tag: 'Windows Masaüstü Oyunu',
      projList12Desc: 'Bu proje, C# ve Windows Forms kullanılarak geliştirilmiş basit bir zar oyunu uygulamasıdır.',

      projList13Title: 'Bomb Dodge Game',
      projList13Tag: 'Windows Masaüstü Oyunu',
      projList13Desc: 'Bu uygulama C# ile yapılmış, düşen bombalardan kaçınma temalı basit bir oyundur. (Ayrıca bu benim ilk C# projem bu yüzden çok temel düzeydedir.)',

      footerText: '© Özgür Kadakal - Tüm Hakları Saklıdır.',

      themeToggleTitle: 'Tema',
      settingsToggleTitle: 'Ayarlar',
      heroScrollDownTitle: 'Aşağı kaydır',

      settingsCursorTrail: 'Fare İzi Efekti',
      settingsCursorTrailDesc: 'İmlecin arkasındaki efekti seç',
      trailModeOff: 'Kapalı',
      trailModeDots: 'Nokta İzi',
      trailModeLine: 'Çizgi İzi',

      statProjects: '13',
      statProjectsLabel: 'Toplam Proje',
      statTech: '250+',
      statTechLabel: 'Toplam Commit',
      statYears: '2+',
      statYearsLabel: 'Yıllık Deneyim',

      contactEyebrow: '// İletişim',
      contactTitle: 'Bana Ulaşın',
      contactText: 'Bir proje fikrin, iş birliği teklifin veya sadece merhaba demek istediğin bir konu mu var? Aşağıdaki kanallardan bana ulaşabilirsin.',
      contactEmailTitle: 'E-posta',
      contactGithubTitle: 'GitHub',
      contactInstagramTitle: 'Instagram',
      contactCopyBtn: 'Kopyala',
      contactCopiedBtn: 'Kopyalandı',
      contactGoBtn: 'Bağlantıya git',

      aboutPageEyebrow: '// Hakkımda',
      aboutPageTitle: 'Özgür Kadakal',
      aboutPageGreeting: 'Merhaba! 👋',
      aboutPageIntro: 'Merhaba! Ben Özgür Kadakal, 19 yaşındayım ve Yazılım Mühendisliği 3. sınıf öğrencisiyim. Kodlama tutkusu ile yazılıma okuldan önce başladım ve kendimi sürekli geliştirmeye devam ediyorum. Amacım, yaratıcı ve etkili çözümlerle yazılım projelerine değer katmak ve profesyonel becerilerimi geliştirmektir.',
      aboutPageShortBio: 'Merhaba! Ben Özgür Kadakal, yazılım mühendisliği öğrencisi olarak yazılım geliştirme ve teknolojiye olan tutkumla projeler üretiyorum. Problem çözme ve yeni teknolojileri öğrenme konularında sürekli kendimi geliştiriyorum.',
      aboutPageContactBtn: 'Benimle iletişime geç',
      aboutEmailBtn: 'E-posta Gönder',

      aboutInfoEduUni: 'Üniversite Adı',
      aboutInfoEduDate: '2024 – Devam Ediyor',
      aboutInfoPersonalTitle: 'Kişisel Bilgiler',
      aboutInfoNameLabel: 'Ad Soyad',
      aboutInfoNameValue: 'Özgür Kadakal',
      aboutInfoAgeLabel: 'Yaş',
      aboutInfoAgeValue: '19',
      aboutInfoLocationLabel: 'Konum',
      aboutInfoLocationValue: 'Türkiye',

      aboutInterestsTitle: 'İlgi Alanlarım',
      aboutInterest1: 'Seyahat Etmek',
      aboutInterest2: 'Müzik Dinlemek',
      aboutInterest3: 'Oyun Oynamak',
      aboutInterest4: 'Yürüyüş Yapmak',
      aboutInterest5: 'Film İzlemek',
      aboutInterest6: 'Maket Yapmak',

      skillsEyebrow: '// Yeteneklerim',
      skillsTitle: 'Teknik Beceriler',
      skillsSubtitle: 'Üzerinde çalıştığım projelerde sıkça kullandığım diller, teknolojiler ve araçlar.',
      skillCatLanguages: 'Programlama Dilleri',
      skillCatLanguagesDesc: 'Yazılım geliştirmede kullandığım diller',
      skillCatBackend: 'Backend Teknolojileri',
      skillCatBackendDesc: 'Backend geliştirmede kullandığım teknolojiler',
      skillCatFrontend: 'Frontend Teknolojileri',
      skillCatFrontendDesc: 'Arayüz geliştirmede kullandığım teknolojiler',
      skillCatDatabases: 'Veritabanı Teknolojileri',
      skillCatDatabasesDesc: 'Veri organizasyonu için kullandığım teknolojiler',
      skillCatGameDev: 'Oyun Geliştirme Teknolojileri',
      skillCatGameDevDesc: 'Oyun projelerinde kullandığım teknolojiler',
      skillCatVersionControl: 'Versiyon Kontrol Teknolojileri',
      skillCatVersionControlDesc: 'Kod yönetimi için kullandığım araçlar',
      skillCatTools: 'Geliştirme Araçları',
      skillCatToolsDesc: 'Geliştirme sürecinde kullandığım araçlar',
      skillCatOther: 'Diğer Araçlar ve Teknolojiler',
      skillCatOtherDesc: 'Projelerimde kullandığım diğer teknolojiler',

      aboutCtaTitle: 'Bir proje fikrin, iş birliği teklifin veya sadece merhaba demek istediğin bir konu mu var?',
      aboutCtaText: 'İletişim sayfasındaki adreslerden bana ulaşabilirsiniz.',
      aboutCtaBtn: 'İletişime Geç',

      settingsBgAnim: 'Arka Plan Animasyonu',
      settingsBgAnimDesc: 'Hareketli arka planı aç veya kapat',

      vaultnetBackLink: 'Bütün Projeler',
      vaultnetEyebrow: '// Backend API Projesi',
      vaultnetTitle: 'VaultNet - Secure Vault API',
      vaultnetDesc: 'VaultNet, hassas verilerin güvenli bir şekilde saklanmasını sağlayan, kimlik doğrulama ve şifreleme katmanlarına sahip bir backend API projesidir. JWT tabanlı yetkilendirme ile uç noktalar korunur ve kullanıcı verileri katmanlı bir güvenlik mimarisiyle işlenir.',
      vaultnetFeaturesTitle: '✨ Özellikler',

      vaultnetGroup1Title: '🔐 Kimlik Doğrulama ve Güvenlik',
      vaultnetFeat1_1: '🛡️ JWT Authentication: Token tabanlı güvenli giriş sistemi.',
      vaultnetFeat1_2: '🔑 Şifre Hashleme: Şifreler BCrypt ile güvenli şekilde saklanır.',
      vaultnetFeat1_3: '🧾 Claim Tabanlı Kimlik: Kullanıcı bilgileri JWT üzerinden yönetilir.',
      vaultnetFeat1_4: '🔒 Veri Şifreleme: Hassas veriler AES-256 (Data Protection API) ile şifrelenir.',

      vaultnetGroup2Title: '📦 Kasa Yönetimi',
      vaultnetFeat2_1: '➕ Kayıt Ekleme: Şifre, not vb. hassas verileri saklama.',
      vaultnetFeat2_2: '✏️ Güncelleme: Mevcut kayıtları düzenleme.',
      vaultnetFeat2_3: '❌ Silme: Yetkili kullanıcı tarafından güvenli silme.',
      vaultnetFeat2_4: '📂 Verilerim: Sadece kullanıcıya ait verileri listeleme.',

      vaultnetGroup3Title: '👤 Kullanıcı Sistemi',
      vaultnetFeat3_1: '📝 Kayıt Ol: Yeni kullanıcı oluşturma.',
      vaultnetFeat3_2: '🔐 Giriş Yap: JWT token alma.',
      vaultnetFeat3_3: '📧 Benzersiz E-posta Kontrolü',
      vaultnetFeat3_4: '👁️ Profil Bilgisi: Claim üzerinden kullanıcı bilgisi alma.',

      vaultnetGroup4Title: '⚙️ Backend Mimarisi',
      vaultnetFeat4_1: '🧩 Katmanlı Mimari: Controller → Service → Data katmanı ayrımı.',
      vaultnetFeat4_2: '🔄 Dependency Injection',
      vaultnetFeat4_3: '🗄️ Entity Framework Core',
      vaultnetFeat4_4: '🌐 Global Exception Handling',
      vaultnetFeat4_5: '⚡ Async Programlama',

      vaultnetGithubBtn: 'GitHub\'da Görüntüle',

      attackgameBackLink: 'Bütün Projeler',
      attackgameEyebrow: '// Oyun Geliştirme Projesi',
      attackgameTitle: 'Attack Game',
      attackgameDesc: 'Bu oyun unity ile geliştirilmiş bir samuray temalı savaş oyunudur. Oyuncu, elindeki katana ile düşmanları öldürerek hayatta kalmaya çalışır. Oyun, karakterin ölmesiyle sona erer.',
      attackgameFeaturesTitle: '✨ Özellikler',

      attackgameGroup1Title: '⚔️ Savaş ve Hareket Sistemi',
      attackgameFeat1_1: '⚔️ Kılıç Saldırıları: Düşmanları yenmek için katana saldırıları.',
      attackgameFeat1_2: '🏃 Hareket Animasyonları: Yürüme ve koşma animasyonları.',
      attackgameFeat1_3: '🍷 İksir İçme Animasyonu: Can iksiri içerken özel animasyon.',
      attackgameFeat1_4: '⚡ Özel Saldırılar: Süreli (cooldown\'lu) özel saldırı yetenekleri.',

      attackgameGroup2Title: '🎮 Oyun Döngüsü ve Kontroller',
      attackgameFeat2_1: '🩸 Game Over Dizisi: Oyuncu öldüğünde tetiklenen ölüm ve Game Over akışı.',
      attackgameFeat2_2: '🏁 Game Over Ekranı: Ses efektiyle desteklenen bitiş ekranı.',
      attackgameFeat2_3: '⏸ Duraklatma: ESC tuşu ile oyunu duraklatma.',
      attackgameFeat2_4: '🎹 Tuş Bilgileri: ESC menüsünde kontrol tuşlarının gösterimi.',

      attackgameGroup3Title: '❤️ Can ve Arayüz (HUD)',
      attackgameFeat3_1: '❤️ Can Barı: Oyuncunun anlık canını gösteren bar.',
      attackgameFeat3_2: '🎯 Skor Göstergesi: Oyuncunun skorunu gösteren gösterge.',
      attackgameFeat3_3: '🩺 İksir Sayacı: Elde bulunan can iksiri sayısının göstergesi.',
      attackgameFeat3_4: '🛡 Düşman Can Göstergesi: Her düşman için ayrı can göstergesi.',
      attackgameFeat3_5: '💖 Can İksiri Düşmesi: Düşmanlardan belirli bir şansla can iksiri düşmesi ve içildiğinde canın dolması.',

      attackgameGroup4Title: '🔊 Ses ve Müzik',
      attackgameFeat4_1: '🔊 Ses Efektleri: Saldırı, ölüm, yürüyüş, koşu ve iksir içme sesleri.',
      attackgameFeat4_2: '🎵 Arka Plan Müziği: Oyun boyunca çalan müzik.',

      attackgameGithubBtn: 'GitHub\'da Görüntüle',

      cardrivegameBackLink: 'Bütün Projeler',
      cardrivegameEyebrow: '// Oyun Geliştirme Projesi',
      cardrivegameTitle: 'Car Drive Game',
      cardrivegameDesc: 'Unity ile geliştirilmiş, tek yönde akan trafikte sonsuz sürüş oyunu.',
      cardrivegameFeaturesTitle: '✨ Özellikler',

      cardrivegameGroup1Title: '🛣 Yol ve Oyun Döngüsü',
      cardrivegameFeat1_1: '🛣 Sonsuz Yol: Tek yönde akan, sonu olmayan bir yol sistemi.',
      cardrivegameFeat1_2: '🚘 Trafik ve Hızlanma: Sürekli spawnlanan arabalar ve zamanla artan hız.',
      cardrivegameFeat1_3: '🏁 Game Over Ekranı: Çarpışma sonrası "Try Again" butonuyla yeniden başlama.',
      cardrivegameFeat1_4: '⏸ Duraklatma: ESC tuşu ile oyunu duraklatma.',

      cardrivegameGroup2Title: '🛞 Sürüş, Efektler ve Ses',
      cardrivegameFeat2_1: '💨 Drift Efekti: Drift sırasında görsel lastik dumanı efekti.',
      cardrivegameFeat2_2: '🛞 Lastik Animasyonları: Gerçekçi lastik dönüşü ve asfalt üzerinde iz bırakma.',
      cardrivegameFeat2_3: '🎮 Akıcı Kontroller: Responsive ve akıcı araba sürüş kontrolleri.',
      cardrivegameFeat2_4: '🔊 Ses Efektleri: Motor, fren ve drift sesleri.',

      cardrivegameGithubBtn: 'GitHub\'da Görüntüle',

      runninggameBackLink: 'Bütün Projeler',
      runninggameEyebrow: '// Oyun Geliştirme Projesi',
      runninggameTitle: 'Running Game',
      runninggameDesc: 'Oyuncunun engellerden kaçarak ilerlediği, sonsuz koşu (endless runner) tarzında geliştirilmiş bir oyundur.',
      runninggameFeaturesTitle: '✨ Özellikler',

      runninggameGroup1Title: '🏃 Karakter ve Hareket',
      runninggameFeat1_1: '🎯 Sonsuz Koşu: Karakterin durmaksızın ileriye doğru koştuğu oyun akışı.',
      runninggameFeat1_2: '🏃 Hareket Animasyonları: Karakterin zıplama, koşma ve düşme animasyonları.',
      runninggameFeat1_3: '🎮 3D Karakter ve Kontroller: 3D karakter modeli ve akıcı kontroller.',

      runninggameGroup2Title: '⚠️ Engeller, Efektler ve Ses',
      runninggameFeat2_1: '⚠️ Rastgele Engeller: Her oynayışta rastgele oluşan engeller.',
      runninggameFeat2_2: '💥 Çarpışma: Çarpışma animasyonları ve ses efektleri.',
      runninggameFeat2_3: '🎵 Arka Plan Müziği: Aksiyon dolu arka plan müziği.',
      runninggameFeat2_4: '🖱 Game Over Ekranı: "Try Again" butonuyla yeniden başlama.',

      runninggameGithubBtn: 'GitHub\'da Görüntüle',

      blackjackgameBackLink: 'Bütün Projeler',
      blackjackgameEyebrow: '// Oyun Geliştirme Projesi',
      blackjackgameTitle: 'Blackjack Game',
      blackjackgameDesc: 'Bu uygulama, animasyonlar, sesler ve etkileşimli bir arayüz içeren, C# ile yazılmış basit bir kart oyunudur.',
      blackjackgameFeaturesTitle: '✨ Özellikler',

      blackjackgameGroup1Title: '🃏 Kart ve Oyun Görselleri',
      blackjackgameFeat1_1: '🃏 Kart Animasyonları: Kart animasyonları ve kart açma efektleri.',
      blackjackgameFeat1_2: '📊 Kart Sayaçları: Kullanıcının kartlarının değerlerini gösteren sayaçlar.',
      blackjackgameFeat1_3: '🏆 Sonuç Ekranı: Oyun sonuçlarını gösteren sonuç ekranı.',

      blackjackgameGroup2Title: '🎨 Arayüz ve Etkileşim',
      blackjackgameFeat2_1: '🎯 Dinamik Fare İmleci: Oyuna özel dinamik fare imleci.',
      blackjackgameFeat2_2: '🎨 Etkileşimli Butonlar: Dinamik butonlar ve hover efektleri.',
      blackjackgameFeat2_3: '⚙️ Ayarlar Menüsü: Müzik kapatma ve ayar yapma imkanı sunan ayarlar menüsü.',

      blackjackgameGroup3Title: '🔊 Ses ve Müzik',
      blackjackgameFeat3_1: '🎵 Menü Müziği: Menü müziği ve oyun içi sesler.',
      blackjackgameFeat3_2: '🔊 Ses Efektleri: Kart ile ilgili ses efektleri.',

      blackjackgameGithubBtn: 'GitHub\'da Görüntüle',

      calculatorBackLink: 'Bütün Projeler',
      calculatorEyebrow: '// Masaüstü Uygulama Projesi',
      calculatorTitle: 'Calculator',
      calculatorDesc: 'Bu proje, C# ve Windows Forms kullanılarak geliştirilmiş basit bir hesap makinesi uygulamasıdır.',
      calculatorFeaturesTitle: '✨ Özellikler',

      calculatorGroup1Title: '➕ Hesaplama Özellikleri',
      calculatorFeat1_1: '➕ Temel İşlemler: Toplama, çıkarma, çarpma ve bölme.',
      calculatorFeat1_2: '🧮 Üs Alma ve Karekök: Üs alma ve karekök hesaplama.',
      calculatorFeat1_3: '🔢 Ondalıklı Sayılar: Virgüllü sayılarla işlem yapabilme.',

      calculatorGroup2Title: '🎨 Arayüz ve Kontrol',
      calculatorFeat2_1: '🎨 Kullanıcı Dostu Arayüz: Temiz ve kullanıcı dostu arayüz.',
      calculatorFeat2_2: '🖱️ Fare ile Kontrol: Sadece fare ile kontrol (klavye desteği yoktur).',

      calculatorGithubBtn: 'GitHub\'da Görüntüle',

      pomodoroBackLink: 'Bütün Projeler',
      pomodoroEyebrow: '// Masaüstü Uygulama Projesi',
      pomodoroTitle: 'Pomodoro App',
      pomodoroDesc: 'Bu uygulama, C# Windows Forms ile geliştirilmiş oyunlaştırılmış bir Pomodoro uygulamasıdır. Kullanıcı, odaklanarak XP kazanır, seviye atlar ve çalışma istatistiklerini takip eder.',
      pomodoroFeaturesTitle: '✨ Özellikler',

      pomodoroGroup1Title: '🎮 Oyunlaştırma ve İstatistikler',
      pomodoroFeat1_1: '📈 Seviye & XP Sistemi: Odaklandığınız her dakika için XP kazanın ve seviye atlayın!',
      pomodoroFeat1_2: '🏅 Madalya Sistemi: Belirli seviyelere ulaştıkça otomatik olarak açılan özel madalyalar.',
      pomodoroFeat1_3: '📊 Detaylı Veriler: Profilinizde "Toplam Pomodoro" ve "Toplam Odaklanma Süresi"nizi takip edin.',
      pomodoroFeat1_4: '👤 Profil Yönetimi: Kendi profil fotoğrafınızı yükleyin, değiştirin veya kaldırın.',

      pomodoroGroup2Title: '⏱️ Gelişmiş Sayaç ve Modlar',
      pomodoroFeat2_1: '🎨 Dinamik Tema Sistemi: Uygulamanın tüm arayüzü seçilen moda göre otomatik değişir:',
      pomodoroFeat2_1_1: '🔴 Pomodoro: Kırmızı/Odak Teması',
      pomodoroFeat2_1_2: '🔵 Kısa Mola: Turkuaz/Dinlenme Teması',
      pomodoroFeat2_1_3: '🟣 Uzun Mola: Mavi/Derin Dinlenme Teması',
      pomodoroFeat2_2: '⭕ Animasyonlu Arayüz: Süre azaldıkça kısalan dairesel (circular) animasyon.',
      pomodoroFeat2_3: '⏭️ Atlama Butonu: Mevcut sayacı/süreyi atlama özelliği (Ses efektli).',

      pomodoroGroup3Title: '⚙️ Özelleştirme ve Ayarlar',
      pomodoroFeat3_1: '🔧 Pomodoro Ayarları:',
      pomodoroFeat3_1_1: 'Tüm modların (Pomodoro, Kısa Mola, Uzun Mola) sürelerini istediğiniz gibi ayarlayın.',
      pomodoroFeat3_1_2: 'Auto-Play (Otomatik Başlatma) modunu açıp kapatma.',
      pomodoroFeat3_1_3: 'Uzun Mola Aralığı: Kaç Pomodoro\'da bir uzun mola verileceğini belirleyin.',
      pomodoroFeat3_2: '🛡️ Kullanıcı Ayarları:',
      pomodoroFeat3_2_1: 'Kullanıcı verilerini sıfırlama.',
      pomodoroFeat3_2_2: 'Hesabı tamamen silme.',
      pomodoroFeat3_2_3: 'Profil fotoğrafını kaldırma.',
      pomodoroFeat3_3: '🔐 Kimlik Doğrulama: LocalDB üzerinde güvenli Giriş (Login) ve Kayıt (Register) sistemi.',

      pomodoroGroup4Title: '🔊 Ses ve Kullanıcı Deneyimi',
      pomodoroFeat4_1: '🖱️ Etkileşimli Arayüz: Tüm butonlarda özel Hover (üzerine gelme) efektleri.',
      pomodoroFeat4_2: '🎵 Ses Efektleri: Buton tıklama sesleri ve süre bittiğinde çalan özel Alarm Sesi.',

      pomodoroGithubBtn: 'GitHub\'da Görüntüle',

      minesweeperBackLink: 'Bütün Projeler',
      minesweeperEyebrow: '// Masaüstü Uygulama Projesi',
      minesweeperTitle: 'Minesweeper',
      minesweeperNote: 'Bu proje bir okul projesi olarak geliştirilmiştir.',
      minesweeperDesc: 'Klasik mayın tarlası oyununun C# ile geliştirilmiş bir versiyonudur. Oyuncu, mayınlardan kaçınarak tüm güvenli kareleri açmaya çalışır.',
      minesweeperFeaturesTitle: '✨ Özellikler',

      minesweeperGroup1Title: '🎮 Oyun Mekanikleri',
      minesweeperFeat1_1: '🎚️ İki Farklı Zorluk Modu: "Kolay" ve "Zor" seçenekleri (Daha büyük harita ve daha fazla mayın).',
      minesweeperFeat1_2: '🚩 Bayrak Sistemi: Mayın olduğundan şüphelendiğiniz kutulara sağ tık ile bayrak koyma ve kaldırma.',
      minesweeperFeat1_3: '⏱️ Canlı Sayaç: Oyunu ne kadar süredir oynadığınızı gösteren anlık saniye sayacı.',

      minesweeperGroup2Title: '🔊 Ses ve Müzik',
      minesweeperFeat2_1: '🎵 Arka Plan Müziği: Ana menüde çalan atmosferik müzik.',
      minesweeperFeat2_2: '🖱️ Hücre Açma Sesi',
      minesweeperFeat2_3: '🚩 Bayrak Koyma/Kaldırma Sesi',
      minesweeperFeat2_4: '💥 Mayına Basma (Patlama) Sesi',
      minesweeperFeat2_5: '🏆 Oyunu Kazanma Sesi',

      minesweeperGroup3Title: '🖥️ Arayüz ve Kullanıcı Deneyimi',
      minesweeperFeat3_1: '❓ Yardım Menüsü: Oyun kurallarını ve nasıl oynandığını gösteren özel pencere.',
      minesweeperFeat3_2: '🖱️ Akıcı Arayüz: Etkileşimli kutucuklar ve kullanıcı dostu tasarım.',

      minesweeperGithubBtn: 'GitHub\'da Görüntüle',

      gamelauncherBackLink: 'Bütün Projeler',
      gamelauncherEyebrow: '// Masaüstü Uygulama Projesi',
      gamelauncherTitle: 'Game Launcher',
      gamelauncherDesc: 'Kullanıcının bilgisayarındaki oyunları tek bir arayüzden görüntüleyip başlatabildiği bir masaüstü oyun başlatıcı uygulamasıdır.',
      gamelauncherFeaturesTitle: '✨ Özellikler',

      gamelauncherGroup1Title: '🎮 Oyun Yönetimi',
      gamelauncherFeat1_1: '🎮 Oyun Ekleme ve Silme: Kütüphanenize istediğiniz oyunları kolayca ekleyin veya kaldırın.',
      gamelauncherFeat1_2: '▶️ Doğrudan Çalıştırma: Eklenen oyunları uygulamadan çıkmadan tek tıkla başlatın.',
      gamelauncherFeat1_3: '⚙️ Hata Yönetimi: Hatalı işlemlerde kullanıcıyı bilgilendiren uyarı ve hata mesajları.',

      gamelauncherGroup2Title: '💾 Veri Saklama ve Arayüz',
      gamelauncherFeat2_1: '💾 Kalıcı Kayıt: Eklenen oyunlar uygulama kapatıldığında silinmez, kayıtlı kalır.',
      gamelauncherFeat2_2: '✨ Modern Arayüz: Hover efektleri ve animasyonlu modern butonlar.',
      gamelauncherFeat2_3: '📁 Yerel Depolama: Tüm oyun bilgileri, Belgelerim klasöründe "GameLauncher" adında bir klasörde saklanır.',

      gamelauncherGithubBtn: 'GitHub\'da Görüntüle',

      musicplayerBackLink: 'Bütün Projeler',
      musicplayerEyebrow: '// Masaüstü Uygulama Projesi',
      musicplayerTitle: 'Music Player',
      musicplayerDesc: 'Yerel müzik dosyalarını çalabilen, çalma listesi oluşturma ve temel ses kontrollerine sahip bir masaüstü müzik oynatıcısıdır.',
      musicplayerFeaturesTitle: '✨ Özellikler',

      musicplayerGroup1Title: '📂 Çalma Listesi Yönetimi',
      musicplayerFeat1_1: '📂 Playlist Ekleme ve Silme: İstediğiniz kadar çalma listesi oluşturun veya kaldırın.',
      musicplayerFeat1_2: '🖼️ Özel Kapak Resmi: Playlistlere bilgisayarınızdan özel resim ekleyin.',
      musicplayerFeat1_3: '🎶 Şarkı Ekleme ve Silme: Playlistlerinize şarkı ekleyin veya çıkarın.',

      musicplayerGroup2Title: '🎵 Oynatma Kontrolleri',
      musicplayerFeat2_1: '▶️ Temel Kontroller: Şarkıyı oynatma, durdurma, sonraki/önceki şarkıya geçme.',
      musicplayerFeat2_2: '⏩ İleri/Geri Sarma: Şarkı içinde istediğiniz noktaya sarın.',
      musicplayerFeat2_3: '⏱ Süre Göstergesi: Şarkının kalan süresini ve toplam süresini görün.',
      musicplayerFeat2_4: '🔊 Ses Barı: Tamamen sessize alma ve tıklayarak ses seviyesini ayarlama.',

      musicplayerGroup3Title: '✨ Arayüz ve Kalıcılık',
      musicplayerFeat3_1: '✨ Modern Arayüz: Hover ve buton büyüme efektleriyle akıcı bir kullanıcı deneyimi.',
      musicplayerFeat3_2: '💾 Kalıcı Veri: Playlistler ve şarkılar, program kapatıldığında silinmez, kayıtlı kalır.',

      musicplayerGithubBtn: 'GitHub\'da Görüntüle',

      loginformappBackLink: 'Bütün Projeler',
      loginformappEyebrow: '// Masaüstü Uygulama Projesi',
      loginformappTitle: 'Login Form App',
      loginformappDesc: 'Bu proje, Windows Forms kullanarak basit ve şık bir giriş ve kayıt sistemi oluşturmayı içeriyor.',
      loginformappFeaturesTitle: '✨ Özellikler',

      loginformappGroup1Title: '🔐 Giriş ve Kayıt Sistemi',
      loginformappFeat1_1: '🔐 Şifre Gizleme/Gösterme: Şifre alanının içeriğini gizleme veya gösterme özelliği.',
      loginformappFeat1_2: '🗂️ Basit Veri Saklama: Kullanıcı bilgileri "users.txt" dosyasında saklanır.',
      loginformappFeat1_3: '✅ Kullanıcı Adı Kontrolü: Kayıt sırasında kullanıcı adının daha önce alınıp alınmadığı kontrol edilir.',

      loginformappGroup2Title: '🎨 Arayüz ve Kullanıcı Deneyimi',
      loginformappFeat2_1: '🖱️ Hover Efektleri: Butonlarda ve etiketlerde üzerine gelme (hover) efektleri.',
      loginformappFeat2_2: '🎨 Modern ve Sade Tasarım: Modern ve sade bir arayüz tasarımı.',

      loginformappGithubBtn: 'GitHub\'da Görüntüle',

      dicegameBackLink: 'Bütün Projeler',
      dicegameEyebrow: '// Masaüstü Uygulama Projesi',
      dicegameTitle: 'Dice Game',
      dicegameDesc: 'Bu proje, C# ve Windows Forms kullanılarak geliştirilmiş basit bir zar oyunu uygulamasıdır.',
      dicegameFeaturesTitle: '✨ Özellikler',

      dicegameGroup1Title: '🎲 Oyun Mekanikleri ve Görseller',
      dicegameFeat1_1: '🎲 Zar Atma Animasyonu: Zar atışlarında akıcı animasyon.',
      dicegameFeat1_2: '🎯 Oyuna Özel Fare İmleci: Oyun temasına uygun özel imleç tasarımı.',
      dicegameFeat1_3: '🖱️ Dinamik Temalı İmleç: Oyun içinde imleç tasarımı dinamik olarak değişir.',
      dicegameFeat1_4: '🎨 Hover Efektleri: Butonlarda hover efektleriyle görsel zenginlik.',

      dicegameGroup2Title: '🔊 Ses ve Navigasyon',
      dicegameFeat2_1: '🎵 Arka Plan Müziği: Ana menüde çalan arka plan müziği.',
      dicegameFeat2_2: '🔊 Ses Efektleri: Zar atma ve buton etkileşim ses efektleri.',
      dicegameFeat2_3: '🔄 Kolay Navigasyon: Kullanımı kolay ana menü navigasyonu.',

      dicegameGithubBtn: 'GitHub\'da Görüntüle',

      bombdodgegameBackLink: 'Bütün Projeler',
      bombdodgegameEyebrow: '// Masaüstü Uygulama Projesi',
      bombdodgegameTitle: 'Bomb Dodge Game',
      bombdodgegameNote: 'Bu, benim ilk C# projem olduğu için çok temel düzeydedir.',
      bombdodgegameDesc: 'Bu uygulama C# ile yapılmış, düşen bombalardan kaçınma temalı basit bir oyundur.',
      bombdodgegameFeaturesTitle: '✨ Özellikler',

      bombdodgegameGroup1Title: '🎮 Oyun Mekanikleri',
      bombdodgegameFeat1_1: '⌨️ Klavye Kontrolü: A-D tuşlarıyla karakter kontrolü.',
      bombdodgegameFeat1_2: '🎲 Rastgele Bomba Düşmesi',
      bombdodgegameFeat1_3: '📦 Çarpışma Algılama Sistemi',

      bombdodgegameGroup2Title: '🖥️ Arayüz',
      bombdodgegameFeat2_1: '🚫 "Game Over" Ekranı',

      bombdodgegameGithubBtn: 'GitHub\'da Görüntüle'
    },

    en: {
      navLogo: 'Özgür Kadakal',
      navHome: 'Home',
      navProjects: 'Projects',
      navAbout: 'About',
      navContact: 'Contact',

      heroEyebrow: '// Welcome',
      heroTitle: 'Özgür Kadakal Personal Portfolio',
      heroText: 'This is a personal portfolio platform that brings together my projects, experiments, and technical work in the fields of backend systems, game development, and software engineering.',
      heroBtnProjects: 'View my projects',
      heroBtnContact: 'Get in touch',
      heroQuote: 'It is not enough for code to work. Code should be clean, understandable, and built to last.',
      heroQuoteAuthor: '— Robert C. Martin (Uncle Bob)',

      projectsEyebrow: '// My Featured Projects',
      projectsTitle: 'Featured Projects',
      projectsSubtitle: 'Two projects I\'ve spent the most time on and learned the most from.',
      project1Tag: 'Windows Desktop Game',
      project1Title: 'Attack Game',
      project1Desc: 'This is a samurai-themed combat game developed with Unity. The player tries to survive by killing enemies with a katana. The game ends when the character dies.',
      project2Tag: 'Windows Desktop App',
      project2Title: 'Pomodoro App',
      project2Desc: 'This application is a gamified Pomodoro application developed with C# Windows Forms. The user tracks XP gains, level progression, and progress statistics by focusing on the task.',
      projectLink: 'View details →',

      aboutEyebrow: '// Hello!',
      aboutTitle: 'I\'m Özgür Kadakal',
      aboutText1: 'Hello! I\'m Özgür Kadakal, a software engineering student who creates projects driven by my passion for software development and technology. I constantly strive to improve my problem-solving skills and learn about new technologies. My goal is to add value to software projects with creative and effective solutions and to develop my professional skills.',
      aboutText2: 'Currently, I\'m focusing on developing my skills in backend systems, clean code principles, and software architecture. In my free time, I work on personal projects, explore open-source projects, and enjoy experimenting with new technologies.',
      aboutFact1Label: 'Education',
      aboutFact1Value: 'Software Engineering, 3rd Year Student',
      aboutFact2Label: 'Areas I want to specialize in',
      aboutFact2Value: 'Backend & Software Architecture',
      aboutFact3Label: 'Approach',
      aboutFact3Value: 'Clean code, performance and sustainable software',
      aboutBtn: 'More →',
      aboutPhotoCaption: 'your photo here',

      projectsViewAllBtn: 'View All Projects',

      projectsPageEyebrow: '// My Projects',
      projectsPageTitle: 'All My Projects',
      projectsPageSubtitle: 'The projects I\'ve built, ordered from newest to oldest.',

      projList1Title: 'VaultNet - Secure Vault API',
      projList1Tag: 'Backend API Project',
      projList1Desc: 'VaultNet is a backend API project with layers of authentication and encryption that ensures secure storage of sensitive data.',

      projList2Title: 'Pomodoro App',
      projList2Tag: 'Windows Desktop App',
      projList2Desc: 'This application is a gamified Pomodoro application developed with C# Windows Forms. The user tracks XP gains, level progression, and progress statistics by focusing on the task.',

      projList3Title: 'Minesweeper',
      projList3Tag: 'Windows Desktop Game',
      projList3Desc: 'A C#-built version of the classic Minesweeper game. The player tries to reveal all safe tiles while avoiding hidden mines.',

      projList4Title: 'Game Launcher',
      projList4Tag: 'Windows Desktop App',
      projList4Desc: 'A desktop game launcher application that lets users view and start their installed games from a single interface.',

      projList5Title: 'Music Player',
      projList5Tag: 'Windows Desktop App',
      projList5Desc: 'A desktop music player that plays local audio files, supports playlist creation, and includes basic playback controls.',

      projList6Title: 'Attack Game',
      projList6Tag: 'Windows Desktop Game',
      projList6Desc: 'This is a samurai-themed combat game developed with Unity. The player tries to survive by killing enemies with a katana. The game ends when the character dies.',

      projList7Title: 'Car Drive Game',
      projList7Tag: 'Windows Desktop Game',
      projList7Desc: 'An endless driving game in one-way traffic, developed with Unity.',

      projList8Title: 'Running Game',
      projList8Tag: 'Windows Desktop Game',
      projList8Desc: 'An endless runner style game where the player advances by dodging obstacles.',

      projList9Title: 'BlackJack Game',
      projList9Tag: 'Windows Desktop Game',
      projList9Desc: 'This application is a simple card game written in C#, featuring animations, sounds, and an interactive interface.',

      projList10Title: 'Calculator',
      projList10Tag: 'Windows Desktop App',
      projList10Desc: 'This project is a simple calculator application developed using C# and Windows Forms.',

      projList11Title: 'Login Form App',
      projList11Tag: 'Windows Desktop App',
      projList11Desc: 'This project involves creating a simple and elegant login and registration system using Windows Forms.',

      projList12Title: 'Dice Game',
      projList12Tag: 'Windows Desktop Game',
      projList12Desc: 'This project is a simple dice game application developed using C# and Windows Forms.',

      projList13Title: 'Bomb Dodge Game',
      projList13Tag: 'Windows Desktop Game',
      projList13Desc: 'This application is a simple game made in C# based on avoiding falling bombs. (Also, this is my first C# project, so it\'s at a very basic level.)',

      footerText: '© Özgür Kadakal - All Rights Reserved.',

      themeToggleTitle: 'Theme',
      settingsToggleTitle: 'Settings',
      heroScrollDownTitle: 'Scroll down',

      settingsCursorTrail: 'Cursor Trail Effect',
      settingsCursorTrailDesc: 'Choose the effect that follows your cursor',
      trailModeOff: 'Off',
      trailModeDots: 'Dot Trail',
      trailModeLine: 'Line Trail',

      statProjects: '13',
      statProjectsLabel: 'Total Projects',
      statTech: '250+',
      statTechLabel: 'Total Commits',
      statYears: '2+',
      statYearsLabel: 'Years of Experience',

      contactEyebrow: '// Contact',
      contactTitle: "Contact Me",
      contactText: "Do you have a project idea, a collaboration proposal, or just want to say hello? You can reach me through the channels below.",
      contactEmailTitle: 'Email',
      contactGithubTitle: 'GitHub',
      contactInstagramTitle: 'Instagram',
      contactCopyBtn: 'Copy',
      contactCopiedBtn: 'Copied',
      contactGoBtn: 'Visit link',

      aboutPageEyebrow: '// About Me',
      aboutPageTitle: "Özgür Kadakal",
      aboutPageGreeting: 'Hello! 👋',
      aboutPageIntro: "Hello! My name is Özgür Kadakal, I am 19 years old and a 3rd year Software Engineering student. Thanks to my passion for coding, I started working with software before school and I continue to improve myself. My goal is to add value to software projects with creative and effective solutions and to develop my professional skills.",
      aboutPageShortBio: "Hello! I'm Özgür Kadakal, a software engineering student who creates projects driven by my passion for software development and technology. I constantly strive to improve my problem-solving skills and learn about new technologies.",
      aboutPageContactBtn: 'Get in touch with me',
      aboutEmailBtn: 'Send Email',

      aboutInfoEduUni: 'University Name',
      aboutInfoEduDate: '2024 – Present',
      aboutInfoPersonalTitle: 'Personal Information',
      aboutInfoNameLabel: 'Full Name',
      aboutInfoNameValue: 'Özgür Kadakal',
      aboutInfoAgeLabel: 'Age',
      aboutInfoAgeValue: '19',
      aboutInfoLocationLabel: 'Location',
      aboutInfoLocationValue: 'Turkey',

      aboutInterestsTitle: 'My Interests',
      aboutInterest1: 'Traveling',
      aboutInterest2: 'Listening to Music',
      aboutInterest3: 'Playing Games',
      aboutInterest4: 'Walking',
      aboutInterest5: 'Watching Movies',
      aboutInterest6: 'Model Making',

      skillsEyebrow: '// My Skills',
      skillsTitle: 'Technical Skills',
      skillsSubtitle: 'Languages, technologies, and tools I frequently use in the projects I work on.',
      skillCatLanguages: 'Programming Languages',
      skillCatLanguagesDesc: 'Languages ​​I use in software development',
      skillCatBackend: 'Backend Technologies',
      skillCatBackendDesc: 'Technologies I use in backend development',
      skillCatFrontend: 'Frontend Technologies',
      skillCatFrontendDesc: 'Technologies I use in interface development',
      skillCatDatabases: 'Database Technologies',
      skillCatDatabasesDesc: 'Technologies I use for data organization',
      skillCatGameDev: 'Game Development Technologies',
      skillCatGameDevDesc: 'Technologies I use in game projects',
      skillCatVersionControl: 'Version Control Technologies',
      skillCatVersionControlDesc: 'The tools I use for code management',
      skillCatTools: 'Development Tools',
      skillCatToolsDesc: 'Tools I use in the development process',
      skillCatOther: 'Other Tools and Technologies',
      skillCatOtherDesc: 'Other technologies I use in my projects',

      aboutCtaTitle: 'Do you have a project idea, a collaboration proposal, or just want to say hello?',
      aboutCtaText: "You can contact me using the addresses on the contact page.",
      aboutCtaBtn: 'Get in Touch',

      settingsBgAnim: 'Background Animation',
      settingsBgAnimDesc: 'Toggle the animated background on or off',

      vaultnetBackLink: 'All Projects',
      vaultnetEyebrow: '// Backend API Project',
      vaultnetTitle: 'VaultNet - Secure Vault API',
      vaultnetDesc: 'VaultNet is a backend API project that securely stores sensitive data through authentication and encryption layers. JWT-based authorization protects the endpoints, and user data is processed with a layered security architecture.',
      vaultnetFeaturesTitle: '✨ Features',

      vaultnetGroup1Title: '🔐 Authentication & Security',
      vaultnetFeat1_1: '🛡️ JWT Authentication: Secure token-based login system.',
      vaultnetFeat1_2: '🔑 Password Hashing: Passwords are stored securely with BCrypt.',
      vaultnetFeat1_3: '🧾 Claim-Based Identity: User information is managed through JWT.',
      vaultnetFeat1_4: '🔒 Data Encryption: Sensitive data is encrypted with AES-256 (Data Protection API).',

      vaultnetGroup2Title: '📦 Vault Management',
      vaultnetFeat2_1: '➕ Add Entry: Store sensitive data such as passwords and notes.',
      vaultnetFeat2_2: '✏️ Update: Edit existing entries.',
      vaultnetFeat2_3: '❌ Delete: Secure deletion by the authorized user.',
      vaultnetFeat2_4: '📂 My Data: List only the data belonging to the user.',

      vaultnetGroup3Title: '👤 User System',
      vaultnetFeat3_1: '📝 Sign Up: Create a new user.',
      vaultnetFeat3_2: '🔐 Sign In: Obtain a JWT token.',
      vaultnetFeat3_3: '📧 Unique Email Check',
      vaultnetFeat3_4: '👁️ Profile Info: Retrieve user info via claims.',

      vaultnetGroup4Title: '⚙️ Backend Architecture',
      vaultnetFeat4_1: '🧩 Layered Architecture: Controller → Service → Data layer separation.',
      vaultnetFeat4_2: '🔄 Dependency Injection',
      vaultnetFeat4_3: '🗄️ Entity Framework Core',
      vaultnetFeat4_4: '🌐 Global Exception Handling',
      vaultnetFeat4_5: '⚡ Async Programming',

      vaultnetGithubBtn: 'View on GitHub',

      attackgameBackLink: 'All Projects',
      attackgameEyebrow: '// Game Development Project',
      attackgameTitle: 'Attack Game',
      attackgameDesc: 'This game is a samurai-themed battle game developed with Unity. The player tries to survive by killing enemies with a katana. The game ends when the character dies.',
      attackgameFeaturesTitle: '✨ Features',

      attackgameGroup1Title: '⚔️ Combat & Movement System',
      attackgameFeat1_1: '⚔️ Sword Attacks: Katana attacks to defeat enemies.',
      attackgameFeat1_2: '🏃 Movement Animations: Walking and running animations.',
      attackgameFeat1_3: '🍷 Potion Drinking Animation: A dedicated animation for drinking a health potion.',
      attackgameFeat1_4: '⚡ Special Attacks: Timed (cooldown-based) special attack abilities.',

      attackgameGroup2Title: '🎮 Game Loop & Controls',
      attackgameFeat2_1: '🩸 Game Over Sequence: Death and Game Over flow triggered when the player dies.',
      attackgameFeat2_2: '🏁 Game Over Screen: An end screen supported by a sound effect.',
      attackgameFeat2_3: '⏸ Pause: Pause the game with the ESC key.',
      attackgameFeat2_4: '🎹 Key Info: Control key info displayed in the ESC menu.',

      attackgameGroup3Title: '❤️ Health & HUD',
      attackgameFeat3_1: '❤️ Health Bar: A bar showing the player\'s current health.',
      attackgameFeat3_2: '🎯 Score Indicator: An indicator showing the player\'s score.',
      attackgameFeat3_3: '🩺 Potion Counter: An indicator of the number of health potions held.',
      attackgameFeat3_4: '🛡 Enemy Health Indicator: A separate health indicator for each enemy.',
      attackgameFeat3_5: '💖 Potion Drops: Enemies have a chance to drop health potions, restoring health when consumed.',

      attackgameGroup4Title: '🔊 Sound & Music',
      attackgameFeat4_1: '🔊 Sound Effects: Attack, death, walking, running, and potion-drinking sounds.',
      attackgameFeat4_2: '🎵 Background Music: Music playing throughout the game.',

      attackgameGithubBtn: 'View on GitHub',

      cardrivegameBackLink: 'All Projects',
      cardrivegameEyebrow: '// Game Development Project',
      cardrivegameTitle: 'Car Drive Game',
      cardrivegameDesc: 'An endless driving game with one-way traffic, developed with Unity.',
      cardrivegameFeaturesTitle: '✨ Features',

      cardrivegameGroup1Title: '🛣 Road & Game Loop',
      cardrivegameFeat1_1: '🛣 Endless Road: A never-ending, one-way road system.',
      cardrivegameFeat1_2: '🚘 Traffic & Speed: Continuously spawning cars with gradually increasing speed.',
      cardrivegameFeat1_3: '🏁 Game Over Screen: Restart with a "Try Again" button after a crash.',
      cardrivegameFeat1_4: '⏸ Pause: Pause the game with the ESC key.',

      cardrivegameGroup2Title: '🛞 Driving, Effects & Sound',
      cardrivegameFeat2_1: '💨 Drift Effect: Visual tire smoke effect while drifting.',
      cardrivegameFeat2_2: '🛞 Tire Animations: Realistic tire rotation and tire marks on the asphalt.',
      cardrivegameFeat2_3: '🎮 Smooth Controls: Responsive and smooth car driving controls.',
      cardrivegameFeat2_4: '🔊 Sound Effects: Engine, brake, and drift sounds.',

      cardrivegameGithubBtn: 'View on GitHub',

      runninggameBackLink: 'All Projects',
      runninggameEyebrow: '// Game Development Project',
      runninggameTitle: 'Running Game',
      runninggameDesc: 'An endless runner style game in which the player progresses by dodging obstacles.',
      runninggameFeaturesTitle: '✨ Features',

      runninggameGroup1Title: '🏃 Character & Movement',
      runninggameFeat1_1: '🎯 Endless Running: Gameplay where the character runs forward continuously.',
      runninggameFeat1_2: '🏃 Movement Animations: Jumping, running, and falling animations for the character.',
      runninggameFeat1_3: '🎮 3D Character & Controls: A 3D character model with smooth controls.',

      runninggameGroup2Title: '⚠️ Obstacles, Effects & Sound',
      runninggameFeat2_1: '⚠️ Random Obstacles: Randomly generated obstacles in every playthrough.',
      runninggameFeat2_2: '💥 Collision: Collision animations and sound effects.',
      runninggameFeat2_3: '🎵 Background Music: Action-packed background music.',
      runninggameFeat2_4: '🖱 Game Over Screen: Restart with a "Try Again" button.',

      runninggameGithubBtn: 'View on GitHub',

      blackjackgameBackLink: 'All Projects',
      blackjackgameEyebrow: '// Game Development Project',
      blackjackgameTitle: 'Blackjack Game',
      blackjackgameDesc: 'This application is a simple card game written in C#, featuring animations, sounds, and an interactive interface.',
      blackjackgameFeaturesTitle: '✨ Features',

      blackjackgameGroup1Title: '🃏 Cards & Visuals',
      blackjackgameFeat1_1: '🃏 Card Animations: Card animations and card-flip effects.',
      blackjackgameFeat1_2: '📊 Card Counters: Counters showing the values of the player\'s cards.',
      blackjackgameFeat1_3: '🏆 Result Screen: A result screen displaying the outcome of the game.',

      blackjackgameGroup2Title: '🎨 Interface & Interaction',
      blackjackgameFeat2_1: '🎯 Dynamic Cursor: A custom dynamic mouse cursor for the game.',
      blackjackgameFeat2_2: '🎨 Interactive Buttons: Dynamic buttons with hover effects.',
      blackjackgameFeat2_3: '⚙️ Settings Menu: A settings menu to mute music and adjust options.',

      blackjackgameGroup3Title: '🔊 Sound & Music',
      blackjackgameFeat3_1: '🎵 Menu Music: Menu music and in-game sounds.',
      blackjackgameFeat3_2: '🔊 Sound Effects: Card-related sound effects.',

      blackjackgameGithubBtn: 'View on GitHub',

      calculatorBackLink: 'All Projects',
      calculatorEyebrow: '// Desktop Application Project',
      calculatorTitle: 'Calculator',
      calculatorDesc: 'This project is a simple calculator application developed using C# and Windows Forms.',
      calculatorFeaturesTitle: '✨ Features',

      calculatorGroup1Title: '➕ Calculation Features',
      calculatorFeat1_1: '➕ Basic Operations: Addition, subtraction, multiplication, and division.',
      calculatorFeat1_2: '🧮 Exponents & Square Root: Exponentiation and square root calculation.',
      calculatorFeat1_3: '🔢 Decimal Numbers: Ability to perform operations with decimal numbers.',

      calculatorGroup2Title: '🎨 Interface & Control',
      calculatorFeat2_1: '🎨 User-Friendly Interface: A clean and user-friendly interface.',
      calculatorFeat2_2: '🖱️ Mouse-Only Control: Controlled only with the mouse (no keyboard support).',

      calculatorGithubBtn: 'View on GitHub',

      pomodoroBackLink: 'All Projects',
      pomodoroEyebrow: '// Desktop Application Project',
      pomodoroTitle: 'Pomodoro App',
      pomodoroDesc: 'This application is a gamified Pomodoro application developed with C# Windows Forms. The user tracks XP gains, level progression, and progress statistics by focusing on the task.',
      pomodoroFeaturesTitle: '✨ Features',

      pomodoroGroup1Title: '🎮 Gamification & Statistics',
      pomodoroFeat1_1: '📈 Level & XP System: Earn XP for every minute you focus and level up!',
      pomodoroFeat1_2: '🏅 Medal System: Special medals that unlock automatically as you reach certain levels.',
      pomodoroFeat1_3: '📊 Detailed Stats: Track your "Total Pomodoros" and "Total Focus Time" on your profile.',
      pomodoroFeat1_4: '👤 Profile Management: Upload, change, or remove your own profile picture.',

      pomodoroGroup2Title: '⏱️ Advanced Timer & Modes',
      pomodoroFeat2_1: '🎨 Dynamic Theme System: The entire interface automatically changes based on the selected mode:',
      pomodoroFeat2_1_1: '🔴 Pomodoro: Red/Focus Theme',
      pomodoroFeat2_1_2: '🔵 Short Break: Turquoise/Rest Theme',
      pomodoroFeat2_1_3: '🟣 Long Break: Blue/Deep Rest Theme',
      pomodoroFeat2_2: '⭕ Animated Interface: A circular animation that shrinks as time runs out.',
      pomodoroFeat2_3: '⏭️ Skip Button: Skip the current timer/session (with sound effect).',

      pomodoroGroup3Title: '⚙️ Customization & Settings',
      pomodoroFeat3_1: '🔧 Pomodoro Settings:',
      pomodoroFeat3_1_1: 'Customize the duration of all modes (Pomodoro, Short Break, Long Break) as you like.',
      pomodoroFeat3_1_2: 'Turn Auto-Play mode on or off.',
      pomodoroFeat3_1_3: 'Long Break Interval: Decide how many Pomodoros pass before a long break.',
      pomodoroFeat3_2: '🛡️ User Settings:',
      pomodoroFeat3_2_1: 'Reset user data.',
      pomodoroFeat3_2_2: 'Delete the account entirely.',
      pomodoroFeat3_2_3: 'Remove profile picture.',
      pomodoroFeat3_3: '🔐 Authentication: Secure Login and Register system on LocalDB.',

      pomodoroGroup4Title: '🔊 Sound & User Experience',
      pomodoroFeat4_1: '🖱️ Interactive Interface: Custom hover effects on all buttons.',
      pomodoroFeat4_2: '🎵 Sound Effects: Button click sounds and a special alarm sound when the timer ends.',

      pomodoroGithubBtn: 'View on GitHub',

      minesweeperBackLink: 'All Projects',
      minesweeperEyebrow: '// Desktop Application Project',
      minesweeperTitle: 'Minesweeper',
      minesweeperNote: 'This project was developed as a school project.',
      minesweeperDesc: 'A C#-built version of the classic Minesweeper game. The player tries to reveal all safe tiles while avoiding hidden mines.',
      minesweeperFeaturesTitle: '✨ Features',

      minesweeperGroup1Title: '🎮 Gameplay Mechanics',
      minesweeperFeat1_1: '🎚️ Two Difficulty Modes: "Easy" and "Hard" options (larger board and more mines).',
      minesweeperFeat1_2: '🚩 Flag System: Right-click to place or remove a flag on tiles you suspect contain a mine.',
      minesweeperFeat1_3: '⏱️ Live Timer: A live second counter showing how long you have been playing.',

      minesweeperGroup2Title: '🔊 Sound & Music',
      minesweeperFeat2_1: '🎵 Background Music: Atmospheric music playing in the main menu.',
      minesweeperFeat2_2: '🖱️ Cell Reveal Sound',
      minesweeperFeat2_3: '🚩 Flag Place/Remove Sound',
      minesweeperFeat2_4: '💥 Mine Hit (Explosion) Sound',
      minesweeperFeat2_5: '🏆 Game Won Sound',

      minesweeperGroup3Title: '🖥️ Interface & User Experience',
      minesweeperFeat3_1: '❓ Help Menu: A dedicated window showing the game rules and how to play.',
      minesweeperFeat3_2: '🖱️ Smooth Interface: Interactive tiles and a user-friendly design.',

      minesweeperGithubBtn: 'View on GitHub',

      gamelauncherBackLink: 'All Projects',
      gamelauncherEyebrow: '// Desktop Application Project',
      gamelauncherTitle: 'Game Launcher',
      gamelauncherDesc: 'A desktop game launcher application that lets users view and start their installed games from a single interface.',
      gamelauncherFeaturesTitle: '✨ Features',

      gamelauncherGroup1Title: '🎮 Game Management',
      gamelauncherFeat1_1: '🎮 Add & Remove Games: Easily add or remove games from your library.',
      gamelauncherFeat1_2: '▶️ Direct Launch: Start added games with a single click, right from the app.',
      gamelauncherFeat1_3: '⚙️ Error Handling: Warning and error messages that keep the user informed when something goes wrong.',

      gamelauncherGroup2Title: '💾 Data Storage & Interface',
      gamelauncherFeat2_1: '💾 Persistent Library: Added games are not removed when the app closes; they stay saved.',
      gamelauncherFeat2_2: '✨ Modern Interface: Hover effects and animated modern buttons.',
      gamelauncherFeat2_3: '📁 Local Storage: All game data is stored in a "GameLauncher" folder inside My Documents.',

      gamelauncherGithubBtn: 'View on GitHub',

      musicplayerBackLink: 'All Projects',
      musicplayerEyebrow: '// Desktop Application Project',
      musicplayerTitle: 'Music Player',
      musicplayerDesc: 'A desktop music player that plays local audio files, supports playlist creation, and includes basic playback controls.',
      musicplayerFeaturesTitle: '✨ Features',

      musicplayerGroup1Title: '📂 Playlist Management',
      musicplayerFeat1_1: '📂 Add & Remove Playlists: Create or remove as many playlists as you like.',
      musicplayerFeat1_2: '🖼️ Custom Cover Art: Add a custom image to a playlist from your computer.',
      musicplayerFeat1_3: '🎶 Add & Remove Songs: Add or remove songs from your playlists.',

      musicplayerGroup2Title: '🎵 Playback Controls',
      musicplayerFeat2_1: '▶️ Basic Controls: Play, stop, and skip to the next/previous song.',
      musicplayerFeat2_2: '⏩ Seek Forward/Backward: Jump to any point within a song.',
      musicplayerFeat2_3: '⏱ Time Display: See the remaining and total duration of the song.',
      musicplayerFeat2_4: '🔊 Volume Bar: Fully mute or adjust the volume by clicking.',

      musicplayerGroup3Title: '✨ Interface & Persistence',
      musicplayerFeat3_1: '✨ Modern Interface: A smooth experience with hover and button-grow effects.',
      musicplayerFeat3_2: '💾 Persistent Data: Playlists and songs are not removed when the app closes; they stay saved.',

      musicplayerGithubBtn: 'View on GitHub',

      loginformappBackLink: 'All Projects',
      loginformappEyebrow: '// Desktop Application Project',
      loginformappTitle: 'Login Form App',
      loginformappDesc: 'This project involves creating a simple and elegant login and registration system using Windows Forms.',
      loginformappFeaturesTitle: '✨ Features',

      loginformappGroup1Title: '🔐 Login & Registration System',
      loginformappFeat1_1: '🔐 Show/Hide Password: Toggle the visibility of the password field.',
      loginformappFeat1_2: '🗂️ Simple Data Storage: User information is stored in a "users.txt" file.',
      loginformappFeat1_3: '✅ Username Duplicate Check: Checks whether a username is already taken during registration.',

      loginformappGroup2Title: '🎨 Interface & User Experience',
      loginformappFeat2_1: '🖱️ Hover Effects: Hover effects on buttons and labels.',
      loginformappFeat2_2: '🎨 Modern & Clean Design: A modern and clean interface design.',

      loginformappGithubBtn: 'View on GitHub',

      dicegameBackLink: 'All Projects',
      dicegameEyebrow: '// Desktop Application Project',
      dicegameTitle: 'Dice Game',
      dicegameDesc: 'This project is a simple dice game application developed using C# and Windows Forms.',
      dicegameFeaturesTitle: '✨ Features',

      dicegameGroup1Title: '🎲 Game Mechanics & Visuals',
      dicegameFeat1_1: '🎲 Dice Roll Animation: Smooth animation for dice rolls.',
      dicegameFeat1_2: '🎯 Custom Game Cursor: A custom cursor design that fits the game theme.',
      dicegameFeat1_3: '🖱️ Dynamic Themed Cursor: The cursor design changes dynamically within the game.',
      dicegameFeat1_4: '🎨 Hover Effects: Visual richness with hover effects on buttons.',

      dicegameGroup2Title: '🔊 Sound & Navigation',
      dicegameFeat2_1: '🎵 Background Music: Background music playing in the main menu.',
      dicegameFeat2_2: '🔊 Sound Effects: Dice roll and button interaction sound effects.',
      dicegameFeat2_3: '🔄 Easy Navigation: Easy-to-use main menu navigation.',

      dicegameGithubBtn: 'View on GitHub',

      bombdodgegameBackLink: 'All Projects',
      bombdodgegameEyebrow: '// Desktop Application Project',
      bombdodgegameTitle: 'Bomb Dodge Game',
      bombdodgegameNote: 'This is my first C# project, so it is at a very basic level.',
      bombdodgegameDesc: 'This application is a simple game made in C# based on avoiding falling bombs.',
      bombdodgegameFeaturesTitle: '✨ Features',

      bombdodgegameGroup1Title: '🎮 Game Mechanics',
      bombdodgegameFeat1_1: '⌨️ Keyboard Control: Character control using the A-D keys.',
      bombdodgegameFeat1_2: '🎲 Random Bomb Drops',
      bombdodgegameFeat1_3: '📦 Collision Detection System',

      bombdodgegameGroup2Title: '🖥️ Interface',
      bombdodgegameFeat2_1: '🚫 "Game Over" Screen',

      bombdodgegameGithubBtn: 'View on GitHub'
    }
  };

  const STORAGE_KEYS = {
    theme: 'portfolio-theme',
    lang: 'portfolio-lang',
    cursorTrail: 'portfolio-cursor-trail',
    cursorTrailVersion: 'portfolio-cursor-trail-v',
    bgAnim: 'portfolio-bg-anim'
  };

  // Fare izi formatı v3'te "on/off" yerine "off/dots/line" oldu.
  // Eski sürümden kalan uyumsuz kaydı bir kerelik temizler,
  // böylece daha önce test eden tarayıcılarda da doğru varsayılan uygulanır.
  (function migrateCursorTrailDefault() {
    const CURRENT_VERSION = '3';
    const storedVersion = localStorage.getItem(STORAGE_KEYS.cursorTrailVersion);
    if (storedVersion !== CURRENT_VERSION) {
      localStorage.removeItem(STORAGE_KEYS.cursorTrail);
      localStorage.setItem(STORAGE_KEYS.cursorTrailVersion, CURRENT_VERSION);
    }
  })();


  /* ============================================================
     2. TEMA (DARK / LIGHT) YÖNETİMİ
     ============================================================ */
  const themeToggleBtn = document.getElementById('themeToggle');
  const rootElement = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'dark') {
      rootElement.setAttribute('data-theme', 'dark');
    } else {
      rootElement.removeAttribute('data-theme');
    }
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  }

  function toggleTheme() {
    const isDark = rootElement.getAttribute('data-theme') === 'dark';
    applyTheme(isDark ? 'light' : 'dark');
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);

    if (savedTheme) {
      applyTheme(savedTheme);
      return;
    }

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(systemPrefersDark ? 'dark' : 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }


  /* ============================================================
     3. DİL YÖNETİMİ (TR / EN)
     ============================================================ */
  const langButtons = document.querySelectorAll('.lang-switch__btn');
  const langSwitchEl = document.getElementById('langSwitch');

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.tr;
    const elements = document.querySelectorAll('[data-i18n]');

    const isFirstLoad = rootElement.classList.contains('lang-not-ready') || !window.__langInitialized;
    window.__langInitialized = true;

    rootElement.classList.remove('pref-lang-tr', 'pref-lang-en');
    rootElement.classList.add('pref-lang-' + lang);

    if (isFirstLoad) {
      rootElement.classList.add('lang-applying-instantly');

      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
      });
      document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
      });
      document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria-label');
        if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
      });
      document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
        const key = el.getAttribute('data-i18n-tooltip');
        if (dict[key] !== undefined) el.textContent = dict[key];
      });
      rootElement.classList.remove('lang-not-ready');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          rootElement.classList.remove('lang-applying-instantly');
        });
      });
    } else {
      elements.forEach(el => el.classList.add('lang-exit'));

      setTimeout(() => {
        elements.forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (dict[key] !== undefined) el.textContent = dict[key];
          el.classList.remove('lang-exit');
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
          const key = el.getAttribute('data-i18n-title');
          if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
          const key = el.getAttribute('data-i18n-aria-label');
          if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
        });
        document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
          const key = el.getAttribute('data-i18n-tooltip');
          if (dict[key] !== undefined) el.textContent = dict[key];
        });

        elements.forEach(el => el.classList.add('lang-enter'));
        setTimeout(() => elements.forEach(el => el.classList.remove('lang-enter')), 260);

      }, 250);
    }

    rootElement.setAttribute('lang', lang);
    langButtons.forEach(btn => btn.classList.toggle('is-active', btn.dataset.lang === lang));
    if (langSwitchEl) langSwitchEl.setAttribute('data-active', lang);
    localStorage.setItem(STORAGE_KEYS.lang, lang);
  }

  function initLanguage() {
    const savedLang = localStorage.getItem(STORAGE_KEYS.lang);

    if (savedLang && translations[savedLang]) {
      applyLanguage(savedLang);
      return;
    }

    const browserLang = navigator.language.slice(0, 2);
    applyLanguage(browserLang === 'en' ? 'en' : 'tr');
  }

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });


  /* ============================================================
     4. MOBİL MENÜ (HAMBURGER)
     ============================================================ */
  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');

  function toggleMobileMenu() {
    const isOpen = navLinks.classList.toggle('is-open');
    burgerBtn.classList.toggle('is-open', isOpen);
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
  }

  function closeMobileMenu() {
    navLinks.classList.remove('is-open');
    burgerBtn.classList.remove('is-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
  }

  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', toggleMobileMenu);

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });
  }


  /* ============================================================
     4b. AKTİF NAVBAR LİNKİ (SAYFA GÖSTERGESİ)
     ============================================================ */
  function setActiveNavLink() {
    if (!navLinks) return;

    // Proje detay sayfalarını (örn. vaultnet.html) ilgili nav linkine eşle,
    // böylece detay sayfasındayken de "Projeler" linki aktif görünür.
    const navActiveOverrides = {
      'vaultnet.html': 'projects.html',
      'attackgame.html': 'projects.html',
      'cardrivegame.html': 'projects.html',
      'runninggame.html': 'projects.html',
      'blackjackgame.html': 'projects.html',
      'calculator.html': 'projects.html',
      'loginformapp.html': 'projects.html',
      'dicegame.html': 'projects.html',
      'bombdodgegame.html': 'projects.html',
      'pomodoro.html': 'projects.html',
      'minesweeper.html': 'projects.html',
      'gamelauncher.html': 'projects.html',
      'musicplayer.html': 'projects.html'
    };

    // Geçerli sayfanın dosya adını al (örn: "about.html").
    // Kök dizinde ("/" veya boş) ise ana sayfa olarak kabul et.
    let currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '' || currentPage === '/') {
      currentPage = 'index.html';
    }
    currentPage = navActiveOverrides[currentPage] || currentPage;

    navLinks.querySelectorAll('a[href]').forEach((link) => {
      const linkPage = link.getAttribute('href').split('/').pop();
      const isActive = linkPage === currentPage;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }


  /* ============================================================
     5. NAVBAR SCROLL EFEKTİ
     ============================================================ */
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 12) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });


  /* ============================================================
     6. HERO ARKA PLAN — YANIP SÖNEN NOKTA DOKUSU
     ============================================================ */
  function initHeroDots() {
    const canvas = document.getElementById('heroDotsCanvas');
    const heroSection = document.querySelector('.hero');
    if (!canvas || !heroSection) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const SPACING = 30;
    const ACTIVE_RATIO = 0.07; // ortalama olarak noktaların ~%7'si aynı anda yeşil yanar
    let dots = [];
    let rafId = null;

    function getColors() {
      const styles = getComputedStyle(document.documentElement);
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      return {
        accent: styles.getPropertyValue('--accent').trim() || '#15724a',
        idle: isDark ? '241, 239, 233' : '17, 19, 26',
        idleBaseOpacity: isDark ? 0.07 : 0.1,
        idleVariance: isDark ? 0.06 : 0.08
      };
    }

    function hexToRgb(hex) {
      const cleaned = hex.replace('#', '');
      const bigint = parseInt(cleaned.length === 3
        ? cleaned.split('').map(c => c + c).join('')
        : cleaned, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `${r}, ${g}, ${b}`;
    }

    // Her döngüde bir noktanın ne kadar "boşta" (idle) bekleyeceğini belirler.
    // ACTIVE_RATIO'ya göre ortalama aktiflik oranını korur:
    // idle_avg = twinkle_avg * (1 - ratio) / ratio
    const AVG_TWINKLE = 1.15; // randomTwinkleDuration() ortalaması (0.7-1.6s)
    function randomIdleDuration() {
      const avgIdleTime = AVG_TWINKLE * (1 - ACTIVE_RATIO) / ACTIVE_RATIO;
      return avgIdleTime * (0.4 + Math.random() * 1.4);
    }

    function randomTwinkleDuration() {
      return 0.7 + Math.random() * 0.9; // hızlı yanıp sönme: 0.7s - 1.6s
    }

    function buildDots() {
      dots = [];
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Kararlı-durum oranını korumak için noktaların bir kısmı
          // başlangıçta doğrudan "twinkle" durumunda, geri kalanı ise
          // kendi idle döngülerinin rastgele bir noktasında başlar.
          // Böylece açılışta ne ani bir toplu yanma, ne de "önce hiç
          // yanmıyor sonra normale dönüyor" hissi oluşmaz.
          const startsActive = Math.random() < ACTIVE_RATIO;
          const state = startsActive ? 'twinkle' : 'idle';
          const totalTwinkle = startsActive ? randomTwinkleDuration() : undefined;
          const timer = startsActive
            ? totalTwinkle * Math.random()
            : randomIdleDuration() * Math.random();

          dots.push({
            x: col * SPACING,
            y: row * SPACING,
            idlePhase: Math.random() * Math.PI * 2,
            state,
            totalTwinkle,
            timer,
            speed: 2.2 + Math.random() * 1.6
          });
        }
      }
    }

    function resizeCanvas() {
      const rect = heroSection.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildDots();
    }

    let startTime = performance.now();
    let lastFrameTime = startTime;

    function draw() {
      const now = performance.now();
      const dt = Math.min((now - lastFrameTime) / 1000, 0.1);
      lastFrameTime = now;

      const colors = getColors();
      const accentRgb = colors.accent.startsWith('#') ? hexToRgb(colors.accent) : colors.accent;
      const elapsed = (now - startTime) / 1000;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        d.timer -= dt;
        if (d.timer <= 0) {
          if (d.state === 'idle') {
            d.state = 'twinkle';
            d.totalTwinkle = randomTwinkleDuration();
            d.timer = d.totalTwinkle;
          } else {
            d.state = 'idle';
            d.timer = randomIdleDuration();
          }
        }

        if (d.state === 'twinkle') {
          // Tek bir yanıp-sönme dalgası: 0 -> tepe -> 0, hızlı
          const progress = 1 - (d.timer / d.totalTwinkle);
          const clamped = Math.min(Math.max(progress, 0), 1);
          const pulse = 0.12 + 0.5 * Math.sin(Math.PI * clamped);
          const radius = 1.3 + pulse * 1.0;

          ctx.beginPath();
          ctx.fillStyle = `rgba(${accentRgb}, ${pulse})`;
          ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
          ctx.fill();

          if (pulse > 0.4) {
            const glowOpacity = (pulse - 0.4) * 0.22;
            ctx.beginPath();
            ctx.fillStyle = `rgba(${accentRgb}, ${glowOpacity})`;
            ctx.arc(d.x, d.y, radius * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          const opacity = colors.idleBaseOpacity + colors.idleVariance * (0.5 + 0.5 * Math.sin(elapsed * 0.3 + d.idlePhase));
          ctx.beginPath();
          ctx.fillStyle = `rgba(${colors.idle}, ${opacity})`;
          ctx.arc(d.x, d.y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    resizeCanvas();
    draw();

    window.addEventListener('resize', resizeCanvas);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else if (!document.hidden && !rafId) {
        startTime = performance.now();
        draw();
      }
    });

    return {
      stop() {
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = 'none';
      },
      start() {
        canvas.style.display = '';
        if (!rafId) { startTime = performance.now(); lastFrameTime = performance.now(); draw(); }
      }
    };
  }


/* ============================================================
     7. SAYFA GENELİ FARE İZİ (CURSOR TRAIL) EFEKTİ
     ============================================================ */
  function initCursorTrail() {
    const canvas = document.getElementById('cursorTrailCanvas');
    if (!canvas) return null;

    const isCoarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isCoarsePointer || prefersReducedMotion) return null;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let points = [];
    const MAX_AGE = 28;
    const MAX_POINTS = 60;

    let rafId = null;
    let isEnabled = false;
    let mode = 'dots'; // 'dots' | 'line'

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function getThemeColors() {
      const styles = getComputedStyle(document.documentElement);
      return {
        glow: styles.getPropertyValue('--cursor-glow-color').trim() || '21, 114, 74',
        trailOpacity: parseFloat(styles.getPropertyValue('--cursor-trail-opacity')) || 0.6
      };
    }

    let lastPointX = null;
    let lastPointY = null;
    const MIN_DISTANCE = 6;

    const TEXT_SELECTOR =
      'h1, h2, h3, h4, h5, h6, p, span, a, label, li, button, strong, em, small, b, i';

    function isOverText(x, y) {
      const el = document.elementFromPoint(x, y);
      if (!el) return false;
      return el.closest(TEXT_SELECTOR) !== null;
    }

    function handlePointerMove(e) {
      const x = e.clientX;
      const y = e.clientY;

      if (lastPointX !== null) {
        const dx = x - lastPointX;
        const dy = y - lastPointY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < MIN_DISTANCE) {
          return;
        }
      }

      lastPointX = x;
      lastPointY = y;

      const overText = isOverText(x, y);

      points.push({ x, y, age: 0, skip: overText });
      if (points.length > MAX_POINTS) {
        points.shift();
      }
    }

    function getNavbarBottom() {
      const navbarEl = document.getElementById('navbar');
      if (!navbarEl) return 0;
      return navbarEl.getBoundingClientRect().bottom;
    }

    function getFooterTop() {
      const footerEl = document.querySelector('.footer');
      if (!footerEl) return Infinity;
      return footerEl.getBoundingClientRect().top;
    }

    function drawDots(navbarBottom, footerTop, glow, trailOpacity) {
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const lifeRatio = 1 - p.age / MAX_AGE;
        if (lifeRatio <= 0 || p.skip) continue;
        if (p.y <= navbarBottom || p.y >= footerTop) continue;

        const radius = 2.5 + lifeRatio * 8;
        const opacity = lifeRatio * trailOpacity;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        gradient.addColorStop(0, `rgba(${glow}, ${opacity})`);
        gradient.addColorStop(1, `rgba(${glow}, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawLine(navbarBottom, footerTop, glow, trailOpacity) {
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];

        if (prev.skip || curr.skip) continue;
        if (prev.y <= navbarBottom || curr.y <= navbarBottom) continue;
        if (prev.y >= footerTop || curr.y >= footerTop) continue;

        const lifeRatio = 1 - curr.age / MAX_AGE;
        if (lifeRatio <= 0) continue;

        const opacity = lifeRatio * trailOpacity;
        const lineWidth = 1.5 + lifeRatio * 3.5;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${glow}, ${opacity})`;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(curr.x, curr.y);
        ctx.stroke();
      }
    }

    function draw() {
      const { glow, trailOpacity } = getThemeColors();
      const navbarBottom = getNavbarBottom();
      const footerTop = getFooterTop();

      ctx.clearRect(0, 0, width, height);

      if (mode === 'line') {
        drawLine(navbarBottom, footerTop, glow, trailOpacity);
      } else {
        drawDots(navbarBottom, footerTop, glow, trailOpacity);
      }

      for (let i = 0; i < points.length; i++) {
        points[i].age += 1;
      }
      points = points.filter((p) => p.age < MAX_AGE);

      if (isEnabled) {
        rafId = requestAnimationFrame(draw);
      }
    }

    function start() {
      if (isEnabled) return;
      isEnabled = true;
      canvas.style.display = '';
      resizeCanvas();
      if (!rafId) draw();
    }

    function stop() {
      isEnabled = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      points = [];
      lastPointX = null;
      lastPointY = null;
      ctx.clearRect(0, 0, width, height);
      canvas.style.display = 'none';
    }

    function setMode(newMode) {
      mode = newMode === 'line' ? 'line' : 'dots';
      points = [];
    }

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', resizeCanvas);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else if (!document.hidden && isEnabled && !rafId) {
        draw();
      }
    });

    return { start, stop, setMode };
  }


  /* ============================================================
     8. AYARLAR MENÜSÜ (SETTINGS DROPDOWN)
     ============================================================ */
  function initSettingsMenu(cursorTrail, heroDots, contactParticles) {
    const settingsMenu = document.getElementById('settingsMenu');
    const settingsToggle = document.getElementById('settingsToggle');
    const settingsPanel = document.getElementById('settingsPanel');
    const trailOptionButtons = document.querySelectorAll('#cursorTrailOptions .trail-options__btn');

    if (!settingsMenu || !settingsToggle || !settingsPanel) return;

    function openPanel() {
      settingsPanel.classList.add('is-open');
      settingsToggle.classList.add('is-open');
      settingsToggle.setAttribute('aria-expanded', 'true');
    }

    function closePanel() {
      settingsPanel.classList.remove('is-open');
      settingsToggle.classList.remove('is-open');
      settingsToggle.setAttribute('aria-expanded', 'false');
    }

    function togglePanel() {
      const isOpen = settingsPanel.classList.contains('is-open');
      if (isOpen) {
        closePanel();
      } else {
        openPanel();
      }
    }

    settingsToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePanel();
    });

    document.addEventListener('click', (e) => {
      if (!settingsMenu.contains(e.target)) {
        closePanel();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePanel();
      }
    });

    /* ---- Fare İzi Mod Seçici ---- */
    if (trailOptionButtons.length) {
      const isCoarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const trailAvailable = !!cursorTrail && !isCoarsePointer && !prefersReducedMotion;

      const savedMode = localStorage.getItem(STORAGE_KEYS.cursorTrail);
      const validModes = ['off', 'dots', 'line'];
      const initialMode = trailAvailable && validModes.includes(savedMode) ? savedMode : 'off';

      function applyMode(targetMode) {
        trailOptionButtons.forEach((btn) => {
          const isActive = btn.dataset.trailMode === targetMode;
          btn.setAttribute('aria-checked', String(isActive));
        });

        if (!trailAvailable) return;

        if (targetMode === 'off') {
          cursorTrail.stop();
        } else {
          cursorTrail.setMode(targetMode);
          cursorTrail.start();
        }
      }

      applyMode(initialMode);

      if (!trailAvailable) {
        trailOptionButtons.forEach((btn) => {
          btn.disabled = true;
        });
      } else {
        trailOptionButtons.forEach((btn) => {
          btn.addEventListener('click', () => {
            const targetMode = btn.dataset.trailMode;
            applyMode(targetMode);
            localStorage.setItem(STORAGE_KEYS.cursorTrail, targetMode);
          });
        });
      }
    }

    /* ---- Arka Plan Animasyonu Toggle ---- */
    const bgAnimToggle = document.getElementById('bgAnimToggle');
    if (bgAnimToggle) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // localStorage'dan oku; yoksa varsayılan 'on'
      const saved = localStorage.getItem(STORAGE_KEYS.bgAnim);
      let bgAnimEnabled = prefersReducedMotion ? false : (saved !== 'off');

      function applyBgAnim(enabled) {
        bgAnimEnabled = enabled;
        bgAnimToggle.setAttribute('aria-checked', String(enabled));
        bgAnimToggle.classList.toggle('is-on', enabled);

        if (enabled) {
          if (heroDots) heroDots.start();
          if (contactParticles) contactParticles.start();
        } else {
          if (heroDots) heroDots.stop();
          if (contactParticles) contactParticles.stop();
        }

        localStorage.setItem(STORAGE_KEYS.bgAnim, enabled ? 'on' : 'off');
      }

      applyBgAnim(bgAnimEnabled);

      bgAnimToggle.addEventListener('click', () => {
        applyBgAnim(!bgAnimEnabled);
      });
    }
  }


  /* ============================================================
     8. HERO AŞAĞI KAYDIR İKONU (tıklayınca yavaş kayma)
     ============================================================ */
  function initHeroScrollDown() {
    const scrollBtn = document.getElementById('heroScrollDown');
    const target = document.getElementById('featured');

    if (!scrollBtn || !target) return;

    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const navbar = document.getElementById('navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      const startY = window.pageYOffset;
      const targetY = target.getBoundingClientRect().top + startY - navbarHeight;
      const diff = targetY - startY;
      const duration = 900;
      let startTime = null;

      const htmlEl = document.documentElement;
      const prevScrollBehavior = htmlEl.style.scrollBehavior;
      htmlEl.style.scrollBehavior = 'auto';

      function step(currentTime) {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, startY + diff * eased);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          htmlEl.style.scrollBehavior = prevScrollBehavior;
        }
      }

      requestAnimationFrame(step);
    });
  }


  /* ============================================================
     9. İLETİŞİM KARTLARI — KOPYALA BUTONU
     ============================================================ */
  function initContactCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-icon-btn');
    if (!copyButtons.length) return;

    copyButtons.forEach((btn) => {
      let resetTimer = null;

      function getLang() {
        return rootElement.getAttribute('lang') === 'en' ? 'en' : 'tr';
      }

      function setAriaLabel(key) {
        const dict = translations[getLang()] || translations.tr;
        if (dict[key] !== undefined) btn.setAttribute('aria-label', dict[key]);
      }

      async function copyText(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          try {
            await navigator.clipboard.writeText(text);
            return true;
          } catch (e) {
            /* devam et, eski yönteme düş */
          }
        }
        try {
          const tempInput = document.createElement('textarea');
          tempInput.value = text;
          tempInput.style.position = 'fixed';
          tempInput.style.opacity = '0';
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          return true;
        } catch (e) {
          return false;
        }
      }

      btn.addEventListener('click', async () => {
        const value = btn.getAttribute('data-copy-value');
        if (!value) return;

        const success = await copyText(value);
        if (!success) return;

        if (resetTimer) clearTimeout(resetTimer);

        btn.classList.add('is-copied');
        setAriaLabel('contactCopiedBtn');

        resetTimer = setTimeout(() => {
          btn.classList.remove('is-copied');
          setAriaLabel('contactCopyBtn');
        }, 1800);
      });
    });
  }


  /* ============================================================
     11. İLETİŞİM SAYFASI — PARÇACIK AĞI (PARTICLE NETWORK) ARKA PLAN
     ============================================================ */
  function initContactParticles() {
    const canvas = document.getElementById('contactParticlesCanvas');
    const section = document.querySelector('.contact-page');
    if (!canvas || !section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isCoarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Izgara hücresi: parçacık sayısını VE eşit dağılımı birlikte garanti eder.
    // Her hücreye tam olarak bir parçacık konur, hücre içinde rastgele kayar;
    // böylece bölgeler arası "boş kalma" / "yığılma" riski olmaz.
    const CELL_SIZE = 90;
    const LINK_DISTANCE = 130;
    const MOUSE_LINK_DISTANCE = 190;
    const MOUSE_REPEL_DISTANCE = 90;
    const SOLID_PADDING = 16; // kart/yazı kenarından bırakılan "duvar" boşluğu

    let particles = [];
    let rafId = null;
    let mouseX = null;
    let mouseY = null;
    let mouseActive = false;
    let solidRects = []; // yazı bloğu + her kart, section'a göre koordinat

    function getColors() {
      const styles = getComputedStyle(document.documentElement);
      return {
        rgb: styles.getPropertyValue('--particle-color').trim() || '21, 114, 74',
        dotOpacity: parseFloat(styles.getPropertyValue('--particle-opacity')) || 0.5,
        lineOpacity: parseFloat(styles.getPropertyValue('--particle-line-opacity')) || 0.16
      };
    }

    function updateSolidRects() {
      const sectionRect = section.getBoundingClientRect();
      const els = [
        ...document.querySelectorAll('.contact-page__intro, .contact-card')
      ];
      solidRects = els.map((el) => {
        const r = el.getBoundingClientRect();
        return {
          left: r.left - sectionRect.left - SOLID_PADDING,
          top: r.top - sectionRect.top - SOLID_PADDING,
          right: r.right - sectionRect.left + SOLID_PADDING,
          bottom: r.bottom - sectionRect.top + SOLID_PADDING
        };
      });
    }

    function overlapsAnySolid(x, y, margin) {
      for (let i = 0; i < solidRects.length; i++) {
        const r = solidRects[i];
        if (x + margin > r.left && x - margin < r.right && y + margin > r.top && y - margin < r.bottom) {
          return true;
        }
      }
      return false;
    }

    function buildParticles() {
      particles = [];
      const cols = Math.max(1, Math.floor(width / CELL_SIZE));
      const rows = Math.max(1, Math.floor(height / CELL_SIZE));
      const cellW = width / cols;
      const cellH = height / rows;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const baseX = col * cellW + cellW / 2;
          const baseY = row * cellH + cellH / 2;
          const x = baseX + (Math.random() - 0.5) * cellW * 0.7;
          const y = baseY + (Math.random() - 0.5) * cellH * 0.7;

          // Kartların/yazının içine asla doğmasınlar.
          if (overlapsAnySolid(x, y, 0)) continue;

          particles.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            radius: 1.3 + Math.random() * 1.5
          });
        }
      }
    }

    function getOffsetTop(el) {
      let t = 0; while (el) { t += el.offsetTop; el = el.offsetParent; } return t;
    }

    function resizeCanvas() {
      const footer = document.querySelector('.footer');
      width = section.offsetWidth;
      // Canvas yüksekliği: section başından footer'ın üst kenarına kadar
      if (footer) {
        height = getOffsetTop(footer) - getOffsetTop(section);
      } else {
        height = section.offsetHeight;
      }
      height = Math.max(height, section.offsetHeight);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      updateSolidRects();
      buildParticles();
    }

    function handlePointerMove(e) {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > width || y > height) {
        mouseActive = false;
        return;
      }
      mouseX = x;
      mouseY = y;
      mouseActive = true;
    }

    function handlePointerLeave() {
      mouseActive = false;
    }

    // Bir parçacık kart/yazı kutusuna çarptığında, hangi kenara
    // en yakınsa o kenardan "sekiyormuş" gibi geri döner (basit AABB çarpışması).
    function resolveSolidCollision(p) {
      for (let i = 0; i < solidRects.length; i++) {
        const r = solidRects[i];
        const nx = p.x + p.radius > r.left && p.x - p.radius < r.right;
        const ny = p.y + p.radius > r.top && p.y - p.radius < r.bottom;
        if (!(nx && ny)) continue;

        const overlapLeft = (p.x + p.radius) - r.left;
        const overlapRight = r.right - (p.x - p.radius);
        const overlapTop = (p.y + p.radius) - r.top;
        const overlapBottom = r.bottom - (p.y - p.radius);
        const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);

        if (minOverlap === overlapLeft) {
          p.x = r.left - p.radius;
          p.vx = -Math.abs(p.vx) || -0.2;
        } else if (minOverlap === overlapRight) {
          p.x = r.right + p.radius;
          p.vx = Math.abs(p.vx) || 0.2;
        } else if (minOverlap === overlapTop) {
          p.y = r.top - p.radius;
          p.vy = -Math.abs(p.vy) || -0.2;
        } else {
          p.y = r.bottom + p.radius;
          p.vy = Math.abs(p.vy) || 0.2;
        }
      }
    }

    function draw() {
      const { rgb, dotOpacity, lineOpacity } = getColors();
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouseActive) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_REPEL_DISTANCE && dist > 0.01) {
            const force = (1 - dist / MOUSE_REPEL_DISTANCE) * 0.6;
            p.vx += (dx / dist) * force * 0.04;
            p.vy += (dy / dist) * force * 0.04;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        p.vx *= 0.995;
        p.vy *= 0.995;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        resolveSolidCollision(p);
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const opacity = (1 - dist / LINK_DISTANCE) * lineOpacity;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${rgb}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        if (mouseActive) {
          const p = particles[i];
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_LINK_DISTANCE) {
            const opacity = (1 - dist / MOUSE_LINK_DISTANCE) * (lineOpacity + 0.18);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${rgb}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb}, ${dotOpacity})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    resizeCanvas();
    draw();

    // Yazı tipleri yüklendiğinde veya içerik boyu (reveal/animasyon, dil
    // değişimi vb.) değiştiğinde section'ın gerçek yüksekliği değişebilir;
    // bu durumda tuval yalnızca pencere yeniden boyutlanınca güncellenmez,
    // bu yüzden ResizeObserver ile section'ı doğrudan izliyoruz.
    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => resizeCanvas());
      resizeObserver.observe(section);
    } else {
      window.addEventListener('resize', resizeCanvas);
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => resizeCanvas());
    }
    window.addEventListener('load', resizeCanvas);

    // Kartlar/yazı açılış animasyonuyla kaydığı için (transform), animasyon
    // bitince katı kutuları son konumlarına göre yeniden hesapla.
    section.querySelectorAll('.contact-reveal').forEach((el) => {
      el.addEventListener('animationend', () => updateSolidRects(), { once: true });
    });

    if (!isCoarsePointer) {
      window.addEventListener('pointermove', handlePointerMove);
      section.addEventListener('pointerleave', handlePointerLeave);
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else if (!document.hidden && !rafId) {
        draw();
      }
    });

    return {
      stop() {
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = 'none';
      },
      start() {
        canvas.style.display = '';
        if (!rafId) draw();
      }
    };
  }


  /* ============================================================
     12. İLETİŞİM SAYFASI — AÇILIŞ ANİMASYONU (SIRALI ORTAYA ÇIKIŞ)
     ============================================================ */
  function initContactReveal() {
    const revealItems = document.querySelectorAll('.contact-page .contact-reveal');
    if (!revealItems.length) return;

    // Animasyon bitince elemanı normal akışa döndür: aksi halde
    // animasyonun "forwards" ile sabitlediği transform değeri,
    // kartların hover efektindeki transform'u (translateY) ezer.
    revealItems.forEach((el) => {
      el.addEventListener('animationend', () => {
        el.classList.remove('contact-reveal');
        el.style.animation = 'none';
        el.style.opacity = '';
        el.style.transform = '';
      }, { once: true });
    });
  }


  /* ============================================================
     12b. HAKKIMDA SAYFASI — AÇILIŞ ANİMASYONU TEMİZLİĞİ
     ============================================================ */
  function initAboutReveal() {
    const revealItems = document.querySelectorAll('.about-page .about-reveal');
    if (!revealItems.length) return;

    // Animasyon bitince elemanı normal akışa döndür: aksi halde
    // animasyonun "forwards" ile sabitlediği transform değeri,
    // kartların hover efektindeki transform'u (translateY) ezer.
    revealItems.forEach((el) => {
      el.addEventListener('animationend', () => {
        el.classList.remove('about-reveal');
        el.style.animation = 'none';
        el.style.opacity = '';
        el.style.transform = '';
      }, { once: true });
    });
  }


  /* ============================================================
     13. BAŞLANGIÇ (INIT)
     ============================================================ */
  initTheme();
  initLanguage();
  setActiveNavLink();
  handleNavbarScroll();
  const heroDots = initHeroDots();
  const cursorTrail = initCursorTrail();
  const contactParticles = initContactParticles();
  initSettingsMenu(cursorTrail, heroDots, contactParticles);
  initHeroScrollDown();
  initContactCopyButtons();
  initContactReveal();
  initAboutReveal();

})();