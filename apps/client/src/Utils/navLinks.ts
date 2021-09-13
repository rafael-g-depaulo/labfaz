export interface navLink {
  name: LinkName
  label: string
  path: string
}

export const linkNames = [
  "about us",
  "cursos",
  "blog",
  "observatorio",
  "busca profissionais",
  "login",
  "cadastro",
  "perfil",
  "forgotPass",
] as const
export type LinkName = typeof linkNames[number]

export type linkDict = {[k in LinkName]: navLink & { name: k }}
export const navLinks: linkDict = {
  "about us":            { name: "about us",            label: "QUEM SOMOS",             path: "/about"           },
  "cursos":              { name: "cursos",              label: "CURSOS",                 path: "/classes"         },
  "blog":                { name: "blog",                label: "BLOG",                   path: "/blog"            },
  "observatorio":        { name: "observatorio",        label: "OBSERVATÓRIO",           path: "/observatorio"    },
  "busca profissionais": { name: "busca profissionais", label: "BANCO DE PROFISSIONAIS", path: "/professionals"   },
  "login":               { name: "login",               label: "ENTRAR",                 path: "/login"           },
  "cadastro":            { name: "cadastro",            label: "CADASTRE-SE",            path: "/signup"          },
  "perfil":              { name: "perfil",              label: "PERFIL",                 path: "/perfil/eu"       },
  "forgotPass":          { name: "forgotPass",          label: "Esqueceu sua senha?",    path: "/forgot-password" },
}

export const navLinksList: navLink[] = [
  navLinks["about us"],
  navLinks["cursos"],
  navLinks["blog"],
  navLinks["busca profissionais"],
]

export const unloggedNavLinksList: navLink[] = [
  navLinks["login"],
  navLinks["cadastro"],
]

export const loggedNavLinksList: navLink[] = [
  navLinks["perfil"],
]
