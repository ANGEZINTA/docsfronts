import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WiASSUR ERP V2",
  description: "Documentation des API de l'entreprise WiASSUR ",

  lang: "fr",

  themeConfig: {
    footer: {
      copyright: "Copyright © 2023 WiASSUR. All rights reserved.",
    },
    search: {
      provider: "local",
    },
    logo: "/logo.png",
    siteTitle: "WiASSUR FRONT",

    sidebar: [
      {
        text: "API Master",
        collapsed: true,
        items: [
          {
            text: "Api Controller",
            collapsed: true,
            items: [
              {
                text: "GET - Types de données",
                link: "/master/api-controller",
              },
              {
                text: "GET -  Durées",
                link: "/master/durations",
              },
            ],
          }
        ]
      },
      {
        text: "API Core",
        collapsed: true,
        items: [
          {
            text: "Api Controller",
            collapsed: true,
            items: [
              {
                text: "Description de l'API",
                link: "/core/description",
              },
              {
                text: "GET - Types de données",
                link: "/core/api-controller",
              },
              {
                text: "GET -  Durées",
                link: "/core/durations",
              },
            ],
          }
        ]
      },
      {
        text: "API Authentification",
        collapsed: true,
        items: [
          {
            text: "Api Controller",
            collapsed: true,
            items: [
              {
                text: "GET - Types de données",
                link: "/auth/api-controller",
              },
              {
                text: "GET -  Durées",
                link: "/auth/durations",
              },
            ],
          }
        ]
      },
      {
        text: "API Form",
        collapsed: true,
        items: [
          {
            text: "Api Controller",
            collapsed: true,
            items: [
              {
                text: "GET - Types de données",
                link: "/form/api-controller",
              },
              {
                text: "GET -  Durées",
                link: "/form/durations",
              },
            ],
          }
        ]
      },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },

  locales: {
    root: {
      title: "WiASSUR DOC FRONT",
      description: "Documentation pour l'ERP WiASSUR ERP V2",
      label: "Français",
      lang: "fr",
      themeConfig: {
        search: {
          provider: "local",
        },
        footer: {
          copyright: "Copyright © 2023 WiASSUR. All rights reserved.",
        },
        sidebar: [

        
          {
            text: "CONFIGURATION",
            collapsed: true,
            items: [
              {

                text: "Branches",
                link: "/core/contrats/create-contract",

              },
        
              {
                text: "Typages des données",
                link: "/master/description",
              },
              {
                text: "Durées",
                link: "/master/get-durations"
              
              },  
              {
                    text: "Plateformes",
                    link: "/master/get-type-data",
                  },
              {
                    text: "Assureurs",
                    link: "/master/durations",
                  },
              
            
              {
                text: "Categorie de pack",
                link: "/master/post-durations",
              },
             
              {
                    text: "Langue",
                    link: "/master/post-typedata",
                  },
              {
                    text: "Parametre",
                    link: "/master/get-generate-typedata",
                  },

                
              
            ]
          },
        
          {
            text: "PRODUCTION",
            collapsed: true,
            items: [

              {
                text: "Cotation",
                link: "/core/description",
              },
              {

                text: "Comparateur",
                link: "/core/contrats/comparator",
               
              },  
                  {
                    text: "Paiements",
                    link: "/core/contrats/paiements",
                  }, {
                    text: "Livraisons",
                    link: "/core/contrats/livraison",
                  },
                  {
                    text: "contrats",
                    link: "/core/contrats/contrats",
                  },
                  {
                    text: "Avenants",
                    link: "/core/contrats/avenants",
                  },
                  {
                    text: "Parrainages",
                    link: "/core/contrats/parainages",
                  },
                  {
                    text: "Clients",
                    link: "/core/contrats/clients",
                  },
                  {
                    text: "Apporteurs",
                    link: "core/contrats/apporteurs",
                  },
                  {
                    text: "Methodes de painemts",
                    link: "/core/contrats/methodepaiements",
                  },
                  {
                    text: "Etats",
                    link: "/core/contrats/etats",
                  },
                  {
                    text: "Importer",
                    link: "/core/contrats/importer",
                  },
                  {
                    text: "Statistiques",
                    link: "/core/contrats/statistic",
                  },
                 
                ]
          },
          {
            text: "ADMINISTRATION",
            collapsed: true,
            items: [
              {
                text: "Utilisateurs",
                link: "/auth/description",
              },
              
                
                  {
                    text: "Tenants",
                    link: "/auth/api/get-manager",
                  },
                  {
                    text: "Roles",
                    link: "/auth/api/get-user",
                  }
                  
                ]
              },
          {
            text: "COMMUNICATION",
            collapsed: true,
            items: [
              {
                text: "Extracteur",
                link: "/form/description",
              },
              {
                text: "SMS",
                link: "/form/sms",
              },
              {
                text: "URL shortener",
                link: "/form/urlsho",
              }, {
                text: "Modele Email",
                link: "/form/modeleemail",
              },
            ]
            
          },
          {
            text: "PROSPECTION",
            collapsed: true,
         
           items :[
            
              {
                text: "Prise de contact",
                link: "/form/api/put-devis",
              },
          
                
                  {
                    text: "Rendezvous",
                    link: "/form/admin/get-endpoints",
                  },
              
            
             
                  {
                    text: "Prospects",
                    link: "/form/api/post-cotation",
                  },
                  {
                    text: "Entreprises",
                    link: "/form/api/get-rgstatus",
                  },
                ]
           },
          ]    
          
        
      },
    },
  
  },
});
