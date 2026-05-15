---
layout: layouts/base.njk
title: "Корисні посилання"
---

<!-- Хлібні крихти -->
        

        

        <section class="text-content">

            <style>
                .link-card {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                    padding: 1.5rem;
                    background-color: var(--bg-color);
                    border: 1px solid var(--border-color);
                    border-radius: var(--radius);
                    text-decoration: none;
                    color: var(--text-color);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
                    height: 100%;
                }
                .link-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow);
                    border-color: var(--primary-color);
                }
                .link-card:hover .link-text {
                    color: var(--primary-color);
                }
                .link-icon {
                    font-size: 2rem;
                    flex-shrink: 0;
                    background-color: var(--secondary-color);
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: background-color 0.2s ease;
                }
                .link-card:hover .link-icon {
                    background-color: #eff6ff;
                }
                .link-text {
                    font-weight: 500;
                    font-size: 1.05rem;
                    line-height: 1.4;
                    transition: color 0.2s ease;
                }
                .links-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }
                .category-title {
                    color: var(--text-color);
                    font-size: 1.3rem;
                    margin-bottom: 1.5rem;
                    border-bottom: 2px solid var(--secondary-color);
                    padding-bottom: 0.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
            </style>

            <!-- Категорія: Освіта -->
            <h3 class="category-title"><span>🎓</span> Сфера освіти та науки</h3>
            <div class="links-grid">
                <a href="http://www.mon.gov.ua" target="_blank" rel="nofollow noopener" class="link-card">
                    <div class="link-icon">🇺🇦</div>
                    <div class="link-text"><div style="background: #4389f6; color: white; padding: 15px; text-align: center; border-radius: var(--radius); font-weight: bold;">
                    <span style="font-size: 0.8rem; font-weight: normal;">Міністерство освіти і науки України</span>
                </div></div>
                </a>

                <a href="http://dniokh.gov.ua/" target="_blank" rel="nofollow noopener" class="link-card">
                    <div class="link-icon">🏛️</div>
                    <div class="link-text">Департамент науки і освіти Харківської ОДА</div>
                </a>

                <a href="http://edu-post-diploma.kharkov.ua/" target="_blank" rel="nofollow noopener" class="link-card">
                    <div class="link-icon">🏫</div>
                    <div class="link-text">КВНЗ "Харківська академія неперервної освіти"</div>
                </a>

                <a href="http://goroo.ucoz.org/index/optimizacija_zakladiv_osviti_mista/0-22" target="_blank" rel="nofollow noopener" class="link-card">
                    <div class="link-icon">📍</div>
                    <div class="link-text">Відділ освіти виконавчого комітету Златопільської міської ради</div>
                </a>
            </div>

            <!-- Категорія: Сервісні центри МВС -->
            <h3 class="category-title"><span>🚗</span> Сервісні центри МВС</h3>
            <div class="links-grid">
                <a href="https://hsc.gov.ua" target="_blank" rel="nofollow noopener" class="link-card">
                    <div class="link-icon">🚓</div>
                    <div class="link-text">Головний сервісний центр МВС України</div>
                </a>

                <a href="http://kha.hsc.gov.ua" target="_blank" rel="nofollow noopener" class="link-card">
                    <div class="link-icon">🚦</div>
                    <div class="link-text">Регіональний сервісний центр ГСЦ МВС у Харківській області</div>
                </a>
            </div>

            <!-- Категорія: Працевлаштування -->
            <h3 class="category-title"><span>💼</span> Працевлаштування</h3>
            <div class="links-grid">
                <a href="https://kha.dcz.gov.ua" target="_blank" rel="nofollow noopener" class="link-card">
                    <div class="link-icon">🤝</div>
                    <div class="link-text">Харківський обласний центр зайнятості</div>
                </a>
            </div>

        </section>