import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    head: [
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: `/images/icons/16.png`,}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: `/images/icons/32.png`,}],
		['link', {rel: 'icon', type: 'image/png', sizes: '64x64', href: `/images/icons/64.png`,}],
		['link', {rel: 'icon', type: 'image/png', sizes: '150x150', href: `/images/icons/150.png`,}],
		['link', {rel: 'icon', type: 'image/png', sizes: '192x192', href: `/images/icons/192.png`,}],
		['link', {rel: 'icon', type: 'image/png', sizes: '384x384', href: `/images/icons/384.png`,}],
		['link', {rel: 'icon', type: 'image/png', sizes: '512x512', href: `/images/icon.png`,}],
    ],
    lang: 'ru_RU',
    title: 'Игропедия BEN`a',
    description: 'Игропедия BEN`a',
    port: '8080', //Порт на котором запускается VuePress
    theme: defaultTheme({
        repo: 'bwproject/game.streamsbyben.ru',
        docsRepo: 'https://github.com/bwproject/game.streamsbyben.ru',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        locales: {
            '/': {
                editLinkText: 'Измените эту страницу на GitHub',
                lastUpdatedText: "Последнее обновление",
                notFound: [
                    "Здесь ничего нет.",
		    "Пожалуйста не заходите слишком далеко",
                    "Как мы тут оказались?",
                    "Похоже, у нас есть несколько неработающих ссылок."
                ],
                backToHome: "Вернуться на главную",
                openInNewWindow: "открыть в новом окне",
                toggleDarkMode: "переключить темный режим",
                toggleSidebar: "переключить боковую панель",
                contributors: false,
                contributorsText: "Спонсоры",
            },
        },
        logo: 'images/hero.png',
        navbar: [
            {
                text: 'Игропедия BEN`a',
                children: [
                    '/review/README.md',                  				
                ],
            },
            {
                text: 'ОФИЦИАЛЬНЫЙ САЙТ BEN`a',
                link: 'https://streamsbyben.ru/',
            },
            {
                text: 'VK',
                link: 'https://vk.com/publicbyben/',
            },
            {
                text: 'TWITCH',
                link: 'https://www.twitch.tv/streamsbyben',
            },
            {
                text: 'YOUTUBE',
                link: 'https://www.youtube.com/channel/UCiJUr9eiijACrvV9F1kzhmA',
            },			
            {
                text: 'PROJECTBW.RU',
                link: 'https://projectbw.ru/',
            },
        ],
        sidebar: {
            '/': [
                {
                    text: 'Игропедия BEN`a',
                    collapsible: false,
                    children: [						
					'/review/README.md',											
                    ],
                },
            ],
        },
    }),
    plugins: [
        [
        ],
    ]
})
